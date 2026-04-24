// ============================================
// L-MATH 乐学数学 - 互动练习系统
// 按需加载版本
// ============================================

// 练习题数据库（运行时按需加载）
const practiceDB = {};

// 加载指定年级的题库数据
async function loadGradeData(grade) {
  const alreadyLoaded = Object.keys(practiceDB).some(k => k.startsWith(grade + '-'));
  if (alreadyLoaded) return;

  try {
    const script = document.createElement('script');
    script.src = 'data/' + grade + '.js';
    return new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  } catch (e) {
    console.warn('加载题库失败:', grade, e);
  }
}

// 注册年级数据（由各年级数据文件调用）
function registerGradeData(data) {
  Object.assign(practiceDB, data);
}

// 练习页面类
class PracticeSystem {
  constructor(containerId, unitId) {
    this.container = document.getElementById(containerId);
    this.unitId = unitId;
    this.currentQuestion = 0;
    this.score = 0;
    this.answers = [];
    this.data = practiceDB[unitId];
    
    if (!this.data) {
      this.showNotFound();
      return;
    }
    
    this.init();
  }
  
  init() {
    this.renderHeader();
    this.renderQuestion();
  }
  
  renderHeader() {
    const header = document.createElement('div');
    header.className = 'practice-quiz-header';
    header.innerHTML = `
      <h2>${this.data.title}</h2>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 0%"></div>
      </div>
      <div class="progress-text">第 1 / ${this.data.questions.length} 题</div>
    `;
    this.container.appendChild(header);
  }
  
  renderQuestion() {
    const question = this.data.questions[this.currentQuestion];
    const quizBody = document.createElement('div');
    quizBody.className = 'practice-quiz-body';
    quizBody.id = 'quiz-body';
    
    let optionsHTML = '';
    if (question.type === 'choice') {
      optionsHTML = question.options.map((opt, idx) => `
        <button class="option-btn" data-index="${idx}" onclick="practice.selectOption(${idx})">
          <span class="option-label">${String.fromCharCode(65 + idx)}</span>
          <span class="option-text">${opt}</span>
        </button>
      `).join('');
    } else if (question.type === 'fill') {
      optionsHTML = `
        <div class="fill-blank">
          <input type="text" id="fill-answer" placeholder="请输入答案" onkeypress="if(event.key==='Enter')practice.submitFill()">
          <button class="submit-btn" onclick="practice.submitFill()">提交答案</button>
        </div>
      `;
    } else if (question.type === 'order') {
      // 拖拽排序题
      const itemsHTML = question.items.map((item, idx) => `
        <div class="order-item" draggable="true" data-index="${idx}" onclick="practice.moveOrderItem(${idx})">
          <span class="order-num">${idx + 1}</span>
          <span class="order-text">${item}</span>
        </div>
      `).join('');
      optionsHTML = `
        <div class="order-container" id="order-container">
          <p class="order-hint">👆 点击两个项目交换位置，按正确顺序排列</p>
          <div class="order-list">${itemsHTML}</div>
          <button class="submit-btn" onclick="practice.submitOrder()" style="margin-top: 20px;">提交答案</button>
        </div>
      `;
    } else if (question.type === 'match') {
      // 连线匹配题
      const leftHTML = question.left.map((item, idx) => `
        <div class="match-item left-item" data-index="${idx}" onclick="practice.selectMatchLeft(${idx})">
          <span class="match-text">${item}</span>
        </div>
      `).join('');
      const rightHTML = question.right.map((item, idx) => `
        <div class="match-item right-item" data-index="${idx}" onclick="practice.selectMatchRight(${idx})">
          <span class="match-text">${item}</span>
        </div>
      `).join('');
      optionsHTML = `
        <div class="match-container">
          <p class="match-hint">👆 点击左边和右边的项目进行配对</p>
          <div class="match-area">
            <div class="match-column" id="match-left">${leftHTML}</div>
            <div class="match-lines" id="match-lines"></div>
            <div class="match-column" id="match-right">${rightHTML}</div>
          </div>
          <div class="match-result" id="match-result"></div>
          <button class="submit-btn" onclick="practice.submitMatch()" style="margin-top: 20px;">提交答案</button>
        </div>
      `;
      this.matchPairs = [];
      this.selectedLeft = null;
    } else if (question.type === 'drag') {
      // 拖拽填空题
      const slotsHTML = question.slots.map((slot, idx) => `
        <div class="drag-slot" data-index="${idx}" onclick="practice.dropToSlot(${idx})">
          ${slot}
        </div>
      `).join('');
      const optionsDragHTML = question.options.map((opt, idx) => `
        <div class="drag-option" draggable="true" data-index="${idx}" onclick="practice.selectDragOption(${idx})">
          ${opt}
        </div>
      `).join('');
      optionsHTML = `
        <div class="drag-container">
          <p class="drag-hint">👆 点击下方选项填入上方空格</p>
          <div class="drag-slots">${slotsHTML}</div>
          <div class="drag-options">${optionsDragHTML}</div>
          <button class="submit-btn" onclick="practice.submitDrag()" style="margin-top: 20px;">提交答案</button>
        </div>
      `;
      this.dragSelections = {};
      this.selectedDragOption = null;
    }
    
    quizBody.innerHTML = `
      <div class="question-box">
        <div class="question-num">${this.currentQuestion + 1}</div>
        <div class="question-text">${question.question}</div>
      </div>
      <div class="options-box">
        ${optionsHTML}
      </div>
      <div class="feedback-box" id="feedback" style="display: none;"></div>
    `;
    
    this.container.appendChild(quizBody);
  }
  
  selectOption(index) {
    const question = this.data.questions[this.currentQuestion];
    const isCorrect = index === question.answer;
    
    // 禁用所有选项
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      btn.style.cursor = 'not-allowed';
    });
    
    // 标记选中项
    const selectedBtn = document.querySelector(`[data-index="${index}"]`);
    selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    
    // 标记正确答案
    if (!isCorrect) {
      const correctBtn = document.querySelector(`[data-index="${question.answer}"]`);
      correctBtn.classList.add('correct');
    }
    
    // 显示反馈
    this.showFeedback(isCorrect, question.explanation);
    
    // 记录答案
    this.answers.push({
      question: this.currentQuestion,
      selected: index,
      correct: isCorrect
    });
    
    if (isCorrect) this.score++;
    
    // 显示下一题按钮
    setTimeout(() => this.showNextButton(), 1500);
  }
  
  submitFill() {
    const input = document.getElementById('fill-answer');
    const userAnswer = input.value.trim();
    const question = this.data.questions[this.currentQuestion];
    const isCorrect = userAnswer === question.answer;
    
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    
    this.showFeedback(isCorrect, question.explanation);
    
    this.answers.push({
      question: this.currentQuestion,
      selected: userAnswer,
      correct: isCorrect
    });
    
    if (isCorrect) this.score++;
    
    setTimeout(() => this.showNextButton(), 1500);
  }
  
  // 排序题相关方法
  moveOrderItem(index) {
    const container = document.getElementById('order-container');
    const items = container.querySelectorAll('.order-item');
    
    if (this.selectedOrderIndex === undefined) {
      this.selectedOrderIndex = index;
      items[index].classList.add('selected');
    } else {
      // 交换两个项目
      const parent = items[0].parentNode;
      const item1 = items[this.selectedOrderIndex];
      const item2 = items[index];
      
      const next1 = item1.nextSibling;
      const next2 = item2.nextSibling;
      
      parent.insertBefore(item1, next2);
      parent.insertBefore(item2, next1);
      
      // 更新序号
      parent.querySelectorAll('.order-item').forEach((item, idx) => {
        item.querySelector('.order-num').textContent = idx + 1;
        item.classList.remove('selected');
      });
      
      delete this.selectedOrderIndex;
    }
  }
  
  submitOrder() {
    const container = document.getElementById('order-container');
    const items = container.querySelectorAll('.order-item');
    const currentOrder = Array.from(items).map(item => parseInt(item.dataset.index));
    const question = this.data.questions[this.currentQuestion];
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(question.correctOrder);
    
    items.forEach(item => {
      item.style.pointerEvents = 'none';
      item.classList.add(isCorrect ? 'correct' : 'wrong');
    });
    
    this.showFeedback(isCorrect, question.explanation);
    
    this.answers.push({
      question: this.currentQuestion,
      selected: currentOrder,
      correct: isCorrect
    });
    
    if (isCorrect) this.score++;
    
    setTimeout(() => this.showNextButton(), 1500);
  }
  
  // 匹配题相关方法
  selectMatchLeft(index) {
    const items = document.querySelectorAll('.left-item');
    items.forEach(item => item.classList.remove('selected'));
    items[index].classList.add('selected');
    this.selectedLeft = index;
  }
  
  selectMatchRight(index) {
    if (this.selectedLeft === null) return;
    
    const leftItems = document.querySelectorAll('.left-item');
    const rightItems = document.querySelectorAll('.right-item');
    
    // 检查是否已配对
    const existingPair = this.matchPairs.find(p => p.left === this.selectedLeft);
    if (existingPair) {
      existingPair.right = index;
    } else {
      this.matchPairs.push({ left: this.selectedLeft, right: index });
    }
    
    // 更新显示
    leftItems[this.selectedLeft].classList.remove('selected');
    leftItems[this.selectedLeft].classList.add('matched');
    rightItems[index].classList.add('matched');
    
    // 显示配对结果
    const resultDiv = document.getElementById('match-result');
    resultDiv.innerHTML = this.matchPairs.map(p => `
      <span class="match-pair">${this.data.questions[this.currentQuestion].left[p.left]} 
      ↔ ${this.data.questions[this.currentQuestion].right[p.right]}</span>
    `).join('');
    
    this.selectedLeft = null;
  }
  
  submitMatch() {
    const question = this.data.questions[this.currentQuestion];
    const userPairs = this.matchPairs.map(p => `${p.left}-${p.right}`).sort().join(',');
    const correctPairs = question.correctPairs.map(p => `${p[0]}-${p[1]}`).sort().join(',');
    const isCorrect = userPairs === correctPairs;
    
    document.querySelectorAll('.match-item').forEach(item => {
      item.style.pointerEvents = 'none';
    });
    
    this.showFeedback(isCorrect, question.explanation);
    
    this.answers.push({
      question: this.currentQuestion,
      selected: this.matchPairs,
      correct: isCorrect
    });
    
    if (isCorrect) this.score++;
    
    setTimeout(() => this.showNextButton(), 1500);
  }
  
  // 拖拽填空题相关方法
  selectDragOption(index) {
    const options = document.querySelectorAll('.drag-option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    this.selectedDragOption = index;
  }
  
  dropToSlot(index) {
    if (this.selectedDragOption === null) return;
    
    const slots = document.querySelectorAll('.drag-slot');
    const question = this.data.questions[this.currentQuestion];
    
    slots[index].textContent = question.options[this.selectedDragOption];
    slots[index].dataset.value = this.selectedDragOption;
    slots[index].classList.add('filled');
    
    this.dragSelections[index] = this.selectedDragOption;
    
    document.querySelectorAll('.drag-option')[this.selectedDragOption].classList.remove('selected');
    this.selectedDragOption = null;
  }
  
  submitDrag() {
    const question = this.data.questions[this.currentQuestion];
    const userAnswers = question.slots.map((_, idx) => this.dragSelections[idx]);
    const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(question.correctAnswers);
    
    document.querySelectorAll('.drag-slot').forEach(slot => {
      slot.style.pointerEvents = 'none';
    });
    document.querySelectorAll('.drag-option').forEach(opt => {
      opt.style.pointerEvents = 'none';
    });
    
    this.showFeedback(isCorrect, question.explanation);
    
    this.answers.push({
      question: this.currentQuestion,
      selected: userAnswers,
      correct: isCorrect
    });
    
    if (isCorrect) this.score++;
    
    setTimeout(() => this.showNextButton(), 1500);
  }
  
  showFeedback(isCorrect, explanation) {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    feedback.className = `feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
      <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
      <div class="feedback-text">
        <strong>${isCorrect ? '回答正确！' : '回答错误'}</strong>
        <p>${explanation}</p>
      </div>
    `;
  }
  
  showNextButton() {
    const quizBody = document.getElementById('quiz-body');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = this.currentQuestion < this.data.questions.length - 1 ? '下一题 →' : '查看结果';
    nextBtn.onclick = () => this.nextQuestion();
    quizBody.appendChild(nextBtn);
  }
  
  nextQuestion() {
    this.currentQuestion++;
    
    // 更新进度条
    const progress = (this.currentQuestion / this.data.questions.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('.progress-text').textContent = 
      `第 ${Math.min(this.currentQuestion + 1, this.data.questions.length)} / ${this.data.questions.length} 题`;
    
    // 移除当前题目
    document.getElementById('quiz-body').remove();
    
    if (this.currentQuestion < this.data.questions.length) {
      this.renderQuestion();
    } else {
      this.showResult();
    }
  }
  
  showResult() {
    const percentage = Math.round((this.score / this.data.questions.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
      message = '太棒了！全对！';
      emoji = '🏆';
    } else if (percentage >= 80) {
      message = '做得很好！';
      emoji = '👏';
    } else if (percentage >= 60) {
      message = '继续加油！';
      emoji = '💪';
    } else {
      message = '再复习一下吧！';
      emoji = '📚';
    }
    
    const resultHTML = `
      <div class="result-box">
        <div class="result-emoji">${emoji}</div>
        <h3>${message}</h3>
        <div class="result-score">${this.score} / ${this.data.questions.length}</div>
        <div class="result-percentage">正确率 ${percentage}%</div>
        <div class="result-actions">
          <button class="restart-btn" onclick="location.reload()">🔄 重新练习</button>
          <a href="index.html" class="back-practice-btn">📋 返回练习中心</a>
        </div>
      </div>
    `;
    
    this.container.innerHTML = resultHTML;
    
    // 保存进度到本地存储
    this.saveProgress(percentage);
  }
  
  saveProgress(percentage) {
    const key = `practice-${this.unitId}`;
    let history = [];
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          history = parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse practice history:', e);
      history = [];
    }
    history.push({
      date: new Date().toISOString(),
      score: this.score,
      total: this.data.questions.length,
      percentage: percentage
    });
    localStorage.setItem(key, JSON.stringify(history.slice(-10)));
  }
  
  showNotFound() {
    this.container.innerHTML = `
      <div class="not-found">
        <div class="not-found-emoji">📝</div>
        <h3>练习题正在准备中</h3>
        <p>该单元的练习题还在编写中，请先练习其他单元！</p>
        <a href="index.html" class="back-btn">← 返回练习中心</a>
      </div>
    `;
  }
}

// 全局实例
let practice = null;

// 初始化函数
function initPractice(unitId) {
  practice = new PracticeSystem('practice-container', unitId);
}

// 获取学习进度
function getProgress(unitId) {
  const key = `practice-${unitId}`;
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to get progress:', e);
  }
  return null;
}

function getProgressStats(unitId) {
  const history = getProgress(unitId);
  if (!history || history.length === 0) return null;
  
  const latest = history[history.length - 1];
  return {
    lastScore: latest.percentage,
    attempts: history.length,
    bestScore: Math.max(...history.map(h => h.percentage))
  };
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PracticeSystem, practiceDB, getProgress, getProgressStats };
}

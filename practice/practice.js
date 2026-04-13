// ============================================
// L-MATH 乐学数学 - 互动练习系统
// ============================================

// 练习题数据库
const practiceDB = {
  'grade1-unit1': {
    title: '准备课 - 数一数',
    questions: [
      {
        type: 'choice',
        question: '数一数，下面有几个苹果？ 🍎🍎🍎🍎🍎',
        options: ['3个', '4个', '5个', '6个'],
        answer: 2,
        explanation: '一个一个数：1、2、3、4、5，共有5个苹果。'
      },
      {
        type: 'choice',
        question: '比一比，哪边的星星多？<br>⭐⭐⭐⭐ &nbsp;&nbsp; vs &nbsp;&nbsp; ⭐⭐⭐',
        options: ['左边多', '右边多', '一样多', '无法比较'],
        answer: 0,
        explanation: '左边有4颗星星，右边有3颗星星，4 > 3，所以左边多。'
      },
      {
        type: 'fill',
        question: '数一数，从1数到10，第7个数是____。',
        answer: '7',
        explanation: '从1开始数：1、2、3、4、5、6、7，第7个数就是7。'
      },
      {
        type: 'choice',
        question: '下面哪种方法数物体最准确？',
        options: ['随便数', '一个一个按顺序数', '跳着数', '倒着数'],
        answer: 1,
        explanation: '一个一个按顺序数（点数法）是最准确的数数方法，不会漏数也不会重复。'
      }
    ]
  },
  'grade1-unit2': {
    title: '位置 - 上下左右前后',
    questions: [
      {
        type: 'choice',
        question: '小猫在桌子的____面。（假设小猫在桌子下方）',
        options: ['上', '下', '左', '右'],
        answer: 1,
        explanation: '当小猫在桌子下方时，我们说小猫在桌子的下面。'
      },
      {
        type: 'choice',
        question: '小明面向北方，他的后面是____方。',
        options: ['东', '南', '西', '北'],
        answer: 1,
        explanation: '面向北方时，后面就是南方，左面是西方，右面是东方。'
      },
      {
        type: 'fill',
        question: '写字时，通常用____手拿笔。',
        answer: '右',
        explanation: '大多数人习惯用右手写字，但也有左撇子用左手写字。'
      }
    ]
  },
  'grade1-unit3': {
    title: '1~5的认识和加减法',
    questions: [
      {
        type: 'choice',
        question: '3 + 2 = ?',
        options: ['4', '5', '6', '7'],
        answer: 1,
        explanation: '3加2，可以从3往后数2个：4、5，所以3+2=5。'
      },
      {
        type: 'choice',
        question: '5 - 1 = ?',
        options: ['3', '4', '5', '6'],
        answer: 1,
        explanation: '5减1，可以从5往前数1个：4，所以5-1=4。'
      },
      {
        type: 'fill',
        question: '2 + ____ = 5',
        answer: '3',
        explanation: '5减2等于3，所以2+3=5。'
      },
      {
        type: 'choice',
        question: '比较大小：4 ____ 2',
        options: ['<', '>', '='],
        answer: 1,
        explanation: '4比2大，所以用大于号">"，4 > 2。'
      }
    ]
  },
  'grade1-unit4': {
    title: '认识图形（一）',
    questions: [
      {
        type: 'choice',
        question: '下面哪个是正方体？',
        options: ['📦', '⚽', '🥫', '📱'],
        answer: 0,
        explanation: '📦盒子是正方体，有6个正方形的面。'
      },
      {
        type: 'choice',
        question: '球可以____。',
        options: ['站稳', '滚动', '叠高', '立起来'],
        answer: 1,
        explanation: '球是圆的，可以到处滚动，不能站稳。'
      },
      {
        type: 'choice',
        question: '圆柱有几个面？',
        options: ['1个', '2个', '3个', '4个'],
        answer: 2,
        explanation: '圆柱有3个面：上面、下面（两个圆）和侧面（曲面）。'
      }
    ]
  },
  'grade1-unit5': {
    title: '6~10的认识和加减法',
    questions: [
      {
        type: 'choice',
        question: '8 - 3 = ?',
        options: ['4', '5', '6', '7'],
        answer: 1,
        explanation: '8减3，从8往前数3个：7、6、5，所以8-3=5。'
      },
      {
        type: 'fill',
        question: '6 + 4 = ____',
        answer: '10',
        explanation: '6和4组成10，所以6+4=10。'
      },
      {
        type: 'choice',
        question: '10可以分成3和____。',
        options: ['6', '7', '8', '9'],
        answer: 1,
        explanation: '10-3=7，所以10可以分成3和7。'
      }
    ]
  },
  'grade2-unit4': {
    title: '表内乘法（一）',
    questions: [
      {
        type: 'choice',
        question: '3 × 4 = ?',
        options: ['10', '11', '12', '13'],
        answer: 2,
        explanation: '三四十二，3×4=12。'
      },
      {
        type: 'choice',
        question: '5 × 6 = ?',
        options: ['25', '30', '35', '40'],
        answer: 1,
        explanation: '五六三十，5×6=30。'
      },
      {
        type: 'fill',
        question: '2 × ____ = 18',
        answer: '9',
        explanation: '二九十八，所以2×9=18。'
      },
      {
        type: 'choice',
        question: '一个因数是4，另一个因数是7，积是____。',
        options: ['24', '28', '32', '35'],
        answer: 1,
        explanation: '四七二十八，4×7=28。'
      }
    ]
  }
};

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
    const history = JSON.parse(localStorage.getItem(key) || '[]');
    history.push({
      date: new Date().toISOString(),
      score: this.score,
      total: this.data.questions.length,
      percentage: percentage
    });
    localStorage.setItem(key, JSON.stringify(history.slice(-10))); // 只保留最近10次
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
  const history = JSON.parse(localStorage.getItem(key) || '[]');
  if (history.length === 0) return null;
  
  const latest = history[history.length - 1];
  return {
    lastScore: latest.percentage,
    attempts: history.length,
    bestScore: Math.max(...history.map(h => h.percentage))
  };
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PracticeSystem, practiceDB, getProgress };
}

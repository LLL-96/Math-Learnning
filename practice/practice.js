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
  'grade1-unit6': {
    title: '11~20各数的认识',
    questions: [
      {
        type: 'choice',
        question: '15里面有____个十和____个一。',
        options: ['1个十和5个一', '5个十和1个一', '1个十和1个一', '5个十和5个一'],
        answer: 0,
        explanation: '15 = 10 + 5，所以是1个十和5个一。'
      },
      {
        type: 'fill',
        question: '1个十和8个一合起来是____。',
        answer: '18',
        explanation: '1个十是10，8个一是8，10+8=18。'
      },
      {
        type: 'choice',
        question: '12 + 3 = ?',
        options: ['13', '14', '15', '16'],
        answer: 2,
        explanation: '12加3，从12往后数3个：13、14、15，所以12+3=15。'
      },
      {
        type: 'choice',
        question: '18 - 5 = ?',
        options: ['11', '12', '13', '14'],
        answer: 2,
        explanation: '18减5，从18往前数5个：17、16、15、14、13，所以18-5=13。'
      }
    ]
  },
  'grade1-unit7': {
    title: '认识钟表',
    questions: [
      {
        type: 'choice',
        question: '钟面上有____个数字。',
        options: ['10个', '11个', '12个', '13个'],
        answer: 2,
        explanation: '钟面上有12个数字：1、2、3、4、5、6、7、8、9、10、11、12。'
      },
      {
        type: 'choice',
        question: '短针叫____，长针叫____。',
        options: ['时针、分针', '分针、时针', '秒针、时针', '时针、秒针'],
        answer: 0,
        explanation: '短针是时针，走得慢；长针是分针，走得快。'
      },
      {
        type: 'choice',
        question: '分针指向12，时针指向6，是____时。',
        options: ['5时', '6时', '7时', '12时'],
        answer: 1,
        explanation: '分针指向12，时针指向几就是几时，所以是6时。'
      },
      {
        type: 'fill',
        question: '分针指向12，时针指向9，是____时。',
        answer: '9',
        explanation: '分针指向12，时针指向9，就是9时。'
      }
    ]
  },
  'grade1-unit8': {
    title: '20以内的进位加法',
    questions: [
      {
        type: 'choice',
        question: '9 + 5 = ?',
        options: ['13', '14', '15', '16'],
        answer: 1,
        explanation: '用凑十法：把5分成1和4，9+1=10，10+4=14。'
      },
      {
        type: 'choice',
        question: '8 + 7 = ?',
        options: ['14', '15', '16', '17'],
        answer: 1,
        explanation: '用凑十法：把7分成2和5，8+2=10，10+5=15。'
      },
      {
        type: 'fill',
        question: '7 + 6 = ____',
        answer: '13',
        explanation: '用凑十法：把6分成3和3，7+3=10，10+3=13。'
      },
      {
        type: 'choice',
        question: '9 + 9 = ?',
        options: ['17', '18', '19', '20'],
        answer: 1,
        explanation: '用凑十法：把第二个9分成1和8，9+1=10，10+8=18。'
      },
      {
        type: 'choice',
        question: '6 + 8 = ?',
        options: ['13', '14', '15', '16'],
        answer: 1,
        explanation: '用凑十法：把6分成4和2，8+2=10，10+4=14。'
      }
    ]
  },
  'grade2-unit1': {
    title: '长度单位',
    questions: [
      {
        type: 'choice',
        question: '测量铅笔的长度，通常用____作单位。',
        options: ['米', '厘米', '分米', '千米'],
        answer: 1,
        explanation: '铅笔比较短，用厘米作单位。1米=100厘米。'
      },
      {
        type: 'choice',
        question: '1米 = ____厘米。',
        options: ['10', '100', '1000', '50'],
        answer: 1,
        explanation: '1米等于100厘米。'
      },
      {
        type: 'choice',
        question: '教室的门大约高____。',
        options: ['2厘米', '2米', '20厘米', '200米'],
        answer: 1,
        explanation: '教室的门比较高，大约高2米。'
      },
      {
        type: 'fill',
        question: '数学书大约长26____。',
        answer: '厘米',
        explanation: '数学书的长度用厘米作单位，大约26厘米。'
      }
    ]
  },
  'grade2-unit2': {
    title: '100以内的加法和减法（二）',
    questions: [
      {
        type: 'choice',
        question: '45 + 28 = ?',
        options: ['63', '73', '83', '93'],
        answer: 1,
        explanation: '45+28，个位5+8=13写3进1，十位4+2+1=7，所以是73。'
      },
      {
        type: 'choice',
        question: '72 - 36 = ?',
        options: ['34', '36', '38', '46'],
        answer: 1,
        explanation: '72-36，个位2不够减6，向十位借1，12-6=6，十位6-3=3，所以是36。'
      },
      {
        type: 'fill',
        question: '56 + ____ = 100',
        answer: '44',
        explanation: '100-56=44，所以56+44=100。'
      },
      {
        type: 'choice',
        question: '最大的两位数与最小的两位数的和是____。',
        options: ['100', '109', '110', '99'],
        answer: 1,
        explanation: '最大的两位数是99，最小的两位数是10，99+10=109。'
      }
    ]
  },
  'grade2-unit3': {
    title: '角的初步认识',
    questions: [
      {
        type: 'choice',
        question: '一个角有____个顶点和____条边。',
        options: ['1个顶点，1条边', '1个顶点，2条边', '2个顶点，1条边', '2个顶点，2条边'],
        answer: 1,
        explanation: '一个角有1个顶点和2条边。'
      },
      {
        type: 'choice',
        question: '比直角小的角叫____。',
        options: ['钝角', '锐角', '平角', '周角'],
        answer: 1,
        explanation: '比直角小的角叫锐角，比直角大的角叫钝角。'
      },
      {
        type: 'choice',
        question: '三角尺上有____个直角。',
        options: ['0个', '1个', '2个', '3个'],
        answer: 1,
        explanation: '一副三角尺，一把有1个直角，另一把也有1个直角。'
      },
      {
        type: 'choice',
        question: '下面哪个角是直角？',
        options: ['📐', '◢', '◣', '◤'],
        answer: 0,
        explanation: '📐三角尺上的角是直角。'
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
  },
  'grade2-unit5': {
    title: '观察物体（一）',
    questions: [
      {
        type: 'choice',
        question: '从不同的位置观察同一个物体，看到的形状____。',
        options: ['一定相同', '可能不同', '一定不同', '无法确定'],
        answer: 1,
        explanation: '从不同的位置观察同一个物体，看到的形状可能不同。'
      },
      {
        type: 'choice',
        question: '从正面看，长方体可以看到____。',
        options: ['圆形', '三角形', '长方形', '正方形'],
        answer: 2,
        explanation: '长方体的面是长方形，从正面看是长方形。'
      },
      {
        type: 'choice',
        question: '球从任何方向看都是____。',
        options: ['圆形', '正方形', '长方形', '三角形'],
        answer: 0,
        explanation: '球是圆的，从任何方向看都是圆形。'
      }
    ]
  },
  'grade2-unit6': {
    title: '表内乘法（二）',
    questions: [
      {
        type: 'choice',
        question: '7 × 8 = ?',
        options: ['54', '56', '58', '64'],
        answer: 1,
        explanation: '七八五十六，7×8=56。'
      },
      {
        type: 'choice',
        question: '9 × 9 = ?',
        options: ['80', '81', '82', '90'],
        answer: 1,
        explanation: '九九八十一，9×9=81。'
      },
      {
        type: 'fill',
        question: '8 × ____ = 64',
        answer: '8',
        explanation: '八八六十四，所以8×8=64。'
      },
      {
        type: 'choice',
        question: '一个乘数是7，另一个乘数是6，积是____。',
        options: ['40', '42', '44', '48'],
        answer: 1,
        explanation: '六七四十二，7×6=42。'
      }
    ]
  },
  'grade2-unit7': {
    title: '认识时间',
    questions: [
      {
        type: 'choice',
        question: '时针走一大格是____小时。',
        options: ['1小时', '5小时', '10小时', '12小时'],
        answer: 0,
        explanation: '时针走一大格是1小时，走一圈是12小时。'
      },
      {
        type: 'choice',
        question: '分针走一小格是____分钟。',
        options: ['1分钟', '5分钟', '10分钟', '15分钟'],
        answer: 0,
        explanation: '分针走一小格是1分钟，走一大格是5分钟。'
      },
      {
        type: 'choice',
        question: '1小时 = ____分钟。',
        options: ['30分钟', '60分钟', '100分钟', '120分钟'],
        answer: 1,
        explanation: '1小时等于60分钟。'
      },
      {
        type: 'fill',
        question: '分针指向6，时针在3和4之间，是____时____分。',
        answer: '3时30分',
        explanation: '分针指向6是30分，时针在3和4之间是3时，所以是3时30分。'
      }
    ]
  },
  'grade2-unit8': {
    title: '数学广角——搭配（一）',
    questions: [
      {
        type: 'choice',
        question: '用2、3、4三个数字可以组成____个不同的两位数。',
        options: ['3个', '4个', '6个', '9个'],
        answer: 2,
        explanation: '可以组成23、24、32、34、42、43，共6个。'
      },
      {
        type: 'choice',
        question: '小明有3件上衣和2条裤子，一共有____种不同的穿法。',
        options: ['5种', '6种', '8种', '10种'],
        answer: 1,
        explanation: '3件上衣分别配2条裤子，3×2=6种穿法。'
      },
      {
        type: 'choice',
        question: '从甲地到乙地有2条路，从乙地到丙地有3条路，从甲地到丙地有____种走法。',
        options: ['5种', '6种', '8种', '9种'],
        answer: 1,
        explanation: '2×3=6种走法。'
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

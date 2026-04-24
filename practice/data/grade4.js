// grade4 题库数据 - 按需加载
registerGradeData({
  'grade4-unit1': {
    title: '大数的认识',
    questions: [
      {
        type: 'choice',
        question: '10个一万是____。',
        options: ['一百万', '十万', '一万', '一亿'],
        answer: 1,
        explanation: '10个一万是十万。'
      },
      {
        type: 'choice',
        question: '100个一百万是____。',
        options: ['一千万', '一亿', '十亿', '一百万'],
        answer: 1,
        explanation: '100个一百万是一亿。'
      },
      {
        type: 'fill',
        question: '一个数从右边起，第五位是____位。',
        answer: '万',
        explanation: '从右起：个、十、百、千、万，第五位是万位。'
      }
    ]
  },
  'grade4-unit2': {
    title: '公顷和平方千米',
    questions: [
      {
        type: 'choice',
        question: '1公顷 = ____平方米。',
        options: ['100', '1000', '10000', '100000'],
        answer: 2,
        explanation: '1公顷=10000平方米。'
      },
      {
        type: 'choice',
        question: '1平方千米 = ____公顷。',
        options: ['10', '100', '1000', '10000'],
        answer: 1,
        explanation: '1平方千米=100公顷。'
      }
    ]
  },
  'grade4-unit3': {
    title: '角的度量',
    questions: [
      {
        type: 'choice',
        question: '一个周角 = ____度。',
        options: ['90', '180', '270', '360'],
        answer: 3,
        explanation: '一个周角=360度。'
      },
      {
        type: 'choice',
        question: '一个平角 = ____个直角。',
        options: ['1', '2', '3', '4'],
        answer: 1,
        explanation: '平角=180度，直角=90度，180÷90=2。'
      },
      {
        type: 'fill',
        question: '用量角器量角时，量角器的中心要和角的____重合。',
        answer: '顶点',
        explanation: '量角器的中心要和角的顶点重合。'
      }
    ]
  },
  'grade4-unit4': {
    title: '三位数乘两位数',
    questions: [
      {
        type: 'choice',
        question: '125 × 8 = ?',
        options: ['100', '1000', '10000', '800'],
        answer: 1,
        explanation: '125×8=1000。'
      },
      {
        type: 'choice',
        question: '250 × 40 = ?',
        options: ['1000', '10000', '100000', '100'],
        answer: 1,
        explanation: '250×40=10000。'
      }
    ]
  },
  'grade4-unit5': {
    title: '平行四边形和梯形',
    questions: [
      {
        type: 'choice',
        question: '平行四边形的对边____。',
        options: ['相等', '不相等', '垂直', '平行'],
        answer: 0,
        explanation: '平行四边形的对边相等且平行。'
      },
      {
        type: 'choice',
        question: '梯形有____组对边平行。',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explanation: '梯形只有一组对边平行。'
      }
    ]
  },
  'grade4-unit6': {
    title: '除数是两位数的除法',
    questions: [
      {
        type: 'choice',
        question: '360 ÷ 40 = ?',
        options: ['9', '90', '8', '80'],
        answer: 0,
        explanation: '360÷40=9。'
      },
      {
        type: 'choice',
        question: '试商时，如果余数比除数大，说明商____。',
        options: ['正好', '偏大', '偏小', '无法确定'],
        answer: 2,
        explanation: '余数比除数大，说明商偏小，需要调大。'
      }
    ]
  },
  'grade4-unit7': {
    title: '条形统计图',
    questions: [
      {
        type: 'choice',
        question: '条形统计图能清楚地看出数量的____。',
        options: ['多少', '变化', '比例', '关系'],
        answer: 0,
        explanation: '条形统计图能清楚地看出数量的多少。'
      }
    ]
  },
  'grade4-unit8': {
    title: '数学广角-优化',
    questions: [
      {
        type: 'choice',
        question: '烙一张饼需要4分钟（正反面各2分钟），一次只能烙2张，烙3张饼最少需要____分钟。',
        options: ['6', '8', '10', '12'],
        answer: 0,
        explanation: '先烙1、2正面（2分），再烙1反面、3正面（2分），最后烙2、3反面（2分），共6分钟。'
      }
    ]
  },
  'grade4-unit1-2': {
    title: '四则运算',
    questions: [
      {
        type: 'choice',
        question: '在没有括号的算式里，如果只有加减法或只有乘除法，要____计算。',
        options: ['先算加法', '先算乘法', '从左往右', '从右往左'],
        answer: 2,
        explanation: '在没有括号的算式里，如果只有同级运算，要从左往右依次计算。'
      },
      {
        type: 'choice',
        question: '算式里有括号，要先算____。',
        options: ['括号里面的', '括号外面的', '加法', '乘法'],
        answer: 0,
        explanation: '算式里有括号，要先算括号里面的。'
      },
      {
        type: 'fill',
        question: '25 + 75 - 50 = ____',
        answer: '50',
        explanation: '25+75=100，100-50=50。'
      }
    ]
  },
  'grade4-unit2-2': {
    title: '观察物体（二）',
    questions: [
      {
        type: 'choice',
        question: '从不同的位置观察同一个物体，看到的形状____。',
        options: ['一定相同', '可能不同', '一定不同', '无法确定'],
        answer: 1,
        explanation: '从不同的位置观察同一个物体，看到的形状可能不同。'
      }
    ]
  },
  'grade4-unit3-2': {
    title: '运算定律',
    questions: [
      {
        type: 'choice',
        question: 'a + b = b + a，这是____。',
        options: ['加法结合律', '加法交换律', '乘法交换律', '乘法结合律'],
        answer: 1,
        explanation: 'a+b=b+a是加法交换律。'
      },
      {
        type: 'choice',
        question: '(a + b) + c = a + (b + c)，这是____。',
        options: ['加法交换律', '加法结合律', '乘法交换律', '乘法结合律'],
        answer: 1,
        explanation: '(a+b)+c=a+(b+c)是加法结合律。'
      },
      {
        type: 'fill',
        question: '25 × 4 × 8 = 25 × ____ × 4',
        answer: '8',
        explanation: '运用乘法交换律，25×4×8=25×8×4。'
      }
    ]
  },
  'grade4-unit4-2': {
    title: '小数的意义和性质',
    questions: [
      {
        type: 'choice',
        question: '0.1表示____。',
        options: ['十分之一', '百分之一', '千分之一', '一'],
        answer: 0,
        explanation: '0.1表示十分之一。'
      },
      {
        type: 'choice',
        question: '0.50化简后是____。',
        options: ['0.5', '0.05', '5', '50'],
        answer: 0,
        explanation: '根据小数的性质，0.50=0.5。'
      },
      {
        type: 'fill',
        question: '0.3里面有____个0.1。',
        answer: '3',
        explanation: '0.3里面有3个0.1。'
      }
    ]
  },
  'grade4-unit5-2': {
    title: '三角形',
    questions: [
      {
        type: 'choice',
        question: '三角形有____条边。',
        options: ['2', '3', '4', '5'],
        answer: 1,
        explanation: '三角形有3条边。'
      },
      {
        type: 'choice',
        question: '三角形的内角和是____度。',
        options: ['90', '180', '270', '360'],
        answer: 1,
        explanation: '三角形的内角和是180度。'
      },
      {
        type: 'choice',
        question: '等边三角形的三个角都等于____度。',
        options: ['30', '45', '60', '90'],
        answer: 2,
        explanation: '等边三角形的三个角都等于60度。'
      }
    ]
  },
  'grade4-unit6-2': {
    title: '小数的加法和减法',
    questions: [
      {
        type: 'choice',
        question: '计算小数加减法时，小数点要____。',
        options: ['对齐', '不对齐', '向左移', '向右移'],
        answer: 0,
        explanation: '计算小数加减法时，小数点要对齐。'
      },
      {
        type: 'fill',
        question: '3.5 + 2.8 = ____',
        answer: '6.3',
        explanation: '3.5+2.8=6.3。'
      },
      {
        type: 'choice',
        question: '5 - 2.5 = ____',
        options: ['2.5', '3.5', '3', '7.5'],
        answer: 0,
        explanation: '5-2.5=2.5。'
      }
    ]
  },
  'grade4-unit7-2': {
    title: '图形的运动（二）',
    questions: [
      {
        type: 'choice',
        question: '一个图形沿着一条直线对折后，两部分完全重合，这样的图形叫做____。',
        options: ['轴对称图形', '中心对称图形', '旋转图形', '平移图形'],
        answer: 0,
        explanation: '这样的图形叫做轴对称图形。'
      }
    ]
  },
  'grade4-unit8-2': {
    title: '平均数与条形统计图',
    questions: [
      {
        type: 'choice',
        question: '求平均数的方法是：总数量 ÷ ____。',
        options: ['总份数', '总数', '份数', '数量'],
        answer: 0,
        explanation: '平均数=总数量÷总份数。'
      },
      {
        type: 'fill',
        question: '小明语文考了90分，数学考了96分，平均分是____分。',
        answer: '93',
        explanation: '(90+96)÷2=93分。'
      }
    ]
  },
  'grade4-unit9-2': {
    title: '数学广角-鸡兔同笼',
    questions: [
      {
        type: 'choice',
        question: '鸡兔同笼，上有8头，下有22足，鸡有____只。',
        options: ['3', '4', '5', '6'],
        answer: 2,
        explanation: '假设全是兔，8×4=32足，多32-22=10足，每只鸡多算2足，鸡有10÷2=5只。'
      }
    ]
  },
});

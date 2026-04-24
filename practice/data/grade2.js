// grade2 题库数据 - 按需加载
registerGradeData({
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
  },
});

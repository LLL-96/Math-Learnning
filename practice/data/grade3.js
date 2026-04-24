// grade3 题库数据 - 按需加载
registerGradeData({
  'grade3-unit1': {
    title: '时、分、秒',
    questions: [
      {
        type: 'choice',
        question: '1小时 = ____分钟。',
        options: ['60', '100', '30', '10'],
        answer: 0,
        explanation: '1小时等于60分钟。'
      },
      {
        type: 'choice',
        question: '1分钟 = ____秒。',
        options: ['30', '60', '100', '10'],
        answer: 1,
        explanation: '1分钟等于60秒。'
      },
      {
        type: 'fill',
        question: '2小时30分钟 = ____分钟。',
        answer: '150',
        explanation: '2小时=120分钟，120+30=150分钟。'
      },
      {
        type: 'choice',
        question: '小明从家到学校用了15分钟，合____秒。',
        options: ['60', '900', '150', '1500'],
        answer: 1,
        explanation: '15分钟=15×60=900秒。'
      }
    ]
  },
  'grade3-unit2': {
    title: '万以内的加法和减法（一）',
    questions: [
      {
        type: 'choice',
        question: '350 + 240 = ?',
        options: ['490', '580', '590', '680'],
        answer: 2,
        explanation: '350+240，百位3+2=5，十位5+4=9，个位0+0=0，所以是590。'
      },
      {
        type: 'choice',
        question: '720 - 380 = ?',
        options: ['240', '340', '440', '340'],
        answer: 1,
        explanation: '720-380，个位0-0=0，十位2不够减8，向百位借1，12-8=4，百位6-3=3，所以是340。'
      },
      {
        type: 'fill',
        question: '460 + 270 = ____',
        answer: '730',
        explanation: '460+270=730。'
      },
      {
        type: 'choice',
        question: '一台电视580元，一个音响240元，一共____元。',
        options: ['720', '820', '620', '920'],
        answer: 1,
        explanation: '580+240=820元。'
      }
    ]
  },
  'grade3-unit3': {
    title: '测量',
    questions: [
      {
        type: 'choice',
        question: '1千米 = ____米。',
        options: ['10', '100', '1000', '10000'],
        answer: 2,
        explanation: '1千米等于1000米。'
      },
      {
        type: 'choice',
        question: '1吨 = ____千克。',
        options: ['10', '100', '1000', '10000'],
        answer: 2,
        explanation: '1吨等于1000千克。'
      },
      {
        type: 'fill',
        question: '5000米 = ____千米。',
        answer: '5',
        explanation: '1000米=1千米，5000÷1000=5千米。'
      },
      {
        type: 'choice',
        question: '一辆汽车重约2____。',
        options: ['克', '千克', '吨', '米'],
        answer: 2,
        explanation: '汽车很重，用吨作单位，约2吨。'
      }
    ]
  },
  'grade3-unit4': {
    title: '万以内的加法和减法（二）',
    questions: [
      {
        type: 'choice',
        question: '456 + 378 = ?',
        options: ['724', '824', '834', '734'],
        answer: 1,
        explanation: '456+378，个位6+8=14写4进1，十位5+7+1=13写3进1，百位4+3+1=8，所以是834。'
      },
      {
        type: 'choice',
        question: '702 - 385 = ?',
        options: ['317', '327', '417', '307'],
        answer: 0,
        explanation: '702-385，个位2不够减5，向十位借1，12-5=7，十位9-8=1，百位6-3=3，所以是317。'
      },
      {
        type: 'fill',
        question: '538 + 276 = ____',
        answer: '814',
        explanation: '538+276=814。'
      },
      {
        type: 'choice',
        question: '验算加法可以用____。',
        options: ['加法', '减法', '乘法', '除法'],
        answer: 1,
        explanation: '验算加法可以用减法：和 - 一个加数 = 另一个加数。'
      }
    ]
  },
  'grade3-unit5': {
    title: '倍的认识',
    questions: [
      {
        type: 'choice',
        question: '6是3的____倍。',
        options: ['2', '3', '9', '18'],
        answer: 0,
        explanation: '6÷3=2，所以6是3的2倍。'
      },
      {
        type: 'choice',
        question: '8的4倍是____。',
        options: ['12', '24', '32', '36'],
        answer: 2,
        explanation: '8×4=32，所以8的4倍是32。'
      },
      {
        type: 'fill',
        question: '15是5的____倍。',
        answer: '3',
        explanation: '15÷5=3，所以15是5的3倍。'
      },
      {
        type: 'choice',
        question: '小明有6本书，小红有2本，小明的书是小红的____倍。',
        options: ['2', '3', '4', '12'],
        answer: 1,
        explanation: '6÷2=3，小明的书是小红的3倍。'
      }
    ]
  },
  'grade3-unit6': {
    title: '多位数乘一位数',
    questions: [
      {
        type: 'choice',
        question: '24 × 3 = ?',
        options: ['62', '72', '82', '92'],
        answer: 1,
        explanation: '24×3，4×3=12写2进1，2×3+1=7，所以是72。'
      },
      {
        type: 'choice',
        question: '305 × 4 = ?',
        options: ['1220', '1200', '1320', '1420'],
        answer: 0,
        explanation: '305×4，5×4=20写0进2，0×4+2=2，3×4=12，所以是1220。'
      },
      {
        type: 'fill',
        question: '125 × 8 = ____',
        answer: '1000',
        explanation: '125×8=1000。'
      },
      {
        type: 'choice',
        question: '0乘任何数都得____。',
        options: ['0', '1', '原数', '不确定'],
        answer: 0,
        explanation: '0乘任何数都得0。'
      }
    ]
  },
  'grade3-unit7': {
    title: '长方形和正方形',
    questions: [
      {
        type: 'choice',
        question: '长方形有____条边，____个角。',
        options: ['3,3', '4,4', '5,5', '6,6'],
        answer: 1,
        explanation: '长方形有4条边，4个直角。'
      },
      {
        type: 'choice',
        question: '正方形的四条边都____。',
        options: ['相等', '不相等', '平行', '垂直'],
        answer: 0,
        explanation: '正方形的四条边都相等。'
      },
      {
        type: 'fill',
        question: '一个长方形长8厘米，宽5厘米，周长是____厘米。',
        answer: '26',
        explanation: '周长=(8+5)×2=26厘米。'
      },
      {
        type: 'choice',
        question: '一个正方形边长6厘米，周长是____厘米。',
        options: ['12', '18', '24', '36'],
        answer: 2,
        explanation: '正方形周长=边长×4=6×4=24厘米。'
      }
    ]
  },
  'grade3-unit8': {
    title: '分数的初步认识',
    questions: [
      {
        type: 'choice',
        question: '把一个蛋糕平均分成4份，每份是它的____。',
        options: ['1/2', '1/3', '1/4', '1/5'],
        answer: 2,
        explanation: '平均分成4份，每份是1/4。'
      },
      {
        type: 'choice',
        question: '3/5读作____。',
        options: ['三分之五', '五分之三', '五三分', '三五分'],
        answer: 1,
        explanation: '3/5读作五分之三。'
      },
      {
        type: 'fill',
        question: '5个1/8是____。',
        answer: '5/8',
        explanation: '5个1/8就是5/8。'
      },
      {
        type: 'choice',
        question: '1/3 ____ 1/4（填>或<）',
        options: ['>', '<', '=', '无法比较'],
        answer: 0,
        explanation: '分子相同，分母小的分数大，1/3 > 1/4。'
      }
    ]
  },
  'grade3-unit1-2': {
    title: '位置与方向（一）',
    questions: [
      {
        type: 'choice',
        question: '太阳从____方升起，从____方落下。',
        options: ['东,西', '西,东', '南,北', '北,南'],
        answer: 0,
        explanation: '太阳从东方升起，从西方落下。'
      },
      {
        type: 'choice',
        question: '面向北方，后面是____方。',
        options: ['东', '南', '西', '北'],
        answer: 1,
        explanation: '面向北方时，后面是南方。'
      },
      {
        type: 'choice',
        question: '地图通常是按上____下____左____右____绘制的。',
        options: ['北,南,西,东', '南,北,东,西', '东,西,南,北', '西,东,北,南'],
        answer: 0,
        explanation: '地图通常按上北下南、左西右东绘制。'
      }
    ]
  },
  'grade3-unit2-2': {
    title: '除数是一位数的除法',
    questions: [
      {
        type: 'choice',
        question: '84 ÷ 4 = ?',
        options: ['21', '22', '20', '24'],
        answer: 0,
        explanation: '84÷4，8÷4=2，4÷4=1，所以是21。'
      },
      {
        type: 'choice',
        question: '0 ÷ 5 = ?',
        options: ['5', '1', '0', '无法计算'],
        answer: 2,
        explanation: '0除以任何非零数都得0。'
      },
      {
        type: 'fill',
        question: '96 ÷ 3 = ____',
        answer: '32',
        explanation: '96÷3=32。'
      },
      {
        type: 'choice',
        question: '有余数的除法中，余数必须____除数。',
        options: ['大于', '小于', '等于', '大于或等于'],
        answer: 1,
        explanation: '余数必须小于除数。'
      }
    ]
  },
  'grade3-unit3-2': {
    title: '复式统计表',
    questions: [
      {
        type: 'choice',
        question: '复式统计表可以表示____组数据。',
        options: ['1', '2', '多', '3'],
        answer: 2,
        explanation: '复式统计表可以表示多组数据，便于比较。'
      },
      {
        type: 'choice',
        question: '统计表由____组成。',
        options: ['行和列', '只有行', '只有列', '数字'],
        answer: 0,
        explanation: '统计表由行和列组成。'
      }
    ]
  },
  'grade3-unit4-2': {
    title: '两位数乘两位数',
    questions: [
      {
        type: 'choice',
        question: '12 × 13 = ?',
        options: ['156', '146', '136', '166'],
        answer: 0,
        explanation: '12×13=156。'
      },
      {
        type: 'choice',
        question: '25 × 40 = ?',
        options: ['100', '1000', '10000', '100000'],
        answer: 1,
        explanation: '25×40=1000。'
      },
      {
        type: 'fill',
        question: '30 × 50 = ____',
        answer: '1500',
        explanation: '30×50=1500。'
      }
    ]
  },
  'grade3-unit5-2': {
    title: '面积',
    questions: [
      {
        type: 'choice',
        question: '边长1厘米的正方形，面积是____。',
        options: ['1厘米', '1平方厘米', '1立方米', '1平方分米'],
        answer: 1,
        explanation: '边长1厘米的正方形面积是1平方厘米。'
      },
      {
        type: 'choice',
        question: '长方形面积 = ____。',
        options: ['长+宽', '长×宽', '长-宽', '长÷宽'],
        answer: 1,
        explanation: '长方形面积=长×宽。'
      },
      {
        type: 'fill',
        question: '一个长方形长8厘米，宽5厘米，面积是____平方厘米。',
        answer: '40',
        explanation: '面积=8×5=40平方厘米。'
      }
    ]
  },
  'grade3-unit6-2': {
    title: '年、月、日',
    questions: [
      {
        type: 'choice',
        question: '一年有____个月。',
        options: ['10', '11', '12', '13'],
        answer: 2,
        explanation: '一年有12个月。'
      },
      {
        type: 'choice',
        question: '大月有____天。',
        options: ['28', '29', '30', '31'],
        answer: 3,
        explanation: '大月有31天。'
      },
      {
        type: 'choice',
        question: '平年2月有____天。',
        options: ['28', '29', '30', '31'],
        answer: 0,
        explanation: '平年2月有28天，闰年2月有29天。'
      }
    ]
  },
  'grade3-unit7-2': {
    title: '小数的初步认识',
    questions: [
      {
        type: 'choice',
        question: '0.5读作____。',
        options: ['零点五', '零五', '五分', '五'],
        answer: 0,
        explanation: '0.5读作零点五。'
      },
      {
        type: 'choice',
        question: '1元5角写成小数是____元。',
        options: ['1.5', '0.15', '15', '0.5'],
        answer: 0,
        explanation: '5角=0.5元，1元5角=1.5元。'
      },
      {
        type: 'fill',
        question: '0.3 + 0.4 = ____',
        answer: '0.7',
        explanation: '0.3+0.4=0.7。'
      }
    ]
  },
  'grade3-unit8-2': {
    title: '数学广角-搭配（二）',
    questions: [
      {
        type: 'choice',
        question: '用1、2、3能组成____个不同的两位数。',
        options: ['3', '6', '9', '12'],
        answer: 1,
        explanation: '12、13、21、23、31、32，共6个。'
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
  'grade3-unit9-2': {
    title: '总复习',
    questions: [
      {
        type: 'choice',
        question: '最大的三位数是____。',
        options: ['900', '990', '999', '1000'],
        answer: 2,
        explanation: '最大的三位数是999。'
      },
      {
        type: 'choice',
        question: '1千米 = ____米。',
        options: ['10', '100', '1000', '10000'],
        answer: 2,
        explanation: '1千米=1000米。'
      }
    ]
  },
});

# 🧮 L-MATH 乐学数学

> 小学数学人教版互动学习平台，涵盖一至六年级全部知识点，趣味练习让数学学习更轻松。

🔗 **在线访问**：[https://lll-96.github.io/Math-Learnning/](https://lll-96.github.io/Math-Learnning/)

---

## ✨ 功能特点

- 📚 **紧扣教材** — 完全按照人教版小学数学教材编排，1-6 年级上下册共 91 个单元
- 🎮 **互动练习** — 选择、填空、排序、匹配、拖拽五种题型，即时反馈 + 详细解析
- 📖 **知识讲解** — 每个单元包含学习目标、知识讲解、练一练三个模块
- 📱 **响应式设计** — 支持手机、平板、电脑，随时随地学习
- 🖨️ **打印功能** — 可按单元生成纸质练习题，支持离线使用
- 💾 **进度追踪** — 自动保存练习历史到本地，查看学习成果
- 🚀 **零门槛** — 纯前端实现，无需注册、无需安装、无需后端

---

## 📊 项目数据

| 指标 | 数值 |
|------|------|
| 覆盖年级 | 1 ~ 6 年级 |
| 知识页面 | 107 个 HTML |
| 练习单元 | 87 个（含 3 个新题型体验） |
| 练习题目 | 239+ 道 |
| 题目类型 | 选择、填空、排序、匹配、拖拽 |

### 各年级内容

| 年级 | 上册单元 | 下册单元 | 知识页面 |
|------|---------|---------|---------|
| 一年级 🌱 | 8 个 | 7 个 | 17 |
| 二年级 🌿 | 8 个 | 8 个 | 18 |
| 三年级 🌳 | 8 个 | 8 个 | 18 |
| 四年级 ⭐ | 8 个 | 8 个 | 18 |
| 五年级 🌟 | 7 个 | 8 个 | 17 |
| 六年级 🎓 | 9 个 | 6 个 | 19 |

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 页面结构 | HTML5 语义化标签 |
| 样式 | CSS3（CSS 变量、Flexbox、Grid、渐变、动画） |
| 交互 | 原生 JavaScript（ES6+，无框架依赖） |
| 字体 | Google Fonts — Nunito + ZCOOL KuaiLe |
| 部署 | GitHub Pages 静态托管 |
| SEO | Sitemap、Open Graph、结构化数据（JSON-LD） |

### 架构特点

- **纯静态架构** — 所有页面为独立 HTML，首屏即渲染，SEO 友好
- **按需加载** — 练习题库按年级拆分，仅加载当前所需数据
- **CSS 模块化** — 共享样式提取为 `unit.css`、`grade.css`，每个页面仅保留主题色
- **零构建依赖** — 无需 Node.js 构建，`git push` 即部署

---

## 📁 项目结构

```
L-MATH-CS/
├── index.html                # 首页（年级选择 + 平台介绍）
├── about.html                # 关于页面
├── 404.html                  # 自定义 404 页面
├── sitemap.xml               # 站点地图（112 个 URL）
├── robots.txt                # 搜索引擎爬虫规则
├── generate-sitemap.js       # Sitemap 生成脚本（Node.js）
│
├── assets/
│   ├── css/
│   │   ├── bundle.css        # 首页合并样式（style + navbar + hero + grade-cards + footer）
│   │   ├── style.css         # 全局基础样式
│   │   ├── unit.css          # 单元知识页共享样式
│   │   └── grade.css         # 年级目录页共享样式
│   ├── js/
│   │   └── main.js           # 首页交互（导航滚动 + 入场动画 + 粒子效果）
│   └── images/
│       ├── logo.svg          # 项目 Logo
│       └── og-image.svg      # 社交分享图
│
├── components/
│   ├── navbar.css            # 导航栏样式（毛玻璃 + 固定定位）
│   ├── hero.css              # 首页 Hero 区域样式
│   ├── grade-cards.css       # 年级卡片样式
│   ├── footer.css            # 页脚样式
│   └── navigation.js         # 导航组件（模板 + 渲染函数，备用）
│
├── grades/                   # 各年级知识页面（共 107 个 HTML）
│   ├── grade1/               # 一年级（17 个页面）
│   │   ├── index.html        #   上册目录
│   │   ├── index2.html       #   下册目录
│   │   ├── unit1.html        #   上册第 1 单元
│   │   ├── unit1-2.html      #   下册第 1 单元
│   │   └── ...
│   ├── grade2/               # 二年级（18 个页面）
│   ├── grade3/               # 三年级（18 个页面）
│   ├── grade4/               # 四年级（18 个页面）
│   ├── grade5/               # 五年级（17 个页面）
│   └── grade6/               # 六年级（19 个页面）
│
└── practice/                 # 练习系统
    ├── index.html            #   练习中心（单元列表 + 进度显示）
    ├── quiz.html             #   互动练习页（按需加载题库）
    ├── print.html            #   打印练习题
    ├── practice.js           #   练习核心逻辑（PracticeSystem 类）
    └── data/                 #   按年级拆分的题库数据（按需加载）
        ├── grade1.js         #   一年级题库（15 单元 / 57 题）
        ├── grade2.js         #   二年级题库（8 单元 / 30 题）
        ├── grade3.js         #   三年级题库（17 单元 / 57 题）
        ├── grade4.js         #   四年级题库（17 单元 / 36 题）
        ├── grade5.js         #   五年级题库（15 单元 / 31 题）
        └── grade6.js         #   六年级题库（15 单元 / 28 题）
```

---

## 🚀 本地运行

无需任何构建工具，克隆后直接用浏览器打开即可：

```bash
# 克隆仓库
git clone https://github.com/LLL-96/Math-Learnning.git
cd Math-Learnning

# 方式一：直接打开
# 双击 index.html 或在浏览器中打开

# 方式二：本地服务器（推荐，避免跨域问题）
npx serve .
# 或
python -m http.server 8000
```

> **推荐使用本地服务器**：部分功能（如练习题库按需加载）依赖相对路径，`file://` 协议下可能受限。

---

## 🎯 使用方式

### 学习知识
1. 打开首页，点击年级卡片进入对应年级
2. 选择上册或下册，浏览单元列表
3. 点击单元卡片进入知识页面，包含学习目标、知识讲解、练一练

### 互动练习
1. 进入[练习中心](https://lll-96.github.io/Math-Learnning/practice/index.html)
2. 选择单元，点击"开始练习"
3. 答题后查看即时反馈和详细解析
4. 完成后查看得分，进度自动保存到本地

### 打印练习
1. 进入[打印页面](https://lll-96.github.io/Math-Learnning/practice/print.html)
2. 选择年级和单元
3. 点击打印按钮生成纸质练习题

---

## 🔧 开发指南

### 添加新的知识页面

1. 在对应年级目录下创建 `unitN.html`（参考现有页面模板）
2. 引入共享样式：`style.css` + `unit.css` + `navbar.css`
3. 在 `<style>` 中仅设置主题色变量
4. 添加导航栏 HTML（参考其他页面）
5. 运行 `node generate-sitemap.js` 更新站点地图

### 添加新的练习题

1. 在 `practice/data/gradeN.js` 中添加新的单元数据
2. 数据格式：

```javascript
'grade1-unit9': {
  title: '单元标题',
  questions: [
    {
      type: 'choice',           // 题型：choice / fill / order / match / drag
      question: '题目内容',
      options: ['选项A', '选项B', '选项C', '选项D'],  // choice 专用
      answer: 0,                // 正确答案索引（choice）/ 正确答案字符串（fill）
      explanation: '解析内容'
    }
  ]
}
```

3. 在 `practice/index.html` 中添加对应的练习入口卡片

### 更新 Sitemap

```bash
node generate-sitemap.js
```

---

## 📱 浏览器兼容

| 浏览器 | 支持情况 |
|--------|---------|
| Chrome 60+ | ✅ 完全支持 |
| Firefox 55+ | ✅ 完全支持 |
| Safari 12+ | ✅ 完全支持 |
| Edge 79+ | ✅ 完全支持 |
| 移动端浏览器 | ✅ 响应式适配 |

---

## 📄 许可证

MIT License

---

## 🤝 贡献

欢迎贡献内容与题目！你可以：

- 📝 补充缺失的练习题（目前部分年级下册题库待完善）
- 🎨 优化页面设计和交互体验
- 🐛 报告 Bug 或提出改进建议
- 📖 完善知识页面内容

请通过 [GitHub Issues](https://github.com/LLL-96/Math-Learnning/issues) 或 Pull Request 参与。

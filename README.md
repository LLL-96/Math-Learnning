# 🧮 L-MATH 乐学数学

> 小学数学人教版学习平台 · 纯前端静态网页

## 项目介绍

L-MATH 是一个面向小学生的数学学习平台，内容完全基于**人教版小学数学教材**编写。采用纯前端架构，无需后端服务器，可直接部署到 GitHub Pages 免费托管。

## 功能特点

- ✅ **紧扣教材** — 完全按照人教版大纲编排，每个知识点对应教材章节
- ✅ **年级导航** — 从一年级到六年级，按单元系统学习
- ✅ **互动练习** — 每课配有练习题，即时反馈
- ✅ **响应式** — 手机、平板、电脑均可使用
- ✅ **零门槛** — 纯 HTML/CSS/JS，无需安装任何软件
- ✅ **免费托管** — 一键部署到 GitHub Pages

## 目录结构

```
L-MATH-CS/
├── index.html              # 首页
├── assets/
│   ├── css/                # 全局样式
│   │   └── style.css
│   └── js/
│       └── main.js         # 交互脚本
├── components/             # 可复用组件
│   ├── navbar.css
│   ├── hero.css
│   ├── grade-cards.css
│   └── footer.css
└── grades/                  # 各年级内容
    ├── grade1/              # 一年级（上下册）
    ├── grade2/              # 二年级
    ├── grade3/              # 三年级
    ├── grade4/              # 四年级
    ├── grade5/              # 五年级
    └── grade6/              # 六年级
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，命名为 `L-MATH-CS`
2. 将本项目所有文件上传到仓库
3. 进入 **Settings → Pages**
4. Source 选择 `main` 分支和 `/(root)` 根目录
5. 点击 Save，约1分钟后即可访问

访问地址：`https://你的用户名.github.io/L-MATH-CS/`

## 开发说明

- **字体**：使用 Google Fonts 的 [ZCOOL KuaiLe](https://fonts.google.com/specimen/ZCOOL+KuaiLe)（活泼可爱，适合小学生）
- **配色**：温暖明亮的橙色系主色调，每年级有独立主题色
- **无依赖**：纯原生 HTML + CSS + JavaScript，无需构建工具

## 内容贡献

欢迎提交 Issue 或 Pull Request 补充：
- 各单元知识讲解内容
- 练习题和答案
- 知识点配图

---

**开源协议**：MIT · 欢迎学习与传播

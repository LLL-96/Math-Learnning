// ============================================
// L-MATH 乐学数学 - 页面模板系统
// 简化页面创建，统一页面结构
// ============================================

const PageTemplate = {
  // 页面配置
  config: {
    siteName: 'L-MATH 乐学数学',
    siteUrl: 'https://lll-96.github.io/Math-Learnning/',
    basePath: '../',
    ogImage: 'assets/images/og-image.png'
  },

  // 渲染完整页面
  render(options = {}) {
    const {
      title = this.config.siteName,
      description = '紧扣人教版教材，按年级与单元系统学习数学。',
      keywords = '小学数学,人教版,数学学习,在线学习',
      pageType = 'website',
      bodyClass = '',
      navbar = true,
      footer = true,
      breadcrumb = null,
      content = '',
      styles = '',
      scripts = ''
    } = options;

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="author" content="L-MATH">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="${pageType}">
  <meta property="og:url" content="${this.config.siteUrl}">
  <meta property="og:image" content="${this.config.siteUrl}${this.config.ogImage}">
  <link rel="canonical" href="${this.config.siteUrl}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${this.config.basePath}assets/css/bundle.css">
  ${styles}
</head>
<body class="${bodyClass}">
  ${navbar ? this.renderNavbar(options.activeNav) : ''}
  ${breadcrumb ? this.renderBreadcrumb(breadcrumb) : ''}
  
  <main>
    ${content}
  </main>
  
  ${footer ? this.renderFooter() : ''}
  
  <script src="${this.config.basePath}components/navigation.js"></script>
  ${scripts}
</body>
</html>`;
  },

  // 渲染导航栏
  renderNavbar(activeNav = 'home') {
    const navItems = [
      { id: 'home', text: '首页', href: 'index.html' },
      { id: 'practice', text: '练习中心', href: 'practice/index.html' },
      { id: 'about', text: '关于', href: '#about' }
    ];

    const linksHtml = navItems.map(item => {
      const isActive = item.id === activeNav;
      const activeStyle = isActive ? 'style="color: #FF6B35; border-bottom-color: #FF6B35;"' : '';
      return `<a href="${this.config.basePath}${item.href}" ${activeStyle}>${item.text}</a>`;
    }).join('');

    return `
  <nav class="navbar">
    <div class="nav-brand">
      <span class="nav-logo">🧮</span>
      <span class="nav-title">L-MATH 乐学数学</span>
    </div>
    <div class="nav-links">
      ${linksHtml}
    </div>
  </nav>`;
  },

  // 渲染面包屑
  renderBreadcrumb(items) {
    const itemsHtml = items.map((item, index) => {
      const isLast = index === items.length - 1;
      if (isLast) {
        return `<li class="breadcrumb-item"><span>${item.text}</span></li>`;
      }
      return `<li class="breadcrumb-item"><a href="${item.href}">${item.text}</a></li>`;
    }).join('<li class="breadcrumb-separator">›</li>');

    return `
  <nav class="breadcrumb" aria-label="面包屑导航">
    <div class="container">
      <ol class="breadcrumb-list">
        ${itemsHtml}
      </ol>
    </div>
  </nav>`;
  },

  // 渲染页脚
  renderFooter() {
    return `
  <footer class="footer">
    <div class="container">
      <p class="footer-text">🧮 让数学学习变得简单有趣</p>
      <p class="footer-sub">© 2026 L-MATH 乐学数学 | 人教版小学数学学习平台</p>
    </div>
  </footer>`;
  },

  // 渲染卡片组件
  renderCard(options = {}) {
    const {
      title,
      description,
      icon = '📚',
      href = '#',
      tag = null,
      tagClass = '',
      extraClass = ''
    } = options;

    const tagHtml = tag ? `<span class="card-tag ${tagClass}">${tag}</span>` : '';

    return `
    <a href="${href}" class="card ${extraClass}">
      <div class="card-icon">${icon}</div>
      <div class="card-content">
        <h3>${title}</h3>
        <p>${description}</p>
        ${tagHtml}
      </div>
      <span class="card-arrow">→</span>
    </a>`;
  },

  // 渲染章节标题
  renderSectionTitle(options = {}) {
    const { icon = '', title, subtitle = '' } = options;
    const iconHtml = icon ? `<span class="title-icon">${icon}</span>` : '';
    const subtitleHtml = subtitle ? `<p class="section-subtitle">${subtitle}</p>` : '';

    return `
    <div class="section-header">
      <h2 class="section-title">${iconHtml}${title}</h2>
      ${subtitleHtml}
    </div>`;
  },

  // 渲染统计卡片
  renderStatCard(options = {}) {
    const { number, label, icon = '' } = options;
    const iconHtml = icon ? `<span class="stat-icon">${icon}</span>` : '';

    return `
    <div class="stat-card">
      ${iconHtml}
      <span class="stat-number">${number}</span>
      <span class="stat-label">${label}</span>
    </div>`;
  },

  // 渲染提示框
  renderNotice(options = {}) {
    const { type = 'info', title, content } = options;
    const icons = {
      info: '💡',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    };

    return `
    <div class="notice-box notice-${type}">
      <h4>${icons[type]} ${title}</h4>
      <p>${content}</p>
    </div>`;
  }
};

// 导出模板系统
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PageTemplate;
}

// ============================================
// L-MATH 乐学数学 - 统一导航组件
// ============================================

// 导航栏 HTML 模板
const navbarTemplate = `
  <nav class="navbar">
    <div class="nav-brand">
      <a href="{{homeLink}}" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
        <span class="nav-logo">🧮</span>
        <span class="nav-title">L-MATH 乐学数学</span>
      </a>
    </div>
    <div class="nav-links">
      <a href="{{homeLink}}" class="{{homeActive}}">首页</a>
      <a href="{{practiceLink}}" class="{{practiceActive}}">练习中心</a>
      <a href="{{homeLink}}#grades" class="{{gradesActive}}">年级课程</a>
    </div>
    <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <a href="{{homeLink}}">首页</a>
    <a href="{{practiceLink}}">练习中心</a>
    <a href="{{homeLink}}#grades">年级课程</a>
  </div>
`;

// 面包屑导航模板
const breadcrumbTemplate = `
  <nav class="breadcrumb" aria-label="面包屑导航">
    <ol class="breadcrumb-list">
      {{items}}
    </ol>
  </nav>
`;

// 面包屑项模板
const breadcrumbItemTemplate = `
  <li class="breadcrumb-item">
    {{#if link}}
      <a href="{{link}}">{{text}}</a>
    {{else}}
      <span>{{text}}</span>
    {{/if}}
  </li>
`;

// 渲染导航栏
function renderNavbar(options = {}) {
  const defaults = {
    currentPage: 'home', // home, practice, grades
    basePath: ''
  };
  const config = { ...defaults, ...options };
  
  // 计算路径
  const isSubPage = config.basePath.includes('/grades/') || config.basePath.includes('/practice/');
  const homeLink = isSubPage ? '../../index.html' : 'index.html';
  const practiceLink = isSubPage ? '../../practice/index.html' : 'practice/index.html';
  
  // 确定激活状态
  const homeActive = config.currentPage === 'home' ? 'active' : '';
  const practiceActive = config.currentPage === 'practice' ? 'active' : '';
  const gradesActive = config.currentPage === 'grades' ? 'active' : '';
  
  // 替换模板变量
  let html = navbarTemplate
    .replace(/{{homeLink}}/g, homeLink)
    .replace(/{{practiceLink}}/g, practiceLink)
    .replace('{{homeActive}}', homeActive)
    .replace('{{practiceActive}}', practiceActive)
    .replace('{{gradesActive}}', gradesActive);
  
  return html;
}

// 渲染面包屑导航
function renderBreadcrumb(items) {
  const itemsHtml = items.map((item, index) => {
    const isLast = index === items.length - 1;
    return breadcrumbItemTemplate
      .replace('{{#if link}}', item.link && !isLast ? '' : '<!--')
      .replace('{{/if}}', item.link && !isLast ? '' : '-->')
      .replace('{{link}}', item.link || '')
      .replace('{{text}}', item.text);
  }).join('<li class="breadcrumb-separator">›</li>');
  
  return breadcrumbTemplate.replace('{{items}}', itemsHtml);
}

// 移动端菜单切换
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

// 自动初始化导航
function initNavigation() {
  // 查找导航栏容器
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    // 从 data 属性获取配置
    const currentPage = navbarContainer.dataset.currentPage || 'home';
    const basePath = navbarContainer.dataset.basePath || '';
    
    navbarContainer.innerHTML = renderNavbar({ currentPage, basePath });
  }
  
  // 查找面包屑容器
  const breadcrumbContainer = document.getElementById('breadcrumb-container');
  if (breadcrumbContainer) {
    const breadcrumbData = JSON.parse(breadcrumbContainer.dataset.items || '[]');
    breadcrumbContainer.innerHTML = renderBreadcrumb(breadcrumbData);
  }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initNavigation);

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderNavbar, renderBreadcrumb, initNavigation };
}

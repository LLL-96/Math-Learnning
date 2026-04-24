const fs = require('fs');
const path = require('path');

const baseUrl = 'https://lll-96.github.io/Math-Learnning';
const today = new Date().toISOString().split('T')[0];
const gradesDir = path.join(__dirname, 'grades');

const urls = [];

// 根页面
const rootPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/practice/index.html', priority: '0.9', changefreq: 'weekly' },
  { loc: '/practice/quiz.html', priority: '0.8', changefreq: 'weekly' },
  { loc: '/practice/print.html', priority: '0.7', changefreq: 'monthly' },
];

for (const page of rootPages) {
  urls.push(page);
}

// 扫描 grades 目录
const gradeDirs = fs.readdirSync(gradesDir).filter(f => {
  return fs.statSync(path.join(gradesDir, f)).isDirectory();
});

for (const gradeDir of gradeDirs) {
  const gradePath = path.join(gradesDir, gradeDir);
  const files = fs.readdirSync(gradePath).filter(f => f.endsWith('.html'));
  
  for (const file of files) {
    const loc = `/grades/${gradeDir}/${file}`;
    const isIndex = file.startsWith('index');
    urls.push({
      loc,
      priority: isIndex ? '0.8' : '0.7',
      changefreq: 'monthly'
    });
  }
}

// 生成 sitemap
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const url of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${url.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
  xml += `    <priority>${url.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>';

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf-8');
console.log(`Generated sitemap.xml with ${urls.length} URLs`);

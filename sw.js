/* ============================================
   L-MATH 乐学数学 - Service Worker
   离线缓存策略：缓存优先，网络回退
   ============================================ */

const CACHE_NAME = 'lmath-v1';
const OFFLINE_URL = '/Math-Learnning/404.html';

const PRECACHE_URLS = [
  '/Math-Learnning/',
  '/Math-Learnning/index.html',
  '/Math-Learnning/about.html',
  '/Math-Learnning/assets/css/style.css',
  '/Math-Learnning/assets/css/unit.css',
  '/Math-Learnning/assets/css/grade.css',
  '/Math-Learnning/components/navbar.css',
  '/Math-Learnning/components/hero.css',
  '/Math-Learnning/components/grade-cards.css',
  '/Math-Learnning/components/footer.css',
  '/Math-Learnning/assets/js/main.js',
  '/Math-Learnning/assets/images/logo.svg'
];

// 安装：预缓存核心资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// 激活：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 请求策略：缓存优先，网络回退
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // 只缓存同源成功响应
        if (response.ok && response.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(() => {
        // 离线时返回 404 页面（仅导航请求）
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});

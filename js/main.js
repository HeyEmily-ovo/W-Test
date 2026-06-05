/**
 * W-Test 测试集合网站 - 主交互脚本
 */

(function () {
  'use strict';

  // ==================== 星空背景生成 ====================
  function createStars() {
    const container = document.getElementById('starsContainer');
    if (!container) return;
    const count = 80;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 2.5 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
      star.style.setProperty('--delay', (Math.random() * 5) + 's');
      frag.appendChild(star);
    }
    container.appendChild(frag);
  }

  // ==================== 渲染测试卡片 ====================
  function renderCards(tests) {
    const grid = document.getElementById('testGrid');
    if (!grid) return;

    if (tests.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p class="empty-state-text">暂时没有匹配的测试，试试其他筛选条件吧</p>
        </div>`;
      return;
    }

    grid.innerHTML = tests
      .map(
        (test) => `
      <div class="test-card"
           style="--hover-gradient: ${test.gradient}; --hover-color: ${test.color}"
           onclick="window.location.href='${test.path}'"
           role="link"
           tabindex="0"
           aria-label="打开 ${test.name}">
        <div class="card-header">
          <div class="card-icon">${test.icon}</div>
          ${test.featured ? '<span class="card-featured-badge">🔥 精选</span>' : ''}
        </div>
        <h3 class="card-title">${escapeHtml(test.name)}</h3>
        <p class="card-desc">${escapeHtml(test.description)}</p>
        <div class="card-meta">
          <span class="card-meta-item">
            <span class="meta-icon">📝</span> ${test.questions} 题
          </span>
          <span class="card-meta-item">
            <span class="meta-icon">⏱️</span> 约 ${test.duration} 分钟
          </span>
        </div>
        <div class="card-tags">
          ${test.tags.map((t) => `<span class="card-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card-action">
          <span></span>
          <span class="card-btn" role="button">
            开始测试
            <svg class="card-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>`
      )
      .join('');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ==================== 标签筛选 ====================
  function setupFilters() {
    const filterBar = document.getElementById('filterBar');
    if (!filterBar) return;

    // 收集所有标签
    const allTags = new Set();
    window.TESTS.forEach((t) => t.tags.forEach((tag) => allTags.add(tag)));

    // 渲染筛选按钮
    const buttons = [{ label: '全部', tag: 'all' }];
    allTags.forEach((tag) => buttons.push({ label: tag, tag: tag }));

    filterBar.innerHTML = buttons
      .map(
        (b, i) =>
          `<button class="filter-btn${i === 0 ? ' active' : ''}" data-tag="${escapeHtml(b.tag)}">${escapeHtml(b.label)}</button>`
      )
      .join('');

    // 筛选事件
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      // 更新激活状态
      filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const tag = btn.dataset.tag;
      const filtered = tag === 'all' ? window.TESTS : window.TESTS.filter((t) => t.tags.includes(tag));
      renderCards(filtered);
    });
  }

  // ==================== 键盘导航支持 ====================
  function setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.test-card');
        if (card) {
          e.preventDefault();
          const link = card.getAttribute('onclick');
          if (link) {
            const path = link.match(/'([^']+)'/);
            if (path) window.location.href = path[1];
          }
        }
      }
    });
  }

  // ==================== 滚动视差 ====================
  function setupParallax() {
    const aurora = document.querySelector('.bg-aurora');
    if (!aurora) return;

    window.addEventListener(
      'scroll',
      () => {
        const scrollY = window.scrollY;
        aurora.style.transform = `translateY(${scrollY * 0.02}px)`;
        const before = aurora.querySelector('::before');
        if (before) {
          before.style.transform = `translateY(${scrollY * 0.03}px)`;
        }
      },
      { passive: true }
    );
  }

  // ==================== 初始化 ====================
  function init() {
    createStars();
    if (window.TESTS) {
      renderCards(window.TESTS);
      setupFilters();
    }
    setupKeyboardNav();
    setupParallax();
  }

  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

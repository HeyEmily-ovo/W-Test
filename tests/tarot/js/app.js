/**
 * 塔罗占卜 — 主应用控制器
 * 管理 UI 状态、屏幕切换、交互动画和历史记录
 */

const App = {

  // —— 应用状态 ——
  state: {
    screen: 'domain',       // domain | question | spread | shuffle | draw | result | history
    domain: 'general',
    question: '',
    spreadId: 'past_present_future',
    reading: null,          // { spread, cards } 来自引擎
    interpretation: null,   // 解读结果
    drawnCount: 0,
    history: [],
    manageMode: false,      // 是否处于管理模式
    selectedIndices: new Set()  // 管理模式中已选中的记录索引
  },

  // —— 初始化 ——
  init() {
    this._loadHistory();
    this._bindEvents();
    this.showScreen('domain');
  },

  // —— 屏幕切换 ——
  showScreen(id) {
    this.state.screen = id;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`screen-${id}`);
    if (target) {
      target.classList.add('active');
    }

    // 进入特定屏幕时的初始化逻辑（渲染后再滚动）
    if (id === 'draw') {
      this._initDrawScreen();
      this._scrollToTop();
    } else if (id === 'result') {
      this._renderResult();
      this._scrollToTop();
    } else if (id === 'history') {
      this._renderHistory();
      this._scrollToTop();
    } else {
      // 其他屏幕：内容已在 HTML 中，直接滚动
      this._scrollToTop();
    }

    // 离开历史页时重置管理模式
    if (id !== 'history') {
      this.state.manageMode = false;
      this.state.selectedIndices.clear();
      // 恢复按钮显示状态
      const manageBtn = document.getElementById('btn-manage-mode');
      const clearBtn = document.getElementById('btn-clear-all');
      const toolbar = document.getElementById('manage-toolbar');
      if (manageBtn) manageBtn.style.display = '';
      if (clearBtn) clearBtn.style.display = '';
      if (toolbar) toolbar.style.display = 'none';
    }
  },

  /** 滚动到页面顶部 */
  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  // —— 事件绑定 ——
  _bindEvents() {
    // 领域选择
    document.querySelectorAll('.domain-item').forEach(el => {
      el.addEventListener('click', () => this._selectDomain(el));
    });

    // "下一步"按钮 (domain → question)
    document.getElementById('btn-domain-next').addEventListener('click', () => {
      this.showScreen('question');
    });

    // "查看历史记录"按钮 (首页)
    document.getElementById('btn-domain-history').addEventListener('click', () => {
      this.showScreen('history');
    });

    // "跳过问题" & "下一步" (question → spread)
    document.getElementById('btn-question-skip').addEventListener('click', () => {
      this.state.question = '';
      this.showScreen('spread');
    });
    document.getElementById('btn-question-next').addEventListener('click', () => {
      this.state.question = document.getElementById('input-question').value.trim();
      this.showScreen('spread');
    });

    // 牌阵选择（事件委托 — 元素由内联脚本动态填充）
    document.getElementById('spread-grid').addEventListener('click', (e) => {
      const item = e.target.closest('.spread-item');
      if (item) this._selectSpread(item);
    });

    // 开始抽牌 (spread → shuffle)
    document.getElementById('btn-spread-go').addEventListener('click', () => {
      this.showScreen('shuffle');
    });

    // 洗牌 → 选牌
    document.getElementById('shuffle-deck').addEventListener('click', () => {
      this._startDraw();
    });

    // 揭晓按钮
    document.getElementById('btn-reveal').addEventListener('click', () => {
      this._revealAll();
    });

    // 结果页面按钮
    document.getElementById('btn-new-reading').addEventListener('click', () => {
      this._reset();
    });
    document.getElementById('btn-view-history').addEventListener('click', () => {
      this.showScreen('history');
    });
    document.getElementById('btn-back-home').addEventListener('click', () => {
      this._reset();
    });

    // 历史记录 — 管理模式
    document.getElementById('btn-manage-mode').addEventListener('click', () => {
      this._enterManageMode();
    });
    document.getElementById('btn-cancel-manage').addEventListener('click', () => {
      this._exitManageMode();
    });
    document.getElementById('btn-select-all').addEventListener('click', () => {
      this._toggleSelectAll();
    });
    document.getElementById('btn-delete-selected').addEventListener('click', () => {
      this._deleteSelectedItems();
    });
    document.getElementById('btn-clear-all').addEventListener('click', () => {
      this._clearAllHistory();
    });
  },

  // —— 领域选择 ——
  _selectDomain(el) {
    document.querySelectorAll('.domain-item').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    this.state.domain = el.dataset.domain;
  },

  // —— 牌阵选择 ——
  _selectSpread(el) {
    document.querySelectorAll('.spread-item').forEach(s => s.classList.remove('selected'));
    el.classList.add('selected');
    this.state.spreadId = el.dataset.spread;
  },

  // —— 洗牌 → 选牌 ——
  _startDraw() {
    const deckEl = document.getElementById('shuffle-deck');
    const hintEl = document.getElementById('shuffle-hint');
    const particlesEl = document.getElementById('shuffle-particles');
    deckEl.classList.add('shuffling');

    // 生成魔法粒子
    this._spawnShuffleParticles(particlesEl);

    // 轮换洗牌密语 — 更丰富的仪式感
    const whispers = [
      '✨ 正在与宇宙能量共振…',
      '🌙 星辰之力正在汇聚…',
      '🔮 潜意识的涟漪已然荡开…',
      '💫 命运之线正在编织…',
      '🌟 古老的智慧正在苏醒…',
      '🃏 牌灵在指尖流转…',
      '🌀 时空的帷幕正在掀开…',
      '⚡ 能量已灌注每一张牌…'
    ];
    let idx = 0;
    hintEl.textContent = whispers[0];
    const whisperTimer = setInterval(() => {
      idx = (idx + 1) % whispers.length;
      hintEl.style.opacity = '0';
      hintEl.style.transform = 'translateY(8px)';
      setTimeout(() => {
        hintEl.textContent = whispers[idx];
        hintEl.style.opacity = '';
        hintEl.style.transform = '';
      }, 250);
    }, 400);

    setTimeout(() => {
      clearInterval(whisperTimer);
      deckEl.classList.remove('shuffling');
      // 清理粒子
      particlesEl.innerHTML = '';
      // 执行抽牌
      this.state.reading = TarotEngine.drawForSpread(this.state.spreadId);
      this.state.drawnCount = 0;
      this.showScreen('draw');
    }, 3000);
  },

  /** 生成洗牌魔法粒子 — 飘浮的星光 */
  _spawnShuffleParticles(container) {
    container.innerHTML = '';
    const colors = [
      'rgba(200,225,250,0.9)',
      'rgba(180,210,240,0.7)',
      'rgba(220,210,180,0.8)',
      'rgba(200,220,245,0.65)',
      'rgba(180,195,230,0.7)',
      'rgba(210,225,245,0.75)'
    ];
    const count = 35;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.className = 'magic-particle';
      const size = 1.5 + Math.random() * 4;
      const x = 15 + Math.random() * 70;
      const delay = Math.random() * 2.5;
      const duration = 1.8 + Math.random() * 2.2;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        left: ${x}%;
        bottom: ${5 + Math.random() * 40}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2.5}px ${color};
        animation: particleFloat ${duration}s ${delay}s ease-out infinite;
      `;
      container.appendChild(particle);
    }
  },

  // —— 选牌界面初始化 ——
  _initDrawScreen() {
    const spread = this.state.reading.spread;
    document.getElementById('hint-count').textContent = spread.cardCount;
    this._updateDrawProgress();

    // 清空已选牌行
    const selectedRow = document.getElementById('selected-cards-row');
    selectedRow.innerHTML = '';
    for (let i = 0; i < spread.cardCount; i++) {
      const slot = document.createElement('div');
      slot.className = 'selected-card-slot';
      slot.id = 'selected-slot-' + i;
      slot.innerHTML = '<span class="slot-placeholder">?</span>';
      selectedRow.appendChild(slot);
    }

    // 隐藏揭晓按钮
    const revealWrapper = document.getElementById('reveal-btn-wrapper');
    revealWrapper.style.display = 'none';

    // 构建牌堆
    const stack = document.getElementById('card-stack');
    stack.innerHTML = '';
    const displayCount = Math.max(spread.cardCount * 2, 12);
    const cardBack = getCardBackUrl();

    for (let i = 0; i < displayCount; i++) {
      const cardEl = document.createElement('div');
      cardEl.className = 'stack-card';
      cardEl.dataset.index = i;

      // 扇形排列：百分比定位，自适应任意容器尺寸
      const total = displayCount;
      const mid = (total - 1) / 2;
      const offsetXPct = (i - mid) * 7;        // 水平偏移百分比
      const offsetYPct = Math.abs(i - mid) * 1.5; // 垂直微弧
      const rotation = (i - mid) * 2.5;
      const zIndex = 10 + (i < mid ? i : total - i);

      cardEl.style.left = (50 + offsetXPct) + '%';
      cardEl.style.top = (12 + offsetYPct) + '%';
      cardEl.style.transform = 'translateX(-50%) rotate(' + rotation + 'deg)';
      cardEl.style.transform = 'rotate(' + rotation + 'deg)';
      cardEl.style.zIndex = zIndex;

      cardEl.innerHTML = `
        <div class="stack-card-inner">
          <img class="stack-card-img" src="${cardBack}" alt=""
               onerror="this.classList.add('hidden')" loading="lazy">
          <span class="stack-card-star">✦</span>
        </div>
      `;

      cardEl.addEventListener('click', () => this._pickCard(cardEl));
      stack.appendChild(cardEl);
    }
  },

  _updateDrawProgress() {
    const spread = this.state.reading.spread;
    document.getElementById('draw-progress').textContent =
      `已选 ${this.state.drawnCount} / ${spread.cardCount}`;
  },

  /** 从牌堆中选牌 — 移动到上方已选区 */
  _pickCard(stackCard) {
    if (stackCard.classList.contains('picked')) return;
    if (this.state.drawnCount >= this.state.reading.spread.cardCount) return;

    const cardData = this.state.reading.cards[this.state.drawnCount];
    const slotIndex = this.state.drawnCount;

    // 标记牌堆中的牌为已选（飞走动画）
    stackCard.classList.add('picked');

    // 预加载牌面图片
    const preload = new Image();
    preload.src = getCardImageUrl(cardData.id);

    // 填充对应槽位
    const slot = document.getElementById('selected-slot-' + slotIndex);
    preload.onload = () => {
      slot.innerHTML = `
        <div class="slot-front">
          <img src="${getCardImageUrl(cardData.id)}" alt="${cardData.name}"
               style="transform:${cardData.reversed ? 'rotate(180deg)' : ''}">
        </div>
        <div class="slot-back">
          <img src="${getCardBackUrl()}" alt="" onerror="this.classList.add('hidden')">
        </div>
      `;
      slot.classList.add('filled');
    };
    preload.onerror = () => {
      slot.innerHTML = `
        <div class="slot-front">
          <img src="${getCardImageUrl(cardData.id)}" alt="${cardData.name}"
               class="hidden"
               style="transform:${cardData.reversed ? 'rotate(180deg)' : ''}">
        </div>
        <div class="slot-back">
          <img src="${getCardBackUrl()}" alt="" onerror="this.classList.add('hidden')">
        </div>
      `;
      slot.classList.add('filled');
    };

    this.state.drawnCount++;
    this._updateDrawProgress();

    // 选满后显示揭晓按钮
    if (this.state.drawnCount >= this.state.reading.spread.cardCount) {
      // 剩余牌堆淡出
      setTimeout(() => {
        document.querySelectorAll('.stack-card:not(.picked)').forEach(c => {
          c.style.opacity = '0';
          c.style.pointerEvents = 'none';
          c.style.transform = c.style.transform.replace(/rotate\([^)]+\)/, 'rotate(0deg)') + ' scale(0.8)';
        });
        // 显示揭晓按钮
        const revealWrapper = document.getElementById('reveal-btn-wrapper');
        revealWrapper.style.display = 'flex';
        document.getElementById('selection-hint').textContent = '命运之牌已在手中…';
      }, 400);
    }
  },

  /** 揭晓按钮 — 集体翻牌 → 结果页 */
  _revealAll() {
    const spread = this.state.reading.spread;
    const slots = document.querySelectorAll('.selected-card-slot.filled');

    // 依次翻牌动画
    slots.forEach((slot, i) => {
      setTimeout(() => {
        slot.classList.add('flipping');
      }, i * 200);
    });

    // 翻牌完成后跳转结果
    const totalDuration = slots.length * 200 + 800;
    setTimeout(() => {
      this.state.interpretation = TarotEngine.interpret(
        this.state.reading,
        this.state.domain,
        this.state.question
      );
      this._saveToHistory();
      this.showScreen('result');
    }, totalDuration + 600);
  },

  // —— 结果渲染 ——
  _renderResult() {
    const interp = this.state.interpretation;
    if (!interp) return;

    document.getElementById('result-spread-name').textContent = interp.meta.spread;
    document.getElementById('result-domain').textContent = interp.meta.domain;
    document.getElementById('result-time').textContent =
      new Date(interp.meta.timestamp).toLocaleString('zh-CN');

    // 大幅卡片展示
    this._renderCardsShowcase();

    // 逐牌解读
    const interpretationsEl = document.getElementById('interpretations');
    interpretationsEl.innerHTML = interp.cards.map((c, i) => `
      <div class="interpretation-card fade-in" style="animation-delay:${i * 0.15}s">
        <div class="card-row">
          <img class="card-thumb" src="${getCardImageUrl(c.cardId)}"
               alt="${c.cardName}" loading="lazy"
               onerror="this.classList.add('hidden')">
          <div style="flex:1">
            <div class="card-header">
              <span class="card-position-badge">第${i + 1}张 · ${c.position}</span>
              <span class="card-name-title">${c.cardName}</span>
              <span class="card-orientation-badge ${c.reversed ? 'reversed' : 'upright'}">
                ${c.orientation}
              </span>
            </div>
            <div class="keywords">
              ${c.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
            </div>
            <div class="interpretation-text">${c.fullText}</div>
          </div>
        </div>
      </div>
    `).join('');

    // 综合总结
    document.getElementById('summary-text').textContent = interp.summary;
  },

  /**
   * 绘制大幅卡片展示区
   */
  _renderCardsShowcase() {
    const showcase = document.getElementById('result-cards-showcase');
    const cards = this.state.reading.cards;
    const spread = this.state.reading.spread;

    showcase.innerHTML = cards.map((card, i) => {
      const pos = spread.positions[i];
      return `
        <div class="showcase-card fade-in" style="animation-delay:${i * 0.2}s">
          <img class="showcase-card-image"
               src="${getCardImageUrl(card.id)}"
               alt="${card.name}"
               loading="lazy"
               onerror="this.classList.add('hidden')"
               style="transform: ${card.reversed ? 'rotate(180deg)' : ''}">
          <div class="showcase-card-position">${pos.label}</div>
          <div class="showcase-card-name">${card.name}</div>
          <div class="showcase-card-orientation ${card.reversed ? 'reversed' : 'upright'}">
            ${card.reversed ? '▼ 逆位' : '▲ 正位'}
          </div>
        </div>
      `;
    }).join('');
  },

  /**
   * 绘制牌阵位置可视化图
   */
  _renderSpreadViz() {
    const viz = document.getElementById('result-spread-viz');
    const spread = this.state.reading.spread;

    viz.innerHTML = spread.positions.map((pos, i) => {
      const card = this.state.reading.cards[i];
      return `
        <div style="
          position: absolute;
          left: ${pos.x}%;
          top: ${pos.y}%;
          transform: translate(-50%, -50%);
          text-align: center;
          animation: fadeIn 0.5s ${i * 0.2}s both;
        ">
          <img class="viz-card-image" src="${getCardImageUrl(card.id)}"
               alt="${card.name}" loading="lazy"
               onerror="this.classList.add('hidden')">
          <div style="
            background: var(--bg-glass);
            backdrop-filter: blur(8px);
            border: 1px solid ${card.reversed ? 'var(--red-mystic)' : 'var(--gold-dim)'};
            border-radius: 8px;
            padding: 8px 10px;
            min-width: 70px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.4);
          ">
            <div style="font-size:0.65rem;color:var(--gold-dim);margin-bottom:2px">${pos.label}</div>
            <div style="font-family:var(--font-display);font-size:0.85rem;color:var(--gold)">${card.name}</div>
            <div style="font-size:0.65rem;color:${card.reversed ? 'var(--red-mystic)' : 'var(--purple-light)'}">
              ${card.reversed ? '逆位 ▼' : '正位 ▲'}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // 如果布局类型是 celtic，添加连接线标注
    if (spread.layout === 'celtic') {
      viz.insertAdjacentHTML('beforeend', `
        <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);
          font-size:0.7rem;color:var(--text-muted);">
          第1、2张为十字核心 · 第3-6张为纵向时间轴 · 第7-10张为底部辅助线
        </div>
      `);
    }
  },

  // —— 历史记录 ——

  /** 统一持久化历史记录到 localStorage */
  _persistHistory() {
    try {
      localStorage.setItem('tarot-history', JSON.stringify(this.state.history));
    } catch (e) {
      // localStorage 满，移除旧记录
      this.state.history = this.state.history.slice(0, 20);
      localStorage.setItem('tarot-history', JSON.stringify(this.state.history));
    }
  },

  _saveToHistory() {
    const record = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: this.state.interpretation.meta.timestamp,
      spreadId: this.state.spreadId,
      spreadName: this.state.interpretation.meta.spread,
      domain: this.state.domain,
      domainName: this.state.interpretation.meta.domain,
      question: this.state.question,
      interpretation: this.state.interpretation
    };

    this.state.history.unshift(record);
    // 最多保留 50 条
    if (this.state.history.length > 50) {
      this.state.history = this.state.history.slice(0, 50);
    }

    this._persistHistory();
  },

  _loadHistory() {
    try {
      const raw = localStorage.getItem('tarot-history');
      if (raw) {
        this.state.history = JSON.parse(raw);
      }
    } catch (e) {
      this.state.history = [];
    }
  },

  _renderHistory() {
    const container = document.getElementById('history-list');
    if (this.state.history.length === 0) {
      container.innerHTML = '<div class="history-empty">📜 还没有占卜记录<br>开启你的第一次塔罗之旅吧</div>';
      // 隐藏管理模式工具栏
      document.getElementById('manage-toolbar').style.display = 'none';
      document.getElementById('btn-manage-mode').style.display = 'none';
      document.getElementById('btn-clear-all').style.display = 'none';
      return;
    }

    // 显示操作按钮
    document.getElementById('btn-manage-mode').style.display = '';
    document.getElementById('btn-clear-all').style.display = '';

    const isManageMode = this.state.manageMode;
    document.getElementById('manage-toolbar').style.display = isManageMode ? 'flex' : 'none';

    container.innerHTML = this.state.history.map((h, i) => {
      const isSelected = this.state.selectedIndices.has(i);
      return `
        <div class="history-item fade-in ${isSelected ? 'selected' : ''} ${isManageMode ? 'manage-mode' : ''}"
             style="animation-delay:${i * 0.05}s"
             data-index="${i}">
          ${isManageMode ? `
          <div class="history-checkbox" data-action="toggle" data-index="${i}">
            <span class="checkmark">${isSelected ? '☑' : '☐'}</span>
          </div>` : ''}
          <div class="history-content" data-action="${isManageMode ? 'toggle' : 'view'}" data-index="${i}">
            <div class="history-meta">
              <span class="history-spread">${h.spreadName} · ${h.domainName}</span>
              <span class="history-date">${new Date(h.timestamp).toLocaleString('zh-CN')}</span>
            </div>
            <div class="history-question">${h.question || '（未填写问题）'}</div>
          </div>
          ${!isManageMode ? `
          <button class="history-delete-btn" data-action="delete" data-index="${i}" title="删除此记录">✕</button>` : ''}
        </div>
      `;
    }).join('');

    // 事件委托：统一处理历史列表的所有点击
    container.onclick = (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      const action = target.dataset.action;
      const idx = parseInt(target.dataset.index);

      if (action === 'view') {
        // 查看历史记录详情
        const record = this.state.history[idx];
        this.state.spreadId = record.spreadId;
        this.state.domain = record.domain;
        this.state.question = record.question;
        this.state.interpretation = record.interpretation;
        // 重建 reading 以便 spread-viz 渲染
        this.state.reading = {
          spread: SPREADS[record.spreadId],
          cards: record.interpretation.cards.map((c, i) => ({
            ...CARD_MAP[c.cardId],
            reversed: c.reversed,
            position: SPREADS[record.spreadId].positions[i]
          }))
        };
        this.showScreen('result');
      } else if (action === 'toggle') {
        // 管理模式中：切换勾选
        this._toggleItem(idx);
      } else if (action === 'delete') {
        // 普通模式中：单条删除
        e.stopPropagation();
        this._deleteSingleItem(idx);
      }
    };

    this._updateManageUI();
  },

  // ========== 管理/删除功能 ==========

  /** 进入管理模式 */
  _enterManageMode() {
    this.state.manageMode = true;
    this.state.selectedIndices.clear();
    document.getElementById('btn-manage-mode').style.display = 'none';
    this._renderHistory();
  },

  /** 退出管理模式 */
  _exitManageMode() {
    this.state.manageMode = false;
    this.state.selectedIndices.clear();
    document.getElementById('btn-manage-mode').style.display = '';
    this._renderHistory();
  },

  /** 切换单条记录的选中状态 */
  _toggleItem(index) {
    if (this.state.selectedIndices.has(index)) {
      this.state.selectedIndices.delete(index);
    } else {
      this.state.selectedIndices.add(index);
    }
    // 局部更新 DOM，避免重新渲染
    const item = document.querySelector(`.history-item[data-index="${index}"]`);
    if (item) {
      const checkmark = item.querySelector('.checkmark');
      if (this.state.selectedIndices.has(index)) {
        item.classList.add('selected');
        if (checkmark) checkmark.textContent = '☑';
      } else {
        item.classList.remove('selected');
        if (checkmark) checkmark.textContent = '☐';
      }
    }
    this._updateManageUI();
  },

  /** 全选 / 取消全选 */
  _toggleSelectAll() {
    const total = this.state.history.length;
    if (this.state.selectedIndices.size === total) {
      // 全部取消
      this.state.selectedIndices.clear();
    } else {
      // 全部选中
      for (let i = 0; i < total; i++) {
        this.state.selectedIndices.add(i);
      }
    }
    this._renderHistory();
  },

  /** 更新管理模式UI状态 */
  _updateManageUI() {
    const count = this.state.selectedIndices.size;
    document.getElementById('manage-selected-count').textContent = count;
    const deleteBtn = document.getElementById('btn-delete-selected');
    deleteBtn.disabled = count === 0;

    // 更新全选按钮文字
    const selectAllBtn = document.getElementById('btn-select-all');
    const total = this.state.history.length;
    selectAllBtn.textContent = count === total && total > 0 ? '取消全选' : '全选';
  },

  /** 删除单条记录（普通模式下，带确认） */
  _deleteSingleItem(index) {
    const record = this.state.history[index];
    const name = record.spreadName || '占卜';
    this._showConfirm(
      `确定要删除「${name} · ${record.domainName}」这条占卜记录吗？删除后不可恢复。`,
      () => {
        this.state.history.splice(index, 1);
        this._persistHistory();
        this._renderHistory();
      }
    );
  },

  /** 删除所选记录（管理模式下批量删除） */
  _deleteSelectedItems() {
    if (this.state.selectedIndices.size === 0) return;
    const count = this.state.selectedIndices.size;
    this._showConfirm(
      `确定要删除选中的 ${count} 条占卜记录吗？删除后不可恢复。`,
      () => {
        // 从大到小排序索引，从后往前删除避免索引偏移
        const sorted = [...this.state.selectedIndices].sort((a, b) => b - a);
        for (const idx of sorted) {
          this.state.history.splice(idx, 1);
        }
        this.state.selectedIndices.clear();
        this._persistHistory();

        // 若历史已清空，自动退出管理模式
        if (this.state.history.length === 0) {
          this.state.manageMode = false;
          document.getElementById('btn-manage-mode').style.display = 'none';
          document.getElementById('btn-clear-all').style.display = 'none';
        }
        this._renderHistory();
      }
    );
  },

  /** 清空全部历史记录 */
  _clearAllHistory() {
    if (this.state.history.length === 0) return;
    this._showConfirm(
      `确定要清空全部 ${this.state.history.length} 条占卜记录吗？此操作不可恢复。`,
      () => {
        this.state.history = [];
        this.state.selectedIndices.clear();
        this.state.manageMode = false;
        this._persistHistory();
        document.getElementById('btn-manage-mode').style.display = 'none';
        document.getElementById('btn-clear-all').style.display = 'none';
        this._renderHistory();
      }
    );
  },

  /** 确认弹窗辅助方法 */
  _showConfirm(message, onConfirm) {
    // 移除已有的弹窗
    const existing = document.querySelector('.confirm-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
      <div class="confirm-dialog">
        <p>${message}</p>
        <div class="confirm-actions">
          <button class="btn btn-danger" id="confirm-yes">确认</button>
          <button class="btn btn-ghost" id="confirm-no">取消</button>
        </div>
      </div>
    `;

    const close = () => {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
    };

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.id === 'confirm-no') {
        close();
      }
      if (e.target.id === 'confirm-yes') {
        close();
        onConfirm();
      }
    });

    // ESC 键关闭
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);

    document.body.appendChild(overlay);
    // 自动聚焦确认按钮
    setTimeout(() => {
      const yesBtn = document.getElementById('confirm-yes');
      if (yesBtn) yesBtn.focus();
    }, 100);
  },

  // —— 重置 ——
  _reset() {
    this.state.reading = null;
    this.state.interpretation = null;
    this.state.drawnCount = 0;
    this.state.question = '';
    this.state.spreadId = 'past_present_future';
    this.state.domain = 'general';
    this.state.manageMode = false;
    this.state.selectedIndices.clear();

    // 重置 UI 选择状态
    document.querySelectorAll('.domain-item.selected').forEach(d => d.classList.remove('selected'));
    document.querySelectorAll('.spread-item.selected').forEach(s => s.classList.remove('selected'));
    const defaultDomain = document.querySelector('[data-domain="general"]');
    const defaultSpread = document.querySelector('[data-spread="past_present_future"]');
    if (defaultDomain) defaultDomain.classList.add('selected');
    if (defaultSpread) defaultSpread.classList.add('selected');

    document.getElementById('input-question').value = '';
    this.showScreen('domain');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// —— 启动应用 ——
document.addEventListener('DOMContentLoaded', () => App.init());

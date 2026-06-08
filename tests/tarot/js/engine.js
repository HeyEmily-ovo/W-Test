/**
 * 塔罗核心引擎 — 洗牌、抽牌、解读生成
 * 使用 Web Crypto API 确保真正的随机性
 */

const TarotEngine = {

  /**
   * 密码学安全洗牌 — Fisher-Yates + crypto.getRandomValues()
   * 与 Node.js crypto.randomInt 同等级别的安全性
   */
  shuffle(deck) {
    const arr = [...deck];
    const buffer = new Uint32Array(arr.length);
    crypto.getRandomValues(buffer);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = buffer[i] % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  /**
   * 抽牌：洗牌 → 截取前 N 张 → 随机正逆位
   */
  draw(count) {
    const shuffled = this.shuffle(TAROT_DECK);
    // 再取一组随机数决定正逆位
    const orientationBuffer = new Uint32Array(count);
    crypto.getRandomValues(orientationBuffer);

    return shuffled.slice(0, count).map((card, i) => ({
      ...card,
      reversed: orientationBuffer[i] % 2 === 1,
      positionIndex: i
    }));
  },

  /**
   * 为指定牌阵抽牌并映射到位置
   */
  drawForSpread(spreadId) {
    const spread = SPREADS[spreadId];
    if (!spread) throw new Error(`未知牌阵: ${spreadId}`);
    const drawn = this.draw(spread.cardCount);
    return {
      spread,
      cards: drawn.map((card, i) => ({
        ...card,
        position: spread.positions[i]
      }))
    };
  },

  /**
   * 核心解读引擎 — 模板拼装式生成个性化解读
   */
  interpret(reading, domainId, question) {
    const domain = DOMAINS[domainId] || DOMAINS.general;
    const { spread, cards } = reading;
    const results = [];

    // 逐张牌解读
    for (const card of cards) {
      const pos = card.position;
      const orientation = card.reversed ? '逆位' : '正位';
      const keywords = card.reversed ? card.keywords_reversed : card.keywords_upright;

      // 选取 2-3 个核心关键词
      const picked = this._pickKeywords(keywords, 3);

      // 组合解读
      const interpretation = this._buildCardInterpretation({
        card, pos, orientation, picked, domain, question
      });

      results.push(interpretation);
    }

    // 整体综合解读
    const summary = this._buildSummary(results, spread, domain, cards);

    return {
      cards: results,
      summary,
      meta: {
        spread: spread.name,
        domain: domain.name,
        question,
        timestamp: new Date().toISOString(),
        cardCount: cards.length
      }
    };
  },

  /**
   * 从关键词数组中随机选取 N 个
   */
  _pickKeywords(keywords, count) {
    const shuffled = [...keywords].sort(() => {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] % 2 === 0 ? 1 : -1;
    });
    return shuffled.slice(0, count);
  },

  /**
   * 构建单张牌的解读文本
   */
  _buildCardInterpretation({ card, pos, orientation, picked, domain, question }) {
    // 多种句式模板随机混合，避免千篇一律
    const intros = [
      `这张${orientation}的「${card.name}」落在"${pos.label}"的位置，`,
      `当${orientation}「${card.name}」出现在"${pos.label}"之位时，`,
      `"${pos.label}"位置上出现了${orientation}的「${card.name}」，`
    ];

    const bridges = [
      `它传递的核心讯息围绕${picked.slice(0, 2).join('与')}展开。`,
      `这暗示着${picked[0]}的力量正在你的生命中发挥作用。`,
      `关键词${picked.join('、')}——正是当下你需要关注的焦点。`,
      `这意味着${picked[0]}与${picked[1] || '内在觉察'}正在交织影响。`
    ];

    const posContexts = [
      `在"${pos.label}"的维度中（${pos.meaning}），`,
      `结合"${pos.label}"这个位置的含义——${pos.meaning}——`,
      `从"${pos.label}"的角度来看（${pos.meaning}），`
    ];

    // 领域相关解读
    const domainInsights = this._getDomainInsight(card, domain, picked);

    // 随机选择句式组合
    const intro = this._pick(intros);
    const bridge = this._pick(bridges);
    const posCtx = this._pick(posContexts);

    // 组合完整解读
    const fullText = `${intro}${bridge}\n\n${posCtx}${domainInsights}`;

    return {
      cardName: card.name,
      cardNameEn: card.name_en,
      cardId: card.id,
      position: pos.label,
      positionMeaning: pos.meaning,
      orientation,
      keywords: picked,
      fullText,
      reversed: card.reversed
    };
  },

  /**
   * 根据领域生成相关的个性化解读
   */
  _getDomainInsight(card, domain, keywords) {
    const templates = {
      love: [
        `在感情层面，${keywords[0]}提醒你关注亲密关系中的这个维度。当你带着觉察去审视，会发现那些被忽略的感受正渴望被看见。`,
        `放到你的感情生活中，${keywords[0]}的能量可能已经悄悄渗透进日常互动。请思考：你在爱中是在${keywords[1] || '成长'}，还是在重复旧模式？`,
        `从亲密关系的角度切入，${keywords[0]}带来了新的启示。真正的爱不是寻找完美的人，而是在${keywords[1] || '不完美'}中相互看见。`
      ],
      career: [
        `在事业的语境中，${keywords[0]}是一面值得深思的镜子。你的职业道路是否正在呼应内心深处对${keywords[1] || '成就'}的渴望？`,
        `从工作发展的视角来看，${keywords[0]}指向了一个关键信号。当前阶段，你最需要的是${keywords[1] || '清晰的判断'}，而非盲目的行动。`,
        `在职场上，${keywords[0]}的能量提醒你重新审视自己的定位。那些看似阻碍的挑战，也许正是推动你向${keywords[1] || '更高层次'}跃迁的踏板。`
      ],
      study: [
        `在学习层面，${keywords[0]}是一盏指引的灯。知识的吸收不仅需要${keywords[1] || '勤奋'}，更需要找到适合自己的节奏和方法。`,
        `从学业的角度看，${keywords[0]}带来的讯息非常清晰。当前阶段，${keywords[1] || '专注'}比什么都重要。`
      ],
      finance: [
        `在财务方面，${keywords[0]}是一个值得留意的信号。真正的财富不仅仅是数字的增长，更是${keywords[1] || '安全感'}的内在建立。`,
        `从金钱的维度审视，${keywords[0]}提醒你审视自己与物质的关系。${keywords[1] || '理性规划'}是当下最可靠的导航。`
      ],
      general: [
        `${keywords[0]}的力量正在渗透你生活的各个层面。请留意与${keywords[1] || '内在觉察'}相关的信号——宇宙正在以它的方式与你对话。`,
        `当${keywords[0]}的能量被激活，生活中的许多片段开始有了新的含义。${keywords[1] || '信任过程'}，是当下最重要的智慧。`
      ]
    };

    const domainKey = domain.id || 'general';
    const options = templates[domainKey] || templates.general;
    return this._pick(options);
  },

  /**
   * 综合总结 — 将多张牌的解读串联成完整的故事
   */
  _buildSummary(cardResults, spread, domain, cards) {
    const allKeywords = cardResults.flatMap(r => r.keywords);
    const uniqueKeywords = [...new Set(allKeywords)].slice(0, 5);

    const openings = [
      `亲爱的求问者，${spread.name}牌阵为你揭示了以下图景：`,
      `透过${spread.name}的视角，宇宙为你展开了这样一幅画面：`,
      `在${spread.name}的指引下，让我们一同看看牌面诉说的故事：`
    ];

    const closings = [
      `\n\n✨ 【镜中寄语】塔罗是潜意识的镜子，它反射的始终是你内心已有的智慧。以上解读如同一束光照进房间——真正做出改变、走向成长的，永远是你自己。愿你带着这份觉察，温柔而坚定地前行。`,
      `\n\n✨ 【镜中寄语】请记得，塔罗牌不是命运的判决书，而是心灵的一面镜子。牌面所呈现的，是你潜意识中已经知晓的答案。愿这份解读带给你启发，但真正的力量，在你手中。`,
      `\n\n✨ 【镜中寄语】每一张牌都是一次与自我的对话。牌阵中的讯息如同星辰，它们照亮前路，却不会替你走路。相信自己的内在智慧，你比想象中更有力量。`
    ];

    const opening = this._pick(openings);
    const closing = this._pick(closings);

    // 逐牌简述 + 综合收尾
    const cardBriefs = cardResults.map((r, i) =>
      `第${i + 1}张 · ${r.cardName}（${r.orientation}）→ ${r.position}：${r.keywords.slice(0, 2).join('、')}`
    ).join('\n');

    return `${opening}\n\n${cardBriefs}\n\n🌙 综观全局，当前的核心主题围绕「${uniqueKeywords.join('」「')}」展开。${domain.name}领域的能量正在汇聚，请保持觉察，顺势而为。${closing}`;
  },

  /**
   * 辅助：从数组中随机选取一个元素
   */
  _pick(arr) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return arr[buf[0] % arr.length];
  }
};

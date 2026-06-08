/**
 * 塔罗核心引擎 — 洗牌、抽牌、解读生成
 * 使用 Web Crypto API 确保真正的随机性
 * v2.0 — 数据驱动解读：丰富卡牌数据 + 用户问题 + 元素分析
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
   * 核心解读引擎 v2.0 — 使用丰富牌面数据 + 用户问题 + 元素分析
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

      const interpretation = this._buildCardInterpretation({
        card, pos, orientation, keywords, domain, question
      });

      results.push(interpretation);
    }

    // 整体综合解读（含元素分析、牌组分布、叙事串联）
    const summary = this._buildSummary(results, spread, domain, cards, question);

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
   * 构建单张牌的解读文本 v2.0
   * 使用牌的专属丰富内容，而非模板拼接
   */
  _buildCardInterpretation({ card, pos, orientation, keywords, domain, question }) {
    // —— 个性化开头：融入用户问题、位置含义 ——
    let opening;
    if (question && question.trim()) {
      const openers = [
        `对于你关心的"${question}"，"${pos.label}"位置上出现了${orientation}的「${card.name}」——`,
        `你问到"${question}"，而${orientation}「${card.name}」在"${pos.label}"之位给出了这样的回应：`,
        `当目光落在"${pos.label}"（${pos.meaning}）的${orientation}「${card.name}」上时，关于"${question}"的答案开始浮现：`
      ];
      opening = this._pick(openers);
    } else {
      const openers = [
        `在"${pos.label}"的位置（${pos.meaning}），${orientation}的「${card.name}」带来了这样的讯息：`,
        `${orientation}「${card.name}」落在"${pos.label}"——${pos.meaning}。请细细感受它传递的能量：`,
        `"${pos.label}"之位上，${orientation}的「${card.name}」正静静等待着被你看见：`
      ];
      opening = this._pick(openers);
    }

    // —— 核心牌义 ——
    const meaningTitle = card.reversed ? '🌙 逆位释义' : '☀️ 正位释义';
    const meaningText = card.reversed
      ? (card.meaning_reversed || this._fallbackReversed(card))
      : (card.meaning_upright || this._fallbackUpright(card));

    // —— 领域洞察 ——
    const domainLabel = domain.name;
    const domainInsight = this._getDomainText(card, domain);

    // —— 象征符号 ——
    let symbolismSection = '';
    if (card.symbolism) {
      symbolismSection = `\n\n🔮 【象征符号】\n${card.symbolism}`;
    }

    // —— 行动建议 ——
    let adviceSection = '';
    if (card.advice) {
      adviceSection = `\n\n🗝️ 【行动建议】\n${card.advice}`;
    }

    // 组合完整解读
    const fullText = `${opening}\n\n${meaningTitle}\n${meaningText}\n\n💡 【${domainLabel}角度】\n${domainInsight}${symbolismSection}${adviceSection}`;

    return {
      cardName: card.name,
      cardNameEn: card.name_en,
      cardId: card.id,
      position: pos.label,
      positionMeaning: pos.meaning,
      orientation,
      keywords,
      fullText,
      reversed: card.reversed,
      // 传递原始牌数据供总结使用
      _card: card
    };
  },

  /**
   * 获取领域专属解读文本
   * 优先使用牌数据中的 insights，否则回退到通用模板
   */
  _getDomainText(card, domain) {
    // 如果牌数据中有领域专属洞察，直接使用
    if (card.insights && card.insights[domain.id]) {
      return card.insights[domain.id];
    }
    // 回退到 general
    if (card.insights && card.insights.general) {
      return card.insights.general;
    }
    // 最终回退：基于关键词生成
    return this._fallbackDomainInsight(card, domain);
  },

  /**
   * 综合总结 v2.0 — 元素分析 + 牌组分布 + 叙事串联
   */
  _buildSummary(cardResults, spread, domain, cards, question) {
    // —— 1. 元素分布分析 ——
    const elementAnalysis = this._analyzeElements(cards);

    // —— 2. 牌组分布分析 ——
    const distribution = this._analyzeDistribution(cards);

    // —— 3. 叙事串联 ——
    const narrative = this._weaveNarrative(cardResults, spread);

    // —— 4. 主题提炼 ——
    const theme = this._extractTheme(cardResults, elementAnalysis, distribution);

    // —— 组装总结 ——
    const openings = [
      `亲爱的求问者，${spread.name}牌阵为你展开了一幅意味深长的画卷——`,
      `透过${spread.name}的视角，牌面正在诉说一个与${domain.name}息息相关的故事：`,
      `在${spread.name}的排列中，宇宙用${cards.length}张牌的语言给出了回应：`
    ];

    const closings = [
      `\n\n✨ 【镜中寄语】塔罗是潜意识的镜子，它反射的始终是你内心已有的智慧。牌面呈现的不是命运的判决，而是灵魂的私语——当光照进角落，你早已知道答案。真正的力量，从来都在你手中。`,
      `\n\n✨ 【镜中寄语】每一张牌都是一次与自我的对话。牌阵中的讯息如星辰般照亮前路，却不会替你走路。请相信：当你愿意倾听，内心那个最温柔也最坚定的声音，会领你走向属于你的方向。`,
      `\n\n✨ 【镜中寄语】请记得，塔罗不是预言，而是一次深度的自我觉察练习。牌面的智慧属于每一位愿意向内看的人。带着这份觉察回到生活里，那些曾经模糊的，正在慢慢变清晰。`
    ];

    const opening = this._pick(openings);
    const closing = this._pick(closings);

    // 组合
    let summary = `${opening}\n\n`;
    summary += `🧩 【元素分布】\n${elementAnalysis}\n\n`;
    summary += `📊 【牌力结构】\n${distribution}\n\n`;
    summary += `📖 【牌阵解读】\n${narrative}\n\n`;
    summary += `🎯 【核心主题】\n${theme}`;
    summary += closing;

    return summary;
  },

  /**
   * 元素分布分析 — 统计火/水/风/土数量，生成趋势解读
   */
  _analyzeElements(cards) {
    const elements = { 火: 0, 水: 0, 风: 0, 土: 0 };
    let hasElement = 0;

    for (const card of cards) {
      // 优先使用 card.element，小牌则从花色推导元素
      const el = card.element || this._suitToElement(card.suit);
      if (el && elements[el] !== undefined) {
        elements[el]++;
        hasElement++;
      }
    }

    if (hasElement === 0) return '这些牌的能量分布较为均衡，各个层面都在协同运作。';

    // 找出主导元素
    const sorted = Object.entries(elements).sort((a, b) => b[1] - a[1]);
    const dominant = sorted[0];
    const secondary = sorted[1];

    const fireMeaning = '🜂 火元素旺盛——行动力与激情主导着当前局势。你的内在火焰正在燃烧，勇气和创造力处于高位。这是一个适合开拓、冒险、主动出击的阶段。但请注意：过多的火也可能带来冲动和急躁。';
    const waterMeaning = '🜄 水元素深厚——情感与直觉是当下的主轴。你比平时更加敏感，内心的潮汐正在涌动。梦境、灵感和情绪信号都在向你传递信息。信任你的直觉，但也留意不要被情绪的暗流卷走。';
    const airMeaning = '🜁 风元素活跃——思维与沟通成为关键。你的头脑异常清晰（或异常纷乱），大量想法在翻飞。这是思考、对话、写作和决策的好时机。但需警惕：过多的思虑可能取代了真正的行动。';
    const earthMeaning = '🜃 土元素稳固——现实、物质与安全感占据重心。脚步踏实，做事有章法，财富和健康议题浮现。这是一个适合规划、积累、扎根的阶段。注意别让保守变成固步自封。';

    const elementMap = { 火: fireMeaning, 水: waterMeaning, 风: airMeaning, 土: earthMeaning };

    let result = '';

    if (dominant[1] > 0) {
      result += `主导能量：${elementMap[dominant[0]]}`;
    }

    // 多种元素并存
    const presentElements = sorted.filter(e => e[1] > 0);
    if (presentElements.length >= 3) {
      result += `\n\n元素分布多元，${presentElements.map(e => e[0]).join('、')}三种（及以上）能量正在交织作用。这表明当前的议题具有多面性——既需要${presentElements[0]}的行动力，也需要${presentElements[1]}的感知力。不同维度的力量正在邀请你寻找一个立体的平衡。`;
    } else if (presentElements.length === 2 && secondary[1] > 0) {
      result += `\n\n辅助元素：${secondary[0]}的能量也在背后提供支撑。${dominant[0]}为主、${secondary[0]}为辅的组合，意味着你需要兼顾${dominant[0] === '火' || dominant[0] === '风' ? '外在的进取' : '内在的觉察'}与${secondary[0] === '水' || secondary[0] === '土' ? '内在的根基' : '外在的表达'}。`;
    }

    // 缺失元素提示
    const missing = sorted.filter(e => e[1] === 0).map(e => e[0]);
    if (missing.length > 0 && missing.length <= 3) {
      const missingTips = {
        '火': '火元素的缺席提示你：当前或许需要更多行动的热忱和冒险的勇气',
        '水': '水元素的缺席是一个温柔的提醒：别忘了关注自己的情绪和直觉',
        '风': '风元素的缺席暗示你：也许需要给脑子留一些空间，让思绪飞一会儿',
        '土': '土元素的缺席邀请你留意：别忘了脚下的大地和身体的信号'
      };
      const tips = missing.map(m => missingTips[m]).join('；');
      result += `\n\n💭 值得一提的是：${tips}。`;
    }

    return result;
  },

  /**
   * 牌组分布分析 — 大牌/小牌/宫廷牌统计
   */
  _analyzeDistribution(cards) {
    let major = 0, minor = 0, court = 0;
    const suitNames = { wands: '权杖', cups: '圣杯', swords: '宝剑', pentacles: '星币' };
    const suits = { wands: 0, cups: 0, swords: 0, pentacles: 0 };

    for (const card of cards) {
      if (card.arcana === 'major') {
        major++;
      } else if (card.arcana === 'minor') {
        // 宫廷牌：page/knight/queen/king
        if (['page', 'knight', 'queen', 'king'].some(t => card.id.includes(t))) {
          court++;
          minor++;
        } else {
          minor++;
        }
        // 花色统计
        if (card.suit && suits[card.suit] !== undefined) {
          suits[card.suit]++;
        }
      }
    }

    const total = cards.length;
    let result = '';

    // 大牌比例
    if (major > 0) {
      const majorRatio = major / total;
      if (majorRatio >= 0.5) {
        result += `🎴 大阿尔卡纳占${major}/${total}——这不是小事。大牌密集出现往往意味着你正在面对人生中较为深层的课题，是灵魂层面的转弯路口，而非日常的鸡毛蒜皮。命运的潮水正在涌来，请认真以待。`;
      } else if (majorRatio >= 0.3) {
        result += `🎴 大阿尔卡纳${major}张——在${total}张牌中，大牌的出现频率不低。这表明当前的问题触及了人生中一些本质层面的东西，不只是一时一地的小波折。值得花时间深入探索。`;
      } else {
        result += `🎴 出现了${major}张大阿尔卡纳——它像一整幅画中的高光，提示你在日常事务之外，还有更深一层的意义等待被发现。`;
      }
    }

    // 宫廷牌
    if (court > 0) {
      result += `\n\n👤 ${court}张宫廷牌的出现，暗示人际关系或某位关键人物在这个议题中扮演着重要角色。也许是某个具体的"他人"，也许是你内在某个人格面向的投射。不妨问问自己：这张宫廷牌，是在说别人，还是在说你自己？`;
    }

    // 花色分布
    const presentSuits = Object.entries(suits).filter(([, v]) => v > 0);
    if (presentSuits.length >= 2) {
      const suitDesc = presentSuits.map(([k, v]) => `${suitNames[k]}(${v}张)`).join('、');
      result += `\n\n🃏 小牌花色分布：${suitDesc}。`;
      if (presentSuits.length >= 3) {
        result += `多个花色交织，说明当前的生活多个领域正在联动——可能工作的事牵动了感情，或是金钱的议题影响到了学习的规划。这不只是"某一件事"，而是一张正在展开的网。`;
      }
    }

    if (result === '') {
      result = '牌组分布较为均衡，各层面的能量都在参与这次对话。';
    }

    return result;
  },

  /**
   * 叙事串联 — 按牌阵位置的逻辑，将各牌串联成一段连贯的叙述
   */
  _weaveNarrative(cardResults, spread) {
    if (cardResults.length === 1) {
      const r = cardResults[0];
      return `${r.orientation}的「${r.cardName}」作为${r.position}，是一个清晰而直接的回答。它邀请你聚焦在${r.keywords.slice(0, 2).join('与')}这两个关键词上——它们正是当下你最需要的指引。这张牌的讯息简单而深刻：把注意力放在这里，答案会自然浮现。`;
    }

    if (cardResults.length <= 3) {
      // 小牌阵：逐牌叙述，自然衔接
      const parts = cardResults.map((r, i) => {
        const prefix = i === 0 ? '故事的开端，' : (i === cardResults.length - 1 ? '故事的落点，' : '故事的核心，');
        const cardName = r.reversed ? `逆位「${r.cardName}」` : `「${r.cardName}」`;
        return `${prefix}${cardName}落在"${r.position}"——${r.keywords.slice(0, 2).join('和')}的能量在此处聚集。`;
      });

      return parts.join('\n\n') + '\n\n这三张牌如同一条时间线上的三个节点，彼此呼应、层层推进。不妨将它们连起来读：从第一张到最后一张，你看到的变化是什么？那个从"过去"流动到"未来"的线索，也许就藏在你心中。';
    }

    // 大牌阵（4张以上）：按位置分组叙述
    let narrative = '';
    const half = Math.ceil(cardResults.length / 2);

    // 前半部分（通常代表内在/过去/根基）
    const firstHalf = cardResults.slice(0, half);
    narrative += `🔹 底层基调：`;
    const firstLines = firstHalf.map(r =>
      `"${r.position}"的${r.orientation}「${r.cardName}」——${r.positionMeaning}`
    );
    narrative += '\n' + firstLines.map(l => `  ${l}`).join('\n');

    narrative += '\n\n';

    // 后半部分（通常代表外在/未来/结果）
    const secondHalf = cardResults.slice(half);
    narrative += `🔸 显化层面：`;
    const secondLines = secondHalf.map(r =>
      `"${r.position}"的${r.orientation}「${r.cardName}」——${r.positionMeaning}`
    );
    narrative += '\n' + secondLines.map(l => `  ${l}`).join('\n');

    narrative += `\n\n${spread.name}牌阵的每一张牌都像一个独特的声音，当它们汇聚在一起，便构成了一首完整的多声部合唱。上半部的牌勾勒出了问题的深层结构与内在动力，下半部的牌则指向了正在显化的外在情境与可能走向。将这两层合在一起看，你会发现：内在的因，正在孕育外在的果。`;

    return narrative;
  },

  /**
   * 主题提炼 — 基于元素和牌组分析，提炼核心主题句
   */
  _extractTheme(cardResults, elementAnalysis, distribution) {
    const allKeywords = cardResults.flatMap(r => r.keywords);
    // 取出现频率最高的关键词
    const freq = {};
    allKeywords.forEach(k => { freq[k] = (freq[k] || 0) + 1; });
    const topKeywords = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(e => e[0]);

    const cardsWithOrientation = cardResults.map(r =>
      `${r.orientation === '逆位' ? '逆' : ''}「${r.cardName}」`
    ).join('、');

    // 基于牌阵大小选择不同深度的主题句式
    if (cardResults.length === 1) {
      return `这张牌是你当下最需要的信号。${topKeywords.join('、')}——让这几个词成为你接下来一段时间的"心灵路标"。不需要想太多，只需要在日常生活里留意它们的出现。`;
    }

    const themePrefixes = [
      `综观${cardsWithOrientation}这${cardResults.length}张牌，一个清晰的主题轮廓浮现出来：`,
      `把${cardResults.length}张牌合在一起看，一个反复出现的旋律是：`,
      `穿越牌面的层层指引，一个核心讯息正在轻声低语：`
    ];

    const themeBody = [
      `「${topKeywords.slice(0, 2).join('」与「')}」构成了当下议题的经纬线。${topKeywords[2] ? '「' + topKeywords[2] + '」则是穿插其间的关键线索。' : ''}这不是一道需要立即解答的题，而是一次邀请——邀请你带着这些关键词去观察生活，看看它们如何在你的日常里具体地展开。`,
      `你正站在「${topKeywords[0]}」与「${topKeywords[1]}」的交汇处。这是一个需要同时拥抱${topKeywords.join('和')}的阶段——它们看似不同，但其实是同一枚硬币的两面。不必急着做决定，先让这些力量在你体内找到它们各自的位置。`,
      `牌面的核心叙事沿着「${topKeywords[0]}」的方向展开，而「${topKeywords[1]}」是这趟旅程中你最忠诚的旅伴。${topKeywords.length > 2 ? '「' + topKeywords.slice(2).join('」「') + '」则像夜空中的伴星，虽然不耀眼，却不可或缺。' : ''}你的故事，正在以自己的节奏书写。`
    ];

    return this._pick(themePrefixes) + this._pick(themeBody);
  },

  // ============ 回退方法（牌数据不完整时使用） ============

  /**
   * 正位回退 — 当牌缺少 meaning_upright 时
   */
  _fallbackUpright(card) {
    const kws = card.keywords_upright || [];
    return `${card.name}正位时，${kws.slice(0, 2).join('与')}的能量正在活跃。${card.description || ''}这是这股能量健康展现的时候——拥抱它，让它引领你向前。`;
  },

  /**
   * 逆位回退 — 当牌缺少 meaning_reversed 时
   */
  _fallbackReversed(card) {
    const kws = card.keywords_reversed || [];
    return `当${card.name}以逆位出现，${kws.slice(0, 2).join('与')}的课题浮现出来。${card.description || ''}逆位不是坏消息，而是邀请你审视受阻的能量，找到转化的入口。`;
  },

  /**
   * 领域回退 — 当牌缺少 insights 时
   */
  _fallbackDomainInsight(card, domain) {
    const keywords = card.keywords_upright || [];
    const templates = {
      love: [
        `在感情层面，${keywords[0]}提醒你关注亲密关系中的这个维度。当你带着觉察去审视，会发现那些被忽略的感受正渴望被看见。`,
        `放到你的感情生活中，${keywords[0]}的能量可能已经悄悄渗透进日常互动。请思考：你在爱中是在${keywords[1] || '成长'}，还是在重复旧模式？`
      ],
      career: [
        `在事业的语境中，${keywords[0]}是一面值得深思的镜子。你的职业道路是否正在呼应内心深处对${keywords[1] || '成就'}的渴望？`,
        `从工作发展的视角来看，${keywords[0]}指向了一个关键信号。当前阶段，你最需要的是${keywords[1] || '清晰的判断'}，而非盲目的行动。`
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
    const options = templates[domain.id] || templates.general;
    return this._pick(options);
  },

  /**
   * 辅助：从数组中随机选取一个元素
   */
  _pick(arr) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return arr[buf[0] % arr.length];
  },

  /**
   * 花色 → 元素映射（小阿尔卡纳的花色对应四元素）
   */
  _suitToElement(suit) {
    const map = { wands: '火', cups: '水', swords: '风', pentacles: '土' };
    return map[suit] || null;
  }
};

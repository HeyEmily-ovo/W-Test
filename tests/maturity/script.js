/* ==================== 维度与颜色配置 ==================== */
const DIMENSIONS = [
  { id: 'emotional',   name: '情绪稳定性',   color: '#5B9BD5', icon: '🌊',
    desc: '情绪稳定性反映了你面对压力、挫折和变化时保持内心平衡的能力，是心理成熟度的核心基石。' },
  { id: 'selfaware',   name: '自我认知清晰度', color: '#8E6ABF', icon: '🔍',
    desc: '自我认知清晰度衡量你对自身优势、局限、情绪和动机的了解程度，以及能否客观看待自己。' },
  { id: 'responsible', name: '责任感与担当',   color: '#C0504D', icon: '⚓',
    desc: '责任感体现了你对自己言行后果的承担意愿，以及对他人和社会义务的履行程度。' },
  { id: 'interpersonal', name: '人际成熟度',   color: '#4AAD8C', icon: '🤝',
    desc: '人际成熟度评估你建立深度关系、处理人际冲突和维持健康边界的能力。' },
  { id: 'flexible',    name: '认知灵活性',     color: '#F4A742', icon: '🧠',
    desc: '认知灵活性反映你从多角度看问题、接纳不确定性以及在变化中调整策略的能力。' },
  { id: 'impulse',     name: '冲动控制',       color: '#5B8DB8', icon: '🛡️',
    desc: '冲动控制测量你延迟满足、三思而后行以及抵抗即时诱惑的能力。' },
  { id: 'empathy',     name: '共情与视角转换', color: '#D4875E', icon: '💛',
    desc: '共情能力评估你理解他人情感、设身处地思考以及从不同立场看待问题的能力。' },
  { id: 'growth',      name: '自我成长驱动',   color: '#6AAC6E', icon: '🌱',
    desc: '自我成长驱动衡量你主动学习、接受反馈、持续完善自我的内在动力。' }
];

const DIM_COLORS = DIMENSIONS.map(d => d.color);

/* ==================== 50 道题库 ==================== */
const QUESTIONS = [
  // ===== 维度1：情绪稳定性 (6题: 1,9,17,25,33,41) =====
  {
    id: 1, dim: 'emotional', type: 'likert',
    text: '面对突如其来的变化或意外，我能很快冷静下来并理性应对。',
    dimension: '情绪稳定性', reversed: false
  },
  {
    id: 2, dim: 'selfaware', type: 'likert',
    text: '我清楚地知道自己的优点和缺点，不会因他人评价而轻易动摇对自我的认知。',
    dimension: '自我认知清晰度', reversed: false
  },
  {
    id: 3, dim: 'responsible', type: 'likert',
    text: '我会为自己的决定承担全部后果，不推卸责任或归咎于外部环境。',
    dimension: '责任感与担当', reversed: false
  },
  {
    id: 4, dim: 'interpersonal', type: 'situational',
    text: '一位好友在你背后说了一些让你不舒服的话，后来你得知了此事。你会怎么做？',
    dimension: '人际成熟度', reversed: false,
    options: [
      '直接断绝来往，不再信任这个人',
      '在心里记着这件事，但表面上装作无事发生',
      '找机会委婉提出，表达自己的感受并了解对方为什么那么说',
      '完全不在意，朋友之间说几句话很正常'
    ],
    scores: [1, 2, 4, 3]
  },
  {
    id: 5, dim: 'flexible', type: 'likert',
    text: '当新证据表明我原有的观点可能是错的时，我愿意修正自己的看法。',
    dimension: '认知灵活性', reversed: false
  },
  {
    id: 6, dim: 'impulse', type: 'likert',
    text: '在生气时，我常常说出让自己后悔的话。',
    dimension: '冲动控制', reversed: true
  },
  {
    id: 7, dim: 'empathy', type: 'situational',
    text: '同事在会议上提出了一个你认为明显行不通的方案，其他人都在委婉附和。你会？',
    dimension: '共情与视角转换', reversed: false,
    options: [
      '直接指出方案的漏洞，实事求是',
      '先肯定对方的努力和思路中的亮点，再提出自己的担忧',
      '保持沉默，不参与讨论',
      '私下找同事沟通，避免在会议上让他难堪'
    ],
    scores: [2, 4, 1, 3]
  },
  {
    id: 8, dim: 'growth', type: 'likert',
    text: '我会主动寻求挑战和新的学习机会，即使它们让我感到不适。',
    dimension: '自我成长驱动', reversed: false
  },
  {
    id: 9, dim: 'emotional', type: 'likert',
    text: '即使连续遭遇几次挫折，我也能保持积极的心态继续前进。',
    dimension: '情绪稳定性', reversed: false
  },
  {
    id: 10, dim: 'selfaware', type: 'situational',
    text: '在一次重要的工作汇报后，你的主管委婉地指出了你表现中的三个不足。你的第一反应是？',
    dimension: '自我认知清晰度', reversed: false,
    options: [
      '感到挫败，觉得自己做得太差了',
      '感谢主管的反馈，逐一记录下来并思考如何改进',
      '认为主管要求太苛刻，自己其实做得还可以',
      '表面上接受，但心里不太服气'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 11, dim: 'responsible', type: 'situational',
    text: '你答应了朋友周末帮忙搬家，但临时有一个非常吸引你的活动邀请来了。你会？',
    dimension: '责任感与担当', reversed: false,
    options: [
      '跟朋友说实话，看能否改天帮忙，然后去参加活动',
      '找个借口推掉帮忙，去参加活动',
      '如约去帮忙，既然答应了就要做到',
      '先去活动看一眼，然后赶去帮忙'
    ],
    scores: [2, 1, 4, 3]
  },
  {
    id: 12, dim: 'interpersonal', type: 'likert',
    text: '当与亲近的人发生分歧时，我能够就事论事，不翻旧账也不进行人身攻击。',
    dimension: '人际成熟度', reversed: false
  },
  {
    id: 13, dim: 'flexible', type: 'situational',
    text: '你精心制定的计划在执行到一半时，突然出现了重大外部变化，原计划几乎无法继续。你会？',
    dimension: '认知灵活性', reversed: false,
    options: [
      '感到非常沮丧，坚持按原计划推进，即使效果大打折扣',
      '迅速评估新情况，调整目标和策略，制定可行的替代方案',
      '放弃整个计划，不再继续',
      '暂停行动，花很长时间思考再做决定'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 14, dim: 'impulse', type: 'situational',
    text: '你在网上看到一件很喜欢但并非必需的商品，价格不菲。你的处理方式是？',
    dimension: '冲动控制', reversed: false,
    options: [
      '毫不犹豫下单，喜欢就买',
      '加入购物车，等至少24小时后再决定',
      '反复比较价格和评价，纠结很久但还是买了',
      '想想自己的预算和已有物品，大概率不买'
    ],
    scores: [1, 3, 2, 4]
  },
  {
    id: 15, dim: 'empathy', type: 'likert',
    text: '与人交流时，我不仅听对方说了什么，还能感受到对方没说出口的情绪。',
    dimension: '共情与视角转换', reversed: false
  },
  {
    id: 16, dim: 'growth', type: 'likert',
    text: '我把每一次失败都看作是学习和成长的机会，而非对自我价值的否定。',
    dimension: '自我成长驱动', reversed: false
  },
  {
    id: 17, dim: 'emotional', type: 'situational',
    text: '你在一个重要项目中付出了大量心血，但最终结果不如预期，受到了上级的质疑。你的反应是？',
    dimension: '情绪稳定性', reversed: false,
    options: [
      '情绪崩溃，觉得自己的努力全白费了',
      '虽然失落，但能客观复盘过程中的问题，从中吸取教训',
      '把责任归结为外部因素（团队不配合、资源不够等）',
      '表面说没事，但内心久久不能释怀'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 18, dim: 'selfaware', type: 'likert',
    text: '我能够觉察到自己当下的情绪状态，并理解情绪产生的原因。',
    dimension: '自我认知清晰度', reversed: false
  },
  {
    id: 19, dim: 'responsible', type: 'likert',
    text: '即使没有人监督，我也会按时高质量地完成自己承诺的事情。',
    dimension: '责任感与担当', reversed: false
  },
  {
    id: 20, dim: 'interpersonal', type: 'likert',
    text: '我能够接受他人与我在生活方式、价值观上的不同，不会强求别人按我的标准行事。',
    dimension: '人际成熟度', reversed: false
  },
  {
    id: 21, dim: 'flexible', type: 'likert',
    text: '遇到复杂问题时，我习惯从多个角度分析，而不是非黑即白地判断对错。',
    dimension: '认知灵活性', reversed: false
  },
  {
    id: 22, dim: 'impulse', type: 'likert',
    text: '做重要决定前，我会充分收集信息并权衡利弊，而非凭一时冲动。',
    dimension: '冲动控制', reversed: false
  },
  {
    id: 23, dim: 'empathy', type: 'likert',
    text: '当看到他人遭遇不幸时，我能真切地感受到对方的心情，而不是冷漠旁观。',
    dimension: '共情与视角转换', reversed: false
  },
  {
    id: 24, dim: 'growth', type: 'situational',
    text: '有人对你的某个长期习惯或行为方式提出了尖锐的批评。你的第一反应是？',
    dimension: '自我成长驱动', reversed: false,
    options: [
      '立即反驳，为自己的行为辩护',
      '感到不舒服，但会认真思考对方说的是否有道理',
      '左耳进右耳出，不放在心上',
      '表面接受，内心抗拒'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 25, dim: 'emotional', type: 'likert',
    text: '在压力大的时候，我仍能保持情绪稳定，不影响与他人的正常交往和工作效率。',
    dimension: '情绪稳定性', reversed: false
  },
  {
    id: 26, dim: 'selfaware', type: 'likert',
    text: '我很少反思自己的行为模式或思维方式是否合理。',
    dimension: '自我认知清晰度', reversed: true
  },
  {
    id: 27, dim: 'responsible', type: 'likert',
    text: '当团队工作出现问题时，我不会只指责他人，而是思考自己是否也有责任。',
    dimension: '责任感与担当', reversed: false
  },
  {
    id: 28, dim: 'interpersonal', type: 'situational',
    text: '你和伴侣/好友因为一件小事发生了争执，对方情绪激动说出了伤人的话。你会？',
    dimension: '人际成熟度', reversed: false,
    options: [
      '以同样激烈的方式回应，不能吃亏',
      '先暂停争论，等双方冷静后再心平气和地沟通',
      '冷战，等对方先道歉',
      '当作没发生，但心里留下疙瘩'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 29, dim: 'flexible', type: 'likert',
    text: '我享受接触不同领域的知识和观点，即使它们与我原有的认知相悖。',
    dimension: '认知灵活性', reversed: false
  },
  {
    id: 30, dim: 'impulse', type: 'likert',
    text: '我经常在没有想清楚后果的情况下就采取行动。',
    dimension: '冲动控制', reversed: true
  },
  {
    id: 31, dim: 'empathy', type: 'likert',
    text: '在做决定时，我会考虑自己的选择可能对他人产生的影响。',
    dimension: '共情与视角转换', reversed: false
  },
  {
    id: 32, dim: 'growth', type: 'likert',
    text: '我倾向于待在舒适区，避免尝试不熟悉的新事物。',
    dimension: '自我成长驱动', reversed: true
  },
  {
    id: 33, dim: 'emotional', type: 'likert',
    text: '小事也容易让我焦虑或烦躁很长时间。',
    dimension: '情绪稳定性', reversed: true
  },
  {
    id: 34, dim: 'selfaware', type: 'situational',
    text: '在一次社交场合中，你发现自己说的话让在场的一位朋友明显尴尬。你会？',
    dimension: '自我认知清晰度', reversed: false,
    options: [
      '没注意到，继续讲自己的',
      '立刻察觉到不对，事后私下向对方道歉并反省自己的言行',
      '注意到了但觉得是对方太敏感',
      '注意到了，但不知道该怎么处理，只好当作无事发生'
    ],
    scores: [1, 4, 2, 3]
  },
  {
    id: 35, dim: 'responsible', type: 'likert',
    text: '我对社会问题和公共事务保持关注，并愿意为此付出力所能及的行动。',
    dimension: '责任感与担当', reversed: false
  },
  {
    id: 36, dim: 'interpersonal', type: 'likert',
    text: '我善于在维护自我边界和照顾他人感受之间找到平衡。',
    dimension: '人际成熟度', reversed: false
  },
  {
    id: 37, dim: 'flexible', type: 'likert',
    text: '当事情不按计划进行时，我会感到极度不安并试图强行恢复控制。',
    dimension: '认知灵活性', reversed: true
  },
  {
    id: 38, dim: 'impulse', type: 'situational',
    text: '你正在为一场重要考试/面试做准备，朋友约你去一个你非常想参加的聚会。你会？',
    dimension: '冲动控制', reversed: false,
    options: [
      '不假思索地答应，准备了这么久放松一下怎么了',
      '评估自己的准备情况：如果确实需要复习就婉拒，如果准备充分可以适当放松',
      '直接拒绝，备考期间一律不参加娱乐活动',
      '纠结很久最后还是去了，但玩的时候心里不踏实'
    ],
    scores: [1, 4, 3, 2]
  },
  {
    id: 39, dim: 'empathy', type: 'likert',
    text: '即使不同意对方的立场，我也能理解他为什么会那样想。',
    dimension: '共情与视角转换', reversed: false
  },
  {
    id: 40, dim: 'growth', type: 'likert',
    text: '每隔一段时间，我会主动审视自己在各个方面的成长和变化。',
    dimension: '自我成长驱动', reversed: false
  },
  {
    id: 41, dim: 'emotional', type: 'likert',
    text: '我能够接受生活中的不确定性和不可控因素，不会因此过度担忧。',
    dimension: '情绪稳定性', reversed: false
  },
  {
    id: 42, dim: 'selfaware', type: 'likert',
    text: '我知道什么样的事情会触发我的负面情绪，并能提前做好心理准备。',
    dimension: '自我认知清晰度', reversed: false
  },
  {
    id: 43, dim: 'responsible', type: 'situational',
    text: '你发现自己在某个小组项目中承担的工作量明显少于其他成员。你通常会？',
    dimension: '责任感与担当', reversed: false,
    options: [
      '觉得这样挺好，乐得轻松',
      '主动询问是否有更多可以分担的任务',
      '心里有些过意不去，但不好意思主动开口',
      '认为分工是组长的事，与自己无关'
    ],
    scores: [1, 4, 3, 2]
  },
  {
    id: 44, dim: 'interpersonal', type: 'likert',
    text: '我容易对他人产生依赖，在关系中有强烈的被抛弃恐惧。',
    dimension: '人际成熟度', reversed: true
  },
  {
    id: 45, dim: 'flexible', type: 'likert',
    text: '在新的环境中，我能迅速调整自己的行为方式以适应不同的社交和文化规范。',
    dimension: '认知灵活性', reversed: false
  },
  {
    id: 46, dim: 'impulse', type: 'likert',
    text: '当我想要某样东西时，我讨厌等待，希望立刻得到满足。',
    dimension: '冲动控制', reversed: true
  },
  {
    id: 47, dim: 'empathy', type: 'situational',
    text: '一位平时和你关系一般的同事最近工作状态明显下滑，情绪低落。你会？',
    dimension: '共情与视角转换', reversed: false,
    options: [
      '不太关心，每个人的事自己处理',
      '找个合适的时机关心一下，询问是否需要帮助',
      '和其他同事谈论他/她的异常',
      '觉得这影响了团队效率，提醒他/她注意工作表现'
    ],
    scores: [2, 4, 1, 3]
  },
  {
    id: 48, dim: 'growth', type: 'likert',
    text: '我有清晰的人生目标和价值取向，并为之持续努力。',
    dimension: '自我成长驱动', reversed: false
  },
  {
    id: 49, dim: 'empathy', type: 'likert',
    text: '当别人向我倾诉烦恼时，我常常急于给出建议而不是先认真倾听。',
    dimension: '共情与视角转换', reversed: true
  },
  {
    id: 50, dim: 'growth', type: 'situational',
    text: '回顾过去三年的生活，你最大的感受是？',
    dimension: '自我成长驱动', reversed: false,
    options: [
      '没什么变化，日复一日差不多',
      '经历了很多事，在某些方面有了明显的成长和改变',
      '感觉退步了，不如以前',
      '一直在积极学习、反思和提升，对自己各方面的进步感到满意'
    ],
    scores: [2, 3, 1, 4]
  }
];

/* ==================== 状态管理 ==================== */
let currentQuestion = 0;
let answers = {};         // { questionId: scoreValue }
let selectedOption = null; // 当前题目选中的选项索引

/* ==================== 初始化 ==================== */
function initTest() {
  currentQuestion = 0;
  answers = {};
  selectedOption = null;
  renderQuestionNavGrid();
  showQuestion(0);
}

function startTest() {
  document.getElementById('landing-section').style.display = 'none';
  document.getElementById('test-section').style.display = 'block';
  document.getElementById('results-section').style.display = 'none';
  initTest();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartTest() {
  document.getElementById('landing-section').style.display = 'none';
  document.getElementById('test-section').style.display = 'block';
  document.getElementById('results-section').style.display = 'none';
  initTest();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==================== 题目渲染 ==================== */
function showQuestion(index) {
  currentQuestion = index;
  selectedOption = answers[QUESTIONS[index].id] !== undefined
    ? findOptionIndex(QUESTIONS[index], answers[QUESTIONS[index].id])
    : null;

  const q = QUESTIONS[index];

  // 题号
  document.getElementById('question-number').textContent =
    `第 ${q.id} 题`;

  // 题目文本
  document.getElementById('question-text').textContent = q.text;

  // 维度提示
  document.getElementById('question-dimension').textContent =
    `测评维度：${q.dimension}`;

  // 题型标签
  const badge = document.getElementById('question-type-badge');
  if (q.type === 'likert') {
    badge.textContent = '自评量表';
    badge.className = 'question-type-badge likert';
  } else {
    badge.textContent = '情境选择';
    badge.className = 'question-type-badge situational';
  }

  // 选项
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  if (q.type === 'likert') {
    const likertLabels = ['完全符合', '比较符合', '一般', '比较不符合', '完全不符合'];
    likertLabels.forEach((label, i) => {
      const option = document.createElement('div');
      option.className = 'option-likert' + (selectedOption === i ? ' selected' : '');
      option.innerHTML = `
        <div class="radio-indicator"></div>
        <span class="option-label">${label}</span>
      `;
      option.addEventListener('click', () => selectOption(index, i));
      optionsContainer.appendChild(option);
    });
  } else {
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, i) => {
      const option = document.createElement('div');
      option.className = 'option-situational' + (selectedOption === i ? ' selected' : '');
      option.innerHTML = `
        <span class="option-letter">${letters[i]}</span>${optText}
      `;
      option.addEventListener('click', () => selectOption(index, i));
      optionsContainer.appendChild(option);
    });
  }

  // 更新进度
  updateProgress();

  // 更新导航按钮
  document.getElementById('prev-btn').disabled = index === 0;
  const nextBtn = document.getElementById('next-btn');
  if (index === QUESTIONS.length - 1) {
    nextBtn.textContent = '查看结果';
    nextBtn.innerHTML = '查看结果' +
      '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  } else {
    nextBtn.innerHTML = '下一题' +
      '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  // 更新导航网格
  updateNavGridHighlight();

  // 滚动到顶部
  document.querySelector('.test-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function findOptionIndex(question, score) {
  if (question.type === 'likert') {
    const likertScore = question.reversed ? (6 - score) : score;
    return 5 - likertScore;
  } else {
    const idx = question.scores.indexOf(score);
    return idx >= 0 ? idx : null;
  }
}

function selectOption(qIndex, optionIndex) {
  selectedOption = optionIndex;
  const q = QUESTIONS[qIndex];
  let score;

  if (q.type === 'likert') {
    const rawScore = 5 - optionIndex;
    score = q.reversed ? (6 - rawScore) : rawScore;
  } else {
    score = q.scores[optionIndex];
  }

  answers[q.id] = score;

  // 更新选项样式
  const options = document.getElementById('options-container').children;
  for (let i = 0; i < options.length; i++) {
    options[i].classList.toggle('selected', i === optionIndex);
  }

  updateNavGridHighlight();

  // 选择后延迟片刻自动跳转下一题
  setTimeout(() => {
    if (qIndex === QUESTIONS.length - 1) {
      showResults();
    } else {
      showQuestion(qIndex + 1);
    }
  }, 200);
}

function updateProgress() {
  const answered = Object.keys(answers).length;
  const pct = (answered / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent =
    `${currentQuestion + 1} / ${QUESTIONS.length}`;
}

/* ==================== 导航 ==================== */
function prevQuestion() {
  if (currentQuestion > 0) {
    showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  if (currentQuestion < QUESTIONS.length - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    // 最后一题 → 计算结果
    showResults();
  }
}

/* ==================== 题目导航网格 ==================== */
function renderQuestionNavGrid() {
  const grid = document.getElementById('question-nav-grid');
  grid.innerHTML = '';
  for (let i = 0; i < QUESTIONS.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'question-nav-dot';
    dot.textContent = QUESTIONS[i].id;
    dot.title = `第${QUESTIONS[i].id}题`;
    dot.addEventListener('click', () => {
      showQuestion(i);
    });
    grid.appendChild(dot);
  }
}

function updateNavGridHighlight() {
  const dots = document.getElementById('question-nav-grid').children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('answered', 'current');
    if (i === currentQuestion) {
      dots[i].classList.add('current');
    }
    if (answers[QUESTIONS[i].id] !== undefined) {
      dots[i].classList.add('answered');
    }
  }
}

/* ==================== 计分 ==================== */
function calculateScores() {
  const dimScores = {};
  DIMENSIONS.forEach(d => {
    const qs = QUESTIONS.filter(q => q.dim === d.id);
    const scores = qs
      .filter(q => answers[q.id] !== undefined)
      .map(q => {
        const raw = answers[q.id];
        // Likert 1-5 → 20-100, Situational 1-4 → 25-100
        if (QUESTIONS.find(x => x.id === q.id).type === 'likert') {
          return raw * 20;
        } else {
          const qObj = QUESTIONS.find(x => x.id === q.id);
          const maxScore = Math.max(...qObj.scores);
          return (raw / maxScore) * 100;
        }
      });
    const avg = scores.length > 0
      ? scores.reduce((a, b) => a + b, 0) / scores.length
      : 50;
    dimScores[d.id] = Math.round(avg);
  });

  const overall = Math.round(
    Object.values(dimScores).reduce((a, b) => a + b, 0) / DIMENSIONS.length
  );

  return { dimScores, overall };
}

function getMaturityLevel(score) {
  if (score >= 85) return { level: 5, label: '高度成熟', emoji: '🏔️',
    summary: '你的心理成熟度处于非常高的水平。你拥有出色的情绪管理能力、清晰的自我认知和深刻的人际洞察力。你能在复杂多变的环境中保持内心稳定，同时持续追求自我成长。你的成熟不仅体现在对自己的把握上，也体现在对他人的理解和关怀中。' };
  if (score >= 70) return { level: 4, label: '成熟稳定', emoji: '🌳',
    summary: '你的心理成熟度处于良好水平，在大多数维度上表现稳定。你具备较好的自我调节能力和人际处理技巧，面对生活的挑战通常能从容应对。在个别维度上仍有进一步提升的空间，这将帮助你在人生的深度和广度上更进一步。' };
  if (score >= 50) return { level: 3, label: '趋于成熟', emoji: '🌿',
    summary: '你正在走向心理成熟的道路上，某些维度已有较好的基础，但也存在一些需要重点关注的领域。这恰恰是成长的最佳阶段——你既有了基本的自我觉察能力，又有充足的提升空间。建议重点关注报告中得分较低的维度。' };
  if (score >= 30) return { level: 2, label: '探索发展', emoji: '🌱',
    summary: '你处于心理成熟的探索发展期。在这个阶段，自我认知还在逐步建立，情绪和行为的调节能力正在形成。这完全正常——每个人的成熟都是一个渐进的过程。建议从自我觉察开始，有意识地关注自己的思维、情绪和行为模式。' };
  return { level: 1, label: '初始成长', emoji: '🌰',
    summary: '你正处于心理成熟的初始成长阶段。这可能意味着你还在学习如何理解和管理自己的内心世界，也可能反映了你当前正经历一些特殊的挑战。请记住，心理成熟不是天生的，而是可以通过学习和练习不断提升的能力。' };
}

function getDimInterpretation(dimId, score) {
  const interpretations = {
    emotional: {
      high: '你拥有出色的情绪调节能力，面对压力和挫折能保持内心平衡。你善于识别和管理自己的情绪，不会让负面情绪长时间控制你的行为。这种稳定性让你在逆境中保持清晰的思维和有效的行动力。',
      mid: '你在多数情况下能够管理好自己的情绪，但在面对较大压力或连续挫折时，情绪波动仍会影响你的判断和行为。有意识地练习正念和情绪觉察可以帮助你进一步提升这方面的能力。',
      low: '你目前的情绪稳定性有待加强。可能容易因小事感到焦虑或烦躁，负面情绪持续的时间较长。建议从基础的呼吸放松、情绪日记等方法开始，逐步建立情绪管理的习惯。'
    },
    selfaware: {
      high: '你对自己有非常清晰和客观的认知，了解自己的优势、局限、动机和情绪模式。你不会轻易被他人的评价左右，同时也能虚心接受建设性的反馈。这种自我认知的清晰度是心理健康的重要基础。',
      mid: '你对自己有一定程度的了解，但在面对批评或重大决定时，自我认知可能会有波动。有时候你可能不确定自己真正想要什么。建议定期进行自我反思，写下自己的感受、想法和行为模式。',
      low: '你目前的自我认知还在发展中。你可能不太清楚自己的真正需求、情绪来源或行为动机。自我认知是心理成熟的基础——建议从关注自己的情绪变化开始，问自己"我此刻感受到了什么？为什么？"'
    },
    responsible: {
      high: '你拥有强烈的责任感和担当精神，对自己的言行负责，也会主动为社会和他人承担义务。你的可靠和诚信赢得了他人的信任。你理解自由与责任的关系，在享受权利的同时不回避应尽的义务。',
      mid: '你有基本的责任意识，在大多数情况下会履行自己的承诺。但在面对困难的抉择或诱惑时，责任感有时会让位于个人便利。培养更强的担当意识，从小事做起，逐步建立可靠的信誉。',
      low: '你目前在责任感方面还有提升空间。可能存在回避责任、推迟承诺或遇事推诿的倾向。责任感是成熟的基石——尝试从准时、守信等小事开始，逐步建立对自己和他人负责的习惯。'
    },
    interpersonal: {
      high: '你拥有成熟的人际交往能力，能够建立和维持深度、真实的关系。你尊重他人的边界，同时也善于维护自己的边界。面对人际冲突时，你能够建设性地沟通，在坚持自我和理解他人之间找到平衡。',
      mid: '你在人际关系方面有一定的基础，但在处理深入的情感连接或人际冲突时可能感到挑战。有时候可能在过于依赖和过于疏离之间摇摆。学习更有效的沟通技巧和边界意识将对你有帮助。',
      low: '你目前在人际成熟度方面还需要成长。可能在建立信任关系、表达需求或处理冲突方面感到困难。成熟的人际关系需要时间和练习——从学习倾听和表达真实感受开始。'
    },
    flexible: {
      high: '你拥有开放而灵活的思维方式，能够从多个角度看问题，欣然接受不同意见和变化。你享受探索新知识和新体验，不固守已有的信念。这种认知灵活性让你在快速变化的世界中保持适应力和创造力。',
      mid: '你在多数情况下能够接受变化和不同观点，但面对核心信念的挑战时，可能会表现出一定程度的防御性。尝试有意识地接触与你观点不同的信息和人群，拓展思维的边界。',
      low: '你目前的思维方式可能比较固化，倾向于用固定的框架来理解世界。变化和不确定性可能让你感到不安。认知灵活性可以通过刻意练习来提升——尝试从相反的角度思考一个问题，或主动接触不熟悉的领域。'
    },
    impulse: {
      high: '你拥有出色的冲动控制能力，能够延迟满足、三思而后行。在做重要决定时，你会充分考虑后果。这种自我控制让你避免了许多因一时冲动而造成的麻烦，也让你更容易实现长期目标。',
      mid: '你在大事上能够保持克制和理性，但在小事或情绪低落时，冲动控制可能会减弱。有时候明知不该做但还是难以抵抗诱惑。建立一些简单的自我约束规则（如24小时冷静期）可以帮助你做得更好。',
      low: '你目前的冲动控制能力有待加强。可能经常在没想清楚后果的情况下就采取行动，或者难以抵抗即时诱惑。冲动控制是一项可以训练的技能——试着在每次行动前暂停几秒，问自己"这真的是我想要的吗？"'
    },
    empathy: {
      high: '你拥有高度的共情能力，能够深刻地理解他人的情感和处境。在与人交往时，你不仅听到了对方的话，还感受到了话语背后的情绪。你善于从不同立场看问题，这让你的人际关系和决策质量都受益。',
      mid: '你有一定程度的共情能力，能够理解他人的基本情绪，但有时可能过于沉浸在自己的视角中。在忙碌或压力大时，对他人的敏感度会下降。尝试在对话中更多地倾听而非评判，将有助于提升你的共情能力。',
      low: '你目前的共情能力还有提升空间。可能在理解他人的情感和需求方面感到挑战，有时无意中伤害了他人而不自知。共情是可以培养的——尝试在与他人交流时，先放下自己的判断，真诚地理解对方的感受和需要。'
    },
    growth: {
      high: '你拥有强烈的自我成长驱动力，主动寻求挑战和学习，乐于接受反馈并持续完善自己。你有清晰的人生方向，同时在追求目标的过程中享受成长本身。这种内在动力是你持续进步的永动机。',
      mid: '你对自己的成长有一定的关注，但主动性可能时强时弱。在舒适区待久了容易失去前进的动力。设定清晰的发展目标并定期回顾，可以帮助你保持成长的动力和方向感。',
      low: '你目前的自我成长驱动力需要加强。可能倾向于待在舒适区，对改变和挑战缺乏热情。成长是一个需要主动投入的过程——试着设定一个小的挑战目标，从完成它的过程中体验成长的乐趣。'
    }
  };

  const interp = interpretations[dimId];
  if (score >= 75) return interp.high;
  if (score >= 50) return interp.mid;
  return interp.low;
}

function getDimSuggestion(dimId, score) {
  const suggestions = {
    emotional: [
      '每天花5分钟进行正念呼吸练习，观察自己的情绪而不急于反应',
      '建立"情绪日记"习惯，记录触发强烈情绪的事件和你的应对方式',
      '学习识别情绪的早期信号，在情绪升级前采取调节措施'
    ],
    selfaware: [
      '每周进行一次自我反思：这周我做了什么？为什么？感受如何？',
      '向信任的朋友或家人询问他们对你的看法，比较与自我认知的差异',
      '使用人格测试工具（如MBTI、大五人格）辅助了解自己的特质'
    ],
    responsible: [
      '从小事开始建立信用：承诺的事情一定要做到，做不到要提前沟通',
      '在遇到问题时，先问"我能做什么"而不是"是谁的错"',
      '参与志愿服务或社区活动，培养对更大范围的责任意识'
    ],
    interpersonal: [
      '练习"非暴力沟通"：观察→感受→需要→请求的四步沟通法',
      '在冲突中先倾听对方的完整表达，再陈述自己的观点',
      '学习在关系中设立健康的边界：既不过度牺牲自己，也不冷漠疏离'
    ],
    flexible: [
      '阅读与你观点相反的文章或书籍，尝试理解对方的逻辑',
      '当计划被打乱时，练习对自己说"这也许是一个新的机会"',
      '定期走出舒适区：学习一项全新技能，接触不同领域的人群'
    ],
    impulse: [
      '建立"24小时冷静期"规则：非必需品消费前先等待一天',
      '在情绪激动时，先做三次深呼吸再开口说话',
      '用"如果……那么……"预设法：提前规划在诱惑情境下的应对方案'
    ],
    empathy: [
      '在对话中练习"先理解，后被理解"的原则',
      '观看不同文化背景的影视作品，体会不同人群的生活体验',
      '在给出建议前，先问对方"你需要我倾听还是给你建议？"'
    ],
    growth: [
      '设定每季度一个具体的成长目标，并定期回顾进展',
      '培养"成长型思维"：将挑战视为学习机会而非威胁',
      '寻找一个导师或榜样，观察和学习他们的成长路径'
    ]
  };

  const dimSugs = suggestions[dimId];
  if (score >= 75) return dimSugs[0];
  if (score >= 50) return dimSugs[1];
  return dimSugs[2];
}

/* ==================== 结果展示 ==================== */
function showResults() {
  document.getElementById('landing-section').style.display = 'none';
  document.getElementById('test-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'block';

  const { dimScores, overall } = calculateScores();
  const maturity = getMaturityLevel(overall);

  // 结果头部
  document.getElementById('maturity-badge').innerHTML =
    `<span class="badge-emoji">${maturity.emoji}</span>`;
  document.getElementById('maturity-badge').className =
    `maturity-badge level-${maturity.level}`;
  document.getElementById('results-level').textContent =
    `${maturity.label} · 综合得分 ${overall} 分`;
  document.getElementById('results-summary').textContent = maturity.summary;

  // 评分卡片
  renderScoreCards(dimScores, overall);

  // 雷达图
  renderRadarChart(dimScores);

  // 柱状图
  renderBarChart(dimScores);

  // 维度详细解读
  renderDimensionAnalysis(dimScores);

  // 综合建议
  renderAdvice(dimScores);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderScoreCards(dimScores, overall) {
  const container = document.getElementById('score-cards');
  const maxDim = Object.entries(dimScores)
    .sort((a, b) => b[1] - a[1])[0];
  const minDim = Object.entries(dimScores)
    .sort((a, b) => a[1] - b[1])[0];
  const maxName = DIMENSIONS.find(d => d.id === maxDim[0]).name;
  const minName = DIMENSIONS.find(d => d.id === minDim[0]).name;

  container.innerHTML = `
    <div class="score-card">
      <div class="score-value">${overall}</div>
      <div class="score-label">综合成熟度</div>
    </div>
    <div class="score-card">
      <div class="score-value">${maxDim[1]}</div>
      <div class="score-label">优势维度 · ${maxName}</div>
    </div>
    <div class="score-card">
      <div class="score-value">${minDim[1]}</div>
      <div class="score-label">成长维度 · ${minName}</div>
    </div>
    <div class="score-card">
      <div class="score-value">${DIMENSIONS.length}</div>
      <div class="score-label">测评维度</div>
    </div>
  `;
}

function renderRadarChart(dimScores) {
  const container = document.getElementById('radar-chart');
  // 清空旧图表
  const old = echarts.getInstanceByDom(container);
  if (old) old.dispose();
  const chart = echarts.init(container);

  const indicator = DIMENSIONS.map(d => ({
    name: d.name.length > 5 ? d.name.replace(/^(.{4})/, '$1\n') : d.name,
    max: 100
  }));

  const data = DIMENSIONS.map(d => dimScores[d.id]);

  const isMobile = container.clientWidth < 500;

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(p) {
        return `${p.name.replace('\n', '')}<br/>得分：<b>${p.value}</b> / 100`;
      }
    },
    legend: {
      bottom: 0,
      data: ['你的成熟度画像'],
      textStyle: { color: '#636E72', fontSize: isMobile ? 11 : 13 }
    },
    radar: {
      center: isMobile ? ['50%', '50%'] : ['50%', '48%'],
      radius: isMobile ? '58%' : '62%',
      nameGap: isMobile ? 8 : 12,
      indicator: indicator,
      axisName: {
        color: '#2D3436',
        fontSize: isMobile ? 10 : 12,
        fontWeight: 500,
        overflow: 'truncate',
        width: 60
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(44,95,124,0.02)', 'rgba(44,95,124,0.02)']
        }
      },
      splitLine: {
        lineStyle: { color: 'rgba(44,95,124,0.15)' }
      },
      axisLine: {
        lineStyle: { color: 'rgba(44,95,124,0.3)' }
      }
    },
    series: [{
      name: '心理成熟度',
      type: 'radar',
      data: [{ value: data, name: '你的成熟度画像' }],
      symbol: 'circle',
      symbolSize: isMobile ? 4 : 5,
      lineStyle: { color: '#2C5F7C', width: 2 },
      areaStyle: { color: 'rgba(44,95,124,0.15)' },
      itemStyle: {
        color: '#2C5F7C',
        borderColor: '#fff',
        borderWidth: 2
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => { chart.resize(); });
}

function renderBarChart(dimScores) {
  const container = document.getElementById('bar-chart');
  const oldBar = echarts.getInstanceByDom(container);
  if (oldBar) oldBar.dispose();
  const chart = echarts.init(container);

  const names = DIMENSIONS.map(d => d.name.split('').join('\n'));
  const data = DIMENSIONS.map(d => dimScores[d.id]);
  const colors = DIM_COLORS;
  const isMobile = container.clientWidth < 500;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: function(p) {
        return `${p[0].name.replace(/\n/g, '')}<br/>得分：<b>${p[0].value}</b> / 100`;
      }
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: isMobile ? '18%' : '14%',
      top: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: names,
      axisLabel: {
        fontSize: isMobile ? 11 : 13,
        color: '#636E72',
        interval: 0,
        align: 'center'
      },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}',
        color: '#989DA0',
        fontSize: isMobile ? 10 : 11
      },
      splitLine: {
        lineStyle: { color: 'rgba(0,0,0,0.06)' }
      }
    },
    series: [{
      type: 'bar',
      data: data.map((v, i) => ({
        value: v,
        itemStyle: {
          color: colors[i],
          borderRadius: v > 0 ? [6, 6, 0, 0] : [0, 0, 6, 6]
        }
      })),
      barWidth: isMobile ? '60%' : '55%',
      label: {
        show: true,
        position: 'top',
        fontSize: isMobile ? 10 : 11,
        fontWeight: 600,
        color: '#636E72',
        formatter: '{c}'
      },
      emphasis: {
        itemStyle: { opacity: 0.8 }
      }
    }]
  };

  chart.setOption(option);
  window.addEventListener('resize', () => { chart.resize(); });
}

function renderDimensionAnalysis(dimScores) {
  const container = document.getElementById('dimension-analysis-list');
  container.innerHTML = '';

  // 按得分排序
  const sorted = [...DIMENSIONS].map(d => ({
    ...d,
    score: dimScores[d.id]
  })).sort((a, b) => b.score - a.score);

  sorted.forEach(dim => {
    const barColor = dim.score >= 75 ? '#27AE60' :
                     dim.score >= 50 ? '#F39C12' : '#E74C3C';
    const levelText = dim.score >= 75 ? '优势维度' :
                      dim.score >= 50 ? '发展维度' : '待提升维度';

    const card = document.createElement('div');
    card.className = 'dimension-card';
    card.style.borderLeftColor = dim.color;
    card.innerHTML = `
      <div class="dim-header">
        <span class="dim-name" style="color:${dim.color}">
          ${dim.icon} ${dim.name} <span style="font-size:0.75rem;color:${barColor};margin-left:6px;">${levelText}</span>
        </span>
        <span class="dim-score" style="color:${dim.color}">${dim.score}<span style="font-size:0.8rem">/100</span></span>
      </div>
      <div class="dim-bar-wrapper">
        <div class="dim-bar-fill" style="width:${dim.score}%;background:${dim.color};"></div>
      </div>
      <p class="dim-interpretation">${getDimInterpretation(dim.id, dim.score)}</p>
      <div class="dim-suggestion">
        <strong>💡 提升建议：</strong>${getDimSuggestion(dim.id, dim.score)}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderAdvice(dimScores) {
  const container = document.getElementById('advice-section');
  const sorted = [...DIMENSIONS].map(d => ({
    ...d,
    score: dimScores[d.id]
  })).sort((a, b) => a.score - b.score);

  const lowest = sorted.slice(0, 3);
  const highest = sorted.slice(-2).reverse();

  let adviceItems = '';

  // 对优势维度的建议
  highest.forEach((dim, i) => {
    adviceItems += `
      <div class="advice-item">
        <span class="advice-icon">${i + 1}</span>
        <span><strong style="color:${dim.color}">发挥你的${dim.name}优势：</strong>这是你的突出优势，可以在工作和生活中更多地运用这项能力，同时也帮助身边的人在这方面成长。</span>
      </div>`;
  });

  // 对弱项的针对性建议
  lowest.forEach((dim, i) => {
    adviceItems += `
      <div class="advice-item">
        <span class="advice-icon">${i + 3}</span>
        <span><strong style="color:${dim.color}">重点提升${dim.name}：</strong>${getDimSuggestion(dim.id, dim.score)}</span>
      </div>`;
  });

  adviceItems += `
    <div class="advice-item">
      <span class="advice-icon">6</span>
      <span><strong>保持耐心与自我关怀：</strong>心理成熟是一个终身的旅程，不是一场竞赛。庆祝自己的进步，包容自己的不足，持续的自我关怀比苛责更能推动成长。</span>
    </div>`;

  container.innerHTML = `
    <h2>个性化成长建议</h2>
    <div class="advice-list">${adviceItems}</div>
  `;
}

// ===== 1. 常量定义 =====
const STORAGE_KEY = 'dark_triad_test_history';
const MAX_HISTORY = 30;
const TOTAL_QUESTIONS = 27;

// SD3 常模数据（Jones & Paulhus, 2014）
const NORMS = {
    mach: { mean: 3.1, sd: 0.76, label: '马基雅维利主义' },
    narc: { mean: 2.8, sd: 0.88, label: '自恋' },
    psych: { mean: 2.4, sd: 1.0, label: '精神病态' }
};

// ===== 2. 维度定义 =====
const DIMENSIONS = [
    {
        id: 'mach',
        name: '马基雅维利主义',
        emoji: '♟️',
        color: '#D4AF37',
        desc: '策略性操纵、情感冷酷、为达目的不择手段的倾向',
        highDesc: '你擅长策略性思考，善于在复杂的人际博弈中找到最优解。你能保持情感距离来做决策，这在某些情境中是优势——但别忘了，真诚的关系有时比"赢"更重要。',
        midDesc: '你在人际交往中既有策略意识也有真诚的一面，能在"算"与"信"之间找到不错的平衡。',
        lowDesc: '你天性坦诚，不喜欢在人际关系中搞"权谋"。你的真诚是稀缺品质，很多人都愿意信任你。'
    },
    {
        id: 'narc',
        name: '自恋',
        emoji: '👑',
        color: '#C41E3A',
        desc: '自我中心、优越感、渴望赞美与关注、缺乏共情的倾向',
        highDesc: '你对自己有很高的评价，也愿意站在聚光灯下。自信是好事，但如果过度需要外界认可，可能会让你的快乐建立在别人的评价上。真正的自信不需要聚光灯证明。',
        midDesc: '你有健康的自我价值感，既能欣赏自己的优点，也愿意给别人舞台。这种平衡让你在人群中既有存在感又受欢迎。',
        lowDesc: '你天性谦逊，不太愿意成为焦点。你看重的是内在价值而非外在光环——这种品质在现代社会越来越珍贵。'
    },
    {
        id: 'psych',
        name: '精神病态',
        emoji: '🦂',
        color: '#4B6E8C',
        desc: '冷漠无情、行为冲动、无视社会规范、缺乏悔意的倾向',
        highDesc: '你在高压情境下能保持冷静，不容易被情绪左右决定。这是一种罕见的心理韧性。但要注意：完全无视规则和他人感受最终会反噬自己——没有谁是孤岛。',
        midDesc: '你在遵守规则和追求自我之间找到了不错的平衡，既能适应社会规范也不会委屈自己。',
        lowDesc: '你有较强的道德感和同理心，能顾及他人感受、遵守社会规范。这种"良心"不是弱点，而是人类社会运转的基石。'
    }
];

// ===== 3. 题目数据（SD3 完整27题，李克特5点量表） =====
const QUESTIONS = [
    // --- 马基雅维利主义 (9题) ---
    { id: 1,  dim: 'mach', text: '向他人透露自己的秘密是不明智的。', dimension: '马基雅维利主义', reversed: false },
    { id: 2,  dim: 'mach', text: '我喜欢用巧妙的手段来达到自己的目的。', dimension: '马基雅维利主义', reversed: false },
    { id: 3,  dim: 'mach', text: '无论如何，都要让那些重要人物站在你这边。', dimension: '马基雅维利主义', reversed: false },
    { id: 4,  dim: 'mach', text: '避免直接冲突是明智的，因为别人未来可能对你有用。', dimension: '马基雅维利主义', reversed: false },
    { id: 5,  dim: 'mach', text: '留心收集那些将来可以用来对付他人的信息是明智的。', dimension: '马基雅维利主义', reversed: false },
    { id: 6,  dim: 'mach', text: '你应该等待合适的时机来报复曾经伤害过你的人。', dimension: '马基雅维利主义', reversed: false },
    { id: 7,  dim: 'mach', text: '为了维护自己的声誉，有些事情不该让别人知道。', dimension: '马基雅维利主义', reversed: false },
    { id: 8,  dim: 'mach', text: '做计划时，首先要确保让自己受益，而不是别人。', dimension: '马基雅维利主义', reversed: false },
    { id: 9,  dim: 'mach', text: '大多数人是可以被操纵的——只要你掌握了方法。', dimension: '马基雅维利主义', reversed: false },

    // --- 自恋 (9题，其中第2、6、8题为反向计分) ---
    { id: 10, dim: 'narc', text: '别人把我看作天生的领导者。', dimension: '自恋', reversed: false },
    { id: 11, dim: 'narc', text: '我讨厌成为众人瞩目的焦点。', dimension: '自恋', reversed: true },
    { id: 12, dim: 'narc', text: '没有我在场，很多集体活动都会变得很无趣。', dimension: '自恋', reversed: false },
    { id: 13, dim: 'narc', text: '我知道自己很特别，因为周围的人都一直这么告诉我。', dimension: '自恋', reversed: false },
    { id: 14, dim: 'narc', text: '我热衷于结识那些有地位或影响力的大人物。', dimension: '自恋', reversed: false },
    { id: 15, dim: 'narc', text: '如果有人当面称赞我，我会感到不好意思。', dimension: '自恋', reversed: true },
    { id: 16, dim: 'narc', text: '我曾经被身边的人比作名人或公众人物。', dimension: '自恋', reversed: false },
    { id: 17, dim: 'narc', text: '我只是个普通人，没什么特别的。', dimension: '自恋', reversed: true },
    { id: 18, dim: 'narc', text: '我坚持要得到我应得的尊重和认可。', dimension: '自恋', reversed: false },

    // --- 精神病态 (9题，其中第2、7题为反向计分) ---
    { id: 19, dim: 'psych', text: '我喜欢报复那些压制或冒犯过我的人。', dimension: '精神病态', reversed: false },
    { id: 20, dim: 'psych', text: '我会主动避开危险的或有风险的情况。', dimension: '精神病态', reversed: true },
    { id: 21, dim: 'psych', text: '如果被人欺负了，报复必须来得又快又狠。', dimension: '精神病态', reversed: false },
    { id: 22, dim: 'psych', text: '身边人常说我有时候会失控，做事不顾后果。', dimension: '精神病态', reversed: false },
    { id: 23, dim: 'psych', text: '我承认，我确实可以对人很刻薄。', dimension: '精神病态', reversed: false },
    { id: 24, dim: 'psych', text: '惹到我的人最后总是会后悔。', dimension: '精神病态', reversed: false },
    { id: 25, dim: 'psych', text: '我从来没有惹上过法律方面的麻烦。', dimension: '精神病态', reversed: true },
    { id: 26, dim: 'psych', text: '我不介意和不太熟的人发生亲密关系。', dimension: '精神病态', reversed: false },
    { id: 27, dim: 'psych', text: '为了得到我想要的，我什么话都说得出口。', dimension: '精神病态', reversed: false }
];

// Likert 选项
const LIKERT_OPTIONS = [
    { label: '非常同意', value: 5 },
    { label: '比较同意', value: 4 },
    { label: '中立',     value: 3 },
    { label: '比较不同意', value: 2 },
    { label: '非常不同意', value: 1 }
];

// ===== 4. 结果类型定义 =====
const RESULT_TYPES = {
    'low-dark': {
        id: 'low-dark',
        name: '阳光普照型',
        emoji: '☀️',
        tagline: '暗黑指数极低——你是人群中的那束温暖的光',
        desc: '你的暗黑三联征得分全部处于偏低水平，属于人群中那部分特别温暖、真诚、富有同理心的人。你把人际关系建立在信任和合作之上，而不是算计和控制。这不是"天真"，而是一种在这个复杂世界里难得的清澈品质。',
        analysis: '在学术研究中，低暗黑特质通常与更高的生活满意度、更稳定的人际关系、更少的冲突行为相关联。你不喜欢操纵他人，也无意争夺聚光灯，更不会用冷漠来保护自己。你的力量来自真诚——这在长期关系中是最可持续的策略。',
        advice: [
            { title: '保持警惕心', text: '你的善良是优点，但在复杂环境中也要学会识别"暗黑特质"较高的人，避免被利用。好人值得被保护——包括被你自己保护。' },
            { title: '自信不等于自恋', text: '适当的自我推销和自信表达不是你"变坏了"，而是让世界看到你的价值。' },
            { title: '继续做你', text: '在这个充满博弈的世界里，你的真诚是稀缺资源。不需要为了"适应"而改变自己的底色。' }
        ],
        scores: { mach: '低', narc: '低', psych: '低' }
    },
    'mach-dominant': {
        id: 'mach-dominant',
        name: '深谋远虑型',
        emoji: '♟️',
        tagline: '你是人际博弈中的棋手——每一步都经过计算',
        desc: '你的马基雅维利主义维度得分显著高于其他两个维度。你擅长在复杂的社会环境中制定策略、获取优势，能够冷静分析权力动态并为自己谋划最佳位置。你天然理解"人际关系中有博弈"这件事，并愿意为此投入心力。',
        analysis: '马基雅维利主义的核心是策略性社会认知：高度关注人际信息、善于延迟满足等待最佳时机、能够情感抽离做决定。历史上最成功的政治家和企业家往往在这项特质上有较高得分。你的挑战在于：别让"策略"变成唯一的行为模式——有些关系不需要算计，只需真诚。',
        advice: [
            { title: '区分场合', text: '在工作或竞争环境中，策略思维是优势；但在亲密关系里，过于"算"会让对方感到不安。' },
            { title: '定期"卸下"面具', text: '找一个你可以完全不做策略思考的人或场合，让自己偶尔不做棋手。' },
            { title: '信任也是一种策略', text: '有时候，选择信任别人反而是最高效的长期策略——因为信任能换来信任。' }
        ],
        scores: { mach: '高', narc: '中/低', psych: '中/低' }
    },
    'narc-dominant': {
        id: 'narc-dominant',
        name: '聚光灯型',
        emoji: '👑',
        tagline: '舞台中央是你的天然位置——你相信自己是特别的',
        desc: '你的自恋维度得分显著偏高。你对自己的能力、外貌和魅力有很高的自信，喜欢成为关注的焦点，并享受来自他人的赞美和认可。你有强烈的"被看见"需求，并且有足够的魅力来满足这种需求。',
        analysis: '自恋是一把双刃剑。适度的自恋（有时被称为"健康自恋"或"适应性自恋"）能带来高驱动力、抗压能力和领导魅力。但过度依赖外界认可来维持自我价值感，会让你变得脆弱——因为别人可以给予掌声，也可以收回。真正的自信不需要持续的聚光灯。',
        advice: [
            { title: '建立内在自尊', text: '试着从自己的成就和成长中获得满足感，而不总是依赖外界的赞美。做一个"即使没有观众我也很棒"的人。' },
            { title: '练习倾听', text: '在对话中刻意让对方多说，你会发现：有时候"让别人觉得自己重要"比"让别人觉得你重要"更有力量。' },
            { title: '警惕共情缺口', text: '在追逐自己目标的时候，偶尔停下来想一想：这件事对别人有什么影响？这会让你的魅力更持久。' }
        ],
        scores: { mach: '中/低', narc: '高', psych: '中/低' }
    },
    'psych-dominant': {
        id: 'psych-dominant',
        name: '独行猛兽型',
        emoji: '🦂',
        tagline: '你不走寻常路——规则是给别人定的',
        desc: '你的精神病态维度得分显著偏高。你在高压环境中能保持异于常人的冷静，不畏风险、不惧冲突、不受常规束缚。你可能觉得"规则"是约束别人的东西，而你有自己的行事准则。',
        analysis: '精神病态维度高的人在紧急情况或高风险职业中（如外科医生、特种部队、企业家）往往表现出色，因为他们在压力下不会慌乱。但日常生活中的高精神病态容易导致人际关系紧张和冲突。你需要明白：冲动带来的短暂快感，往往以长期代价为结局。',
        advice: [
            { title: '冲动缓冲器', text: '在做重要决定之前，强制自己等待24小时。让你的理性大脑有时间追上来。' },
            { title: '找到合法刺激源', text: '极限运动、竞技游戏、高挑战性工作——这些能给你想要的刺激，但不会伤及无辜。' },
            { title: '建立后果意识', text: '每次行动前问自己：一年后的我会怎么看今天的这个决定？这个简单的问题能帮你避开很多坑。' }
        ],
        scores: { mach: '中/低', narc: '中/低', psych: '高' }
    },
    'mach-narc': {
        id: 'mach-narc',
        name: '魅力操纵型',
        emoji: '🎭',
        tagline: '你有演员的天赋——能精准展现别人想看到的样子',
        desc: '你的马基雅维利主义和自恋维度同时偏高。你不仅渴望关注和赞美，还精通于获取它们的手段。你善于包装自己、影响他人对你的印象，在社交场合游刃有余。你是那种"明明在操纵你，偏偏让你心甘情愿"的人。',
        analysis: '这种组合在政界、娱乐圈、销售领域非常常见。你的优势在于：有足够的魅力让人喜欢你，又有足够的策略让这种喜欢转化为实际利益。风险在于：长期"表演"会让你和真实的自己失去连接，甚至你自己都分不清哪个是真实的你。',
        advice: [
            { title: '保留一块"真我"', text: '在那些不需要你表演的关系里（真正的朋友、家人），试着卸下面具。这不危险，这是休息。' },
            { title: '魅力的长期账本', text: '短期操纵能赢得一场战役，但长期真诚才能赢得整场战争。越往上走，口碑越重要。' },
            { title: '不要低估他人的洞察力', text: '你觉得自己能看透所有人，但很可能有人也在看透你。聪明反被聪明误。' }
        ],
        scores: { mach: '高', narc: '高', psych: '中/低' }
    },
    'mach-psych': {
        id: 'mach-psych',
        name: '冷酷算计型',
        emoji: '🐍',
        tagline: '冷静如冰，精准如刃——情感从不在你的决策公式里',
        desc: '你的马基雅维利主义和精神病态维度同时偏高，而自恋相对不高。这意味着你不太需要聚光灯，更在意实际利益。你能在完全不情绪化的情况下制定和执行策略，是那种"看起来不危险但实际最危险"的类型。',
        analysis: '这种组合的特点是"冷静的攻击性"。你不像自恋者那样需要认可，也不像纯粹的精神病态者那样冲动。你的冷酷是经过计算的，你的攻击是策略性的。这种特质在需要"脏活"的领域（如某些商业竞争、危机管理）可以成为优势，但代价是：你很难体验真正的情感连接。',
        advice: [
            { title: '情感不是弱点', text: '你以为不动情是最优策略，但情感连接是人类社会最强大的黏合剂。偶尔让自己"在意"一下，你会发现回报超乎想象。' },
            { title: '计算"长期"成本', text: '你用冷酷方式得到的东西，可能会以孤独的方式付出代价。把你的人际关系也纳入你的长期策略。' },
            { title: '找一个"锚点"', text: '找到一个你真正在乎的人或事，让它成为你决策时的道德参照点。即使是猛兽，也需要领地的边界。' }
        ],
        scores: { mach: '高', narc: '中/低', psych: '高' }
    },
    'narc-psych': {
        id: 'narc-psych',
        name: '狂暴自恋型',
        emoji: '🔥',
        tagline: '我就是规则——挡我者，后果自负',
        desc: '你的自恋和精神病态维度同时偏高。你不仅觉得自己特殊、值得特殊待遇，而且在受到挑战时会以冲动甚至攻击性的方式回应。你的人格组合就像一辆没有刹车的跑车——马力十足但随时可能失控。',
        analysis: '这种组合被称为"恶性自恋"（Malignant Narcissism），是自恋与精神病态的交叉地带。你有强烈的主导欲和自我中心，同时缺乏抑制冲动的刹车系统。在历史上，这种人格组合既造就了某些"改变游戏规则"的人物，也造成了无数人际关系上的灾难。',
        advice: [
            { title: '学会"暂停键"', text: '当你感觉愤怒或受辱时，给自己5分钟的冷静期。那个让你发火的导火索，90%在5分钟后看起来没那么严重。' },
            { title: '找人做你的"镜子"', text: '找一个你信任且敢于对你说实话的人，定期请ta给你反馈。你需要比任何人都需要外界视角。' },
            { title: '区分"尊重"和"恐惧"', text: '你身边的人对你"客气"不一定是尊重你，可能只是怕你。真正的尊重来自让别人觉得你值得追随，而不是不敢离开。' }
        ],
        scores: { mach: '中/低', narc: '高', psych: '高' }
    },
    'full-dark': {
        id: 'full-dark',
        name: '暗黑完全体',
        emoji: '🌑',
        tagline: '策略+魅力+冷酷——暗黑三联征的终极形态',
        desc: '恭喜（或者说——请注意），你在暗黑三联征的所有三个维度上都得分偏高。你兼具马基雅维利主义者的策略、自恋者的魅力和精神病态者的冷酷。在某些竞技性、高风险的领域（如政治、商业、军事），这种人格组合可能是"最优配置"。但在日常生活中，它更多地意味着：你需要格外小心地管理自己的黑暗面。',
        analysis: '暗黑三联征全部高分的人在社会中占比极低（通常不到5%）。你们是"社交掠食者"的原型，但也可能是最有创造力、最大胆的革新者。关键区别在于：你把这份"暗黑力"用在哪里？是用来获取个人利益不惜伤害他人，还是用来在充满挑战的领域里"做别人不敢做的事"？',
        advice: [
            { title: '选择你的战场', text: '把暗黑特质导向正向竞争——创业、体育竞技、辩论——在这些领域你的特质是资产而非负担。' },
            { title: '建立"不可越"的底线', text: '明确设定几条道德底线（比如不伤害无辜者、不背叛密友），并严格遵守。没有规则的力量最终会毁灭自身。' },
            { title: '找一个平衡者', text: '在你的核心圈子中，有意纳入几位"阳光型"的人。他们的存在会帮你保持人性的一面。' },
            { title: '自省的习惯', text: '定期反思：我今天做的决策，是因为它"正确"，还是仅仅因为它"有用"？两者的区别，就是你与纯粹暗黑者之间的界线。' }
        ],
        scores: { mach: '高', narc: '高', psych: '高' }
    }
};

// ===== 5. 图鉴数据 =====
const ENCYCLOPEDIA_CARDS = [
    {
        id: 'low-dark',
        type: RESULT_TYPES['low-dark'],
        vibe: '温暖真诚，善良不是软弱',
        traits: [
            { emoji: '🤝', name: '真诚合作者', text: '你相信双赢而非零和博弈，人际关系建立在信任上而非算计上' },
            { emoji: '💛', name: '高度共情', text: '你能自然地感受他人的情绪并做出回应，这是你的社交超能力' },
            { emoji: '🧭', name: '道德罗盘', text: '你有清晰的内在道德标准，能分辨对错并据此行动' },
            { emoji: '🌱', name: '成长心态', text: '你不执着于"赢"每一次互动，而是看重长期关系和个人成长' }
        ],
        stats: { mach: 15, narc: 20, psych: 10 }
    },
    {
        id: 'mach-dominant',
        type: RESULT_TYPES['mach-dominant'],
        vibe: '冷静的策略家，人际棋局的解码者',
        traits: [
            { emoji: '🧠', name: '策略思维', text: '你天然用"如果-那么"的框架分析人际关系，总能找到最优策略' },
            { emoji: '🎯', name: '目标导向', text: '你清楚自己要什么，并愿意为长期目标牺牲短期利益' },
            { emoji: '🛡️', name: '情感抽离', text: '你能在需要时保持情感距离做决策，不被情绪干扰判断' },
            { emoji: '📊', name: '信息敏锐', text: '你善于捕捉和利用社会信息，对权力动态有着本能的敏感' }
        ],
        stats: { mach: 85, narc: 35, psych: 25 }
    },
    {
        id: 'narc-dominant',
        type: RESULT_TYPES['narc-dominant'],
        vibe: '聚光灯下的明星，天生的注意力磁铁',
        traits: [
            { emoji: '✨', name: '魅力四射', text: '你有一种让人想靠近的磁场，在社交场合总能快速成为焦点' },
            { emoji: '🏆', name: '驱动力强', text: '对认可和成就的渴望让你不断追求更高的目标' },
            { emoji: '🪞', name: '自我意识强', text: '你时刻关注自己的形象和他人对你的看法，这是你的魔力也是围城' },
            { emoji: '🎤', name: '表达力Max', text: '你善于讲述自己的故事，让别人看到你最好的一面' }
        ],
        stats: { mach: 30, narc: 88, psych: 18 }
    },
    {
        id: 'psych-dominant',
        type: RESULT_TYPES['psych-dominant'],
        vibe: '规则之外的独行者，字典里没有"不可能"',
        traits: [
            { emoji: '⚡', name: '高压无惧', text: '在别人慌乱的局面中你能保持冷静，危机对你来说像兴奋剂' },
            { emoji: '🎲', name: '风险偏好', text: '你对"不确定性"的感觉和别人不一样——那是刺激，不是恐惧' },
            { emoji: '🔓', name: '规则免疫', text: '社会规范对你来说不是绝对命令，你做事有自己的准则' },
            { emoji: '💪', name: '硬核复原力', text: '挫折和批评很难真正伤到你，你的心理外壳比大多数人厚得多' }
        ],
        stats: { mach: 25, narc: 22, psych: 87 }
    },
    {
        id: 'mach-narc',
        type: RESULT_TYPES['mach-narc'],
        vibe: '舞台上的导演，把社交变成艺术',
        traits: [
            { emoji: '🎬', name: '印象管理大师', text: '你在不同场合展现不同的自己，每次都精准地打动目标观众' },
            { emoji: '🎭', name: '魅惑力', text: '你让人心甘情愿地跟随你——不是因为被迫，而是因为被你吸引' },
            { emoji: '🧩', name: '人际拼图师', text: '你看得清每个人想要什么，然后用合适的"饵"钓合适的"鱼"' },
            { emoji: '💎', name: '包装天才', text: '你知道如何把价值呈现为魅力，你在场时很难有人不被你说服' }
        ],
        stats: { mach: 82, narc: 85, psych: 28 }
    },
    {
        id: 'mach-psych',
        type: RESULT_TYPES['mach-psych'],
        vibe: '最危险的猎手——看起来最不像猎手的那个',
        traits: [
            { emoji: '🕶️', name: '隐形操控', text: '你不喧哗不张扬，但每一步都经过精密计算。低调是最致命的伪装' },
            { emoji: '🧊', name: '绝对冷静', text: '在任何情绪化的场景中你都能维持冰点温度，不被带节奏' },
            { emoji: '🔪', name: '精准打击', text: '你知道对手的弱点在哪里，并且只在最佳时机出击' },
            { emoji: '🌫️', name: '难以捉摸', text: '很少有人能真正了解你在想什么——你刻意维持这种信息不对称' }
        ],
        stats: { mach: 88, narc: 20, psych: 80 }
    },
    {
        id: 'narc-psych',
        type: RESULT_TYPES['narc-psych'],
        vibe: '没有刹车的跑车——马力全开，后果自负',
        traits: [
            { emoji: '🌋', name: '爆发力', text: '一旦被触发，你的反应强度和速度远超常人。愤怒是你最强的燃料' },
            { emoji: '👁️', name: '主导欲', text: '你必须站在食物链顶端，对"被轻视"有着极其剧烈的反应' },
            { emoji: '💥', name: '不计后果', text: '当你被情绪或目标驱动时，"后果"这个词不在你的考虑范围内' },
            { emoji: '🏰', name: '自我王国', text: '你的世界观是"以我为中心"构建的，他人要么是臣民要么是敌人' }
        ],
        stats: { mach: 25, narc: 86, psych: 82 }
    },
    {
        id: 'full-dark',
        type: RESULT_TYPES['full-dark'],
        vibe: '暗黑三联征的完美样本——集策略、魅力、冷酷于一身',
        traits: [
            { emoji: '🌑', name: '终极掠食者', text: '你同时拥有猎豹的策略、雄狮的自信和毒蛇的冷酷——三位一体' },
            { emoji: '🧬', name: '暗黑基因', text: '你的暗黑特质不是后天习得的，而是人格结构中的底色' },
            { emoji: '🏛️', name: '权力建筑师', text: '你本能地追求在社交层级中的高位，并愿意为此投入所有资源' },
            { emoji: '⚖️', name: '最后的防线', text: '你的全部挑战在于：用意志力为自己划定道德的边界并守住它' }
        ],
        stats: { mach: 90, narc: 88, psych: 85 }
    }
];

// ===== 6. 状态变量 =====
let currentQuestion = 0;
let answers = {};
let selectedOption = null;
let viewingHistoryId = null;
let resultsShown = false;
let currentScores = null;   // 当前展示的分数（用于分享和兼容历史模式）

// ===== 7. 页面切换辅助 =====
function hideAll() {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
}

function showSection(id) {
    hideAll();
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

// ===== 8. 测试流程 =====
function startTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    resultsShown = false;
    viewingHistoryId = null;

    showSection('test-section');
    document.getElementById('test-section').style.display = 'flex';
    initDots();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initDots() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.textContent = i + 1;
        dot.onclick = () => {
            currentQuestion = i;
            selectedOption = answers[QUESTIONS[i].id] !== undefined ? answers[QUESTIONS[i].id] : null;
            renderQuestion();
        };
        grid.appendChild(dot);
    }
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    selectedOption = answers[q.id] !== undefined ? answers[q.id] : null;

    // 进度
    const pct = Math.round(((currentQuestion + 1) / TOTAL_QUESTIONS) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = (currentQuestion + 1) + ' / ' + TOTAL_QUESTIONS;

    // 题目（不展示维度标签，避免影响作答客观性）
    document.getElementById('qNumber').textContent = '第 ' + (currentQuestion + 1) + ' 题';
    document.getElementById('qText').textContent = q.text;

    // 选项
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    LIKERT_OPTIONS.forEach((opt, i) => {
        const score = opt.value;
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (selectedOption === score) btn.classList.add('selected');

        const indicator = document.createElement('span');
        indicator.className = 'option-indicator';
        indicator.textContent = selectedOption === score ? '✓' : '';

        const text = document.createElement('span');
        text.textContent = opt.label;

        btn.appendChild(indicator);
        btn.appendChild(text);
        btn.onclick = () => selectAnswer(currentQuestion, score, btn);
        optionsEl.appendChild(btn);
    });

    updateNavButtons();
    updateDots();

    // 动画
    const card = document.getElementById('questionCard');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'fadeInUp 0.35s ease';
}

function selectAnswer(qIndex, score, btn) {
    selectedOption = score;
    answers[QUESTIONS[qIndex].id] = score;

    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.querySelectorAll('.option-indicator').forEach(ind => ind.textContent = '');
    btn.querySelector('.option-indicator').textContent = '✓';

    updateNavButtons();
    updateDots();

    // 自动跳转下一题
    if (qIndex < TOTAL_QUESTIONS - 1) {
        setTimeout(() => {
            currentQuestion = qIndex + 1;
            selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
            renderQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    }

    // 全部答完自动跳转结果
    if (Object.keys(answers).length === TOTAL_QUESTIONS) {
        setTimeout(() => showResults(), 400);
    }
}

function updateNavButtons() {
    document.getElementById('btnPrev').disabled = currentQuestion === 0;
    document.getElementById('btnNext').disabled = selectedOption === null;
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.remove('answered', 'current');
        if (answers[QUESTIONS[i].id] !== undefined) dot.classList.add('answered');
        if (i === currentQuestion) dot.classList.add('current');
    });
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        renderQuestion();
    }
}

function nextQuestion() {
    if (selectedOption === null) return;
    if (currentQuestion === TOTAL_QUESTIONS - 1) {
        if (Object.keys(answers).length === TOTAL_QUESTIONS) showResults();
    } else {
        currentQuestion++;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        renderQuestion();
    }
}

// ===== 9. 计分逻辑 =====
function calculateScores() {
    const dimRaw = { mach: 0, narc: 0, psych: 0 };
    const dimCount = { mach: 0, narc: 0, psych: 0 };

    QUESTIONS.forEach(q => {
        let score = answers[q.id] || 0;
        // 反向计分
        if (q.reversed) score = 6 - score;
        dimRaw[q.dim] += score;
        dimCount[q.dim]++;
    });

    // 计算各维度平均分（1-5）
    const avgScores = {};
    for (const dim of ['mach', 'narc', 'psych']) {
        avgScores[dim] = dimCount[dim] > 0 ? parseFloat((dimRaw[dim] / dimCount[dim]).toFixed(2)) : 0;
    }

    return avgScores;
}

function getLevel(score, normKey) {
    const norm = NORMS[normKey];
    const cutoff = norm.sd * 0.5;
    if (score >= norm.mean + cutoff) return 'high';
    if (score <= norm.mean - cutoff) return 'low';
    return 'mid';
}

function getLevelLabel(level) {
    if (level === 'high') return '偏高';
    if (level === 'low') return '偏低';
    return '正常';
}

// ===== 10. 结果类型判定 =====
function determineResultType(scores) {
    const machLevel = getLevel(scores.mach, 'mach');
    const narcLevel = getLevel(scores.narc, 'narc');
    const psychLevel = getLevel(scores.psych, 'psych');

    const highCount = [machLevel, narcLevel, psychLevel].filter(l => l === 'high').length;

    // 全能暗黑型：三个都高
    if (machLevel === 'high' && narcLevel === 'high' && psychLevel === 'high') {
        return 'full-dark';
    }

    // 阳光普照型：三个都不高（都低或都正常或混合）
    if (machLevel !== 'high' && narcLevel !== 'high' && psychLevel !== 'high') {
        return 'low-dark';
    }

    // 双高组合
    if (machLevel === 'high' && narcLevel === 'high') return 'mach-narc';
    if (machLevel === 'high' && psychLevel === 'high') return 'mach-psych';
    if (narcLevel === 'high' && psychLevel === 'high') return 'narc-psych';

    // 单高
    if (machLevel === 'high') return 'mach-dominant';
    if (narcLevel === 'high') return 'narc-dominant';
    if (psychLevel === 'high') return 'psych-dominant';

    return 'low-dark';
}

// ===== 11. 结果展示 =====
function showResults(storedScores, storedTypeKey) {
    if (resultsShown && !storedScores) return;
    resultsShown = true;

    const isHistory = !!storedScores;

    hideAll();
    document.getElementById('results-section').style.display = 'block';

    const scores = storedScores || calculateScores();
    const typeKey = storedTypeKey || determineResultType(scores);
    const typeData = RESULT_TYPES[typeKey];

    // 保存当前分数（用于分享等操作）
    currentScores = scores;

    // 保存历史
    if (!isHistory) saveToHistory(scores, typeKey);

    // 各维度等级
    const levels = {
        mach: getLevel(scores.mach, 'mach'),
        narc: getLevel(scores.narc, 'narc'),
        psych: getLevel(scores.psych, 'psych')
    };

    // 头部
    document.getElementById('resultEmoji').textContent = typeData.emoji;
    document.getElementById('resultName').textContent = typeData.name;
    document.getElementById('resultTagline').textContent = typeData.tagline;

    // 评分卡片
    const maxDim = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    const maxDimData = DIMENSIONS.find(d => d.id === maxDim[0]);
    document.getElementById('scoreOverview').innerHTML = `
        <div class="score-card">
            <div class="score-value">${maxDimData.emoji}</div>
            <div class="score-label">最突出维度 · ${maxDimData.name}</div>
        </div>
        <div class="score-card">
            <div class="score-value">${maxDim[1].toFixed(2)}</div>
            <div class="score-label">最高均分</div>
        </div>
        <div class="score-card">
            <div class="score-value">3</div>
            <div class="score-label">分析维度</div>
        </div>
    `;

    // 雷达图
    renderRadarChart(scores);

    // 维度详情
    renderDimensionDetails(scores, levels);

    // 类型深度分析
    renderTypeAnalysis(typeData);

    // 个性建议
    renderAdvice(typeData);

    // 按钮
    const actionsEl = document.getElementById('resultActions');
    if (isHistory) {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="backToHistory()">← 返回历史</button>
            <button class="action-btn retry-btn" onclick="retakeTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📋 复制结果分享</button>
        `;
    } else {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="retakeTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📋 复制结果分享</button>
            <button class="action-btn history-btn" onclick="showHistory()">📋 历史记录</button>
            <button class="action-btn encyclopedia-btn" onclick="showEncyclopedia()">📖 暗黑人格图鉴</button>
        `;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // resize 监听
    const handler = () => {
        const dom = document.getElementById('radarChart');
        if (dom._echart) dom._echart.resize();
    };
    window.addEventListener('resize', handler, { once: true });
}

// ===== 12. ECharts 雷达图 =====
function renderRadarChart(scores) {
    const dom = document.getElementById('radarChart');
    if (dom._echart) dom._echart.dispose();
    const chart = echarts.init(dom);
    dom._echart = chart;

    const dimData = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        max: 5,
        value: scores[d.id]
    }));

    // 常模参考线
    const normData = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        max: 5,
        value: NORMS[d.id].mean
    }));

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(p) {
                if (p.seriesName === '你的得分') {
                    return p.name + '<br/>你的均分: <b>' + p.value.toFixed(2) + '</b>';
                }
                return p.name + '<br/>常模均值: <b>' + p.value.toFixed(2) + '</b>';
            },
            backgroundColor: '#1A1A28',
            borderColor: '#2A2A3C',
            textStyle: { color: '#E0DCE0', fontSize: 13 }
        },
        legend: {
            bottom: 5,
            data: ['你的得分', '常模均值'],
            textStyle: { color: '#9B8B9B', fontSize: 12 }
        },
        radar: {
            center: ['50%', '50%'],
            radius: '60%',
            indicator: dimData,
            axisName: {
                color: '#E0DCE0',
                fontSize: 13,
                fontWeight: 600
            },
            axisLine: { lineStyle: { color: '#2A2A3C' } },
            splitLine: { lineStyle: { color: '#2A2A3C' } },
            splitArea: {
                areaStyle: { color: ['rgba(196,30,58,0.03)', 'rgba(196,30,58,0.06)'] }
            }
        },
        series: [
            {
                type: 'radar',
                name: '常模均值',
                data: [{ value: normData.map(d => d.value), name: '常模均值' }],
                symbol: 'none',
                lineStyle: { color: '#6B5B6B', width: 1.5, type: 'dashed' },
                areaStyle: { color: 'rgba(155,139,155,0.04)' }
            },
            {
                type: 'radar',
                name: '你的得分',
                data: [{ value: dimData.map(d => d.value), name: '你的得分' }],
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(196,30,58,0.35)' },
                            { offset: 1, color: 'rgba(212,175,55,0.1)' }
                        ]
                    }
                },
                lineStyle: { color: '#C41E3A', width: 2.5 },
                itemStyle: { color: '#C41E3A', borderColor: '#1A1A28', borderWidth: 2 },
                symbol: 'circle',
                symbolSize: 8
            }
        ]
    };
    chart.setOption(option);
}

// ===== 13. 维度详情卡片 =====
function renderDimensionDetails(scores, levels) {
    const container = document.getElementById('dimensionDetails');
    let html = '';

    DIMENSIONS.forEach(dim => {
        const level = levels[dim.id];
        const levelLabel = getLevelLabel(level);
        const levelClass = level === 'high' ? 'high' : level === 'low' ? 'low' : 'mid';
        const desc = level === 'high' ? dim.highDesc : level === 'low' ? dim.lowDesc : dim.midDesc;

        html += `
            <div class="dim-card" style="border-left-color: ${dim.color};">
                <div class="dim-card-header">
                    <span class="dim-card-name">${dim.emoji} ${dim.name}</span>
                    <span class="dim-card-score ${levelClass}">均分 ${scores[dim.id].toFixed(2)} · ${levelLabel}</span>
                </div>
                <div class="dim-card-bar">
                    <div class="dim-card-bar-fill" style="width:${(scores[dim.id] / 5 * 100).toFixed(0)}%; background: ${dim.color};"></div>
                </div>
                <p class="dim-card-desc">${desc}</p>
                <p class="dim-card-norm">📊 常模参考：均值 ${NORMS[dim.id].mean.toFixed(1)} ± ${NORMS[dim.id].sd.toFixed(2)}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ===== 14. 类型深度分析 =====
function renderTypeAnalysis(typeData) {
    document.getElementById('typeAnalysis').innerHTML = `
        <div class="analysis-card">
            <h4>${typeData.emoji} ${typeData.name} — 深度画像</h4>
            <p class="analysis-text">${typeData.analysis}</p>
        </div>
    `;
}

// ===== 15. 建议 =====
function renderAdvice(typeData) {
    const container = document.getElementById('adviceContent');
    let html = '';
    typeData.advice.forEach(a => {
        html += `
            <div class="advice-card">
                <h5>💡 ${a.title}</h5>
                <p>${a.text}</p>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ===== 16. 按钮操作 =====
function retakeTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    viewingHistoryId = null;
    resultsShown = false;
    currentScores = null;
    hideAll();
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLanding() {
    viewingHistoryId = null;
    resultsShown = false;
    hideAll();
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
    const name = document.getElementById('resultName').textContent;
    const tagline = document.getElementById('resultTagline').textContent;
    const scores = currentScores || calculateScores();
    const parts = DIMENSIONS.map(d => d.emoji + ' ' + d.name + '：' + scores[d.id].toFixed(2));
    const text = `🌑 我在暗黑人格测试中的结果是：${name}！\n「${tagline}」\n\n📊 各维度均分：\n${parts.join('\n')}\n\n快来测测你的暗黑人格指数吧～`;

    if (navigator.share) {
        navigator.share({ title: '暗黑人格测试 - W-Test', text: text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.share-btn');
            const orig = btn.textContent;
            btn.textContent = '✅ 已复制！';
            setTimeout(() => { btn.textContent = orig; }, 2000);
        }).catch(() => {});
    }
}

// ===== 17. 历史记录 =====
function saveToHistory(scores, typeKey) {
    const typeData = RESULT_TYPES[typeKey];
    const entry = {
        id: Date.now(),
        date: new Date().toLocaleString('zh-CN', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        }).replace(/\//g, '/'),
        resultType: typeKey,
        resultName: typeData.name,
        resultEmoji: typeData.emoji,
        scores: { ...scores }
    };

    try {
        const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        history.unshift(entry);
        if (history.length > MAX_HISTORY) history.pop();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
        console.warn('历史记录保存失败:', e);
    }
}

function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

function showHistory() {
    hideAll();
    document.getElementById('history-section').style.display = 'block';
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHistoryList() {
    const history = loadHistory();
    const listEl = document.getElementById('historyList');
    const emptyEl = document.getElementById('historyEmpty');

    if (history.length === 0) {
        listEl.innerHTML = '';
        emptyEl.style.display = 'block';
        return;
    }

    emptyEl.style.display = 'none';

    let html = '';
    history.forEach((record, i) => {
        const maxDim = Object.entries(record.scores).sort((a, b) => b[1] - a[1])[0];
        const maxDimData = DIMENSIONS.find(d => d.id === maxDim[0]);
        html += `
            <div class="history-card" onclick="viewHistoryResult(${record.id})">
                <div class="history-card-main">
                    <span class="history-emoji">${record.resultEmoji}</span>
                    <div class="history-info">
                        <div class="history-name">${record.resultName}</div>
                        <div class="history-date">${record.date}</div>
                    </div>
                </div>
                <div class="history-scores">
                    <span class="history-top">${maxDimData.emoji} ${maxDimData.name} ${maxDim[1].toFixed(2)}</span>
                </div>
                <button class="history-del" onclick="event.stopPropagation();deleteHistoryItem(${record.id})" title="删除">✕</button>
            </div>
        `;
    });

    listEl.innerHTML = html;
}

function viewHistoryResult(id) {
    const history = loadHistory();
    const record = history.find(r => r.id === id);
    if (!record) return;
    viewingHistoryId = id;
    resultsShown = false;
    showResults(record.scores, record.resultType);
}

function backToHistory() {
    viewingHistoryId = null;
    resultsShown = false;
    currentScores = null;
    hideAll();
    document.getElementById('history-section').style.display = 'block';
    const dom = document.getElementById('radarChart');
    if (dom._echart) { dom._echart.dispose(); dom._echart = null; }
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条记录吗？')) return;
    const history = loadHistory();
    const filtered = history.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    if (viewingHistoryId === id) viewingHistoryId = null;
    renderHistoryList();
}

function clearHistory() {
    if (!confirm('确定要清空全部历史记录吗？此操作不可恢复。')) return;
    localStorage.removeItem(STORAGE_KEY);
    viewingHistoryId = null;
    renderHistoryList();
}

// ===== 18. 图鉴 =====
function showEncyclopedia() {
    hideAll();
    document.getElementById('encyclopedia-section').style.display = 'block';
    renderEncyclopedia();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderEncyclopedia() {
    const grid = document.getElementById('encyclopediaGrid');
    let html = '';

    ENCYCLOPEDIA_CARDS.forEach(card => {
        const t = card.type;
        html += `
            <div class="ency-card" onclick="this.classList.toggle('flipped')">
                <div class="ency-card-inner">
                    <div class="ency-card-front">
                        <div class="ency-card-emoji">${t.emoji}</div>
                        <div class="ency-card-name">${t.name}</div>
                        <div class="ency-card-tagline">${t.tagline}</div>
                        <div class="ency-card-vibe">${card.vibe}</div>
                        <div class="ency-card-hint">👆 点击翻看详情</div>
                    </div>
                    <div class="ency-card-back">
                        <div class="ency-back-header">${t.emoji} ${t.name}</div>
                        <div class="ency-traits">
                            ${card.traits.map(tr => `
                                <div class="ency-trait-item">
                                    <span class="ency-trait-emoji">${tr.emoji}</span>
                                    <div class="ency-trait-content">
                                        <span class="ency-trait-name">${tr.name}</span>
                                        <span class="ency-trait-text">${tr.text}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="ency-bars">
                            ${['mach','narc','psych'].map(dim => {
                                const dimData = DIMENSIONS.find(d => d.id === dim);
                                return `
                                    <div class="ency-bar-row">
                                        <span class="ency-bar-label">${dimData.emoji}</span>
                                        <div class="ency-bar-track">
                                            <div class="ency-bar-fill" style="width:${card.stats[dim]}%; background:${dimData.color};"></div>
                                        </div>
                                        <span class="ency-bar-val">${card.stats[dim]}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

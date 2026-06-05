/* ===== 维度定义 ===== */
const DIMENSIONS = [
    { id: 'anxiety',     name: '依恋焦虑',   emoji: '😰', color: '#FF6B9D',
      desc: '在亲密关系中感到不安、害怕被抛弃的程度',
      highDesc: '你在感情中容易焦虑，总担心对方不够爱你或会离开。这让你很敏感，但也说明你非常重视这段关系。',
      midDesc: '你有适度的情感敏感度，偶尔会担忧但不会失控。',
      lowDesc: '你在感情中内心很稳，不太会为"ta爱不爱我"这种事内耗。' },
    { id: 'avoidance',   name: '依恋回避',   emoji: '🧊', color: '#5B9BD5',
      desc: '对亲密关系和情感依赖感到不适，倾向于保持距离的程度',
      highDesc: '你本能地抗拒过度亲密，对"腻歪"有天然防御。独立是你的保护色，但可能让人误以为你不在乎。',
      midDesc: '你能享受亲密但也会保留个人空间，在拿捏距离方面比较自如。',
      lowDesc: '你不怕靠近，愿意敞开心扉，亲密对你来说是加分项而不是负担。' },
    { id: 'possessive',  name: '占有欲',     emoji: '🦁', color: '#FF8E7A',
      desc: '希望对伴侣拥有主导权、难以容忍"共享"的程度',
      highDesc: '你的爱带着浓浓的"主权宣示"，醋意来得快且明显。这是你的在乎方式，但小心让对感觉窒息。',
      midDesc: '你有正常的占有欲，会吃醋但不至于失控，大多时候能理性处理。',
      lowDesc: '你心态开放，不太会因为"谁和谁走得近"这种事儿纠结，信任感拉满。' },
    { id: 'romantic',    name: '浪漫表达',   emoji: '💐', color: '#FFB347',
      desc: '通过仪式感、情话、惊喜等方式表达爱意的倾向',
      highDesc: '你是行走的恋爱甜宠文主角！仪式感、小作文、surprise——这些是你的本能操作。和你恋爱体验感满分。',
      midDesc: '你有浪漫的一面但不会过度，知道在合适的时机给出合适的表达。',
      lowDesc: '你不擅长或者不太热衷于"花式秀恩爱"，觉得爱靠行动体现，不靠嘴皮子和排场。' },
    { id: 'independence',name: '独立性',     emoji: '🦅', color: '#4ECDC4',
      desc: '在感情中保持自我边界、不因恋爱而失去个人追求的程度',
      highDesc: '你的自我边界感极强，"恋爱是锦上添花不是全部"是你的人生信条。自先沉稳，而后爱人。',
      midDesc: '你在独立和依赖之间找到了不错的平衡，能黏人也能自处。',
      lowDesc: '你容易在恋爱中丢失自我，过度迁就对方。小心：爱别人之前，先爱自己。' },
    { id: 'trust',       name: '信任感',     emoji: '🤝', color: '#7C5CFC',
      desc: '对伴侣的忠诚和可靠性持有积极预期的程度',
      highDesc: '你内心安全感十足，不查岗不翻手机，相信爱就是相信。这种松弛感是你的恋爱超能力。',
      midDesc: '你有基本的信任能力，偶尔会多想但能自我调节。',
      lowDesc: '你很难完全相信一个人，总在"ta会不会骗我"的疑虑中反复横跳。曾经被辜负过吧？' },
];

/* ===== 恋爱类型定义 ===== */
const LOVE_TYPES = {
    'chaotic': {
        name: '纠结矛盾型',
        emoji: '🎭',
        tagline: '又想要又害怕，内心上演八百集连续剧',
        oneLiner: '你是恋爱中最"纠结"的存在——渴望被爱又害怕靠近，像一只想伸爪又缩回去的猫。这不是矫情，这是你保护自己的方式。',
        analysis: `你属于心理学上的"恐惧型依恋"（Fearful-Avoidant），兼具高焦虑和高回避的特征。

你在感情中最大的矛盾是：<strong>既渴望又逃离</strong>。别人对你好，你怀疑有诈；别人稍微冷淡，你立刻"看吧果然不爱我"。你的内心像在同时播放浪漫喜剧和悬疑惊悚片。

这不是"作"，而是一种深层的不安全感在驱动。你可能在过往经历中受过伤，或者成长环境中缺乏稳定的情感支持。好消息是：<strong>意识到自己的模式，就是改变的开始</strong>。`,
        advice: [
            { title: '学会"暂停"', text: '当你想说伤人的话时，先深呼吸3秒。那个冲动是旧伤在说话，不是真相。' },
            { title: '小步尝试信任', text: '不需要一夜之间变成"安全型"。从"今天我相信ta说的这一句话"开始，一点点来。' },
            { title: '写下你的感受', text: '把脑内的纠结写出来——你会惊讶地发现，写在纸上比在脑子里反复循环清晰得多。' },
        ],
    },
    'anxious': {
        name: '恋爱脑上头型',
        emoji: '💗',
        tagline: '爱到深处自然"黏"，你是我戒不掉的瘾',
        oneLiner: '你的爱情词典里没有"适可而止"——爱就要全部投入，轰轰烈烈。这种热烈很动人，但也要小心别把自己烧没了。',
        analysis: `你属于心理学上的"痴迷型依恋"（Anxious-Preoccupied），典型特征是<strong>高度焦虑+低回避</strong>。

在你眼里，爱情是生活中最重要的事。对方一句"在忙"能让你内耗一整天，一句"想你"又能让你瞬间复活。你的快乐和痛苦高度绑定在伴侣的一举一动上。

你的优势是<strong>情感浓度极高</strong>——你的伴侣永远不会怀疑自己是否"被爱着"。但风险在于，你容易在关系中失去自我边界，把所有情绪鸡蛋放在一个篮子里。

记住：你可以全力去爱，但也请留一点力气给自己。`,
        advice: [
            { title: '培养"我"的时间', text: '每周至少有一天只做自己的事——不是"等ta的消息"，而是画一幅画、跑五公里、学个新技能。' },
            { title: '建立自己的社交圈', text: '不要把伴侣当唯一的情感出口。朋友、家人、兴趣社群——多几个支点，你站得更稳。' },
            { title: '练习"等待"', text: 'ta没回消息的时候，不要脑补灾难片。大概率ta只是在忙/在打游戏/手机没电。真的。' },
        ],
    },
    'avoidant': {
        name: '回避型依恋',
        emoji: '🫧',
        tagline: '靠近会窒息，离开会想念——我就是这么矛盾这么酷',
        oneLiner: '你像是爱情里的"冰山美人"——外表冷若冰霜，内心翻江倒海。不是不爱，是不知道怎么安全地爱。',
        analysis: `你属于心理学上的"疏离型依恋"（Dismissive-Avoidant），核心特征是<strong>高回避+低焦虑</strong>。

你觉得"独立"是你身上最值钱的标签。对方太黏人你会烦，太冷淡你也无所谓。分手？没问题，一个人更自在。当对方想聊"我们之间怎么了"的时候，你的第一反应是——逃。

表面看是酷，底层其实是<strong>对亲密关系的不信任</strong>。你可能从小被教育"不能太依赖别人"，或者曾经的脆弱被辜负过，于是学会了把情绪锁在保险箱里。

独立是优点，但<strong>过于独立会让亲密关系失去"亲密"</strong>。偶尔允许自己"需要一下别人"，天不会塌。`,
        advice: [
            { title: '允许自己"需要"', text: '试着对伴侣说一次"我今天心情不好，能陪陪我吗？"。这不是示弱，这是把围墙打开一扇小门。' },
            { title: '识别"逃跑信号"', text: '当对方想深入沟通而你本能想回避时，告诉自己："这次我留下来，听ta说完"。' },
            { title: '从小事开始分享', text: '不需要一上来就掏心掏肺。今天分享一首歌、一张云的照片，慢慢习惯"被看见"的感觉。' },
        ],
    },
    'secure': {
        name: '安全感满格型',
        emoji: '🏠',
        tagline: '爱得从容，处得舒服——你是恋爱中的"稀有物种"',
        oneLiner: '你在爱情里有让人羡慕的松弛感：不查岗不疑心不内耗，爱得起也放得下。你是行走的"稳稳的幸福"。',
        analysis: `恭喜！你属于心理学上的<strong>"安全型依恋"</strong>（Secure Attachment），是依恋理论中最健康的类型。

你的核心能力是<strong>既敢亲密又不怕独处</strong>。你不会把伴侣的情绪波动当成对自己的否定，也不会因为对方一时冷淡就天塌地陷。你相信"即使吵架，我们之间的关系也是稳定的"。

在恋爱中，你是那个能给伴侣安全感的人——不玩推拉、不搞冷暴力、不喜欢试探。但同时你能守住自己的底线，不会为了维系关系而委屈自己。

<strong>你是很多人口中的"谈过最好的恋爱"</strong>——继续保持，你值得同样安全的人。`,
        advice: [
            { title: '主动选择同频的人', text: '你的安全感是珍贵的能力，请把它给同样安全的人。如果对方让你变得焦虑，不是你的问题，是ta的能量和你不同频。' },
            { title: '帮伴侣成长', text: '你有能力带"焦虑型"或"回避型"的伴侣走向安全。但记住——你只能引导，不能拯救。' },
            { title: '保持自我成长', text: '安全型不代表一成不变。持续探索自己，你会在感情中越活越轻盈。' },
        ],
    },
    'possessive_dominant': {
        name: '强占有欲型',
        emoji: '👑',
        tagline: '你是我的，谁也别想多看一眼——醋王本王驾到',
        oneLiner: '你的爱像一场"主权宣言"——浓烈、霸道、不容置疑。被爱着的人觉得自己像珍宝，但也可能觉得像"囚犯"。',
        analysis: `你的恋爱模式以<strong>高占有欲</strong>为显著特征，俗称"醋王本王"。

你的逻辑是：<strong>我爱你 = 你是我的 = 别人少碰</strong>。对象和别人多说两句话你就不爽，朋友圈有个异性点赞你能想一天，如果发现ta跟异性单独吃饭——那简直是灾难级别。

这种"霸权式恋爱"背后其实藏着<strong>深层的不安全感</strong>。你害怕被取代、害怕自己不够好、害怕对方某天突然发现比你更好的人。占有欲拉满不是在控制ta，是在安抚你自己。

但你要知道：<strong>真正的爱是手里的沙，越紧握越流失；松开了，反而留在掌心。</strong>`,
        advice: [
            { title: '区分"爱"和"控制"', text: '爱是"我愿意为你怎样"，不是"你必须为我怎样"。下次想让ta做什么之前，先问自己：这是爱ta还是控制ta？' },
            { title: '找到你的安全感来源', text: '你的安全感不能全部压在伴侣身上。发展一个让你有成就感的技能、事业或爱好，让自己先"值得被自己信任"。' },
            { title: '练习"松手"', text: '让ta自由地和朋友出去玩一次，不查岗、不追问。然后你会发现——ta自愿回来，比被你绑着不走，甜一万倍。' },
        ],
    },
    'romantic_sweet': {
        name: '甜宠浪漫型',
        emoji: '🌸',
        tagline: '把恋爱过成偶像剧，我就是我自己的编剧',
        oneLiner: '你相信爱情应该"有糖份"——仪式感、小惊喜、蜜语甜言，少了一样都觉得不够味。和你恋爱，每天都像在拍韩剧。',
        analysis: `你是"爱的五种语言"中<strong>"精心时刻"和"肯定的言词"</strong>的高分持有者。

生日要有惊喜、纪念日要有仪式、日常要有情话。你觉得<strong>不说出口的爱就不是完整的爱</strong>，行动固然重要，但"说出来"和"做出来"缺一不可。

你的伴侣可能很幸福（毕竟谁不喜欢被甜到），但也可能有点累（"又过节？？"）。你需要意识到：<strong>每个人表达爱的方式不一样</strong>——有的人爱你是默默帮你修好电脑，而不是写八百字小作文。这不代表他们不爱，只是方式不同。

保持你的浪漫体质，但也学会读懂"不浪漫的人"的爱的语言。`,
        advice: [
            { title: '降低期待但不降低标准', text: '有些人的爱是"做出来的"不是"说出来的"。观察ta为你做的事——那可能才是ta表达爱的方式。' },
            { title: '主动教对方', text: '不是所有人都自带浪漫基因。告诉ta"我喜欢什么"，而不是等着ta自己猜。好恋人也是好教练。' },
            { title: '给自己制造浪漫', text: '不要把所有浪漫期待放在伴侣身上。给自己买花、给自己过纪念日——先学会宠爱自己。' },
        ],
    },
    'independent_solo': {
        name: '独立独美型',
        emoji: '✨',
        tagline: '我自盛开，蝴蝶爱来不来——独自美丽才是我的人生底色',
        oneLiner: '爱情对你来说是加分项而不是必答题。你来这世界不是为了找谁，先把自己活成一道风景线。',
        analysis: `你的核心词是"<strong>独立</strong>"。在恋爱中保持自我、不改人生规划、不因谁而放弃追求——这是你的本能，也是你的铠甲。

有人说你"太硬了不适合恋爱"——放屁。你只是把<strong>自我保护</strong>做得太好了。你知道自己一个人的状态有多爽，所以对关系的品质要求很高："如果恋爱不能让我变得更好，那我不如单着。"

这是非常健康的恋爱观。但需要注意的是：<strong>独立和冷漠之间有一条线</strong>。有时候你为了保持独立，可能会把对方推开太远。真正的强大不是不需要任何人，而是可以坦然需要，也有能力承担被拒绝的风险。`,
        advice: [
            { title: '区分"独立"和"不敢依赖"', text: '问自己：我不需要ta帮忙，是真的不需要，还是害怕开口了被拒绝？前者是独立，后者是防御。' },
            { title: '给对方一个"被需要"的机会', text: '你不需要变弱，但可以让对方偶尔"帮到你"。被人需要的感觉，也是爱的一种。' },
            { title: '找到一样独立的伴侣', text: '你需要的是和你一样有自己的世界的人——你们各自精彩，在一起更加闪耀，而不是互相消耗。' },
        ],
    },
    'rational_calm': {
        name: '理性冷静型',
        emoji: '🧘',
        tagline: '佛系恋爱代言人：缘分来了接着，走了也不强求',
        oneLiner: '你是恋爱中的"人间清醒"——不玩套路不做作，该爱的时候认真爱，不该爱的时候转身走。这份通透，很多人一辈子都学不会。',
        analysis: `你在情感世界里的最大特点是：<strong>稳</strong>。不焦虑、不回避、不占有、不过度浪漫——你像是恋爱中那个"旁观者清"的人，同时又参与其中。

你喜欢<strong>自然舒服</strong>的关系，讨厌试探、拉扯、欲擒故纵。你觉得爱就是两个人在一起开心，如果在一起不开心那就分开——简简单单，别搞太复杂。

别人可能会说你"不够爱"——其实不是。你的爱不华丽但扎实，不炙热但恒温。<strong>你用行动而非言语来爱一个人</strong>，是那种"细水长流"型选手。

这种佛系态度很棒，但有时候不妨也让对方看到你"不冷静"的一面——偶尔的冲动和热烈，是爱情的调味剂。`,
        advice: [
            { title: '偶尔"不理性"一下', text: '计划之外的惊喜、心血来潮的告白、说走就走的约会——这些"不冷静"的瞬间，往往是感情最甜的回忆。' },
            { title: '别太佛系', text: '顺其自然是好事，但太"无所谓"可能让对方觉得你不在乎。主动表达爱意，不是丢脸的事。' },
            { title: '保持你的通透', text: '你有一种很多人没有的能力——看清关系本质。继续保持这份清醒，它会帮你避开很多烂桃花。' },
        ],
    },
};

/* ===== 题目定义（30题，6维度 x 5题） ===== */
const QUESTIONS = [
    // --- 依恋焦虑 (5题) ---
    { id: 1,  dim: 'anxiety',    text: '对象超过3小时不回消息，我脑子里已经自动上演了"ta是不是不爱我了"的连续剧', dimension: '依恋焦虑' },
    { id: 2,  dim: 'anxiety',    text: '我需要对方经常说"我喜欢你/我爱你"才能确定这段关系是安全的', dimension: '依恋焦虑' },
    { id: 3,  dim: 'anxiety',    text: '如果ta和异性聊得很开心，我会立刻脑补出一整部劈腿大戏', dimension: '依恋焦虑' },
    { id: 4,  dim: 'anxiety',    text: '吵架冷战的时候，我会疯狂想联系对方，什么都做不下去', dimension: '依恋焦虑' },
    { id: 5,  dim: 'anxiety',    text: '我经常怀疑自己"是不是不够好"，配不上这段感情', dimension: '依恋焦虑' },

    // --- 依恋回避 (5题) ---
    { id: 6,  dim: 'avoidance',  text: '当对方想聊"我们之间的关系怎么样"这种话题时，我第一反应是——好麻烦，快逃', dimension: '依恋回避' },
    { id: 7,  dim: 'avoidance',  text: '看到别的情侣腻腻歪歪，我会有种生理性的尴尬和不适', dimension: '依恋回避' },
    { id: 8,  dim: 'avoidance',  text: '恋爱中如果没有足够的独处时间，我会感到窒息和疲惫', dimension: '依恋回避' },
    { id: 9,  dim: 'avoidance',  text: '让我对人敞开心扉说出真实的感受？比让我跑十公里还难', dimension: '依恋回避' },
    { id: 10, dim: 'avoidance',  text: '分手后我反而有种"呼——终于自由了"的解脱感', dimension: '依恋回避' },

    // --- 占有欲 (5题) ---
    { id: 11, dim: 'possessive', text: '我会忍不住想去翻看对象的手机/社交账号/聊天记录（哪怕没证据也会想）', dimension: '占有欲' },
    { id: 12, dim: 'possessive', text: '对象跟朋友出去玩没带我，我会很不爽且全程关注动态', dimension: '占有欲' },
    { id: 13, dim: 'possessive', text: '我觉得谈恋爱后，对象就不该再有异性好友了', dimension: '占有欲' },
    { id: 14, dim: 'possessive', text: '在街上ta多看了别人两眼，我能立刻变脸开启冷脸模式', dimension: '占有欲' },
    { id: 15, dim: 'possessive', text: '如果给对象发消息ta在忙没回，但发现ta在社交平台上活跃，我会炸', dimension: '占有欲' },

    // --- 浪漫表达 (5题) ---
    { id: 16, dim: 'romantic',   text: '我超喜欢给对象制造各种小惊喜——手写信、藏宝图式礼物、突然出现在ta公司楼下', dimension: '浪漫表达' },
    { id: 17, dim: 'romantic',   text: '情人节/纪念日/生日必须有仪式感，敷衍了事等于不够爱我', dimension: '浪漫表达' },
    { id: 18, dim: 'romantic',   text: '"我好想你""你今天好好看""有你真好"——这种话我一天能说八百遍', dimension: '浪漫表达' },
    { id: 19, dim: 'romantic',   text: '看到甜甜的恋爱vlog/帖子，我会标记下来"以后要和ta一起做"', dimension: '浪漫表达' },
    { id: 20, dim: 'romantic',   text: '我享受公开秀恩爱——朋友圈发合照、用情侣头像、让全世界知道我们在一起', dimension: '浪漫表达' },

    // --- 独立性 (5题) ---
    { id: 21, dim: 'independence',text: '谈恋爱不能阻止我搞事业/学业——恋爱脑退退退，个人成长才是王道', dimension: '独立性' },
    { id: 22, dim: 'independence',text: '即使热恋期，我也有自己独立的朋友圈和社交生活', dimension: '独立性' },
    { id: 23, dim: 'independence',text: '如果一段关系严重影响我的个人发展，我会果断选择分手', dimension: '独立性' },
    { id: 24, dim: 'independence',text: '我觉得"高质量单身"比"凑合谈恋爱"爽一百倍', dimension: '独立性' },
    { id: 25, dim: 'independence',text: '恋爱只是我精彩人生的一部分，不是全部', dimension: '独立性' },

    // --- 信任感 (5题) ---
    { id: 26, dim: 'trust',      text: '即使大吵一架，我内心也相信"我们不会因为吵架就分手"', dimension: '信任感' },
    { id: 27, dim: 'trust',      text: '对方说"在忙/在开会/在打游戏"的时候，我真的会信，而不是觉得是借口', dimension: '信任感' },
    { id: 28, dim: 'trust',      text: '我完全OK伴侣有自己的隐私空间（比如不给手机密码、有自己的小秘密）', dimension: '信任感' },
    { id: 29, dim: 'trust',      text: '我不需要通过"考验"来证明对方爱我——真心不需要被测试', dimension: '信任感' },
    { id: 30, dim: 'trust',      text: '我相信即使ta身边出现比我优秀的人，ta也不会因此离开我', dimension: '信任感' },
];

/* ===== 全局状态 ===== */
let currentQuestion = 0;
let answers = {};
let selectedOption = null;
const HISTORY_KEY = 'love_type_test_history';
const MAX_HISTORY = 20;
let viewingHistoryId = null;
let resultsShown = false;

/* ===== 测试流程 ===== */
function startTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    resultsShown = false;

    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('encyclopedia-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'flex';

    initDotGrid();
    showQuestion(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initDotGrid() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    for (let i = 0; i < QUESTIONS.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.textContent = i + 1;
        dot.onclick = () => {
            currentQuestion = i;
            selectedOption = answers[QUESTIONS[i].id] !== undefined ? answers[QUESTIONS[i].id] : null;
            showQuestion(i);
        };
        grid.appendChild(dot);
    }
}

function showQuestion(index) {
    currentQuestion = index;
    const q = QUESTIONS[index];
    selectedOption = answers[q.id] !== undefined ? answers[q.id] : null;

    // 更新进度
    document.getElementById('progress-fill').style.width = ((index + 1) / QUESTIONS.length * 100) + '%';
    document.getElementById('progress-current').textContent = index + 1;
    document.getElementById('progress-total').textContent = QUESTIONS.length;

    // 更新题目
    const badge = document.getElementById('question-badge');
    badge.textContent = '自评量表';
    badge.className = 'question-badge likert';

    document.getElementById('question-num').textContent = `第 ${index + 1} 题`;
    document.getElementById('question-text').textContent = q.text;
    // 渲染选项
    const optionsArea = document.getElementById('options-area');
    const labels = ['完全符合', '比较符合', '一般', '比较不符合', '完全不符合'];
    optionsArea.innerHTML = '';

    labels.forEach((label, i) => {
        const score = 5 - i; // 完全符合=5, 完全不符合=1
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (selectedOption === score) btn.classList.add('selected');

        const indicator = document.createElement('span');
        indicator.className = 'option-indicator';
        indicator.textContent = selectedOption === score ? '✓' : '';

        const text = document.createElement('span');
        text.textContent = label;

        btn.appendChild(indicator);
        btn.appendChild(text);
        btn.onclick = () => selectOption(index, score, btn);
        optionsArea.appendChild(btn);
    });

    // 更新导航按钮
    updateNavButtons();

    // 更新导航点
    updateDots();

    // 动画效果
    document.getElementById('question-card').style.animation = 'none';
    document.getElementById('question-card').offsetHeight;
    document.getElementById('question-card').style.animation = 'fadeInUp 0.35s ease';
}

function selectOption(qIndex, score, btn) {
    selectedOption = score;
    answers[QUESTIONS[qIndex].id] = score;

    // 更新选项样式
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // 更新选中标记
    document.querySelectorAll('.option-indicator').forEach(ind => ind.textContent = '');
    btn.querySelector('.option-indicator').textContent = '✓';

    // 更新导航状态
    updateNavButtons();
    updateDots();

    // 自动跳转下一题
    if (qIndex < QUESTIONS.length - 1) {
        setTimeout(() => {
            currentQuestion = qIndex + 1;
            selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
            showQuestion(currentQuestion);
            document.getElementById('test-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 180);
    }

    // 全部答完自动跳转结果
    if (Object.keys(answers).length === QUESTIONS.length) {
        setTimeout(() => showResults(), 350);
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
    nextBtn.disabled = selectedOption === null;
    nextBtn.innerHTML = '下一题 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('answered', 'current');
        if (answers[QUESTIONS[i].id] !== undefined) dot.classList.add('answered');
        if (i === currentQuestion) dot.classList.add('current');
    });
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        showQuestion(currentQuestion);
    }
}

function nextQuestion() {
    if (selectedOption === null) return;

    if (currentQuestion === QUESTIONS.length - 1) {
        // 所有题都答完了，显示结果
        if (Object.keys(answers).length === QUESTIONS.length) {
            showResults();
        }
    } else {
        currentQuestion++;
        selectedOption = answers[QUESTIONS[currentQuestion].id] !== undefined ? answers[QUESTIONS[currentQuestion].id] : null;
        showQuestion(currentQuestion);
    }
}

/* ===== 计分 ===== */
function calculateScores() {
    const dimScores = {};
    DIMENSIONS.forEach(dim => {
        const dimQuestions = QUESTIONS.filter(q => q.dim === dim.id);
        const total = dimQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
        // 原始分 5-25 → 归一化 0-100
        dimScores[dim.id] = Math.round((total / (dimQuestions.length * 5)) * 100);
    });
    return dimScores;
}

/* ===== 类型判定 ===== */
function determineLoveType(scores) {
    const { anxiety, avoidance, possessive, romantic, independence, trust } = scores;

    // 安全型优先判断
    if (anxiety <= 40 && avoidance <= 40 && trust >= 55) {
        return 'secure';
    }

    // 焦虑 + 回避 都高 → 纠结矛盾型 (恐惧型)
    if (anxiety >= 55 && avoidance >= 55) {
        return 'chaotic';
    }

    // 高焦虑 + 低回避 → 恋爱脑/痴迷型
    if (anxiety >= 55 && avoidance <= 45) {
        // 加上高浪漫 → 强调甜宠
        if (romantic >= 60) return 'romantic_sweet';
        return 'anxious';
    }

    // 低焦虑 + 高回避 → 回避型
    if (anxiety <= 45 && avoidance >= 55) {
        // 加上高独立 → 可能偏"独立独美"
        if (independence >= 65) return 'independent_solo';
        return 'avoidant';
    }

    // 高占有欲
    if (possessive >= 60) {
        return 'possessive_dominant';
    }

    // 高浪漫
    if (romantic >= 60 && independence <= 55) {
        return 'romantic_sweet';
    }

    // 高独立
    if (independence >= 60) {
        return 'independent_solo';
    }

    // 低焦虑 + 低回避 + 高信任 → 安全型
    if (anxiety <= 50 && avoidance <= 50 && trust >= 50) {
        return 'secure';
    }

    // 默认：理性冷静型
    return 'rational_calm';
}

/* ===== 结果展示 ===== */
function showResults(storedScores, storedTypeKey) {
    // 防止重复调用（如答题完成自动跳转 + 手动点下一题同时触发）
    if (resultsShown && !storedScores) return;
    resultsShown = true;

    const isHistory = !!storedScores;

    document.getElementById('test-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('encyclopedia-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';

    const scores = storedScores || calculateScores();
    const typeKey = storedTypeKey || determineLoveType(scores);
    const typeData = LOVE_TYPES[typeKey];

    // 非历史模式：保存到历史记录
    if (!isHistory) {
        saveResultToHistory(scores, typeKey);
    }

    // 综合分
    const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6);

    // 最高维度 & 最低维度
    const sortedDims = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topDim = DIMENSIONS.find(d => d.id === sortedDims[0][0]);
    const bottomDim = DIMENSIONS.find(d => d.id === sortedDims[5][0]);

    // ---- 渲染头部 ----
    document.getElementById('badge-icon').textContent = typeData.emoji;
    document.getElementById('badge-title').textContent = typeData.name;
    document.getElementById('badge-subtitle').textContent = typeData.tagline;
    document.getElementById('result-one-liner').textContent = '💬 ' + typeData.oneLiner;

    // ---- 评分概览 ----
    document.getElementById('score-overview').innerHTML = `
        <div class="score-card">
            <div class="score-value">${overallScore}</div>
            <div class="score-label">综合得分</div>
        </div>
        <div class="score-card">
            <div class="score-value">${topDim.emoji}</div>
            <div class="score-label">最突出 · ${topDim.name}</div>
        </div>
        <div class="score-card">
            <div class="score-value">${bottomDim.emoji}</div>
            <div class="score-label">最不明显 · ${bottomDim.name}</div>
        </div>
        <div class="score-card">
            <div class="score-value">${sortedDims.length}</div>
            <div class="score-label">分析维度</div>
        </div>
    `;

    // ---- 雷达图 ----
    renderRadarChart(scores);

    // ---- 柱状图 ----
    renderBarChart(scores);

    // ---- 深度分析 ----
    renderDetailAnalysis(scores, typeData);

    // ---- 恋爱建议 ----
    renderLoveAdvice(typeData);

    // ---- 匹配分析 ----
    renderMatchAnalysis(typeKey, scores);

    // ---- 按钮区（历史模式 vs 正常模式） ----
    const actionsEl = document.getElementById('result-actions');
    if (isHistory) {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="backToHistory()">← 返回历史</button>
            <button class="action-btn retry-btn" onclick="retryTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📤 分享结果</button>
            <button class="action-btn encyclopedia-btn" onclick="showEncyclopedia()">📖 恋爱图鉴</button>
        `;
    } else {
        actionsEl.innerHTML = `
            <button class="action-btn retry-btn" onclick="retryTest()">🔄 重新测试</button>
            <button class="action-btn share-btn" onclick="shareResult()">📤 分享结果</button>
            <button class="action-btn history-btn" onclick="showHistory()">📋 历史记录</button>
            <button class="action-btn encyclopedia-btn" onclick="showEncyclopedia()">📖 恋爱图鉴</button>
        `;
    }

    // ---- 滚动到顶部 ----
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 窗口大小改变时重绘图表
    const resizeHandler = () => {
        const radarDom = document.getElementById('radar-chart');
        const barDom = document.getElementById('bar-chart');
        if (radarDom._echart) radarDom._echart.resize();
        if (barDom._echart) barDom._echart.resize();
    };
    window.addEventListener('resize', resizeHandler, { once: true });
}

/* ===== 雷达图 ===== */
function renderRadarChart(scores) {
    const dom = document.getElementById('radar-chart');
    if (dom._echart) dom._echart.dispose();
    const chart = echarts.init(dom);
    dom._echart = chart;

    const dimData = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        max: 100,
        value: scores[d.id],
    }));

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: params => `${params.name}<br/>得分: <b>${params.value}</b>`,
            backgroundColor: '#fff',
            borderColor: '#E8DFF0',
            textStyle: { color: '#2D1B3E', fontSize: 13 },
            boxShadow: '0 4px 16px rgba(124,92,252,0.1)',
        },
        legend: { show: false },
        radar: {
            center: ['50%', '52%'],
            radius: '65%',
            indicator: dimData,
            axisName: {
                color: '#6B5B7B',
                fontSize: 12,
                fontWeight: 600,
            },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            splitLine: { lineStyle: { color: '#E8DFF0' } },
            splitArea: {
                areaStyle: { color: ['rgba(124,92,252,0.02)', 'rgba(124,92,252,0.04)'] },
            },
        },
        series: [{
            type: 'radar',
            data: [{
                value: dimData.map(d => d.value),
                name: '你的得分',
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(124,92,252,0.35)' },
                            { offset: 1, color: 'rgba(255,107,157,0.15)' },
                        ],
                    },
                },
                lineStyle: { color: '#7C5CFC', width: 2.5 },
                itemStyle: {
                    color: '#7C5CFC',
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                symbol: 'circle',
                symbolSize: 8,
            }],
        }],
    };
    chart.setOption(option);
}

/* ===== 柱状图 ===== */
function renderBarChart(scores) {
    const dom = document.getElementById('bar-chart');
    if (dom._echart) dom._echart.dispose();
    const chart = echarts.init(dom);
    dom._echart = chart;

    const sorted = DIMENSIONS.map(d => ({
        name: d.emoji + ' ' + d.name,
        value: scores[d.id],
        color: d.color,
    })).sort((a, b) => b.value - a.value);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: '#fff',
            borderColor: '#E8DFF0',
            textStyle: { color: '#2D1B3E', fontSize: 13 },
            formatter: params => `<b>${params[0].name}</b><br/>得分: <b>${params[0].value}</b>`,
        },
        grid: { left: '3%', right: '8%', top: '5%', bottom: '8%', containLabel: true },
        xAxis: {
            type: 'value',
            max: 100,
            axisLabel: { color: '#9B8BAB', fontSize: 11, formatter: '{value}' },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            splitLine: { lineStyle: { color: '#F5F0FA' } },
        },
        yAxis: {
            type: 'category',
            data: sorted.map(d => d.name),
            axisLabel: { color: '#6B5B7B', fontSize: 13, fontWeight: 600 },
            axisLine: { lineStyle: { color: '#E8DFF0' } },
            inverse: true,
        },
        series: [{
            type: 'bar',
            data: sorted.map((d, i) => ({
                value: d.value,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: d.color + '99' },
                        { offset: 1, color: d.color },
                    ]),
                    borderRadius: [0, 8, 8, 0],
                },
            })),
            barWidth: 22,
            label: {
                show: true,
                position: 'right',
                color: '#6B5B7B',
                fontSize: 12,
                fontWeight: 700,
                formatter: '{c}',
            },
        }],
    };
    chart.setOption(option);
}

/* ===== 深度分析 ===== */
function renderDetailAnalysis(scores, typeData) {
    const container = document.getElementById('detail-analysis');

    // 类型分析
    let html = `<div class="dimension-card" style="border-left-color: #7C5CFC;">
        <div class="dim-card-header">
            <span class="dim-name">${typeData.emoji} 你的恋爱画像</span>
        </div>
        <div class="dim-desc">${typeData.analysis}</div>
    </div>`;

    // 各维度分析
    const sortedDims = DIMENSIONS.map(d => ({
        ...d,
        score: scores[d.id],
    })).sort((a, b) => b.score - a.score);

    sortedDims.forEach(dim => {
        let level, levelClass;
        if (dim.score >= 65) { level = '偏高'; levelClass = 'high'; }
        else if (dim.score >= 40) { level = '适中'; levelClass = 'mid'; }
        else { level = '偏低'; levelClass = 'low'; }

        const desc = dim.score >= 65 ? dim.highDesc : dim.score >= 40 ? dim.midDesc : dim.lowDesc;

        html += `<div class="dimension-card" style="border-left-color: ${dim.color};">
            <div class="dim-card-header">
                <span class="dim-name">${dim.emoji} ${dim.name} · <span style="font-weight:400;font-size:13px;color:var(--text-secondary);">${dim.desc}</span></span>
                <span class="dim-score-tag ${levelClass}">${dim.score}分 · ${level}</span>
            </div>
            <div class="dim-desc">${desc}</div>
        </div>`;
    });

    container.innerHTML = html;
}

/* ===== 恋爱建议 ===== */
function renderLoveAdvice(typeData) {
    const container = document.getElementById('love-advice');
    let html = '';

    typeData.advice.forEach(a => {
        html += `<div class="advice-card">
            <h4>💡 ${a.title}</h4>
            <p>${a.text}</p>
        </div>`;
    });

    container.innerHTML = html;
}

/* ===== 匹配分析 ===== */
function renderMatchAnalysis(myType, scores) {
    const container = document.getElementById('match-analysis');

    // 匹配映射
    const matchMap = {
        'chaotic': {
            best: 'secure',
            good: 'rational_calm',
            bestReason: '安全型能给你稳定的安全感，让你慢慢卸下防备学',
            goodReason: '理性型不会给你太多情绪波动，相处起来不用猜来猜去',
        },
        'anxious': {
            best: 'secure',
            good: 'romantic_sweet',
            bestReason: '安全型能接住你的所有情绪，给你最需要的 reassurance',
            goodReason: '两个浪漫灵魂在一起，甜度翻倍！但注意别互相消耗',
        },
        'avoidant': {
            best: 'secure',
            good: 'independent_solo',
            bestReason: '安全型懂你的独立需求，不会过度黏人但一直在身边',
            goodReason: '你们都独立，各有空间，聚是一团火散是满天星',
        },
        'secure': {
            best: 'secure',
            good: 'rational_calm',
            bestReason: '两个安全型的恋爱就像两个高手对弈——势均力敌，互相成就',
            goodReason: '你们都不作不闹，在一起只有舒服没有内耗',
        },
        'possessive_dominant': {
            best: 'romantic_sweet',
            good: 'secure',
            bestReason: '爱表达的甜宠型正好满足你"需要被关注"的需求，一拍即合',
            goodReason: '安全型能理解你的占有欲背后是不安，用稳定的爱抚平你的焦躁',
        },
        'romantic_sweet': {
            best: 'romantic_sweet',
            good: 'possessive_dominant',
            bestReason: '两个浪漫脑在一起就是偶像剧现场，每天都是情人节',
            goodReason: '占有欲强的人恰好能满足你需要"被在乎"的感觉',
        },
        'independent_solo': {
            best: 'independent_solo',
            good: 'rational_calm',
            bestReason: '两个独立灵魂的碰撞——我们各自发光，在一起就是银河',
            goodReason: '理性型不会给你压力，你们的关系松弛又自然',
        },
        'rational_calm': {
            best: 'secure',
            good: 'independent_solo',
            bestReason: '安全型和理性型都走"踏实风"，你们的恋爱是保温杯不是烟花',
            goodReason: '你们都懂得尊重边界，关系健康得像教科书',
        },
    };

    const mm = matchMap[myType];
    const bestType = LOVE_TYPES[mm.best];
    const goodType = LOVE_TYPES[mm.good];

    container.innerHTML = `
        <div class="match-cards">
            <div class="match-card best">
                <div class="match-emoji">${bestType.emoji}</div>
                <div class="match-type">${bestType.name}</div>
                <div class="match-reason">${mm.bestReason}</div>
            </div>
            <div class="match-card">
                <div class="match-emoji">${goodType.emoji}</div>
                <div class="match-type">${goodType.name}</div>
                <div class="match-reason">${mm.goodReason}</div>
            </div>
        </div>
    `;
}

/* ===== 操作按钮 ===== */
function retryTest() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    viewingHistoryId = null;
    resultsShown = false;
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('encyclopedia-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
    const badgeTitle = document.getElementById('badge-title').textContent;
    const oneLiner = document.getElementById('result-one-liner').textContent.replace('💬 ', '');
    const shareText = `💘 我在恋爱类型测试中的结果是：${badgeTitle}！\n${oneLiner}\n\n快来测测你的恋爱类型吧～`;

    // 兼容移动端和桌面端分享
    if (navigator.share) {
        navigator.share({
            title: '恋爱类型测试',
            text: shareText,
        }).catch(() => {});
    } else {
        // 降级：复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            const btn = document.querySelector('.share-btn');
            const origText = btn.textContent;
            btn.textContent = '✅ 已复制！';
            setTimeout(() => { btn.textContent = origText; }, 2000);
        }).catch(() => {});
    }
}

/* ===== 历史记录 ===== */
function saveResultToHistory(scores, typeKey) {
    try {
        const history = loadHistory();
        const sortedDims = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topDim = DIMENSIONS.find(d => d.id === sortedDims[0][0]);
        const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 6);

        const record = {
            id: Date.now(),
            date: new Date().toLocaleString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            typeKey: typeKey,
            scores: scores,
            overallScore: overallScore,
            topDim: { id: topDim.id, name: topDim.name, emoji: topDim.emoji },
        };

        history.unshift(record);
        if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
        // localStorage 不可用时静默失败
    }
}

function loadHistory() {
    try {
        const data = localStorage.getItem(HISTORY_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function showHistory() {
    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'block';
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHistoryList() {
    const history = loadHistory();
    const listEl = document.getElementById('history-list');
    const emptyEl = document.getElementById('history-empty');

    if (history.length === 0) {
        listEl.innerHTML = '';
        emptyEl.style.display = 'block';
        document.getElementById('history-clear-all').style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    document.getElementById('history-clear-all').style.display = '';

    let html = '';
    history.forEach(record => {
        const typeData = LOVE_TYPES[record.typeKey] || { name: '未知类型', emoji: '❓' };
        html += `
            <div class="history-card" onclick="viewHistoryResult(${record.id})">
                <div class="history-card-main">
                    <div class="history-type-emoji">${typeData.emoji}</div>
                    <div class="history-type-info">
                        <div class="history-type-name">${typeData.name}</div>
                        <div class="history-type-date">${record.date}</div>
                    </div>
                </div>
                <div class="history-card-scores">
                    <span class="history-overall">综合 ${record.overallScore}分</span>
                    <span class="history-top-dim">${record.topDim.emoji} ${record.topDim.name} ${record.scores[record.topDim.id]}分</span>
                </div>
                <button class="history-delete-btn" onclick="event.stopPropagation(); deleteHistoryItem(${record.id})" title="删除">✕</button>
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
    showResults(record.scores, record.typeKey);
}

function backToHistory() {
    viewingHistoryId = null;
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'block';
    // 清理图表实例，避免残留
    ['radar-chart', 'bar-chart'].forEach(id => {
        const dom = document.getElementById(id);
        if (dom._echart) { dom._echart.dispose(); dom._echart = null; }
    });
    renderHistoryList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLanding() {
    viewingHistoryId = null;
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('encyclopedia-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条记录吗？')) return;
    const history = loadHistory();
    const filtered = history.filter(r => r.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
    // 如果正在查看被删除的记录，返回历史列表
    if (viewingHistoryId === id) viewingHistoryId = null;
    renderHistoryList();
}

function clearAllHistory() {
    if (!confirm('确定要清空全部历史记录吗？此操作不可恢复。')) return;
    localStorage.removeItem(HISTORY_KEY);
    viewingHistoryId = null;
    renderHistoryList();
}

/* ===== 恋爱类型图鉴 ===== */

/* ----- 类型特质卡数据 ----- */
const TYPE_TRAITS = {
    'secure': {
        vibe: '人间理想型，行走的"稳稳幸福"',
        traits: [
            { emoji: '🧘', name: '情绪稳定', text: '不查岗不翻手机不搞冷战，吵架归吵架，从没想过要分手' },
            { emoji: '🤗', name: '敢亲密的勇气', text: '不怕靠近、不惧依赖，敞开心扉对你来说是加分项而不是风险' },
            { emoji: '🎯', name: '边界感大师', text: '爱得起也放得下，不卑不亢，既不讨好也不控制' },
            { emoji: '🛡️', name: '安全感发射塔', text: '你的存在本身就是伴侣的定心丸，跟你恋爱不用天天猜谜' },
        ],
        loveLanguage: '高质量陪伴 + 肯定的话语',
        dangerZone: '太佛系了偶尔让伴侣觉得"你到底爱不爱我？？"——偶尔也需要热烈一下！',
        perfectDate: '在家一起做饭，窝在沙发上看烂片吐槽，然后舒服地睡去——平淡但有温度',
        stats: { stability: 95, romance: 60, intensity: 40, independence: 75 },
    },
    'anxious': {
        vibe: '爱到深处自然"黏"，你是甜蜜的暴风雨',
        traits: [
            { emoji: '💗', name: '情感浓度拉满', text: '你的伴侣永远不会怀疑自己是否"被爱着"，你的爱是高浓度原浆' },
            { emoji: '📡', name: '超敏感雷达', text: '对象3小时没回消息？你脑子里已经演完80集宫斗剧+20集悲情韩剧' },
            { emoji: '🎁', name: '付出型选手', text: '你喜欢用行动证明爱——消息秒回、礼物不断、随叫随到' },
            { emoji: '🦋', name: '为爱发电', text: '谈恋爱是你人生的高光模式，爱情是原动力，一恋爱整个人都亮了' },
        ],
        loveLanguage: '频繁的联系 + 言语的 reassurance',
        dangerZone: '容易在恋爱中弄丢自己——你的世界不该只有ta一个人！',
        perfectDate: '24小时黏在一起：从早安到晚安全程高甜，聊天记录一天能翻到手酸',
        stats: { stability: 25, romance: 90, intensity: 95, independence: 15 },
    },
    'avoidant': {
        vibe: '人间清醒冰山美人，翻江倒海全在内心戏',
        traits: [
            { emoji: '🧊', name: '情绪冷冻术', text: '外表：好的没事我OK。内心：我不OK但我绝对不会让你知道我OK不OK' },
            { emoji: '🦅', name: '独立王者', text: '"我一个人也能活得很好"不是逞强，是真的。自由是底线，独处是刚需' },
            { emoji: '🚪', name: '撤退本能', text: '对方一靠近你就想逃，对方一冷淡你又想靠近——标准的"近之则不逊远之则怨"' },
            { emoji: '🔐', name: '情感保险箱', text: '真实感受锁在心底，密码连自己都快忘了。不是不爱，是不会"安全地爱"' },
        ],
        loveLanguage: '尊重彼此空间 + 行动而非言语',
        dangerZone: '过度独立让人误以为你不在乎——其实你只是不知道怎么表达在乎！',
        perfectDate: '各自做自己的事，偶尔抬头对视笑一下，不用说话但很安心——距离产生美',
        stats: { stability: 55, romance: 15, intensity: 20, independence: 95 },
    },
    'chaotic': {
        vibe: '又想要又害怕，内心每天都在拍谍战片',
        traits: [
            { emoji: '🎭', name: '纠结综合体', text: '渴望被爱又害怕靠近，像一只想伸爪又缩回去的猫。这不是"作"，是自我保护' },
            { emoji: '🎢', name: '情绪过山车', text: '上午：他好爱我。下午：他一定不爱我了。晚上：算了分手吧。凌晨：呜呜呜想他' },
            { emoji: '🔍', name: '侦探级敏感', text: '能从对方的一个句号、回复速度、表情包选择中分析出"他变了"的充分证据' },
            { emoji: '💔', name: '旧伤未愈', text: '你可能在过往经历中受过伤，或成长中缺乏稳定情感支持。这不能怪你' },
        ],
        loveLanguage: '持续的安全感证明 + 不催促慢慢来',
        dangerZone: '脑补能力太强，容易把"已读不回"升级成"他出轨了然后我们分手了我要孤独终老了"！',
        perfectDate: 'ta一边说"我在"一边给你递奶茶，什么都不做，就安安静静陪着你',
        stats: { stability: 10, romance: 70, intensity: 90, independence: 25 },
    },
    'possessive_dominant': {
        vibe: '醋王本王，你的主权意识拉满格',
        traits: [
            { emoji: '👑', name: '主权宣示者', text: '你的爱带着浓浓的"这是我的，谁也别碰"气场，被爱的人像珍宝，也可能像囚犯' },
            { emoji: '🔥', name: '醋意即爱意', text: '吃醋是你表达在乎的方式——"我吃醋=我爱你"，但对方不一定get到' },
            { emoji: '🎯', name: '领地意识Max', text: '对象跟异性多说两句话？朋友圈有异性点赞？你的警报系统立刻拉响' },
            { emoji: '💎', name: '专属感至上', text: '你要的不是大众款恋爱，而是"只属于我的那个你"，独一无二，不容分享' },
        ],
        loveLanguage: '专属的注意力 + 排他性的偏爱',
        dangerZone: '控制欲太强会让伴侣窒息——爱是手里的沙，紧握反而漏得快！',
        perfectDate: 'ta全程只看着你、只跟你说话、只对你笑——你是全场的绝对焦点',
        stats: { stability: 45, romance: 75, intensity: 85, independence: 30 },
    },
    'romantic_sweet': {
        vibe: '行走的韩剧编剧，恋爱就要有糖份',
        traits: [
            { emoji: '🌸', name: '仪式感狂魔', text: '生日要有惊喜、纪念日要有仪式、日常要有情话，少了哪样都觉得"不够爱"' },
            { emoji: '💌', name: '情话输出机', text: '"我好想你""你今天好好看""有你真好"——这种话你一天能说八百遍，对方甜到齁' },
            { emoji: '🎬', name: '偶像剧导演', text: '你会悄悄策划惊喜：手写信、藏宝图式礼物、突然出现在ta公司楼下——浪漫永动机' },
            { emoji: '💝', name: '爱要大声说', text: '你觉得不说出口的爱不是完整的爱。行动固然重要，但"说出来"和"做出来"缺一不可' },
        ],
        loveLanguage: '精心时刻 + 肯定的言词 + 用心的礼物',
        dangerZone: '对浪漫的期待值太高，可能错过那些"不浪漫但真心"的人！',
        perfectDate: '精心策划的一天：从花束到日落到星星，每个环节都有小惊喜，最后发一条甜度超标的朋友圈',
        stats: { stability: 55, romance: 98, intensity: 75, independence: 45 },
    },
    'independent_solo': {
        vibe: '我自盛开蝴蝶爱来不来，独自美丽是人生底色',
        traits: [
            { emoji: '✨', name: '自我优先主义者', text: '谈恋爱不能阻止你搞事业——个人成长永远排第一，恋爱只是锦上添花' },
            { emoji: '🏔️', name: '独立即铠甲', text: '你觉得"高质量单身"比"凑合恋爱"爽一百倍，宁缺毋滥是你的恋爱信条' },
            { emoji: '🌍', name: '完整的世界公民', text: '你有自己的朋友圈、事业、爱好、人生目标——恋爱只是你精彩人生的一部分' },
            { emoji: '⚡', name: '边界感强者', text: '如果一段关系影响你的发展，你会果断离开。这份清醒，很多人一辈子学不会' },
        ],
        loveLanguage: '尊重彼此独立 + 不打扰的温柔',
        dangerZone: '独立过头可能变成"不敢依赖"——真正的强大是可以坦然需要别人！',
        perfectDate: '两个人各自做自己的事，偶尔交流一下今天的见闻和思考，精神共鸣比肢体接触更让你心动',
        stats: { stability: 65, romance: 30, intensity: 25, independence: 98 },
    },
    'rational_calm': {
        vibe: '佛系恋爱代言人，缘分来了接着走了不送',
        traits: [
            { emoji: '🧘', name: '人间清醒', text: '不玩套路不搞试探，爱就是两个人在一起开心，不开心就分开——简简单单' },
            { emoji: '🌊', name: '情绪恒温器', text: '不焦虑、不回避、不占有、不过度浪漫——你是恋爱中的"旁观者清"但又在其中' },
            { emoji: '🔬', name: '关系分析师', text: '你善于看清关系本质，不会被一时的上头冲昏头脑。烂桃花？不存在的' },
            { emoji: '🤝', name: '细水长流派', text: '你的爱不华丽但扎实，不炙热但恒温——是那种"用行动而非言语"的实在派' },
        ],
        loveLanguage: '稳定踏实的行动 + 自然舒服的相处',
        dangerZone: '太理性偶尔让对方觉得"你是不是不够爱我"——不妨偶尔不冷静一下！',
        perfectDate: '安静的咖啡馆或散步，有一搭没一搭地聊天，不用刻意找话题，舒服就完事了',
        stats: { stability: 85, romance: 35, intensity: 20, independence: 80 },
    },
};

/* ----- 配对兼容数据（8×8 矩阵） ----- */
const MATCH_MATRIX = {
    'secure': {
        'secure':          { level: 3, emoji: '💎', title: '神仙组合', text: '两个安全型在一起就是教科书级别的健康恋爱，势均力敌互相成就，别人口中的"谈过最好的恋爱"' },
        'anxious':         { level: 3, emoji: '💖', title: '治愈之恋', text: '安全型能给焦虑型最需要的 reassurance。你的"稳稳的幸福"是ta最好的解药' },
        'avoidant':        { level: 2, emoji: '🌤️', title: '慢慢融化', text: '安全型懂回避型的独立需求，不会硬闯但永远在身后，是最有可能融化冰山的人' },
        'chaotic':         { level: 3, emoji: '🫂', title: '安全港湾', text: '你是纠结矛盾型最需要的"安全基地"。有你在，ta终于敢慢慢放下防备' },
        'possessive_dominant': { level: 2, emoji: '🔑', title: '理解万岁', text: '安全型能读懂占有欲背后的不安，用稳定的爱告诉ta：不用醋，我哪也不去' },
        'romantic_sweet':  { level: 3, emoji: '🌸', title: '浪漫安全感', text: '一个给安全感一个给仪式感，既甜又稳，是朋友圈里最让人羡慕的那对' },
        'independent_solo':{ level: 2, emoji: '🌿', title: '舒适距离', text: '安全型尊重独立型的边界，两人各自发光又互相欣赏，松弛感拉满' },
        'rational_calm':   { level: 3, emoji: '🏠', title: '恒温爱情', text: '两个人都走踏实风，不炒作不内耗不狗血，关系舒服得像穿了十年的旧T恤' },
    },
    'anxious': {
        'secure':          { level: 3, emoji: '💖', title: '治愈之恋', text: '安全型是上天派来治愈你的。ta的"不会离开"是你听过最动听的情话' },
        'anxious':         { level: 1, emoji: '🎢', title: '情绪叠Buff', text: '两个焦虑脑在一起＝互相传染焦虑。容易陷入"你爱不爱我？你猜我爱不爱你？"的死循环' },
        'avoidant':        { level: 1, emoji: '⚡', title: '追逃死循环', text: '经典"焦虑-回避"陷阱：你追ta逃，你越追ta越逃。双方都在用自己的方式保护自己，却恰好戳中对方的伤' },
        'chaotic':         { level: 2, emoji: '🫧', title: '知己知彼', text: '你们都懂那种不安感，但两个不安的人在一起容易互相触发——需要大量沟通和耐心' },
        'possessive_dominant': { level: 2, emoji: '🔥', title: '热恋风暴', text: '占有欲+恋爱脑＝浓度爆表的热恋。但别让占有变成控制、焦虑变成绑架' },
        'romantic_sweet':  { level: 2, emoji: '💝', title: '甜度超标', text: '一个需要爱一个超会表达爱，甜是很甜。但焦虑型需要的不只是浪漫，还有安全感' },
        'independent_solo':{ level: 1, emoji: '🌵', title: '不在一个频道', text: '你需要大量关注，ta需要大量空间——你们的核心需求几乎是反义词，需要很多妥协' },
        'rational_calm':   { level: 2, emoji: '🧊', title: '冷暖自知', text: '理性型太"冷"可能让你更焦虑，但ta的稳定也能给你一些踏实感——看你更想要甜还是稳' },
    },
    'avoidant': {
        'secure':          { level: 2, emoji: '🌤️', title: '慢慢融化', text: '安全型是唯一有可能让你心甘情愿打开心门的人。不用急，ta会等你' },
        'anxious':         { level: 1, emoji: '⚡', title: '追逃死循环', text: '一个追一个逃，陷入死结。你的撤退会触发ta的焦虑，ta的追逼会触发你的逃避——恶性循环' },
        'avoidant':        { level: 1, emoji: '🏝️', title: '平行时空', text: '两个回避型＝两座孤岛。各自安好互不打扰，但"在一起"的意义在哪儿？容易变成室友关系' },
        'chaotic':         { level: 2, emoji: '🎭', title: '镜像迷宫', text: '你们都有回避的一面，能互相理解"需要空间"这件事。但两个人都不会主动，关系很难推进' },
        'possessive_dominant': { level: 1, emoji: '💥', title: '火星撞地球', text: '占有欲强的人需要"主权宣示"，而你的本能是"别碰我"——这是核心价值观的碰撞' },
        'romantic_sweet':  { level: 2, emoji: '🌬️', title: '冷暖对比色', text: '浪漫型的甜可能让你觉得"腻歪"，但你内心其实也渴望那种被在乎的感觉' },
        'independent_solo':{ level: 3, emoji: '🌟', title: '神仙室友', text: '你们都需要大量空间，聚是一团火散是满天星。不强求黏在一起，偶尔交汇就足够' },
        'rational_calm':   { level: 2, emoji: '🤝', title: '互不打扰', text: '两个都不黏人的类型，关系松弛自然。但要有一个人偶尔主动，否则容易凉凉' },
    },
    'chaotic': {
        'secure':          { level: 3, emoji: '🫂', title: '安全港湾', text: '安全型是上天给你最好的礼物。ta不会因为你的纠结而退缩，反而会耐心等你慢慢打开' },
        'anxious':         { level: 2, emoji: '🫧', title: '知己知彼', text: '你们都在跟不安全感搏斗，能互相理解。但要小心别一起陷入负面情绪的漩涡' },
        'avoidant':        { level: 2, emoji: '🎭', title: '镜像迷宫', text: '你们都有回避的一面，某种程度能互相理解。但都需要对方先迈出第一步——这就尴尬了' },
        'chaotic':         { level: 1, emoji: '🌪️', title: '双重纠结', text: '两个纠结矛盾型在一起：都想靠近又都害怕，都在等对方先主动。需要至少一个人勇敢起来' },
        'possessive_dominant': { level: 2, emoji: '🔮', title: '微妙的平衡', text: '占有欲的"宣示主权"可能让你感到被重视（终于有人这么在意我了！），但也可能让你想逃' },
        'romantic_sweet':  { level: 2, emoji: '🎀', title: '被甜到的刺猬', text: '浪漫型的热烈表达可能让你既感动又想退缩。试着相信：这次可能不一样' },
        'independent_solo':{ level: 1, emoji: '🌓', title: '不同世界的星', text: '独立型的"不需要任何人"可能触发你的"看吧果然没有人会一直在我身边"——这是你自己的课题' },
        'rational_calm':   { level: 2, emoji: '🪴', title: '慢慢来比较快', text: '理性型不催促不逼迫，给你足够的时间思考。这种"不紧不慢"可能正是你需要的节奏' },
    },
    'possessive_dominant': {
        'secure':          { level: 2, emoji: '🔑', title: '理解万岁', text: '安全型不会被你的占有欲吓跑，反而能看到背后的不安。但你要学会控制，别把理解当纵容' },
        'anxious':         { level: 2, emoji: '🔥', title: '热恋风暴', text: '焦虑型的"黏"能满足你的占有欲——ta的注意力本来就在你身上。但两个人都需要安全感供给' },
        'avoidant':        { level: 1, emoji: '💥', title: '火星撞地球', text: '你要占领ta要逃跑——这是恋爱中的"领土战争"。两个人都需要做出巨大调整' },
        'chaotic':         { level: 2, emoji: '🔮', title: '微妙的平衡', text: '纠结型的矛盾可能让你又爱又烦。好在你够主动，能把关系往前推' },
        'possessive_dominant': { level: 1, emoji: '⚔️', title: '双重主权', text: '两王相遇——都想"占领"对方，但忘了关系不是领土而是花园。需要划定边界' },
        'romantic_sweet':  { level: 3, emoji: '💘', title: '天生一对', text: '浪漫型喜欢表达爱，正好满足你需要"被在乎"的感觉。你给专属感，ta给仪式感——绝配！' },
        'independent_solo':{ level: 1, emoji: '🦅', title: '注定不对付', text: '独立型的"不需要任何人"是对你的"你是我的"的终极挑衅。三观不合，慎重' },
        'rational_calm':   { level: 2, emoji: '⚖️', title: '理性妥协', text: '理性型不会跟你硬碰硬，但也不会被控制。你们需要找到"在乎"和"自由"的平衡点' },
    },
    'romantic_sweet': {
        'secure':          { level: 3, emoji: '🌸', title: '浪漫安全感', text: '一个擅长制造浪漫一个提供安全感——你们的恋爱是别人眼中的童话故事' },
        'anxious':         { level: 2, emoji: '💝', title: '甜度超标', text: '两个人都超爱表达爱，甜到齁。但别只顾着甜，也要给彼此一些踏实的承诺' },
        'avoidant':        { level: 2, emoji: '🌬️', title: '冷暖对比色', text: '你的热情可能让回避型觉得"过了"，但如果你够耐心，也有可能慢慢融化冰山' },
        'chaotic':         { level: 2, emoji: '🎀', title: '被甜到的刺猬', text: '你的浪漫表达对纠结型来说可能是"被坚定选择"的信号，这是ta最需要的东西' },
        'possessive_dominant': { level: 3, emoji: '💘', title: '天生一对', text: '你的高甜输出满足ta的主权需求，ta的"霸道占有"让你觉得被重视——双向奔赴！' },
        'romantic_sweet':  { level: 2, emoji: '🎪', title: '加倍甜蜜', text: '两个浪漫灵魂＝偶像剧现场×2。每天都是情人节！但也需要有人管管现实生活' },
        'independent_solo':{ level: 1, emoji: '🎈', title: '风格迥异', text: '你准备惊喜ta说"不用这么麻烦"——不是不感动，只是表达方式不在一个次元' },
        'rational_calm':   { level: 2, emoji: '🍬', title: '甜蜜调味', text: '理性型会被你的浪漫感染（嘴上不说），你能给ta的世界加点糖分，ta能给你一些沉稳' },
    },
    'independent_solo': {
        'secure':          { level: 2, emoji: '🌿', title: '舒适距离', text: '安全型会给你恰到好处的空间，让你觉得被爱但没压力。这种"刚好"很珍贵' },
        'anxious':         { level: 1, emoji: '🌵', title: '不在一个频道', text: '你需要空间ta需要关注——这本质需求差异巨大。不是谁的错，只是碰巧不合适' },
        'avoidant':        { level: 3, emoji: '🌟', title: '神仙室友', text: '你们互相理解"我需要空间"这句话。在一起但不过度不分，各自精彩又偶尔交汇' },
        'chaotic':         { level: 1, emoji: '🌓', title: '不同世界的星', text: '你的"一个人也OK"可能被纠结型解读为"你根本不需要我"——但这确实是你的真心话' },
        'possessive_dominant': { level: 1, emoji: '🦅', title: '注定不对付', text: '占有欲强的人需要"宣示主权"，而你最反感的就是"被宣示"。这是原则问题' },
        'romantic_sweet':  { level: 1, emoji: '🎈', title: '风格迥异', text: '浪漫型精心策划的惊喜你可能觉得"压力山大"——不是不领情，只是不太适应这种表达' },
        'independent_solo':{ level: 3, emoji: '🌌', title: '银河双星', text: '两个独立灵魂在一起：各自发光靠近但不灼伤。你们是彼此人生的加分项不是必需品' },
        'rational_calm':   { level: 2, emoji: '🍃', title: '平静共鸣', text: '两个人都理性、松弛、不给对方压力。关系轻松得像一阵温柔的风' },
    },
    'rational_calm': {
        'secure':          { level: 3, emoji: '🏠', title: '恒温爱情', text: '两个人都走踏实风，不炒作不内耗——你们的恋爱是保温杯不是烟花，但暖得长久' },
        'anxious':         { level: 2, emoji: '🧊', title: '冷暖自知', text: '你的"冷静"可能让焦虑型更焦虑，但你的稳定也是ta需要的那颗定心丸' },
        'avoidant':        { level: 2, emoji: '🤝', title: '互不打扰', text: '两个不黏人的类型在一起，舒服是舒服。但别太佛系了，偶尔也要主动联络感情' },
        'chaotic':         { level: 2, emoji: '🪴', title: '慢慢来比较快', text: '你的"不催促不逼迫"是纠结型最需要的东西，让ta有时间在自己的节奏里慢慢打开' },
        'possessive_dominant': { level: 2, emoji: '⚖️', title: '理性妥协', text: '你不会跟占有欲硬碰硬，但也守得住自己的底线。需要沟通找到彼此的舒适区' },
        'romantic_sweet':  { level: 2, emoji: '🍬', title: '甜蜜调味', text: '浪漫型会给你的世界加点糖——虽然你觉得"差不多就行了"，但偶尔甜一下也不错' },
        'independent_solo':{ level: 2, emoji: '🍃', title: '平静共鸣', text: '你们都不给对方压力，都不需要过多关注。这种松弛的关系健康得像教科书' },
        'rational_calm':   { level: 2, emoji: '☕', title: '舒适日常', text: '两个佛系选手在一起：吃饭散步聊天，平淡但真实。没有狗血剧情，但每一天都踏实' },
    },
};

/* ----- 图鉴页面 ----- */
function showEncyclopedia() {
    document.getElementById('landing-section').style.display = 'none';
    document.getElementById('test-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    document.getElementById('encyclopedia-section').style.display = 'block';
    renderTypeCards();
    renderMatchMatrix();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backFromEncyclopedia() {
    document.getElementById('encyclopedia-section').style.display = 'none';
    document.getElementById('landing-section').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTypeCards() {
    const grid = document.getElementById('type-cards-grid');
    const typeKeys = Object.keys(LOVE_TYPES);

    let html = '';
    typeKeys.forEach(key => {
        const type = LOVE_TYPES[key];
        const traits = TYPE_TRAITS[key];
        html += `
            <div class="type-card" onclick="this.classList.toggle('flipped')">
                <div class="type-card-inner">
                    <div class="type-card-front">
                        <div class="type-card-emoji">${type.emoji}</div>
                        <div class="type-card-name">${type.name}</div>
                        <div class="type-card-tagline">${type.tagline}</div>
                        <div class="type-card-vibe">${traits.vibe}</div>
                        <div class="type-card-hint">👆 点击翻看详情</div>
                    </div>
                    <div class="type-card-back">
                        <div class="type-card-back-header">${type.emoji} ${type.name}</div>
                        <div class="type-traits-list">
                            ${traits.traits.map(t => `
                                <div class="type-trait-item">
                                    <span class="type-trait-emoji">${t.emoji}</span>
                                    <div class="type-trait-content">
                                        <span class="type-trait-name">${t.name}</span>
                                        <span class="type-trait-text">${t.text}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="type-stat-bars">
                            ${renderStatBar('情绪稳定', traits.stats.stability)}
                            ${renderStatBar('浪漫指数', traits.stats.romance)}
                            ${renderStatBar('情感浓度', traits.stats.intensity)}
                            ${renderStatBar('独立精神', traits.stats.independence)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function renderStatBar(label, value) {
    const color = value >= 80 ? 'var(--pink)' : value >= 50 ? 'var(--purple)' : 'var(--blue)';
    return `
        <div class="stat-bar-row">
            <span class="stat-bar-label">${label}</span>
            <div class="stat-bar-track">
                <div class="stat-bar-fill" style="width:${value}%; background:${color};"></div>
            </div>
            <span class="stat-bar-value">${value}</span>
        </div>
    `;
}

function renderMatchMatrix() {
    const container = document.getElementById('match-matrix');
    const typeKeys = Object.keys(LOVE_TYPES);
    const typeNames = typeKeys.map(k => ({ key: k, ...LOVE_TYPES[k] }));

    // 选择器
    let selectorHTML = '<div class="match-selector"><span class="match-selector-label">试试配对：</span>';
    typeNames.forEach((t, i) => {
        selectorHTML += `<button class="match-selector-type" data-type="${t.key}" onclick="highlightMatch('${t.key}')">${t.emoji} ${t.name}</button>`;
    });
    selectorHTML += '</div>';

    // 矩阵表
    let tableHTML = '<div class="match-table-wrap"><table class="match-table"><thead><tr><th></th>';
    typeNames.forEach(t => {
        tableHTML += `<th class="match-th" data-type="${t.key}">${t.emoji}<br><span class="match-th-name">${t.name}</span></th>`;
    });
    tableHTML += '</tr></thead><tbody>';

    typeNames.forEach(rowType => {
        tableHTML += '<tr>';
        tableHTML += `<td class="match-row-header" data-type="${rowType.key}"><span class="match-th-emoji">${rowType.emoji}</span><span class="match-th-name">${rowType.name}</span></td>`;
        typeNames.forEach(colType => {
            const match = MATCH_MATRIX[rowType.key][colType.key];
            const isSelf = rowType.key === colType.key;
            const levelClass = match.level === 3 ? 'match-high' : match.level === 2 ? 'match-mid' : 'match-low';
            tableHTML += `
                <td class="match-cell ${levelClass}" data-row="${rowType.key}" data-col="${colType.key}"
                    title="${match.title}: ${match.text}"
                    onclick="showMatchPopup('${rowType.key}', '${colType.key}')">
                    <div class="match-cell-emoji">${match.emoji}</div>
                    <div class="match-cell-stars">${'⭐'.repeat(match.level)}</div>
                </td>
            `;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table></div>';

    container.innerHTML = selectorHTML + tableHTML;
}

function highlightMatch(typeKey) {
    // 移除所有高亮
    document.querySelectorAll('.match-cell.highlighted, .match-th.highlighted, .match-row-header.highlighted').forEach(el => {
        el.classList.remove('highlighted');
    });

    // 如果没有选择类型则返回
    if (!typeKey) return;

    // 高亮行列
    document.querySelectorAll(`.match-cell[data-row="${typeKey}"], .match-cell[data-col="${typeKey}"]`).forEach(el => {
        el.classList.add('highlighted');
    });
    document.querySelectorAll(`.match-th[data-type="${typeKey}"], .match-row-header[data-type="${typeKey}"]`).forEach(el => {
        el.classList.add('highlighted');
    });

    // 滚动选择器到可见位置
    const matrixTable = document.querySelector('.match-table-wrap');
    const firstCell = document.querySelector(`.match-th[data-type="${typeKey}"]`);
    if (firstCell && matrixTable) {
        firstCell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

function showMatchPopup(typeA, typeB) {
    const match = MATCH_MATRIX[typeA][typeB];
    const typeAData = LOVE_TYPES[typeA];
    const typeBData = LOVE_TYPES[typeB];

    const popup = document.createElement('div');
    popup.className = 'match-popup-overlay';
    popup.innerHTML = `
        <div class="match-popup-card">
            <button class="match-popup-close" onclick="this.closest('.match-popup-overlay').remove()">✕</button>
            <div class="match-popup-header">
                <span class="match-popup-types">${typeAData.emoji} ${typeAData.name} × ${typeBData.emoji} ${typeBData.name}</span>
            </div>
            <div class="match-popup-badge">${match.emoji} ${match.title}</div>
            <div class="match-popup-stars">${'⭐'.repeat(match.level)}</div>
            <p class="match-popup-text">${match.text}</p>
            <button class="match-popup-btn" onclick="this.closest('.match-popup-overlay').remove()">知道啦</button>
        </div>
    `;

    document.body.appendChild(popup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.remove();
    });
}

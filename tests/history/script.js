// ===== 题库：50题（每维度6道Likert + 4道情境选择） =====
const questions = [
  // ── 开放性 O：题 1-10 ──
  { id: 1,  dim: 'O', type: 'likert', key: 1,  text: '我经常沉浸在自己的想象和幻想世界中' },
  { id: 2,  dim: 'O', type: 'likert', key: 1,  text: '我对艺术、音乐和文学有着浓厚的兴趣' },
  { id: 3,  dim: 'O', type: 'likert', key: 1,  text: '我喜欢尝试新鲜事物和冒险体验' },
  { id: 4,  dim: 'O', type: 'likert', key:-1,  text: '我更倾向于遵循传统和常规的方法' },
  { id: 5,  dim: 'O', type: 'likert', key: 1,  text: '我享受探索复杂的理论和抽象概念' },
  { id: 6,  dim: 'O', type: 'likert', key:-1,  text: '我对抽象艺术和美学体验不太敏感' },
  { id: 7,  dim: 'O', type: 'choice', text: '周末突然多出一天空闲，你最可能做什么？', choices: [
    { label: '去一个从未去过的地方探索', score: 5 },
    { label: '看一场展览、演出或参加创意手工活动', score: 4 },
    { label: '约朋友吃饭随便逛逛', score: 3 },
    { label: '在家补觉、收拾房间、处理杂事', score: 2 },
    { label: '按平时习惯过，不想折腾', score: 1 }
  ]},
  { id: 8,  dim: 'O', type: 'choice', text: '接触一个完全陌生的知识领域，你的态度是？', choices: [
    { label: '莫名兴奋，立刻找资料开始研究', score: 5 },
    { label: '挺有兴趣，愿意花时间了解一下', score: 4 },
    { label: '看情况，如果有人带着学就更好了', score: 3 },
    { label: '除非工作或生活需要，否则不太想碰', score: 2 },
    { label: '更愿意把时间花在自己擅长的领域', score: 1 }
  ]},
  { id: 9,  dim: 'O', type: 'choice', text: '关于思维方式，哪句话最接近你？', choices: [
    { label: '天马行空，脑子里随时有奇怪的点子冒出来', score: 5 },
    { label: '喜欢从多个角度想问题，不太按常理出牌', score: 4 },
    { label: '时而发散时而务实，看具体事情而定', score: 3 },
    { label: '偏向实事求是，不太琢磨抽象的东西', score: 2 },
    { label: '非常务实，对不切实际的想象没有耐心', score: 1 }
  ]},
  { id: 10, dim: 'O', type: 'choice', text: '旅行时你的风格更接近？', choices: [
    { label: '不做攻略，走到哪算哪，享受未知的惊喜', score: 5 },
    { label: '只定大方向和住宿，具体行程随性而至', score: 4 },
    { label: '重要节点提前安排好，其余灵活应变', score: 3 },
    { label: '行程安排得比较充实，尽量按计划走', score: 2 },
    { label: '出发前做好精确到小时的详细攻略', score: 1 }
  ]},

  // ── 尽责性 C：题 11-20 ──
  { id: 11, dim: 'C', type: 'likert', key: 1,  text: '我做事情总是有条不紊、计划周密' },
  { id: 12, dim: 'C', type: 'likert', key: 1,  text: '一旦开始做一件事，我就会坚持到底' },
  { id: 13, dim: 'C', type: 'likert', key: 1,  text: '我注重细节，追求把事情做到极致' },
  { id: 14, dim: 'C', type: 'likert', key:-1,  text: '有时我过于随性，不太喜欢制定计划' },
  { id: 15, dim: 'C', type: 'likert', key: 1,  text: '我能够严格自律地完成每天设定的目标' },
  { id: 16, dim: 'C', type: 'likert', key:-1,  text: '我经常会把重要的事情拖到最后一刻' },
  { id: 17, dim: 'C', type: 'choice', text: '接到一个两周后截止的重要任务，你通常会？', choices: [
    { label: '立刻拆分任务，制定每日计划并严格执行', score: 5 },
    { label: '大致规划几个阶段，提前几天开始认真做', score: 4 },
    { label: '心里有数，中间时段开始，保证截止前完成', score: 3 },
    { label: '最后几天集中冲刺，deadline是第一生产力', score: 2 },
    { label: '经常拖到最后一天才匆忙应付', score: 1 }
  ]},
  { id: 18, dim: 'C', type: 'choice', text: '你的工作台或房间通常是怎样的？', choices: [
    { label: '井井有条，每样东西都有固定位置', score: 5 },
    { label: '大体整洁，定期会整理归纳', score: 4 },
    { label: '有些乱但能接受，不影响日常使用', score: 3 },
    { label: '比较乱，东西随手放，找起来费劲', score: 2 },
    { label: '非常混乱，但自己觉得"乱中有序"', score: 1 }
  ]},
  { id: 19, dim: 'C', type: 'choice', text: '精心制定的计划遇到突发情况，你会？', choices: [
    { label: '尽量按原计划推进，除非万不得已不调整', score: 5 },
    { label: '小幅调整计划，尽量兼顾两边', score: 4 },
    { label: '当场判断哪个更重要，灵活切换', score: 3 },
    { label: '计划经常被打乱，已经习惯了', score: 2 },
    { label: '本来就不怎么做详细计划，无所谓', score: 1 }
  ]},
  { id: 20, dim: 'C', type: 'choice', text: '对待承诺和与他人的约定，你更像？', choices: [
    { label: '一诺千金，答应了的事无论如何都要做到', score: 5 },
    { label: '大多数情况会遵守，偶尔有意外会提前沟通', score: 4 },
    { label: '尽力而为，但不会把自己逼得太紧', score: 3 },
    { label: '承诺时比较随意，做不到大家也能理解', score: 2 },
    { label: '不喜欢做承诺，保持自由才最重要', score: 1 }
  ]},

  // ── 外向性 E：题 21-30 ──
  { id: 21, dim: 'E', type: 'likert', key: 1,  text: '我喜欢成为人群中的焦点和关注中心' },
  { id: 22, dim: 'E', type: 'likert', key: 1,  text: '社交活动让我感到精力充沛' },
  { id: 23, dim: 'E', type: 'likert', key:-1,  text: '我更喜欢独自工作，而非团队协作' },
  { id: 24, dim: 'E', type: 'likert', key: 1,  text: '与陌生人交谈对我来说毫不费力' },
  { id: 25, dim: 'E', type: 'likert', key:-1,  text: '我喜欢安静的独处时光，胜过热闹的聚会' },
  { id: 26, dim: 'E', type: 'likert', key: 1,  text: '我通常是主动发起对话的那个人' },
  { id: 27, dim: 'E', type: 'choice', text: '参加一个大部分人是陌生面孔的聚会，你会？', choices: [
    { label: '主动认识新朋友，全场最活跃的那个就是我', score: 5 },
    { label: '自然地融入人群，和周围的人聊起来', score: 4 },
    { label: '等人来搭话，有人主动就聊，没有就旁观', score: 3 },
    { label: '只和本来就认识的朋友待在一起', score: 2 },
    { label: '找个安静的角落待着，希望早点结束回家', score: 1 }
  ]},
  { id: 28, dim: 'E', type: 'choice', text: '连续三天没有任何社交活动，你会？', choices: [
    { label: '完全受不了，必须找人聊天或出门转转', score: 5 },
    { label: '有点闷，第二天就开始想约朋友了', score: 4 },
    { label: '还好，最后可能会想和人交流一下', score: 3 },
    { label: '挺享受的，偶尔独处让我恢复能量', score: 2 },
    { label: '太完美了，社交能免则免', score: 1 }
  ]},
  { id: 29, dim: 'E', type: 'choice', text: '在团队讨论或工作会议中，你通常是？', choices: [
    { label: '第一个发言，带动讨论节奏', score: 5 },
    { label: '积极发言分享想法，也会给别人留空间', score: 4 },
    { label: '有想法会说，但不会抢着出风头', score: 3 },
    { label: '被点名或问到才会表达观点', score: 2 },
    { label: '全程旁听做笔记，几乎不主动发言', score: 1 }
  ]},
  { id: 30, dim: 'E', type: 'choice', text: '周五晚上，你更想怎么过？', choices: [
    { label: '约一大群朋友聚会吃饭，越热闹越好', score: 5 },
    { label: '和三五好友小聚，深度聊天', score: 4 },
    { label: '看心情，热闹或安静都行', score: 3 },
    { label: '一个人在家舒舒服服看剧看书', score: 2 },
    { label: '安静独处，享受属于自己的时光', score: 1 }
  ]},

  // ── 宜人性 A：题 31-40 ──
  { id: 31, dim: 'A', type: 'likert', key: 1,  text: '我愿意牺牲自己的利益去帮助他人' },
  { id: 32, dim: 'A', type: 'likert', key: 1,  text: '我相信大多数人本质上是善良的' },
  { id: 33, dim: 'A', type: 'likert', key:-1,  text: '在争论中，我更倾向于坚持自己的观点' },
  { id: 34, dim: 'A', type: 'likert', key: 1,  text: '我很容易察觉和理解他人的情绪' },
  { id: 35, dim: 'A', type: 'likert', key:-1,  text: '竞争比合作更能激发我的斗志' },
  { id: 36, dim: 'A', type: 'likert', key: 1,  text: '我总是愿意主动关心和帮助身边的人' },
  { id: 37, dim: 'A', type: 'choice', text: '路上陌生人向你求助（问路、借手机打电话等），你会？', choices: [
    { label: '立刻停下来，尽最大努力帮到底', score: 5 },
    { label: '愿意帮忙，但会保持一定的警惕', score: 4 },
    { label: '看当时方不方便，方便就帮', score: 3 },
    { label: '简单应付一句然后走开', score: 2 },
    { label: '直接摆手离开，不想被打扰', score: 1 }
  ]},
  { id: 38, dim: 'A', type: 'choice', text: '团队里有人明显拖了整体进度，你会？', choices: [
    { label: '主动去了解他遇到了什么困难，想办法帮', score: 5 },
    { label: '私下温和地提醒他，给一些改进建议', score: 4 },
    { label: '心里不满但不会直接对本人说出来', score: 3 },
    { label: '向负责人反映，让上面去处理', score: 2 },
    { label: '直接指出问题，要求对方尽快改进', score: 1 }
  ]},
  { id: 39, dim: 'A', type: 'choice', text: '当你的利益和他人利益发生冲突时，你通常？', choices: [
    { label: '我一般会让步，关系比利益重要', score: 5 },
    { label: '尽量找双方都能接受的中间方案', score: 4 },
    { label: '看对方是谁，亲近的人我会让', score: 3 },
    { label: '公平竞争，讲道理，看谁更有理', score: 2 },
    { label: '优先保障自己的利益，人不为己天诛地灭', score: 1 }
  ]},
  { id: 40, dim: 'A', type: 'choice', text: '看到网上有人被群体攻击或网暴，你的反应是？', choices: [
    { label: '心里非常难受，有可能会发声支援', score: 5 },
    { label: '同情受害者，觉得这样对待一个人太过分了', score: 4 },
    { label: '关注一下事情经过，但不会参与讨论', score: 3 },
    { label: '网上这种事太多了，见怪不怪了', score: 2 },
    { label: '不关我事，直接划走', score: 1 }
  ]},

  // ── 神经质 N：题 41-50 ──
  { id: 41, dim: 'N', type: 'likert', key: 1,  text: '我经常感到紧张和焦虑' },
  { id: 42, dim: 'N', type: 'likert', key:-1,  text: '我能够很快从挫折和失败中恢复过来' },
  { id: 43, dim: 'N', type: 'likert', key: 1,  text: '我的情绪有时候会起伏不定' },
  { id: 44, dim: 'N', type: 'likert', key:-1,  text: '面对压力时，我能保持冷静和镇定' },
  { id: 45, dim: 'N', type: 'likert', key: 1,  text: '我常为一些小事而感到烦躁不安' },
  { id: 46, dim: 'N', type: 'likert', key:-1,  text: '大多数时候，我感到轻松、自在和满足' },
  { id: 47, dim: 'N', type: 'choice', text: '一个重要的工作或项目搞砸了，你的第一反应是？', choices: [
    { label: '崩溃自责，好几天都缓不过来', score: 5 },
    { label: '非常沮丧，需要一段时间消化情绪', score: 4 },
    { label: '会难过，但冷静下来后开始想补救办法', score: 3 },
    { label: '短暂失落，然后立刻行动寻找解决方案', score: 2 },
    { label: '几乎不受情绪影响，直接进入理性复盘模式', score: 1 }
  ]},
  { id: 48, dim: 'N', type: 'choice', text: '等待一个重要结果（如面试通知、考试成绩），你会？', choices: [
    { label: '焦虑到失眠，不停刷新邮箱或消息', score: 5 },
    { label: '有些紧张，脑子里会反复想这件事', score: 4 },
    { label: '会惦记但能强迫自己转移注意力', score: 3 },
    { label: '告诉自己结果已定，顺其自然就好', score: 2 },
    { label: '完全不在意，该吃吃该睡睡', score: 1 }
  ]},
  { id: 49, dim: 'N', type: 'choice', text: '有人当面批评你的某个做法，你的反应是？', choices: [
    { label: '非常敏感，会难过很久，反复回想', score: 5 },
    { label: '有点不开心，事后还会琢磨对方的话', score: 4 },
    { label: '听听有没有道理，有则改之无则加勉', score: 3 },
    { label: '理性看待，对事不对人，不太影响心情', score: 2 },
    { label: '完全无所谓，怎么说是别人的自由', score: 1 }
  ]},
  { id: 50, dim: 'N', type: 'choice', text: '半夜躺床上，突然想起一件多年前的尴尬事，你会？', choices: [
    { label: '辗转反侧，越想越难受，恨不得穿越回去', score: 5 },
    { label: '纠结好一阵子才能入睡', score: 4 },
    { label: '偶尔会发生，但很快就能放下翻身睡去', score: 3 },
    { label: '很少纠结过去，发生了就过去了', score: 2 },
    { label: '从不翻旧账，过去的丢在脑后不再想', score: 1 }
  ]},
];

// Likert量表选项（type: 'likert' 使用）
const likertOptions = [
  { label: '完全符合',   value: 5 },
  { label: '比较符合',   value: 4 },
  { label: '一般',       value: 3 },
  { label: '不太符合',   value: 2 },
  { label: '完全不符合', value: 1 },
];

let currentQ = 0;
let answers = {};

// ===== 历史人物库 =====
// 生成统一风格的圆形徽章 SVG 头像
const mkAvatar = (id, color, icon) =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="s-${id}" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="rgba(255,255,255,0.3)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="${color}"/><circle cx="50" cy="50" r="48" fill="url(#s-${id})"/><circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>${icon}</svg>`;

const figures = [
  {
    id: 'zhugeliang', name: '诸葛亮', title: '卧龙先生 · 三国蜀汉丞相',
    avatar: mkAvatar('zhugeliang','#3B5998',
      '<ellipse cx="50" cy="45" rx="28" ry="24" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><line x1="22" y1="40" x2="78" y2="40" stroke="#F2EAD8" stroke-width="1.5"/><line x1="30" y1="30" x2="30" y2="60" stroke="#F2EAD8" stroke-width="1.2"/><line x1="45" y1="22" x2="45" y2="65" stroke="#F2EAD8" stroke-width="1.2"/><line x1="60" y1="25" x2="60" y2="60" stroke="#F2EAD8" stroke-width="1.2"/><rect x="47" y="68" width="6" height="14" rx="3" fill="#F2EAD8"/>'),
    profile: { O:85, C:95, E:40, A:70, N:15 },
    desc: '运筹帷幄之中，决胜千里之外。你与诸葛亮一样，深思熟虑、计划周密，追求事事周全。你的内心有一座缜密的思维宫殿，每一步都经过精心布局。',
    quote: '夫君子之行，静以修身，俭以养德。非淡泊无以明志，非宁静无以致远。',
    traits: '高策略性、极度自律、谋定后动'
  },
  {
    id: 'libai', name: '李白', title: '诗仙 · 盛唐浪漫主义诗人',
    avatar: mkAvatar('libai','#C45A2A',
      '<ellipse cx="50" cy="48" rx="18" ry="22" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><path d="M30 38 Q50 26 70 38" fill="none" stroke="#F2EAD8" stroke-width="2"/><path d="M38 48 Q50 40 62 48" fill="none" stroke="#F2EAD8" stroke-width="1.2"/><path d="M25 38 Q20 30 28 25" fill="none" stroke="#F2EAD8" stroke-width="2"/><path d="M75 38 Q80 30 72 25" fill="none" stroke="#F2EAD8" stroke-width="2"/><circle cx="50" cy="60" r="2.5" fill="#F2EAD8"/>'),
    profile: { O:95, C:20, E:75, A:60, N:65 },
    desc: '天生我材必有用，千金散尽还复来。你和李白一样，拥有天马行空的想象力和奔放不羁的灵魂。自由是你生命的底色，创造力是你最锋利的剑。',
    quote: '仰天大笑出门去，我辈岂是蓬蒿人。',
    traits: '天马行空、浪漫奔放、不拘一格'
  },
  {
    id: 'caocao', name: '曹操', title: '魏武帝 · 东汉末年政治家',
    avatar: mkAvatar('caocao','#7D1A2C',
      '<path d="M30 72 L30 35 Q50 12 70 35 L70 72 Z" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><line x1="22" y1="62" x2="78" y2="62" stroke="#F2EAD8" stroke-width="2"/><polygon points="44,35 50,22 56,35" fill="#F2EAD8"/><rect x="44" y="65" width="12" height="12" rx="2" fill="none" stroke="#F2EAD8" stroke-width="1.5"/>'),
    profile: { O:75, C:80, E:85, A:25, N:20 },
    desc: '治世之能臣，乱世之枭雄。你与曹操一样，雄才大略、果敢决断。你不畏惧做艰难的选择，目标清晰，执行力极强，是天生的领导者。',
    quote: '老骥伏枥，志在千里。烈士暮年，壮心不已。',
    traits: '果断刚毅、野心勃勃、务实进取'
  },
  {
    id: 'sushi', name: '苏轼', title: '东坡居士 · 北宋文豪',
    avatar: mkAvatar('sushi','#4A7A52',
      '<line x1="50" y1="15" x2="50" y2="78" stroke="#F2EAD8" stroke-width="3"/><line x1="40" y1="32" x2="60" y2="32" stroke="#F2EAD8" stroke-width="2"/><line x1="38" y1="55" x2="62" y2="55" stroke="#F2EAD8" stroke-width="2"/><path d="M50 18 Q25 10 28 25" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><path d="M50 18 Q70 8 72 25" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><ellipse cx="46" cy="38" rx="2.5" ry="4" fill="#F2EAD8"/><ellipse cx="56" cy="60" rx="2.5" ry="4" fill="#F2EAD8"/>'),
    profile: { O:90, C:55, E:70, A:80, N:25 },
    desc: '回首向来萧瑟处，归去，也无风雨也无晴。你和苏轼一样，豁达洒脱，才华横溢又不失人间烟火气。你总能以乐观的视角看待人生起伏。',
    quote: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',
    traits: '豁达通透、才华横溢、处变不惊'
  },
  {
    id: 'wuzetian', name: '武则天', title: '一代女皇 · 武周皇帝',
    avatar: mkAvatar('wuzetian','#B8912E',
      '<polygon points="20,70 35,32 38,45 50,18 62,45 65,32 80,70" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><rect x="22" y="70" width="56" height="8" rx="3" fill="#F2EAD8"/><circle cx="50" cy="38" r="5" fill="#F2EAD8"/><line x1="50" y1="70" x2="50" y2="82" stroke="#F2EAD8" stroke-width="2"/>'),
    profile: { O:80, C:90, E:85, A:20, N:15 },
    desc: '谁说女子不如男？你与武则天一样，意志坚定、魄力非凡。你知道自己要什么，也从不畏惧打破规则去争取。你的内核极其强大。',
    quote: '身不修则德不立，德不立则功不成。',
    traits: '恢弘大气、我行我素、掌控全局'
  },
  {
    id: 'wangyangming', name: '王阳明', title: '心学宗师 · 明朝思想家',
    avatar: mkAvatar('wangyangming','#3D6B6B',
      '<polygon points="22,72 50,28 78,72" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><circle cx="50" cy="42" r="9" fill="none" stroke="#F2EAD8" stroke-width="2"/><line x1="50" y1="55" x2="50" y2="72" stroke="#F2EAD8" stroke-width="2.5"/><circle cx="50" cy="42" r="2" fill="#F2EAD8"/>'),
    profile: { O:88, C:85, E:50, A:75, N:20 },
    desc: '知行合一，致良知。你与王阳明一样，既有深邃的思想洞见，又有扎实的行动力。你不空谈道理，而是在实践中不断精进自己的认知。',
    quote: '破山中贼易，破心中贼难。',
    traits: '内外兼修、知行合一、洞察本质'
  },
  {
    id: 'kangxi', name: '康熙', title: '圣祖仁皇帝 · 清朝盛世开创者',
    avatar: mkAvatar('kangxi','#6B3A2A',
      '<rect x="32" y="22" width="36" height="50" rx="3" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><rect x="24" y="22" width="52" height="8" rx="2" fill="#F2EAD8"/><rect x="24" y="68" width="52" height="8" rx="2" fill="#F2EAD8"/><line x1="40" y1="32" x2="40" y2="66" stroke="#F2EAD8" stroke-width="1.2"/><line x1="50" y1="32" x2="50" y2="66" stroke="#F2EAD8" stroke-width="1.2"/><line x1="60" y1="32" x2="60" y2="66" stroke="#F2EAD8" stroke-width="1.2"/>'),
    profile: { O:65, C:92, E:55, A:65, N:15 },
    desc: '宽仁大度，励精图治。你与康熙一样，稳健持重、勤勉不懈。你有着超越年龄的沉稳，处理事务张弛有度，是团队中可靠的定海神针。',
    quote: '凡天下事，当以天下之心处之。',
    traits: '稳重如山、勤勉持重、胸怀天下'
  },
  {
    id: 'xiangyu', name: '项羽', title: '西楚霸王 · 秦末起义领袖',
    avatar: mkAvatar('xiangyu','#A52822',
      '<polygon points="50,15 65,48 50,42 35,48" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><line x1="50" y1="42" x2="50" y2="78" stroke="#F2EAD8" stroke-width="3"/><line x1="34" y1="72" x2="66" y2="72" stroke="#F2EAD8" stroke-width="2.5"/><path d="M30 55 L20 50" stroke="#F2EAD8" stroke-width="1.5"/><path d="M70 55 L80 50" stroke="#F2EAD8" stroke-width="1.5"/>'),
    profile: { O:45, C:25, E:80, A:30, N:70 },
    desc: '力拔山兮气盖世，时不利兮骓不逝。你与项羽一样，豪气干云、性情刚烈。你拥有超凡的个人魅力和爆发力，但也常常被情绪的波涛所裹挟。',
    quote: '纵江东父兄怜而王我，我何面目见之？',
    traits: '刚烈如火、英雄气概、宁折不弯'
  },
  {
    id: 'liubei', name: '刘备', title: '汉昭烈帝 · 蜀汉开国皇帝',
    avatar: mkAvatar('liubei','#4A7A5E',
      '<path d="M25 38 Q25 18 50 28 Q75 18 75 38 Q75 65 50 75 Q25 65 25 38 Z" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><line x1="38" y1="52" x2="62" y2="52" stroke="#F2EAD8" stroke-width="1.5"/><circle cx="50" cy="60" r="3" fill="#F2EAD8"/>'),
    profile: { O:55, C:60, E:55, A:90, N:40 },
    desc: '勿以恶小而为之，勿以善小而不为。你与刘备一样，以仁义立身、以诚心待人。你的共情能力极强，总能在关键时刻凝聚人心。',
    quote: '兄弟如手足，妻子如衣服。',
    traits: '仁厚包容、以德服人、重情重义'
  },
  {
    id: 'sunzi', name: '孙子', title: '兵圣 · 春秋军事理论家',
    avatar: mkAvatar('sunzi','#2E4A6E',
      '<path d="M22 28 L22 78" stroke="#F2EAD8" stroke-width="2.5"/><path d="M78 28 L78 78" stroke="#F2EAD8" stroke-width="2.5"/><path d="M22 28 Q50 18 78 28" fill="none" stroke="#F2EAD8" stroke-width="2"/><line x1="50" y1="28" x2="50" y2="72" stroke="#F2EAD8" stroke-width="1.5"/><path d="M35 42 L65 42 M32 52 L68 52 M38 62 L62 62" stroke="#F2EAD8" stroke-width="1.2"/>'),
    profile: { O:85, C:95, E:30, A:50, N:10 },
    desc: '知己知彼，百战不殆。你与孙子一样，理性克制、深谋远虑。你善于站在全局角度分析问题，不轻易暴露自己的底牌，每一步都精准而克制。',
    quote: '兵者，诡道也。故能而示之不能，用而示之不用。',
    traits: '极致理性、深藏不露、算无遗策'
  },
  {
    id: 'luxun', name: '鲁迅', title: '民族魂 · 近代文学家',
    avatar: mkAvatar('luxun','#3D2D2D',
      '<polygon points="50,80 36,52 50,22 64,52" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><line x1="50" y1="22" x2="50" y2="14" stroke="#F2EAD8" stroke-width="2"/><line x1="42" y1="52" x2="58" y2="52" stroke="#F2EAD8" stroke-width="1.2"/>'),
    profile: { O:82, C:88, E:35, A:30, N:60 },
    desc: '横眉冷对千夫指，俯首甘为孺子牛。你与鲁迅一样，眼光锐利、敢于批判。你看透了世间的荒谬，却依然选择用自己的方式去呐喊和改变。',
    quote: '世上本没有路，走的人多了，也便成了路。',
    traits: '冷峻犀利、独立思考、针砭时弊'
  },
  {
    id: 'quyuan', name: '屈原', title: '楚辞之祖 · 战国爱国诗人',
    avatar: mkAvatar('quyuan','#3D6B3D',
      '<path d="M30 82 Q28 45 50 25 Q55 45 42 80" fill="none" stroke="#F2EAD8" stroke-width="2.5"/><path d="M50 82 Q55 40 72 30 Q62 52 55 80" fill="none" stroke="#F2EAD8" stroke-width="2"/><circle cx="50" cy="38" r="4" fill="#F2EAD8"/><circle cx="68" cy="42" r="3" fill="#F2EAD8"/>'),
    profile: { O:88, C:40, E:40, A:75, N:75 },
    desc: '路漫漫其修远兮，吾将上下而求索。你与屈原一样，心怀理想、情感深邃。你有自己坚守的信念，哪怕不被世人理解也绝不妥协。',
    quote: '举世皆浊我独清，众人皆醉我独醒。',
    traits: '赤诚浪漫、理想主义、九死未悔'
  },
  {
    id: 'zhangliang', name: '张良', title: '留侯 · 汉初三杰之首',
    avatar: mkAvatar('zhangliang','#4A5A72',
      '<rect x="24" y="26" width="52" height="50" rx="4" fill="none" stroke="#F2EAD8" stroke-width="2"/><line x1="24" y1="43" x2="76" y2="43" stroke="#F2EAD8" stroke-width="1.2"/><line x1="24" y1="59" x2="76" y2="59" stroke="#F2EAD8" stroke-width="1.2"/><line x1="43" y1="26" x2="43" y2="76" stroke="#F2EAD8" stroke-width="1.2"/><line x1="60" y1="26" x2="60" y2="76" stroke="#F2EAD8" stroke-width="1.2"/><circle cx="50" cy="51" r="7" fill="#F2EAD8"/>'),
    profile: { O:80, C:85, E:35, A:75, N:15 },
    desc: '运筹帷幄，决胜千里。你与张良一样，智谋超群、低调内敛。你不需要站在聚光灯下，但你的每一次出手都恰到好处，举重若轻。',
    quote: '夫为天下除残去贼，宜缟素为资。',
    traits: '大智若愚、功成身退、精准判断'
  },
  {
    id: 'genghis', name: '成吉思汗', title: '一代天骄 · 蒙古帝国创立者',
    avatar: mkAvatar('genghis','#7A5A2E',
      '<path d="M22 42 Q50 12 78 42" fill="none" stroke="#F2EAD8" stroke-width="3"/><line x1="50" y1="28" x2="50" y2="78" stroke="#F2EAD8" stroke-width="2.2"/><polygon points="50,14 45,26 50,22 55,26" fill="#F2EAD8"/><line x1="30" y1="60" x2="50" y2="65" stroke="#F2EAD8" stroke-width="1.5"/><line x1="70" y1="55" x2="50" y2="63" stroke="#F2EAD8" stroke-width="1.5"/>'),
    profile: { O:70, C:80, E:90, A:15, N:12 },
    desc: '你的心胸有多大，你的疆域就有多大。你与成吉思汗一样，铁血果断、不屈不挠。你是天生的征服者，任何困难在你面前都会化为前进的阶梯。',
    quote: '不要因路远而踌躇，只要走，就必到达。',
    traits: '铁血意志、开拓进取、征服无畏'
  },
  {
    id: 'lindaiyu', name: '林黛玉', title: '潇湘妃子 · 《红楼梦》才女',
    avatar: mkAvatar('lindaiyu','#A85A78',
      '<circle cx="50" cy="50" r="7" fill="#F2EAD8"/><circle cx="50" cy="30" r="8" fill="none" stroke="#F2EAD8" stroke-width="2.2"/><circle cx="68" cy="42" r="8" fill="none" stroke="#F2EAD8" stroke-width="2.2"/><circle cx="63" cy="66" r="8" fill="none" stroke="#F2EAD8" stroke-width="2.2"/><circle cx="37" cy="66" r="8" fill="none" stroke="#F2EAD8" stroke-width="2.2"/><circle cx="32" cy="42" r="8" fill="none" stroke="#F2EAD8" stroke-width="2.2"/>'),
    profile: { O:85, C:30, E:25, A:55, N:88 },
    desc: '花谢花飞花满天，红消香断有谁怜。你与林黛玉一样，才华横溢、心思细腻。你的内心世界丰富而敏感，能感受到旁人看不到的美与哀愁。',
    quote: '质本洁来还洁去，强于污淖陷渠沟。',
    traits: '心思剔透、才情绝代、孤高自许'
  },
  {
    id: 'guanyu', name: '关羽', title: '武圣 · 三国蜀汉名将',
    avatar: mkAvatar('guanyu','#8B2E22',
      '<path d="M50 18 Q72 42 50 72" fill="none" stroke="#F2EAD8" stroke-width="3"/><line x1="50" y1="62" x2="50" y2="86" stroke="#F2EAD8" stroke-width="3"/><line x1="36" y1="78" x2="64" y2="78" stroke="#F2EAD8" stroke-width="2.2"/><line x1="28" y1="42" x2="46" y2="52" stroke="#F2EAD8" stroke-width="1.5"/><line x1="72" y1="42" x2="54" y2="52" stroke="#F2EAD8" stroke-width="1.5"/>'),
    profile: { O:40, C:75, E:50, A:35, N:20 },
    desc: '义薄云天，忠贯日月。你与关羽一样，一诺千金、刚正不阿。你重视荣誉和底线，一旦认定的事情就不会动摇，是让人心服口服的存在。',
    quote: '玉可碎而不可改其白，竹可焚而不可毁其节。',
    traits: '忠义无双、刚正不阿、言出必行'
  }
];

// ===== 测试流程 =====
function startTest() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  document.getElementById('test').style.display = 'block';
  answers = {};
  currentQ = 0;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  if (currentQ >= questions.length) {
    showResults();
    return;
  }
  const q = questions[currentQ];
  document.getElementById('qNumber').textContent = `第 ${q.id} 题 / 共 50 题`;
  document.getElementById('qText').textContent = q.text;
  document.getElementById('progressFill').style.width = `${(currentQ / questions.length) * 100}%`;
  document.getElementById('progressText').textContent = `${currentQ} / ${questions.length}`;

  // 根据题型显示不同的提示文字
  const hintEl = document.getElementById('qHint');
  hintEl.textContent = q.type === 'choice' ? '请选择最符合你的选项：' : '请选择你的认同程度：';

  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';

  if (q.type === 'choice') {
    q.choices.forEach((choice, i) => {
      const div = document.createElement('div');
      div.className = 'option';
      if (answers[q.id] === i) div.classList.add('selected');
      div.innerHTML = `<span class="dot"></span>${choice.label}`;
      div.onclick = () => selectAnswer(i);
      optsDiv.appendChild(div);
    });
  } else {
    likertOptions.forEach((opt, i) => {
      const div = document.createElement('div');
      div.className = 'option';
      if (answers[q.id] === i) div.classList.add('selected');
      div.innerHTML = `<span class="dot"></span>${opt.label}`;
      div.onclick = () => selectAnswer(i);
      optsDiv.appendChild(div);
    });
  }

  document.getElementById('questionCard').style.animation = 'none';
  document.getElementById('questionCard').offsetHeight;
  document.getElementById('questionCard').style.animation = 'fadeIn 0.4s ease';

  updateTabs();
  updateNavButtons();
}

function updateTabs() {
  const tabsDiv = document.getElementById('qTabs');
  let html = '';
  questions.forEach((q, i) => {
    let cls = 'q-tab';
    if (i === currentQ) cls += ' active';
    if (answers[q.id] !== undefined) cls += ' answered';
    // 情境选择题加特殊样式
    if (q.type === 'choice') cls += ' tab-choice';
    html += `<div class="${cls}" onclick="goToQuestion(${i})" title="第${q.id}题${q.type==='choice'?' · 情境选择':''}">${q.id}</div>`;
  });
  tabsDiv.innerHTML = html;
}

function updateNavButtons() {
  document.getElementById('btnPrev').disabled = currentQ === 0;
  document.getElementById('btnNext').disabled = currentQ >= questions.length - 1;
}

function goToQuestion(idx) {
  currentQ = idx;
  renderQuestion();
  document.getElementById('questionCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
    document.getElementById('questionCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function nextQuestion() {
  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
    document.getElementById('questionCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function selectAnswer(idx) {
  answers[questions[currentQ].id] = idx;
  currentQ++;
  renderQuestion();
}

// ===== 计分 =====
function calcScores() {
  const dims = { O: { raw:0, max:0 }, C: { raw:0, max:0 }, E: { raw:0, max:0 }, A: { raw:0, max:0 }, N: { raw:0, max:0 } };
  questions.forEach(q => {
    const aIdx = answers[q.id];
    if (aIdx === undefined) return;
    dims[q.dim].max += 5;

    if (q.type === 'choice') {
      // 情境选择题：直接使用选项中的 score 值
      dims[q.dim].raw += q.choices[aIdx].score;
    } else {
      // Likert量表题：按正向/反向计分
      const rawVal = likertOptions[aIdx].value;
      if (q.key === 1) {
        dims[q.dim].raw += rawVal;
      } else {
        dims[q.dim].raw += (6 - rawVal);
      }
    }
  });
  const scores = {};
  for (const [k, v] of Object.entries(dims)) {
    scores[k] = Math.round((v.raw / v.max) * 100);
  }
  return scores;
}

// ===== 人物匹配 =====
function matchFigures(scores) {
  const dims = ['O','C','E','A','N'];
  return figures.map(f => {
    let sumSq = 0;
    dims.forEach(d => { sumSq += Math.pow(scores[d] - f.profile[d], 2); });
    const dist = Math.sqrt(sumSq);
    const maxDist = Math.sqrt(100*100*5);
    const similarity = Math.round((1 - dist / maxDist) * 100);
    return { ...f, similarity, dist };
  }).sort((a, b) => a.dist - b.dist);
}

// ===== 结果展示 =====
function showResults() {
  document.getElementById('test').style.display = 'none';
  document.getElementById('landing').style.display = 'none';
  document.getElementById('results').style.display = 'block';

  const scores = calcScores();
  const ranked = matchFigures(scores);
  const top = ranked[0];

  document.getElementById('topFigure').innerHTML = `
    <div class="figure-avatar">${top.avatar}</div>
    <div class="figure-info">
      <h3>${top.name}</h3>
      <div class="figure-title">${top.title}</div>
      <div class="match-pct">匹配度 ${top.similarity}%</div>
      <p class="figure-desc">${top.desc}</p>
      <p class="figure-quote">"${top.quote}"</p>
      <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);">🎯 ${top.traits}</p>
    </div>
  `;

  renderRadarChart(scores);
  renderBarChart(scores);
  renderDimAnalysis(scores);
  renderOtherMatches(ranked.slice(1, 4));

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ECharts 雷达图 =====
function renderRadarChart(scores) {
  const dom = document.getElementById('radarChart');
  const chart = echarts.init(dom);
  const w = dom.clientWidth;
  const isNarrow = w < 500;
  chart.setOption({
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, data: ['你的得分'], textStyle: { color: '#3C2415' } },
    radar: {
      center: ['50%', '50%'],
      radius: isNarrow ? '52%' : '62%',
      indicator: [
        { name: '开放性 O', max: 100 },
        { name: '尽责性 C', max: 100 },
        { name: '外向性 E', max: 100 },
        { name: '宜人性 A', max: 100 },
        { name: '情绪稳定性 S', max: 100 },
      ],
      axisName: { color: '#3C2415', fontSize: isNarrow ? 11 : 13 },
      shape: 'circle',
      splitArea: { areaStyle: { color: ['#FEF8F0', '#F9F6F0', '#FEF8F0', '#F9F6F0'] } }
    },
    series: [{
      type: 'radar',
      name: '你的得分',
      data: [{ value: [scores.O, scores.C, scores.E, scores.A, 100 - scores.N], name: '你的得分' }],
      areaStyle: { color: 'rgba(181,52,58,0.2)' },
      lineStyle: { color: '#B5343A', width: 2.5 },
      itemStyle: { color: '#B5343A', borderColor: '#fff', borderWidth: 2 },
      symbol: 'circle', symbolSize: 8,
    }]
  });
  window.addEventListener('resize', () => chart.resize());
}

// ===== ECharts 柱状图 =====
function renderBarChart(scores) {
  const dom = document.getElementById('barChart');
  const chart = echarts.init(dom);
  const dims = ['开放性O','尽责性C','外向性E','宜人性A','情绪稳定性 S'];
  const vals = [scores.O, scores.C, scores.E, scores.A, 100 - scores.N];
  const colors = ['#E8734A','#3B7DD8','#E8A42E','#5DA88A','#8E6BBF'];
  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', containLabel: true },
    xAxis: { max: 100, axisLabel: { formatter: '{value}%' } },
    yAxis: { type: 'category', data: dims, axisLabel: { fontSize: 13, color: '#3C2415' }, inverse: true },
    series: [{
      type: 'bar',
      data: vals.map((v, i) => ({ value: v, itemStyle: { color: colors[i], borderRadius: [0,6,6,0] } })),
      barWidth: 22,
      label: { show: true, position: 'right', formatter: '{c}%', color: '#3C2415', fontSize: 12 }
    }]
  });
  window.addEventListener('resize', () => chart.resize());
}

// ===== 维度解读 =====
function renderDimAnalysis(scores) {
  const dimDefs = [
    {
      key: 'O', cls: 'dim-o', name: '开放性 Openness', score: scores.O,
      color: '#E8734A',
      high: '你对新事物充满好奇，拥有丰富的想象力和创造力。你乐于接受不同的观点和体验，对艺术与美学有敏锐的感知。这种开放性让你在创新领域如鱼得水。',
      mid: '你在开放与传统之间找到了平衡。你对新事物保持适度的接受度，不会盲目追逐潮流，也不会固执于旧有方式。',
      low: '你偏爱传统和务实的方式，重视经验与规则。你喜欢清晰明确的事物胜过抽象的概念，这种脚踏实地让你在需要稳定和可靠的领域表现出色。'
    },
    {
      key: 'C', cls: 'dim-c', name: '尽责性 Conscientiousness', score: scores.C,
      color: '#3B7DD8',
      high: '你是一个高度自律和有条理的人。你设定了明确的目标，并以惊人的毅力去完成。你对细节的关注和对承诺的坚守，让你在任何团队中都是最可靠的中坚力量。',
      mid: '你在规划与灵活之间取得了良好的平衡。你能在需要的时候集中精力完成任务，也允许自己在适当的时候放松和调整。',
      low: '你天性自由洒脱，不喜欢被条条框框所束缚。你更倾向于即兴发挥和灵活应变，这种随性的态度让你在面对变化时更加从容。'
    },
    {
      key: 'E', cls: 'dim-e', name: '外向性 Extraversion', score: scores.E,
      color: '#E8A42E',
      high: '你是社交场合中那道明亮的光。你从与他人的互动中获得能量，善于表达自己，在人群中如鱼得水。你的热情和感染力总能带动周围的气氛。',
      mid: '你在社交与独处之间自如切换。你既能享受与朋友相聚的欢乐，也懂得独处时充电的重要性。这种平衡让你在各种场合都游刃有余。',
      low: '你更享受安静的独处时光。你的能量来自内心世界而非外部刺激，你善于深度思考和独立工作。你的沉稳和专注是你最珍贵的品质。'
    },
    {
      key: 'A', cls: 'dim-a', name: '宜人性 Agreeableness', score: scores.A,
      color: '#5DA88A',
      high: '你拥有一颗柔软而富有同理心的心。你真诚地关心他人，乐于合作而非竞争。你的善良和包容让你成为周围人的温暖港湾。',
      mid: '你在刚与柔之间拿捏得当。你能理解他人的处境，但也不会委屈自己的原则。这种平衡让你既值得信赖又不失底线。',
      low: '你是一个直率而有主见的人。你不习惯拐弯抹角，敢于表达不同意见。你的竞争意识和独立判断让你在需要果断决策的场合大放异彩。'
    },
    {
      key: 'N', cls: 'dim-n', name: '情绪稳定性 Stability', score: 100 - scores.N,
      color: '#8E6BBF',
      high: '泰山崩于前而色不变。你的情绪内核极其稳定，面对压力和挫折时能保持清晰的头脑。这种冷静让你成为危机时刻天然的领导者。',
      mid: '你的情绪总体平稳，偶尔会有波动但不会长时间被负面情绪困扰。你有着不错的心理韧性，大多数时候能从容应对生活的起伏。',
      low: '你的情感世界丰富而敏感，对环境和他人的情绪变化有着敏锐的感知。虽然偶尔会陷入情绪漩涡，但这也赋予了你深刻的共情能力和艺术感悟力。'
    }
  ];

  const html = dimDefs.map(d => {
    const desc = d.score >= 70 ? d.high : d.score >= 40 ? d.mid : d.low;
    return `
      <div class="dim-card ${d.cls}">
        <h4>${d.name}</h4>
        <div class="dim-score">得分：${d.score}%</div>
        <div class="dim-score-bar"><div class="fill" style="width:${d.score}%"></div></div>
        <div class="dim-desc">${desc}</div>
      </div>`;
  }).join('');
  document.getElementById('dimAnalysis').innerHTML = html;
}

// ===== 备选匹配 =====
function renderOtherMatches(figures) {
  const html = figures.map(f => `
    <div class="other-figure">
      <div class="mini-avatar">${f.avatar}</div>
      <div class="mini-info">
        <h4>${f.name}</h4>
        <div class="mini-title">${f.title}</div>
      </div>
      <div class="mini-pct">${f.similarity}%</div>
    </div>
  `).join('');
  document.getElementById('otherMatches').innerHTML = html;
}

// ===== 分享 =====
function shareResult() {
  const topName = document.querySelector('#topFigure .figure-info h3')?.textContent || '';
  const topPct = document.querySelector('#topFigure .match-pct')?.textContent || '';
  const text = `🎭 我在「你是哪个历史人物」测试中，最匹配的历史人物是 —— ${topName}(${topPct})！\n\n你也来测测看，找到跨越千年的灵魂共鸣者 →`;
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制分享内容到剪贴板！快去发给朋友吧～');
  }).catch(() => {
    prompt('手动复制以下内容分享：', text);
  });
}

function retakeTest() {
  answers = {};
  currentQ = 0;
  document.getElementById('results').style.display = 'none';
  document.getElementById('test').style.display = 'block';
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

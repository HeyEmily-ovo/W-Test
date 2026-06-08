/**
 * 塔罗牌完整数据库 — 78 张牌（22 大阿尔卡纳 + 56 小阿尔卡纳）
 * 每张牌包含：名称、关键词（正位/逆位）、元素、简短描述
 */

const TAROT_DECK = [

  // ==================== 大阿尔卡纳 (Major Arcana) ====================
  {
    id: 'fool',
    name: '愚人',
    name_en: 'The Fool',
    number: 0,
    arcana: 'major',
    keywords_upright: ['新的开始', '冒险精神', '天真无畏', '自由', '无限可能', '随性而行'],
    keywords_reversed: ['鲁莽冲动', '缺乏计划', '愚蠢', '漫无目的', '不顾后果', '幼稚'],
    element: '风',
    planet: '天王星',
    description: '愚人象征着一段全新旅程的起点，带着赤子之心迈向未知。'
  },
  {
    id: 'magician',
    name: '魔术师',
    name_en: 'The Magician',
    number: 1,
    arcana: 'major',
    keywords_upright: ['创造力', '技能', '意志力', '专注', '资源齐备', '行动力'],
    keywords_reversed: ['欺骗', '能力不足', '滥用才华', '缺乏专注', '机会浪费', '操控'],
    element: '风',
    planet: '水星',
    description: '魔术师拥有将想法变为现实的能力，四大元素皆在掌握之中。'
  },
  {
    id: 'high_priestess',
    name: '女祭司',
    name_en: 'The High Priestess',
    number: 2,
    arcana: 'major',
    keywords_upright: ['直觉', '潜意识的智慧', '神秘', '内在认知', '静观其变', '灵性'],
    keywords_reversed: ['忽视直觉', '情绪封闭', '表面认知', '沉默的秘密', '缺乏自省'],
    element: '水',
    planet: '月亮',
    description: '女祭司守护着潜意识的大门，邀请你静下心来聆听内在的声音。'
  },
  {
    id: 'empress',
    name: '皇后',
    name_en: 'The Empress',
    number: 3,
    arcana: 'major',
    keywords_upright: ['丰盛', '母性', '滋养', '创造力', '感官享受', '自然之美'],
    keywords_reversed: ['依赖', '缺乏安全感', '创造力枯竭', '忽视自我', '过度保护'],
    element: '土',
    planet: '金星',
    description: '皇后是丰饶与滋养的化身，带来生命的繁盛与感官的愉悦。'
  },
  {
    id: 'emperor',
    name: '皇帝',
    name_en: 'The Emperor',
    number: 4,
    arcana: 'major',
    keywords_upright: ['权威', '秩序', '领导力', '稳定结构', '纪律', '掌控力'],
    keywords_reversed: ['专制', '失控', '权威滥用', '缺乏纪律', '僵化', '不成熟'],
    element: '火',
    planet: '白羊座',
    description: '皇帝代表着秩序与权威，用坚定的意志建立起稳固的疆域。'
  },
  {
    id: 'hierophant',
    name: '教皇',
    name_en: 'The Hierophant',
    number: 5,
    arcana: 'major',
    keywords_upright: ['传统', '精神指引', '教育', '信仰', '社会规范', '仪式'],
    keywords_reversed: ['反传统', '教条束缚', '盲目服从', '质疑权威', '创新突破'],
    element: '土',
    planet: '金牛座',
    description: '教皇是精神导师与传统的守护者，传递着世代累积的智慧。'
  },
  {
    id: 'lovers',
    name: '恋人',
    name_en: 'The Lovers',
    number: 6,
    arcana: 'major',
    keywords_upright: ['真爱', '和谐关系', '重要选择', '价值观一致', '灵魂契合', '承诺'],
    keywords_reversed: ['关系破裂', '价值观冲突', '错误选择', '不忠', '疏离', '诱惑'],
    element: '风',
    planet: '双子座',
    description: '恋人不仅是爱情的象征，更代表着内心价值与外在选择的一致。'
  },
  {
    id: 'chariot',
    name: '战车',
    name_en: 'The Chariot',
    number: 7,
    arcana: 'major',
    keywords_upright: ['胜利', '意志力', '驱动力', '掌控全局', '突破障碍', '决心'],
    keywords_reversed: ['失控', '溃败', '方向错误', '内心冲突', '攻击性', '挫折'],
    element: '水',
    planet: '巨蟹座',
    description: '战车以不可阻挡的气势向前推进，意志力是驾驭黑白双兽的缰绳。'
  },
  {
    id: 'strength',
    name: '力量',
    name_en: 'Strength',
    number: 8,
    arcana: 'major',
    keywords_upright: ['内在力量', '勇气', '耐心', '以柔克刚', '自信', '驯服本能'],
    keywords_reversed: ['软弱', '自我怀疑', '失控', '缺乏勇气', '被情绪支配', '暴力'],
    element: '火',
    planet: '狮子座',
    description: '真正的力量不是蛮力，而是以温柔与耐心驯服内心的野兽。'
  },
  {
    id: 'hermit',
    name: '隐士',
    name_en: 'The Hermit',
    number: 9,
    arcana: 'major',
    keywords_upright: ['内省', '独处', '智慧探寻', '静思', '引导之光', '沉淀'],
    keywords_reversed: ['孤独', '孤立', '逃避现实', '过度内省', '迷失方向', '拒绝帮助'],
    element: '土',
    planet: '处女座',
    description: '隐士提着灯独自走向内心深处，在寂静中寻找真正的智慧。'
  },
  {
    id: 'wheel_of_fortune',
    name: '命运之轮',
    name_en: 'Wheel of Fortune',
    number: 10,
    arcana: 'major',
    keywords_upright: ['命运转折', '好运降临', '周期循环', '机遇', '顺势而为', '因果业力'],
    keywords_reversed: ['厄运', '抵抗变化', '失控', '坏循环', '错失良机', '停滞'],
    element: '火',
    planet: '木星',
    description: '命运之轮永不停歇地转动，提醒我们世事无常、否极泰来。'
  },
  {
    id: 'justice',
    name: '正义',
    name_en: 'Justice',
    number: 11,
    arcana: 'major',
    keywords_upright: ['公平公正', '真相', '因果', '理性决策', '责任承担', '平衡'],
    keywords_reversed: ['不公', '偏见', '逃避责任', '失衡', '错误裁决', '自欺欺人'],
    element: '风',
    planet: '天秤座',
    description: '正义之剑斩断虚妄，天平衡量真相——每一个选择都有其后果。'
  },
  {
    id: 'hanged_man',
    name: '倒吊人',
    name_en: 'The Hanged Man',
    number: 12,
    arcana: 'major',
    keywords_upright: ['牺牲', '换位思考', '暂停', '放手', '新的视角', '精神觉醒'],
    keywords_reversed: ['无谓牺牲', '固执', '停滞不前', '逃避', '拖延', '视角狭隘'],
    element: '水',
    planet: '海王星',
    description: '倒吊人自愿悬挂于天地之间，以颠倒的视角看见常人看不见的真理。'
  },
  {
    id: 'death',
    name: '死神',
    name_en: 'Death',
    number: 13,
    arcana: 'major',
    keywords_upright: ['结束', '转变', '重生', '放下过去', '自然终结', '蜕变新生'],
    keywords_reversed: ['抗拒改变', '停滞腐朽', '恐惧终结', '无法放手', '行尸走肉'],
    element: '水',
    planet: '天蝎座',
    description: '死神并非肉体的消亡，而是旧我的死去与新我的诞生。'
  },
  {
    id: 'temperance',
    name: '节制',
    name_en: 'Temperance',
    number: 14,
    arcana: 'major',
    keywords_upright: ['平衡', '调和', '耐心', '中庸之道', '融合', '自我控制'],
    keywords_reversed: ['失衡', '过度', '缺乏节制', '冲突对立', '急功近利', '不协调'],
    element: '火',
    planet: '射手座',
    description: '节制天使将两杯之水来回调和，教会我们在对立中寻找中道。'
  },
  {
    id: 'devil',
    name: '恶魔',
    name_en: 'The Devil',
    number: 15,
    arcana: 'major',
    keywords_upright: ['欲望束缚', '物质主义', '执念', '依赖关系', '阴影面', '沉迷'],
    keywords_reversed: ['挣脱束缚', '觉醒', '戒除瘾癖', '释怀', '自由', '直面阴影'],
    element: '土',
    planet: '摩羯座',
    description: '恶魔揭示了我们自愿戴上的枷锁——锁链看似牢固，其实可以自行解开。'
  },
  {
    id: 'tower',
    name: '高塔',
    name_en: 'The Tower',
    number: 16,
    arcana: 'major',
    keywords_upright: ['剧变', '崩塌', '真相揭露', '摧毁幻觉', '天翻地覆', '顿悟'],
    keywords_reversed: ['逃避灾难', '延缓崩塌', '困守危局', '拒绝改变', '侥幸心理'],
    element: '火',
    planet: '火星',
    description: '高塔的倒塌虽然令人恐惧，但崩塌的只是虚假的城堡，留下真实的根基。'
  },
  {
    id: 'star',
    name: '星星',
    name_en: 'The Star',
    number: 17,
    arcana: 'major',
    keywords_upright: ['希望', '疗愈', '灵感', '信念', '宁静', '新愿景'],
    keywords_reversed: ['绝望', '失去信心', '幻灭', '灵感枯竭', '自我否定', '消沉'],
    element: '风',
    planet: '水瓶座',
    description: '星星是暴风雨后的第一道光，带来疗愈与希望的神圣力量。'
  },
  {
    id: 'moon',
    name: '月亮',
    name_en: 'The Moon',
    number: 18,
    arcana: 'major',
    keywords_upright: ['潜意识', '恐惧', '幻觉', '直觉导航', '梦境', '未知领域'],
    keywords_reversed: ['恐惧消散', '真相浮现', '自我欺骗被揭穿', '混乱平息', '回归理性'],
    element: '水',
    planet: '双鱼座',
    description: '月光下一切都不清晰，但正是穿越这片迷雾，我们才能找到隐藏的真相。'
  },
  {
    id: 'sun',
    name: '太阳',
    name_en: 'The Sun',
    number: 19,
    arcana: 'major',
    keywords_upright: ['喜悦', '成功', '活力', '光明', '纯真', '成就', '温暖'],
    keywords_reversed: ['暂时的阴霾', '快乐被遮蔽', '缺乏自信', '延迟成功', '过度乐观'],
    element: '火',
    planet: '太阳',
    description: '太阳是塔罗中最明亮的一张牌，万物在阳光普照下蓬勃生长。'
  },
  {
    id: 'judgement',
    name: '审判',
    name_en: 'Judgement',
    number: 20,
    arcana: 'major',
    keywords_upright: ['觉醒召唤', '自我审判', '重生', '释怀过去', '回应使命', '清算'],
    keywords_reversed: ['自我怀疑', '拒绝召唤', '后悔', '无法释怀', '逃避清算', '内疚'],
    element: '火',
    planet: '冥王星',
    description: '审判的号角唤醒沉睡的灵魂，是时候回应内心深处的召唤了。'
  },
  {
    id: 'world',
    name: '世界',
    name_en: 'The World',
    number: 21,
    arcana: 'major',
    keywords_upright: ['完成', '圆满', '成就', '整合', '旅程终点', '宇宙合一'],
    keywords_reversed: ['未完成', '缺失环节', '停滞', '不满足', '功亏一篑', '封闭'],
    element: '土',
    planet: '土星',
    description: '世界之舞庆祝着一个周期的完美完成——万事俱备，圆融无缺。'
  },

  // ==================== 小阿尔卡纳 — 权杖 (Wands) ====================
  {
    id: 'wands_ace', name: '权杖王牌', name_en: 'Ace of Wands', number: 1, arcana: 'minor', suit: 'wands',
    keywords_upright: ['灵感闪现', '新事业起点', '创造力爆发', '热情', '勇气', '行动契机'],
    keywords_reversed: ['错失机会', '创意夭折', '拖延', '缺乏动力', '方向模糊'],
    description: '一支充满生命力的权杖，象征新的创意与行动力的诞生。'
  },
  {
    id: 'wands_2', name: '权杖二', name_en: 'Two of Wands', number: 2, arcana: 'minor', suit: 'wands',
    keywords_upright: ['未来规划', '视野拓展', '选择方向', '掌控全局', '雄心壮志'],
    keywords_reversed: ['犹豫不决', '规划失误', '恐惧未知', '局限视野', '错失扩张'],
    description: '手握地球仪眺望远方，站在高处规划未来的版图。'
  },
  {
    id: 'wands_3', name: '权杖三', name_en: 'Three of Wands', number: 3, arcana: 'minor', suit: 'wands',
    keywords_upright: ['扩展', '远见', '初步成功', '探索', '贸易', '领先一步'],
    keywords_reversed: ['计划受阻', '眼高手低', '扩张失败', '回撤', '失望'],
    description: '站在崖边目送船只远航，你的计划正在驶向更广阔的天地。'
  },
  {
    id: 'wands_4', name: '权杖四', name_en: 'Four of Wands', number: 4, arcana: 'minor', suit: 'wands',
    keywords_upright: ['庆祝', '安定', '家园', '收获', '和谐', '里程碑'],
    keywords_reversed: ['不安定', '家庭矛盾', '庆祝中断', '过渡期', '缺乏归属'],
    description: '四根权杖撑起花环，庆祝一个阶段的圆满落成。'
  },
  {
    id: 'wands_5', name: '权杖五', name_en: 'Five of Wands', number: 5, arcana: 'minor', suit: 'wands',
    keywords_upright: ['竞争', '冲突', '分歧', '挑战', '多元碰撞', '磨练'],
    keywords_reversed: ['化解冲突', '避免争执', '合作达成', '内耗', '退出竞争'],
    description: '五根权杖相互交错，激烈的竞争与碰撞正在推动成长。'
  },
  {
    id: 'wands_6', name: '权杖六', name_en: 'Six of Wands', number: 6, arcana: 'minor', suit: 'wands',
    keywords_upright: ['胜利', '认可', '荣誉', '进步', '自信', '领导地位'],
    keywords_reversed: ['骄傲自满', '失败', '不被认可', '嫉妒', '昙花一现'],
    description: '凯旋的英雄骑马归来，众人的欢呼是最好的勋章。'
  },
  {
    id: 'wands_7', name: '权杖七', name_en: 'Seven of Wands', number: 7, arcana: 'minor', suit: 'wands',
    keywords_upright: ['坚守阵地', '勇气', '捍卫立场', '竞争优势', '不屈不挠'],
    keywords_reversed: ['放弃抵抗', '力不从心', '被压倒', '孤立无援', '退让'],
    description: '站在高处以一敌六，坚定的信念就是最好的防御。'
  },
  {
    id: 'wands_8', name: '权杖八', name_en: 'Eight of Wands', number: 8, arcana: 'minor', suit: 'wands',
    keywords_upright: ['飞速进展', '消息传来', '行动', '旅行', '势头正猛', '突破'],
    keywords_reversed: ['延误', '停滞', '混乱', '方向错误', '信息中断', '急刹车'],
    description: '八根权杖划破长空，一切正在以不可阻挡的速度向前推进。'
  },
  {
    id: 'wands_9', name: '权杖九', name_en: 'Nine of Wands', number: 9, arcana: 'minor', suit: 'wands',
    keywords_upright: ['韧性', '坚持到底', '最后防线', '警觉', '经验积累', '百折不挠'],
    keywords_reversed: ['疲惫', '放弃', '过度防御', '偏执', '精力耗尽', '孤立'],
    description: '伤痕累累却依然站立，最后一根权杖是绝不倒下的决心。'
  },
  {
    id: 'wands_10', name: '权杖十', name_en: 'Ten of Wands', number: 10, arcana: 'minor', suit: 'wands',
    keywords_upright: ['重担', '责任', '压力', '坚持', '快完成了', '全力以赴'],
    keywords_reversed: ['不堪重负', '卸下包袱', '拒绝承担', '崩溃', '学会放手'],
    description: '背负十根权杖艰难前行，成功的终点已近，但也需要审视何为真正的负担。'
  },
  {
    id: 'wands_page', name: '权杖侍从', name_en: 'Page of Wands', number: 11, arcana: 'minor', suit: 'wands',
    keywords_upright: ['探索', '新想法', '热情洋溢', '冒险精神', '好消息'],
    keywords_reversed: ['想法不成熟', '虎头蛇尾', '坏消息', '缺乏方向', '浮躁'],
    description: '年轻的侍从手持权杖，对世界充满好奇与探索的热情。'
  },
  {
    id: 'wands_knight', name: '权杖骑士', name_en: 'Knight of Wands', number: 12, arcana: 'minor', suit: 'wands',
    keywords_upright: ['行动派', '冲动', '冒险', '热情似火', '追逐梦想'],
    keywords_reversed: ['鲁莽', '半途而废', '急躁', '缺乏耐心', '精力分散'],
    description: '骑士策马飞奔，带着火一般的热情冲向目标。'
  },
  {
    id: 'wands_queen', name: '权杖皇后', name_en: 'Queen of Wands', number: 13, arcana: 'minor', suit: 'wands',
    keywords_upright: ['自信魅力', '领导力', '热情好客', '创造力', '独立自主'],
    keywords_reversed: ['嫉妒', '控制欲', '缺乏自信', '暴躁', '自我中心'],
    description: '权杖皇后端坐于宝座，以温暖而坚定的力量感染周围所有人。'
  },
  {
    id: 'wands_king', name: '权杖国王', name_en: 'King of Wands', number: 14, arcana: 'minor', suit: 'wands',
    keywords_upright: ['远见卓识', '企业家精神', '领导', '荣誉', '大胆决策'],
    keywords_reversed: ['专制', '鲁莽决策', '过高期望', '暴政', '不切实际'],
    description: '权杖国王是火象力量的成熟化身，以远见和勇气开创事业。'
  },

  // ==================== 小阿尔卡纳 — 圣杯 (Cups) ====================
  {
    id: 'cups_ace', name: '圣杯王牌', name_en: 'Ace of Cups', number: 1, arcana: 'minor', suit: 'cups',
    keywords_upright: ['新感情', '爱的开始', '直觉开启', '情感满溢', '喜悦', '灵性觉醒'],
    keywords_reversed: ['情感空虚', '爱被压抑', '创造力受阻', '情感封闭', '失恋'],
    description: '圣杯溢出生命之水，一段新的情感之旅正在开启。'
  },
  {
    id: 'cups_2', name: '圣杯二', name_en: 'Two of Cups', number: 2, arcana: 'minor', suit: 'cups',
    keywords_upright: ['两情相悦', '伙伴关系', '吸引', '和解', '平等互惠'],
    keywords_reversed: ['关系失衡', '分手', '信任破裂', '单相思', '沟通障碍'],
    description: '两人举杯相望，灵魂在平等的对视中找到回响。'
  },
  {
    id: 'cups_3', name: '圣杯三', name_en: 'Three of Cups', number: 3, arcana: 'minor', suit: 'cups',
    keywords_upright: ['欢庆', '友谊', '团聚', '分享喜悦', '社群', '合作'],
    keywords_reversed: ['过度放纵', '友情裂痕', '八卦', '孤立', '社交疲惫'],
    description: '三位女子举杯共舞，友谊与欢庆让生命绽放光彩。'
  },
  {
    id: 'cups_4', name: '圣杯四', name_en: 'Four of Cups', number: 4, arcana: 'minor', suit: 'cups',
    keywords_upright: ['沉思', '不满', '冷漠', '重新评估', '错失机会而不自知'],
    keywords_reversed: ['觉醒', '接受新机会', '走出麻木', '感恩', '新的动力'],
    description: '树下静坐的人对递来的第四只圣杯视而不见——机会就在眼前。'
  },
  {
    id: 'cups_5', name: '圣杯五', name_en: 'Five of Cups', number: 5, arcana: 'minor', suit: 'cups',
    keywords_upright: ['失落', '悲伤', '遗憾', '聚焦失败', '未看到的希望'],
    keywords_reversed: ['接受', '走出悲伤', '看到转机', '释怀', '希望萌芽'],
    description: '三只圣杯倾倒，两只尚在身后——不要只盯着失去的，留下的依然珍贵。'
  },
  {
    id: 'cups_6', name: '圣杯六', name_en: 'Six of Cups', number: 6, arcana: 'minor', suit: 'cups',
    keywords_upright: ['怀念', '纯真', '旧日回忆', '重聚', '善意', '童年'],
    keywords_reversed: ['沉溺过去', '无法成长', '遗忘', '拒绝未来', '脱离现实'],
    description: '大孩子将花杯递给小孩子——过去的温暖回忆正在滋养现在。'
  },
  {
    id: 'cups_7', name: '圣杯七', name_en: 'Seven of Cups', number: 7, arcana: 'minor', suit: 'cups',
    keywords_upright: ['幻想', '选择众多', '白日梦', '欲望', '幻象', '可能性的迷宫'],
    keywords_reversed: ['做出选择', '现实回归', '清醒', '专注', '目标明确'],
    description: '七只圣杯漂浮于云端，每个都承载着一个诱人但未必真实的愿望。'
  },
  {
    id: 'cups_8', name: '圣杯八', name_en: 'Eight of Cups', number: 8, arcana: 'minor', suit: 'cups',
    keywords_upright: ['离开', '放弃现有', '追寻更高意义', '情感上的转身', '勇敢告别'],
    keywords_reversed: ['不敢离开', '固守', '恐惧改变', '徘徊', '目标不明确'],
    description: '转身离开堆积的圣杯，走向月光照耀的山路——有些告别是为了更高的追寻。'
  },
  {
    id: 'cups_9', name: '圣杯九', name_en: 'Nine of Cups', number: 9, arcana: 'minor', suit: 'cups',
    keywords_upright: ['愿望成真', '满足', '快乐', '享受', '成就感', '心想事成'],
    keywords_reversed: ['不满足', '贪婪', '表面快乐', '愿望落空', '炫耀'],
    description: '九只圣杯整齐排列，愿望成真的人露出满足的微笑——这就是"心想事成"牌。'
  },
  {
    id: 'cups_10', name: '圣杯十', name_en: 'Ten of Cups', number: 10, arcana: 'minor', suit: 'cups',
    keywords_upright: ['家庭幸福', '情感圆满', '和谐', '归属感', '爱的巅峰'],
    keywords_reversed: ['家庭失和', '幸福破裂', '不和谐', '理想破灭', '疏离'],
    description: '彩虹下的家庭依偎仰望十只圣杯——情感的最高圆满。'
  },
  {
    id: 'cups_page', name: '圣杯侍从', name_en: 'Page of Cups', number: 11, arcana: 'minor', suit: 'cups',
    keywords_upright: ['创意灵感', '直觉', '情感新芽', '浪漫讯息', '敏感'],
    keywords_reversed: ['情感不成熟', '创意受阻', '情绪化', '逃避现实', '被拒绝'],
    description: '侍从手中的圣杯跃出一条小鱼——创意与直觉的惊喜在不经意间浮现。'
  },
  {
    id: 'cups_knight', name: '圣杯骑士', name_en: 'Knight of Cups', number: 12, arcana: 'minor', suit: 'cups',
    keywords_upright: ['浪漫求婚', '追随理想', '魅力', '诗意', '情感追求'],
    keywords_reversed: ['情感欺骗', '空想', '情绪不稳', '不切实际的浪漫', '善变'],
    description: '白马骑士手持圣杯缓缓前行，他是浪漫与理想的化身。'
  },
  {
    id: 'cups_queen', name: '圣杯皇后', name_en: 'Queen of Cups', number: 13, arcana: 'minor', suit: 'cups',
    keywords_upright: ['同理心', '温柔', '母性', '直觉力强', '情感深度', '治愈者'],
    keywords_reversed: ['情绪依赖', '过度敏感', '情感勒索', '自怜', '边界模糊'],
    description: '圣杯皇后凝视着华丽的杯盏，她的心像海洋一样深邃而包容。'
  },
  {
    id: 'cups_king', name: '圣杯国王', name_en: 'King of Cups', number: 14, arcana: 'minor', suit: 'cups',
    keywords_upright: ['情感成熟', '包容', '智慧', '情绪掌控', '慈爱', '外交手腕'],
    keywords_reversed: ['情绪操控', '压抑', '冷酷', '情感勒索', '不稳定的情绪'],
    description: '圣杯国王端坐于大海之上，他驾驭情感的艺术已达化境。'
  },

  // ==================== 小阿尔卡纳 — 宝剑 (Swords) ====================
  {
    id: 'swords_ace', name: '宝剑王牌', name_en: 'Ace of Swords', number: 1, arcana: 'minor', suit: 'swords',
    keywords_upright: ['真相', '清晰的思维', '新想法', '决断力', '突破', '正义'],
    keywords_reversed: ['思维混乱', '错误判断', '真相被掩', '滥用智力', '暴力'],
    description: '宝剑高举冲破云层，真理的光芒刺破一切迷雾。'
  },
  {
    id: 'swords_2', name: '宝剑二', name_en: 'Two of Swords', number: 2, arcana: 'minor', suit: 'swords',
    keywords_upright: ['两难选择', '僵局', '逃避决定', '内心封闭', '平衡思考'],
    keywords_reversed: ['做出决定', '信息过载', '打破僵局', '真相浮现', '释放'],
    description: '蒙眼女子双手交叉持剑——你在两个选择之间筑起了一道墙。'
  },
  {
    id: 'swords_3', name: '宝剑三', name_en: 'Three of Swords', number: 3, arcana: 'minor', suit: 'swords',
    keywords_upright: ['心碎', '悲伤', '背叛', '痛苦真相', '分离', '伤害'],
    keywords_reversed: ['愈合', '释怀', '走出悲伤', '原谅', '恢复', '释然'],
    description: '三把宝剑穿透红心——痛苦是真实的，但穿透意味着终将过去。'
  },
  {
    id: 'swords_4', name: '宝剑四', name_en: 'Four of Swords', number: 4, arcana: 'minor', suit: 'swords',
    keywords_upright: ['休息', '恢复', '沉思', '冥想', '退隐', '积蓄力量'],
    keywords_reversed: ['焦躁', '无法休息', '重返战场', '精力恢复', '不安'],
    description: '骑士在教堂中静卧——战斗之后需要静养，这不是逃避而是准备。'
  },
  {
    id: 'swords_5', name: '宝剑五', name_en: 'Five of Swords', number: 5, arcana: 'minor', suit: 'swords',
    keywords_upright: ['胜利的代价', '冲突', '羞辱', '背叛', '赢家通吃', '内疚'],
    keywords_reversed: ['和解', '放下争执', '妥协', '过去的分歧', '认错'],
    description: '胜者手持三把宝剑冷笑，败者黯然离去——有些胜利不值得。'
  },
  {
    id: 'swords_6', name: '宝剑六', name_en: 'Six of Swords', number: 6, arcana: 'minor', suit: 'swords',
    keywords_upright: ['过渡', '离开困境', '向前看', '疗愈之旅', '平静的转变'],
    keywords_reversed: ['无法离开', '沉溺痛苦', '停滞', '情绪包袱', '拒绝改变'],
    description: '船夫撑船渡向对岸——虽然缓慢，但你正在离开风暴的中心。'
  },
  {
    id: 'swords_7', name: '宝剑七', name_en: 'Seven of Swords', number: 7, arcana: 'minor', suit: 'swords',
    keywords_upright: ['策略', '隐秘行动', '偷窃', '计谋', '独自行动', '智取'],
    keywords_reversed: ['暴露', '坦白', '计谋被识破', '诚实', '归还', '认罪'],
    description: '踮脚偷走宝剑的身影——有时候，需要巧妙的策略而非蛮力。'
  },
  {
    id: 'swords_8', name: '宝剑八', name_en: 'Eight of Swords', number: 8, arcana: 'minor', suit: 'swords',
    keywords_upright: ['自我束缚', '限制', '困局', '负面思维', '看不见出路'],
    keywords_reversed: ['自我解放', '打破限制', '新的视角', '信念', '重获自由'],
    description: '蒙眼女子被八把宝剑环绕——束缚你的不是剑，是你自己。'
  },
  {
    id: 'swords_9', name: '宝剑九', name_en: 'Nine of Swords', number: 9, arcana: 'minor', suit: 'swords',
    keywords_upright: ['忧虑', '失眠', '噩梦', '过度思考', '恐惧', '内疚'],
    keywords_reversed: ['释放焦虑', '看到希望', '恐惧消散', '寻求帮助', '康复'],
    description: '深夜醒来掩面哭泣——有些恐惧只在脑海，天亮后就会消散。'
  },
  {
    id: 'swords_10', name: '宝剑十', name_en: 'Ten of Swords', number: 10, arcana: 'minor', suit: 'swords',
    keywords_upright: ['彻底的终结', '背叛', '触底', '无可挽回', '痛苦的完结'],
    keywords_reversed: ['触底反弹', '恢复', '吸取教训', '重新站起', '幸存'],
    description: '十把剑刺穿倒地的身影——最坏的事情已经发生，而你还活着，这意味着只能变好。'
  },
  {
    id: 'swords_page', name: '宝剑侍从', name_en: 'Page of Swords', number: 11, arcana: 'minor', suit: 'swords',
    keywords_upright: ['好奇心', '新思维', '警觉', '沟通', '真相探寻'],
    keywords_reversed: ['搬弄是非', '肤浅', '缺乏思考', '轻信', '泄密'],
    description: '侍从举剑站立，随时准备用锐利的思维迎击一切挑战。'
  },
  {
    id: 'swords_knight', name: '宝剑骑士', name_en: 'Knight of Swords', number: 12, arcana: 'minor', suit: 'swords',
    keywords_upright: ['果断', '直接', '迅速行动', '雄心', '口才', '斗志'],
    keywords_reversed: ['鲁莽', '伤人', '冲动', '不计后果', '口无遮拦'],
    description: '骑士持剑冲锋——他是行动力与果断的化身，但小心他冲得太快。'
  },
  {
    id: 'swords_queen', name: '宝剑皇后', name_en: 'Queen of Swords', number: 13, arcana: 'minor', suit: 'swords',
    keywords_upright: ['独立思考', '理性', '清晰', '智慧', '独立', '敏锐洞察'],
    keywords_reversed: ['冷酷', '刻薄', '偏见', '封闭', '过度理性', '孤立'],
    description: '宝剑皇后端坐举剑——她经历过风霜，因此比任何人都更清晰透彻。'
  },
  {
    id: 'swords_king', name: '宝剑国王', name_en: 'King of Swords', number: 14, arcana: 'minor', suit: 'swords',
    keywords_upright: ['权威', '理性', '专业', '公正', '逻辑', '分析力'],
    keywords_reversed: ['滥用权力', '冷酷', '独裁', '不公', '操纵', '傲慢'],
    description: '宝剑国王是理性与公正的最高裁判，以冷静的头脑裁决一切。'
  },

  // ==================== 小阿尔卡纳 — 星币 (Pentacles) ====================
  {
    id: 'pentacles_ace', name: '星币王牌', name_en: 'Ace of Pentacles', number: 1, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['财富机会', '新事业', '实际收益', '物质基础', '健康', '种子'],
    keywords_reversed: ['错失机会', '财务损失', '失败的投资', '不稳定的基础'],
    description: '云中伸出的手托起一枚金色星币——一个扎实的物质机会正在降临。'
  },
  {
    id: 'pentacles_2', name: '星币二', name_en: 'Two of Pentacles', number: 2, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['平衡', '多任务', '适应变化', '弹性', '资源调配'],
    keywords_reversed: ['失衡', '财务混乱', '力不从心', '过度投入', '资源浪费'],
    description: '戏耍两枚星币的人踏着波浪舞动——在变化中保持平衡是一门艺术。'
  },
  {
    id: 'pentacles_3', name: '星币三', name_en: 'Three of Pentacles', number: 3, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['团队合作', '专业技能', '精进', '规划', '协作', '精益求精'],
    keywords_reversed: ['缺乏合作', '技艺不精', '团队分裂', '质量低下', '各自为政'],
    description: '工匠、建筑师与修士共商蓝图——卓越的成果离不开团队的协作。'
  },
  {
    id: 'pentacles_4', name: '星币四', name_en: 'Four of Pentacles', number: 4, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['守财', '安全感', '控制欲', '保守', '稳固', '囤积'],
    keywords_reversed: ['放手', '分享', '财务开放', '释放', '慷慨', '投资'],
    description: '紧紧抱住所持之物的人——安全与封闭只有一线之隔。'
  },
  {
    id: 'pentacles_5', name: '星币五', name_en: 'Five of Pentacles', number: 5, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['匮乏', '困难', '孤立', '物质困境', '寻求帮助', '被遗忘'],
    keywords_reversed: ['走出困境', '重获支持', '精神复苏', '找到归属', '转机'],
    description: '两人在暴雪中蹒跚经过明亮的教堂——帮助就在身边，只是还未发现。'
  },
  {
    id: 'pentacles_6', name: '星币六', name_en: 'Six of Pentacles', number: 6, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['分享', '慷慨', '施与受', '公平分配', '慈善', '帮助'],
    keywords_reversed: ['吝啬', '不平等', '债务', '条件附加', '施舍的姿态'],
    description: '富者手持天平分发星币——给予与接受之间，平衡才是关键。'
  },
  {
    id: 'pentacles_7', name: '星币七', name_en: 'Seven of Pentacles', number: 7, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['等待收获', '评估', '投资回报', '耐心', '耕耘', '反思'],
    keywords_reversed: ['收获不佳', '白费功夫', '急躁', '投资失误', '缺乏耐心'],
    description: '倚锄凝望星币之树——你已种下种子，现在需要耐心等待果实成熟。'
  },
  {
    id: 'pentacles_8', name: '星币八', name_en: 'Eight of Pentacles', number: 8, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['精进技艺', '专注', '勤奋', '学徒', '细节', '重复练习'],
    keywords_reversed: ['粗制滥造', '缺乏动力', '急功近利', '厌烦', '无进步'],
    description: '工匠专心雕琢一枚又一枚星币——真正的精通源于日复一日的打磨。'
  },
  {
    id: 'pentacles_9', name: '星币九', name_en: 'Nine of Pentacles', number: 9, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['自给自足', '独立', '丰裕', '享受成果', '优雅', '财务自由'],
    keywords_reversed: ['依赖', '财务不稳', '炫耀', '孤独的富足', '过度消费'],
    description: '华服女子在葡萄园中悠闲漫步——通过自己的努力换来的自在最是甜美。'
  },
  {
    id: 'pentacles_10', name: '星币十', name_en: 'Ten of Pentacles', number: 10, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['家族财富', '传承', '长久繁荣', '稳定', '世代', '根基'],
    keywords_reversed: ['家族纷争', '遗产纠纷', '财富流失', '不稳定', '断层'],
    description: '三代同堂的城堡前排列十枚星币——真正的富足是代代相传的稳固根基。'
  },
  {
    id: 'pentacles_page', name: '星币侍从', name_en: 'Page of Pentacles', number: 11, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['学习', '务实', '新技能', '踏实', '上进心', '理财意识'],
    keywords_reversed: ['懒散', '缺乏上进', '浪费', '不切实际', '学业受阻'],
    description: '侍从双手捧持星币专注凝视——学习与实践是财富的真正起点。'
  },
  {
    id: 'pentacles_knight', name: '星币骑士', name_en: 'Knight of Pentacles', number: 12, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['踏实可靠', '勤奋', '耐心', '坚持', '稳定前行', '责任心'],
    keywords_reversed: ['停滞', '懒散', '保守过度', '无趣', '缺乏冒险精神'],
    description: '黑马骑士静立凝视手中的星币——他走得慢，但每一步都踩得极稳。'
  },
  {
    id: 'pentacles_queen', name: '星币皇后', name_en: 'Queen of Pentacles', number: 13, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['务实', '滋养', '持家有道', '丰裕', '安全感', '理财高手'],
    keywords_reversed: ['财务问题', '忽视家庭', '物欲过重', '不安全', '不切实际'],
    description: '星币皇后怀抱星币凝视着花园——她深知真正的富足是物质与心灵双丰收。'
  },
  {
    id: 'pentacles_king', name: '星币国王', name_en: 'King of Pentacles', number: 14, arcana: 'minor', suit: 'pentacles',
    keywords_upright: ['财富', '成功', '稳健', '实际', '商业头脑', '安全感'],
    keywords_reversed: ['贪婪', '腐败', '物质至上', '失败的投资', '吝啬', '赌徒'],
    description: '星币国王安坐于金币与藤蔓之中——他代表着物质世界的最高成就。'
  }
];

// 按 ID 快速索引
const CARD_MAP = Object.fromEntries(TAROT_DECK.map(c => [c.id, c]));

// ===== 牌面图片配置 =====
// 本地路径：将公开版权的 RWS 牌图放入 img/ 文件夹，按卡牌 ID 命名
//   例如：img/fool.jpg, img/magician.jpg, img/wands_ace.jpg
// 远程路径：也可设置为 CDN URL 前缀，如 'https://example.com/tarot/'
const IMAGE_CONFIG = {
  basePath: 'img/',        // 图片目录路径
  extension: '.png',       // 图片扩展名（Geldard 版 RWS 为 PNG 格式）
  fallback: null           // 可选的远程 CDN 回退地址（如 'https://cdn.example.com/'）
};

/** 获取卡牌图片 URL */
function getCardImageUrl(cardId) {
  return IMAGE_CONFIG.basePath + cardId + IMAGE_CONFIG.extension;
}

/** 获取卡背图片 URL */
function getCardBackUrl() {
  return IMAGE_CONFIG.basePath + 'card-back' + IMAGE_CONFIG.extension;
}

// 领域标签
const DOMAINS = {
  love:      { name: '感情',     icon: '💕', desc: '爱情与亲密关系' },
  career:    { name: '事业',     icon: '💼', desc: '工作与职业发展' },
  study:     { name: '学业',     icon: '📚', desc: '学习与考试' },
  finance:   { name: '财运',     icon: '💰', desc: '金钱与投资' },
  general:   { name: '综合',     icon: '🔮', desc: '综合运势解读' }
};

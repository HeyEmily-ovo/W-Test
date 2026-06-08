/**
 * 牌阵定义 — 每种牌阵的布局、位置含义和适用场景
 * 坐标系统：百分比定位，适配各种屏幕尺寸
 */

const SPREADS = {

  single: {
    id: 'single',
    name: '单张指引',
    name_en: 'Single Card',
    cardCount: 1,
    icon: '🃏',
    desc: '抽取一张牌，获得当下最需要的指引',
    suitable: ['general', 'love', 'career', 'study', 'finance'],
    positions: [
      { id: 1, label: '核心指引', meaning: '此刻宇宙给你的核心讯息', x: 50, y: 50 }
    ],
    layout: 'center'
  },

  past_present_future: {
    id: 'past_present_future',
    name: '时间之流',
    name_en: 'Past · Present · Future',
    cardCount: 3,
    icon: '⏳',
    desc: '看清过去、现在、未来的时间脉络',
    suitable: ['general', 'love', 'career', 'study', 'finance'],
    positions: [
      { id: 1, label: '过去', meaning: '影响当下局势的过往因素',   x: 15, y: 50 },
      { id: 2, label: '现在', meaning: '你当前所处的状态与核心课题', x: 50, y: 50 },
      { id: 3, label: '未来', meaning: '按当前趋势发展的可能结果',   x: 85, y: 50 }
    ],
    layout: 'horizontal'
  },

  celtic_cross: {
    id: 'celtic_cross',
    name: '凯尔特十字',
    name_en: 'Celtic Cross',
    cardCount: 10,
    icon: '✝️',
    desc: '最经典的全面深度牌阵，揭示问题的各个维度',
    suitable: ['general', 'love', 'career'],
    positions: [
      { id: 1,  label: '当下核心',   meaning: '问题的核心本质',                 x: 50, y: 50 },
      { id: 2,  label: '横置交叉',   meaning: '横亘在你面前的阻力或助力',       x: 50, y: 50 },
      { id: 3,  label: '根基',       meaning: '问题的深层基础与过往根源',       x: 50, y: 78 },
      { id: 4,  label: '过去',       meaning: '正在退去的影响因素',             x: 12, y: 50 },
      { id: 5,  label: '最高潜能',   meaning: '你可能达到的最高目标',           x: 50, y: 22 },
      { id: 6,  label: '不久的将来', meaning: '即将到来的事件或转变',           x: 88, y: 50 },
      { id: 7,  label: '自我态度',   meaning: '你面对问题的态度与立场',         x: 20, y: 90 },
      { id: 8,  label: '外部环境',   meaning: '家人、朋友或环境对你的影响',     x: 40, y: 90 },
      { id: 9,  label: '希望与恐惧', meaning: '你内心最深处的期望与担忧',       x: 60, y: 90 },
      { id: 10, label: '最终结果',   meaning: '所有因素汇聚后的可能结局',       x: 80, y: 90 }
    ],
    layout: 'celtic'
  },

  relationship: {
    id: 'relationship',
    name: '恋人十字',
    name_en: 'Relationship Cross',
    cardCount: 5,
    icon: '💞',
    desc: '专为感情关系设计的深度剖析牌阵',
    suitable: ['love'],
    positions: [
      { id: 1, label: '你',         meaning: '你在这段关系中的状态与心态',     x: 15, y: 35 },
      { id: 2, label: '对方',       meaning: '对方在这段关系中的状态与心态',   x: 85, y: 35 },
      { id: 3, label: '关系现状',   meaning: '你们当前关系的核心状况',         x: 50, y: 50 },
      { id: 4, label: '阻碍',       meaning: '影响这段关系的障碍或挑战',       x: 15, y: 75 },
      { id: 5, label: '未来前景',   meaning: '这段关系的发展趋势与建议',       x: 85, y: 75 }
    ],
    layout: 'cross'
  },

  four_elements: {
    id: 'four_elements',
    name: '四元素指引',
    name_en: 'Four Elements',
    cardCount: 4,
    icon: '🌐',
    desc: '从火、水、风、土四个维度审视你的问题',
    suitable: ['general', 'career', 'finance'],
    positions: [
      { id: 1, label: '🔥 火 · 行动', meaning: '你的行动力、热情与创造方向',   x: 50, y: 18 },
      { id: 2, label: '💧 水 · 情感', meaning: '你的情感、直觉与内在世界',       x: 18, y: 65 },
      { id: 3, label: '🌬️ 风 · 思维', meaning: '你的思维、沟通与决策模式',       x: 82, y: 65 },
      { id: 4, label: '🌍 土 · 物质', meaning: '你的物质基础、现实状况与健康',   x: 50, y: 85 }
    ],
    layout: 'diamond'
  }
};

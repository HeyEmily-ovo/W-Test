/**
 * W-Test 测试配置文件
 *
 * 添加新测试只需在此数组中新增一个对象即可，
 * 系统会自动在主页面渲染对应的卡片。
 *
 * 字段说明：
 *   id          - 唯一标识，对应 tests/ 下的目录名
 *   name        - 测试名称
 *   icon        - 展示图标（emoji）
 *   description - 简短描述（1-2句话）
 *   color       - 主题色（用于卡片悬停微交互）
 *   gradient    - 卡片渐变背景色
 *   questions   - 题目数量
 *   duration    - 预计用时（分钟）
 *   tags        - 标签分类
 *   featured    - 是否精选推荐（true 的卡片会有特殊徽章）
 *   path        - 测试页面路径
 */
const TEST_CONFIG = [
  {
    id: 'mbti',
    name: 'MBTI 性格测试',
    icon: '🧠',
    description: '基于荣格心理学理论，探索你的人格类型，发现属于你的 MBTI 四字母代码',
    color: '#7C5CFC',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    questions: 93,
    duration: 12,
    tags: ['性格', '心理学', 'MBTI'],
    featured: true,
    path: 'tests/mbti/index.html'
  },
  {
    id: 'history',
    name: '历史人物人格测试',
    icon: '🏯',
    description: '基于大五人格科学的 50 题深度测试，找到跨越千年的灵魂共鸣者',
    color: '#D4A574',
    gradient: 'linear-gradient(135deg, #8B4513 0%, #D4A574 50%, #2C1810 100%)',
    questions: 50,
    duration: 8,
    tags: ['人格', '历史', '文化'],
    featured: true,
    path: 'tests/history/index.html'
  },
  {
    id: 'love',
    name: '恋爱类型测试',
    icon: '💘',
    description: '结合 ECR 量表与心理学研究，科学分析你的恋爱模式，发现 8 种恋爱人格',
    color: '#FF6B9D',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #FFC0CB 100%)',
    questions: 30,
    duration: 6,
    tags: ['恋爱', '情感', '人格'],
    featured: true,
    path: 'tests/love/index.html'
  },
  {
    id: 'maturity',
    name: '心理成熟度测试',
    icon: '🧘',
    description: '基于 Kegan 成人发展理论，从八个核心维度全面评估你的心理成熟水平',
    color: '#2C5F7C',
    gradient: 'linear-gradient(135deg, #1a4a5e 0%, #2C5F7C 50%, #5B9AA0 100%)',
    questions: 50,
    duration: 10,
    tags: ['成长', '心理学', '自我认知'],
    featured: true,
    path: 'tests/maturity/index.html'
  },
  {
    id: 'animal',
    name: '动物人格测试',
    icon: '🐾',
    description: '30 道趣味题目，测测你的动物人格原型！猫系？狗系？卡皮巴拉？12 种动物等你解锁',
    color: '#FF8C42',
    gradient: 'linear-gradient(135deg, #FF8C42 0%, #FFB347 50%, #FF6B35 100%)',
    questions: 30,
    duration: 5,
    tags: ['趣味', '动物', '人格'],
    featured: false,
    path: 'tests/animal/index.html'
  },
  {
    id: 'dark-triad',
    name: '暗黑人格测试',
    icon: '🌑',
    description: '基于 SD3 学术量表，测量马基雅维利主义、自恋、精神病态三大暗黑人格维度',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #EC4899 100%)',
    questions: 27,
    duration: 5,
    tags: ['人格', '心理学', '暗黑人格'],
    featured: true,
    path: 'tests/dark-triad/index.html'
  },
  {
    id: 'tarot',
    name: '塔罗占卜',
    icon: '🔮',
    description: '78张经典韦特塔罗牌，支持多种牌阵，AI解读带你探索潜意识',
    color: '#5B8FBF',
    gradient: 'linear-gradient(135deg, #1e3a58 0%, #5B8FBF 50%, #89B4D8 100%)',
    questions: 1,
    duration: 3,
    tags: ['趣味', '占卜', '塔罗'],
    featured: true,
    path: 'tests/tarot/index.html'
  }
];

// 如果通过 URL 参数动态加载，可覆盖默认配置
// 示例：?featured=true 仅显示精选测试
(function applyUrlFilters() {
  const params = new URLSearchParams(window.location.search);
  const filterFeatured = params.get('featured');
  if (filterFeatured === 'true') {
    window.TESTS = TEST_CONFIG.filter(t => t.featured);
  } else {
    window.TESTS = TEST_CONFIG;
  }
})();

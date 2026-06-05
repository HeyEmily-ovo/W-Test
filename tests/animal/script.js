// ==================== 数据定义 ====================

const ANIMALS = {
  cat: {
    id:'cat', name:'猫系', emoji:'🐱',
    tagline:'世界很吵，我自高贵冷艳',
    color:'#FF6B6B',
    desc:'你就是行走的"边界感"三个字。不熟的人觉得你高冷到北极圈，熟了之后发现你其实是个撒娇怪——蹭着你胳膊说"再不理我我就生气了"的那种。<br><br>你对生活品质有自己的一套标准：杯子必须配杯垫，睡衣必须分季节，朋友圈必须分组可见。精致是你的底色，敷衍是你的雷区。百分之七十的时间在独处充电，百分之三十的时间在朋友圈发"好无聊谁来约我"然后已读不回。',
    superpower:'独处充电五分钟续航一整天｜审美永远在线，朋友圈出片率100%｜关键时刻的直觉准到离谱',
    bug:'间歇性社恐发作，外卖备注永远写"放门口别敲门"｜对喜欢的人傲娇到令人发指｜表面说"随便"其实心里早就有了答案',
    bestMatch:'dog',
    bestWhy:'互补型CP，一个粘人精一个高冷怪，她融化你你给她安全感',
    worstMatch:'lion',
    worstWhy:'两个都太有主见，容易一言不合就冷战'
  },
  dog: {
    id:'dog', name:'狗系', emoji:'🐶',
    tagline:'快乐浓度超标，社交电量永远满格',
    color:'#FFB347',
    desc:'你就是人类社交界的永动机！有你在的局永远不会冷场，陌生人的微信你能加出一整个通讯录。你的快乐太有感染力了——朋友emo时你是行走的小太阳，方圆十米内都没有悲伤的存活空间。<br><br>你像一只金毛一样毫无保留地爱着这个世界。但说实话，有时候热情过头了，别人还没准备好你就已经掏心掏肺。不过没关系，真诚永远是你的必杀技。',
    superpower:'自来熟技能点满，三分钟跟陌生人处成老友｜记朋友生日比记自己银行卡密码还清楚｜感染力MAX，你的快乐能让整个群聊活过来',
    bug:'太容易相信人，被卖了还帮人数钱｜朋友圈点赞点到手抽筋｜热情消耗过快，偶尔深夜emo觉得被掏空',
    bestMatch:'cat',
    bestWhy:'最萌互补组合，你的热情是融化她的暖阳，她的高冷让你学会适可而止',
    worstMatch:'wolf',
    worstWhy:'你觉得他太冷太独，他觉得你太吵太烦'
  },
  capybara: {
    id:'capybara', name:'卡皮巴拉', emoji:'🦫',
    tagline:'精神状态遥遥领先，万物皆可"都行"',
    desc:'恭喜你达到了人生最高境界——不以物喜，不以己悲。别人卷生卷死你慢悠悠泡杯枸杞，别人焦虑到头秃你已经睡完午觉起来了。你的情绪稳定得让心理咨询师看了想转行。<br><br>在浮躁的时代里你是定海神针。不是没脾气，而是觉得没必要。天塌下来你也先拍照发个朋友圈再跑。',
    superpower:'情绪稳定MAX，焦虑见了你都绕道走｜鸽了别人毫无心理负担｜内耗是什么？能吃吗？',
    bug:'随和到令人发指，该争取的也"算了算了"｜存在感低到透明，群聊长期潜水第一名｜鸽王本王',
    bestMatch:'rabbit',
    bestWhy:'你的淡定包容她的敏感，她的小心思在你这里都能被稳稳接住',
    worstMatch:'lion',
    worstWhy:'一个急得要死一个淡定得让对方更急，急上加急'
  },
  wolf: {
    id:'wolf', name:'狼系', emoji:'🐺',
    tagline:'孤狼不孤，只是在等值得的同伴',
    desc:'你身上有种让人不敢随便造次的气场。认准的目标咬着不放，认定的人拼了命护着。你不是话多的类型，但一开口句句在点上——朋友圈一年发三条，条条都是金句。<br><br>外人觉得你神秘又疏离，但懂你的人知道那层冷硬的壳里面全是温柔和忠诚。只不过能走进你领地的人不多——你也懒得让太多人走进来。',
    superpower:'目标感MAX，执行力MAX，护犊子技能点满｜没人能在你的底线上蹦迪｜气场两米八，不怒自威',
    bug:'社交场合容易冷脸，其实只是忘了要微笑｜对自己在乎的人控制欲略强｜不擅长表达感情，明明是关心却说成了指责',
    bestMatch:'fox',
    bestWhy:'你负责冲她负责给你出主意，一个执行力一个脑力，天选搭档',
    worstMatch:'sloth',
    worstWhy:'你的急性子会在他的慢悠悠里原地爆炸'
  },
  fox: {
    id:'fox', name:'狐系', emoji:'🦊',
    tagline:'聪明但不外露，摸鱼界的隐藏王者',
    desc:'你脑子转得比5G还快，见人说人话见鬼说鬼话是你的被动技能——不是油滑，是聪明。你知道什么时候该出头什么时候该隐身，什么时候该认真什么时候该糊弄。<br><br>创意多到脑洞能填满一个月球，别人还在想你怎么已经在做了。但有时候聪明反被聪明误，想太多把自己绕进了死胡同。你是那种"偷懒偷出生产力"的天才型选手。',
    superpower:'鬼点子生成器，金点子按斤卖｜职场情场饭局三栖选手｜危机处理能力一绝，越紧急脑子转得越快',
    bug:'有时候聪明过头，明明简单的事非要走弯路｜信任门槛略高，总觉得别人在演你｜想太多导致决策瘫痪',
    bestMatch:'wolf',
    bestWhy:'你出脑子他出力气，一个军师一个将军，打遍天下无敌手',
    worstMatch:'capybara',
    worstWhy:'你急得跳脚他还在说"随缘吧"，沟通频道完全对不上'
  },
  panda: {
    id:'panda', name:'熊猫系', emoji:'🐼',
    tagline:'摆烂是一种态度，可爱是一种天赋',
    desc:'人类世界的纷纷扰扰跟你有什么关系？你的主业是可爱，副业是干饭。你有一种让人无法拒绝的神奇能力——走到哪都有人想投喂你，生气的时候别人只会觉得你更萌了。<br><br>别人卷KPI你卷零食测评，别人拼业绩你拼睡眠时长。但别看你日常"就这样吧"，关键时刻靠谱起来连你自己都怕——只是那种时刻一年也就两三次。',
    superpower:'可爱税自动征收，免费蹭饭技能MAX｜安全感完全自给自足｜关键时刻的反差帅能吓所有人一跳',
    bug:'拖延症晚期，"明天再说"是人生信条｜为了吃的可以放弃原则和底线｜日常摆烂偶尔也会心虚',
    bestMatch:'dolphin',
    bestWhy:'一个带动你一个治愈你，她的社交能量刚好填补你的慵懒',
    worstMatch:'owl',
    worstWhy:'你的随性碰上了他的强迫症，互相觉得对方不可理喻'
  },
  dolphin: {
    id:'dolphin', name:'海豚系', emoji:'🐬',
    tagline:'社交圈中央空调，治愈力拉满的六边形战士',
    desc:'你是朋友圈里公认的"小天使"——情商高到能感知每个人的情绪温度。有你在群聊就不会冷，有你在聚会就有人控场。你不是讨好型人格，是发自内心希望身边的人都开开心心。<br><br>你可以跟任何人处得来，而且不违心。这是天赋，不是技能。但别忘了，在治愈整个世界的间隙里，也给自己充充电。',
    superpower:'共情力满分，读空气能力业界顶尖｜能让吵架的双方都觉得你说得对｜正能量永动机',
    bug:'太在乎别人感受，累的是自己｜偶尔"老好人"人设让你说不出口拒绝｜治愈了全世界忘了治愈自己',
    bestMatch:'panda',
    bestWhy:'你带动他他治愈你，一个充电一个放电，神仙循环组合',
    worstMatch:'owl',
    worstWhy:'你的感性思维碰上他的逻辑铁壁，鸡同鸭讲'
  },
  owl: {
    id:'owl', name:'猫头鹰系', emoji:'🦉',
    tagline:'深夜思想家，人间清醒bot本bot',
    desc:'你大概是那种凌晨三点还在被窝里思考人生意义的人。逻辑是你的信仰，理性是你的铠甲。别人被情绪裹挟的时候你在冷静分析，别人冲动消费的时候你已经列好了性价比对比表。<br><br>你不是没有感情，只是感情被整整齐齐收纳在了"需要时再调用"的文件夹里。你的世界讲究秩序和逻辑，混乱会让你浑身难受——书必须按颜色排列，日程必须有Plan A/B/C。',
    superpower:'智商长期在线，永远不可能被割韭菜｜PPT做得比设计师还好看｜理性分析能力让AI都直呼内行',
    bug:'过度思考导致失眠，想太多是最大的精神内耗｜完美主义拖慢进度｜不是不会浪漫，而是浪漫也需要逻辑支撑',
    bestMatch:'fox',
    bestWhy:'两个聪明人的惺惺相惜，你的逻辑配她的创意，双剑合璧',
    worstMatch:'dog',
    worstWhy:'你觉得他太吵太没边界感，他觉得你太闷太难相处'
  },
  lion: {
    id:'lion', name:'狮系', emoji:'🦁',
    tagline:'自带BGM出场，C位是一种本能',
    desc:'你有没有发现自己走进房间的时候，大家会不自觉地抬头看你？这就是狮系气场——你不一定最大声，但一定最有存在感。做决定快准狠，行动力让拖延症看了想报警。<br><br>你是团队里那个"说干就干"的人，也是那个"别废话冲就完了"的人。但狮子也有柔软的肚皮——只是这份柔软只有最亲近的人才看得见。对外是王者，对内是大猫。',
    superpower:'领导力拉满，天生的决策者｜说干就干从不纠结，行动力核弹级｜自信光环让身边人也变得更有底气',
    bug:'偶尔霸道总裁上身，忘了问别人愿不愿意｜耐心值偏低，等不了温水煮青蛙｜输了的时候会偷偷躲起来舔伤口',
    bestMatch:'rabbit',
    bestWhy:'霸道总裁文学照进现实，你的霸气配上她的温柔，你就是她的小说男主/女主',
    worstMatch:'lion',
    worstWhy:'一山不容二虎，除非一个主动认怂——但狮系从不认怂'
  },
  rabbit: {
    id:'rabbit', name:'兔系', emoji:'🐰',
    tagline:'人间小棉袄，温柔是最高级的超能力',
    desc:'你的温柔从来不是软弱，是你选择了用最柔软的方式跟世界交手。你注意到每个人杯子里还有没有水，记得朋友上个月随口提到的小心愿。你的共情力是天赋，敏感是超能力——虽然有时候也会让自己受伤。<br><br>你哭点很低，笑点也很低，情绪雷达全天候开启。别小看自己，温柔的人才是不动声色的强者。软软的外表下藏着一颗比谁都坚韧的心。',
    superpower:'细节观察力MAX，朋友情绪不对你永远是第一个发现的｜温柔刀刀刀致命，以柔克刚大师级',
    bug:'太在意别人看法，容易精神内耗｜"对不起"使用频率全国前三｜敏感过头偶尔会过度解读',
    bestMatch:'lion',
    bestWhy:'强大的人最需要温柔的港湾，你是他的软肋也是他的铠甲',
    worstMatch:'eagle',
    worstWhy:'一个恋家一个爱飞，人生节奏完全不在一个频道上'
  },
  eagle: {
    id:'eagle', name:'鹰系', emoji:'🦅',
    tagline:'格局打开，我的征途是星辰大海',
    desc:'笼子关不住你，天花板挡不住你。你对"自由"两个字的执着超过一切——不想被定义，不想被框住，不想过一眼望到头的人生。你的视野比别人高出一个维度，能看到别人看不到的机会和远方。<br><br>但飞得太高有时候会忘了看脚下的风景。你不是不在乎身边的人，只是你的心太大了，装着整个世界。偶尔也记得落地歇歇脚。',
    superpower:'大局观一流，永远不会被鸡毛蒜皮困住｜说走就走的行动力｜远见卓识，能看到三年后的趋势',
    bug:'细节容易忽略，"差不多就行"有时候真的不太行｜偶尔孤独，飞得太高没人跟得上｜对"束缚"的极度敏感让你很难安定',
    bestMatch:'wolf',
    bestWhy:'两个独行侠的惺惺相惜，你指方向他落地执行，最佳搭档',
    worstMatch:'rabbit',
    worstWhy:'一个要飞一个要安，你需要风她需要港湾'
  },
  sloth: {
    id:'sloth', name:'树懒系', emoji:'🦥',
    tagline:'慢是一种哲学，急也没用不如躺平',
    desc:'你是快节奏时代的叛徒——所有人都跑着赶地铁的时候你慢悠悠觉得"下一班也行"。你不是懒，你是真的想明白了：急赤白脸也是一天，悠悠哉哉也是一天，那干嘛要急呢？<br><br>你的字典里没有"焦虑"两个字，因为你知道绝大多数让人焦虑的事到最后其实都没那么重要。你的人生哲学简单而深刻："任何事都有三个解决方法——接受、改变、或者先睡一觉再说。"',
    superpower:'幸福感极高，知足常乐已臻化境｜省下了所有内耗的能量，比别人多活好几年｜享受当下能力一绝',
    bug:'真的有点太慢了……机会偶尔会在慢悠悠中溜走｜"马上"的意思是"大概两个小时后吧"｜让急性子朋友崩溃是你的隐藏技能',
    bestMatch:'capybara',
    bestWhy:'两个佛系选手的终极躺平组合，一起泡茶看云卷云舒',
    worstMatch:'lion',
    worstWhy:'你的"不急"能急死他，他的"冲"让你觉得好累'
  }
};

// 30道题目，每题4个选项
const QUESTIONS = [
  {
    q:'周末晚上，你理想的状态是？',
    o:[
      { t:'组局叫上朋友嗨到天亮！', e:'🎉', p:{dog:2,dolphin:1} },
      { t:'一个人窝在家追剧吃零食', e:'📺', p:{cat:2,panda:1} },
      { t:'约一两个知己深度聊天', e:'🌙', p:{wolf:2,rabbit:1} },
      { t:'随便，看心情，都可以啦', e:'😴', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'你在群聊里的角色是？',
    o:[
      { t:'话痨担当，99+消息我贡献一半', e:'🗣️', p:{dog:2,dolphin:1} },
      { t:'潜水王者，但关键时刻会冒泡', e:'🤿', p:{owl:2,cat:1} },
      { t:'表情包生产基地，斗图没输过', e:'🤣', p:{fox:2,panda:1} },
      { t:'默默围观，已读不回专业户', e:'👀', p:{sloth:2,capybara:1} }
    ]
  },
  {
    q:'遇到全是陌生人的社交局，你的第一反应？',
    o:[
      { t:'冲上去social！全场都是潜在朋友', e:'🤝', p:{dolphin:2,dog:1} },
      { t:'先暗中观察一圈再决定跟谁聊', e:'🕵️', p:{fox:2,owl:1} },
      { t:'找个角落安静待着，等有缘人来搭讪', e:'🍸', p:{cat:2,rabbit:1} },
      { t:'无所谓，该吃吃该喝喝，存在感是什么', e:'🍕', p:{capybara:2,panda:1} }
    ]
  },
  {
    q:'朋友深夜emo找你吐槽，你会？',
    o:[
      { t:'立刻共情："天哪我懂！我也这样过！"', e:'🥺', p:{rabbit:2,dog:1} },
      { t:'冷静分析问题根源，给出三步解决方案', e:'🧠', p:{owl:2,lion:1} },
      { t:'默默倾听，递上纸巾和零食', e:'🍫', p:{capybara:2,panda:1} },
      { t:'"走！出去吃顿好的散散心！"', e:'🍲', p:{dolphin:2,eagle:1} }
    ]
  },
  {
    q:'你的社交能量来源是？',
    o:[
      { t:'跟人待在一起越久越兴奋，社交就是充电', e:'🔋', p:{dog:2,dolphin:1} },
      { t:'社交是技能，但独处才是真正的充电方式', e:'🏠', p:{wolf:2,cat:1} },
      { t:'看状态，有时候社牛有时候社恐，薛定谔的社交', e:'🎭', p:{fox:2,rabbit:1} },
      { t:'社交是什么？我最好的朋友是我的床', e:'🛏️', p:{sloth:2,panda:1} }
    ]
  },
  {
    q:'别人对你的第一印象通常是？',
    o:[
      { t:'好相处！自来熟！笑起来很有感染力', e:'😄', p:{dog:2,dolphin:1} },
      { t:'有点高冷，不太好接近……熟了之后疯给你看', e:'😏', p:{cat:2,wolf:1} },
      { t:'温温柔柔的，说话轻声细语让人想保护', e:'🌸', p:{rabbit:2,panda:1} },
      { t:'看不透，感觉藏了很多东西但很有魅力', e:'🕶️', p:{fox:2,owl:1} }
    ]
  },
  {
    q:'周末早上十点，你通常在？',
    o:[
      { t:'已经在健身房挥汗如雨了', e:'💪', p:{lion:2,eagle:1} },
      { t:'还在梦里跟周公讨论人生哲学', e:'💤', p:{panda:2,sloth:1} },
      { t:'慢悠悠做brunch，享受生活的仪式感', e:'🥐', p:{capybara:2,rabbit:1} },
      { t:'醒了但没完全醒，躺在床上刷手机', e:'📱', p:{sloth:2,fox:1} }
    ]
  },
  {
    q:'你的房间/桌面通常是？',
    o:[
      { t:'井井有条，每样东西都有固定坐标', e:'📐', p:{owl:2,cat:1} },
      { t:'创意型混乱——别人看着乱但我知道东西在哪', e:'🎨', p:{fox:2,eagle:1} },
      { t:'温馨小窝风，堆满可爱小物件和绿植', e:'🪴', p:{rabbit:2,panda:1} },
      { t:'随缘整理法，看心情收拾，不强求', e:'🍃', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'吃饭这件事，你属于哪种流派？',
    o:[
      { t:'干饭人干饭魂！美食是生命之光', e:'🍜', p:{panda:2,dog:1} },
      { t:'精致摆盘派，手机先吃，拍照修图一条龙', e:'📸', p:{cat:2,rabbit:1} },
      { t:'有啥吃啥，能填饱肚子就行，不纠结', e:'⚡', p:{wolf:2,eagle:1} },
      { t:'边吃边刷剧，一顿饭能吃一个半小时', e:'📺', p:{sloth:2,capybara:1} }
    ]
  },
  {
    q:'你的消费风格是？',
    o:[
      { t:'冲动消费选手，开心就买，快乐无价', e:'🛍️', p:{dog:2,lion:1} },
      { t:'精打细算比价小能手，羊毛薅到极致', e:'🧮', p:{owl:2,fox:1} },
      { t:'只买对的，贵点没关系但品质要到位', e:'✨', p:{cat:2,wolf:1} },
      { t:'佛系消费，需要才买，双十一跟我没关系', e:'🧘', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'运动对你来说是？',
    o:[
      { t:'快乐源泉！不动浑身难受，运动成瘾', e:'🏃', p:{dog:2,dolphin:1} },
      { t:'为了身材和健康咬牙坚持，自律即自由', e:'🏋️', p:{lion:2,wolf:1} },
      { t:'随缘运动，心血来潮动一动，没来潮就算了', e:'🤸', p:{capybara:2,panda:1} },
      { t:'运动？我最大的运动量是手指划屏幕', e:'👆', p:{sloth:2,cat:1} }
    ]
  },
  {
    q:'你的睡觉时间通常是？',
    o:[
      { t:'早睡早起，作息规律得像退休老干部', e:'🌅', p:{lion:2,owl:1} },
      { t:'熬夜冠军，深夜才是灵感爆发的主场', e:'🌙', p:{owl:2,fox:1} },
      { t:'想睡就睡想起就起，作息是门玄学', e:'🎲', p:{panda:2,capybara:1} },
      { t:'凌晨两点：再看一集就睡……天怎么亮了？', e:'☀️', p:{sloth:2,rabbit:1} }
    ]
  },
  {
    q:'面对deadline，你通常是？',
    o:[
      { t:'提前规划按部就班，deadline前三天就搞定', e:'📋', p:{owl:2,lion:1} },
      { t:'deadline是第一生产力，最后一天潜能爆发', e:'🚀', p:{fox:2,panda:1} },
      { t:'早就做完了完全不慌，淡定看别人赶due', e:'😎', p:{wolf:2,eagle:1} },
      { t:'deadline是什么？不急不急，船到桥头自然直', e:'⛵', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'做重大决定时，你最依赖什么？',
    o:[
      { t:'理性分析，列个pros and cons表格', e:'📊', p:{owl:2,wolf:1} },
      { t:'直觉——gut feeling从不出错', e:'🔮', p:{fox:2,eagle:1} },
      { t:'问问身边人的意见，集思广益', e:'👥', p:{dog:2,dolphin:1} },
      { t:'顺其自然，命运会把我带到该去的地方', e:'🍀', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'工作中你最看重什么？',
    o:[
      { t:'成就感！要做就做到最好，拿结果说话', e:'🏆', p:{lion:2,eagle:1} },
      { t:'团队氛围，跟对的人一起努力很重要', e:'👨‍👩‍👧‍👦', p:{dolphin:2,dog:1} },
      { t:'稳定和安全感，细水长流才是真', e:'🏡', p:{rabbit:2,capybara:1} },
      { t:'自由度和创造性，不想被条条框框管着', e:'🎯', p:{fox:2,wolf:1} }
    ]
  },
  {
    q:'精心安排的计划突然被打乱，你的反应？',
    o:[
      { t:'崩溃三秒然后迅速制定Plan B', e:'📝', p:{owl:2,cat:1} },
      { t:'无所谓，随机应变是我的舒适区', e:'😏', p:{fox:2,capybara:1} },
      { t:'有点烦躁但能接受，调整一下继续走', e:'🔄', p:{wolf:2,lion:1} },
      { t:'太好了！正愁找不到理由摆烂呢', e:'🎉', p:{panda:2,sloth:1} }
    ]
  },
  {
    q:'团队协作中你更擅长？',
    o:[
      { t:'执行落地，说干就干，带头冲锋', e:'⚔️', p:{lion:2,wolf:1} },
      { t:'出谋划策，脑洞大开提供新思路', e:'💡', p:{fox:2,eagle:1} },
      { t:'调节气氛，让团队保持和谐愉快', e:'🌈', p:{dolphin:2,rabbit:1} },
      { t:'专注自己的板块，把细节做到极致', e:'🔍', p:{owl:2,cat:1} }
    ]
  },
  {
    q:'面对竞争，你的态度是？',
    o:[
      { t:'正面刚！良性竞争让人进步最快', e:'🥊', p:{lion:2,wolf:1} },
      { t:'竞争？我有自己的赛道，不跟你们卷', e:'🛤️', p:{fox:2,eagle:1} },
      { t:'友谊第一比赛第二，开心最重要', e:'🤗', p:{dog:2,dolphin:1} },
      { t:'你们争你们的，我先在旁边吃个瓜', e:'🍉', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'心情不好时的治愈方式？',
    o:[
      { t:'找人倾诉，把心里的垃圾全倒出来', e:'💬', p:{dog:2,dolphin:1} },
      { t:'一个人待着，听歌散步发呆自我疗愈', e:'🎧', p:{cat:2,wolf:1} },
      { t:'化悲愤为食欲，没有什么是一顿火锅解决不了的', e:'🍲', p:{panda:2,rabbit:1} },
      { t:'睡一觉，没有什么烦恼是一觉解决不了的', e:'😴', p:{sloth:2,capybara:1} }
    ]
  },
  {
    q:'在亲密关系中，你最看重什么？',
    o:[
      { t:'忠诚和陪伴，认定的人就是一辈子', e:'💍', p:{dog:2,wolf:1} },
      { t:'理解和空间，爱是彼此独立又相互支撑', e:'🌌', p:{cat:2,owl:1} },
      { t:'快乐和新鲜感，在一起每一天都有惊喜', e:'🎁', p:{dolphin:2,fox:1} },
      { t:'舒适和安全感，在一起不用端着就很好', e:'🤱', p:{rabbit:2,capybara:1} }
    ]
  },
  {
    q:'吵架时你通常是？',
    o:[
      { t:'当面硬刚，有问题当场说清楚不隔夜', e:'⚡', p:{lion:2,wolf:1} },
      { t:'冷战大师，不说话的沉默就是我的态度', e:'❄️', p:{cat:2,owl:1} },
      { t:'先冷静一下回头再沟通，冲动是魔鬼', e:'🧊', p:{capybara:2,dolphin:1} },
      { t:'委屈在心里翻江倒海但嘴上说"没事"', e:'😢', p:{rabbit:2,sloth:1} }
    ]
  },
  {
    q:'别人真心夸你的时候，你的反应？',
    o:[
      { t:'开心到飞起！大方接受还要反夸回去', e:'🤩', p:{dog:2,dolphin:1} },
      { t:'表面淡定说"还好啦"，内心已经在放烟花', e:'🎆', p:{cat:2,wolf:1} },
      { t:'害羞到脸红耳根，手足无措说"没有啦没有啦"', e:'😳', p:{rabbit:2,panda:1} },
      { t:'内心OS：这人是不是有事要求我？', e:'🤔', p:{fox:2,owl:1} }
    ]
  },
  {
    q:'你觉得自己最敏感的点是？',
    o:[
      { t:'别人说话的语气和情绪变化，一秒感知', e:'📡', p:{rabbit:2,dolphin:1} },
      { t:'环境的审美和氛围，丑东西和尬场面不能忍', e:'🎭', p:{cat:2,owl:1} },
      { t:'对自己在乎的人和事，其他随便', e:'🎯', p:{wolf:2,lion:1} },
      { t:'什么都不敏感，钝感力拉满百毒不侵', e:'🛡️', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'你对"孤独"的真实看法？',
    o:[
      { t:'孤独是最好的充电方式，享受与自己相处', e:'🧘', p:{cat:2,owl:1} },
      { t:'不太能忍受孤独，身边有人才有安全感', e:'👫', p:{dog:2,dolphin:1} },
      { t:'孤独即自由，一个人可以去任何地方做任何事', e:'🌍', p:{eagle:2,wolf:1} },
      { t:'孤独不孤独的，想那么多干嘛，随缘', e:'🍵', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'如果人生是一部电影，你希望它是？',
    o:[
      { t:'热血励志片——逆风翻盘燃到爆', e:'🔥', p:{lion:2,wolf:1} },
      { t:'治愈系小清新——平凡日常里的小确幸', e:'🌿', p:{rabbit:2,panda:1} },
      { t:'烧脑悬疑片——反转再反转永远猜不到结局', e:'🎬', p:{fox:2,owl:1} },
      { t:'公路片——在路上遇见各种人和未知', e:'🚗', p:{eagle:2,dolphin:1} }
    ]
  },
  {
    q:'你最大的优势是什么？',
    o:[
      { t:'执行力强，说干就干不磨叽', e:'🏃‍♂️', p:{lion:2,wolf:1} },
      { t:'人缘好，到哪都能交到朋友', e:'🌟', p:{dog:2,dolphin:1} },
      { t:'洞察力强，能一眼看透事情的本质', e:'👁️', p:{owl:2,fox:1} },
      { t:'心态稳得一批，天塌了也能淡定泡茶', e:'🍵', p:{capybara:2,sloth:1} }
    ]
  },
  {
    q:'如果要给自己贴一个"需要改进"的标签？',
    o:[
      { t:'太卷了，需要学会适当摆烂', e:'😮‍💨', p:{lion:2,wolf:1} },
      { t:'太懒了，需要适当支棱起来', e:'🦥', p:{sloth:2,panda:1} },
      { t:'太敏感了，需要锻炼钝感力', e:'💔', p:{rabbit:2,cat:1} },
      { t:'太随缘了，需要学会主动争取', e:'🤲', p:{capybara:2,dolphin:1} }
    ]
  },
  {
    q:'你理想的生活状态最接近？',
    o:[
      { t:'事业有声有色，目标清晰不断突破', e:'📈', p:{lion:2,eagle:1} },
      { t:'三五好友家人相伴，温暖的烟火气', e:'🏠', p:{dog:2,rabbit:1} },
      { t:'自由自在，不被定义，想去哪就去哪', e:'✈️', p:{eagle:2,fox:1} },
      { t:'有猫有狗居家办公，想几点起就几点起', e:'🐕', p:{cat:2,panda:1} }
    ]
  },
  {
    q:'如果给你一个超能力，你会选？',
    o:[
      { t:'读心术——看透所有人的真实想法', e:'🔮', p:{fox:2,owl:1} },
      { t:'瞬间移动——三秒钟到地球任何一个角落', e:'⚡', p:{eagle:2,lion:1} },
      { t:'治愈术——让身边所有人远离病痛和悲伤', e:'💚', p:{dolphin:2,rabbit:1} },
      { t:'时间暂停——可以无限睡懒觉还没人催你', e:'⏸️', p:{sloth:2,panda:1} }
    ]
  },
  {
    q:'用一句话总结你的人生态度？',
    o:[
      { t:'"卷又卷不动，躺又躺不平，45度人生"', e:'📐', p:{panda:2,fox:1} },
      { t:'"人生是旷野不是轨道，我想往哪开就往哪开"', e:'🏜️', p:{eagle:2,wolf:1} },
      { t:'"世界以痛吻我，我报之以睡大觉"', e:'🛌', p:{capybara:2,sloth:1} },
      { t:'"没有人能定义我，包括今天的我自己"', e:'🦋', p:{cat:2,fox:1} }
    ]
  }
];

// ==================== 应用逻辑 ====================

const state = {
  screen:'hero',     // hero | quiz | loading | result | history | encyclopedia
  currentQ:0,
  answers:{},        // { questionIndex: optionIndex }
  scores:null,       // { animalId: totalPoints }
  resultAnimal:null,
  autoAdvanceTimer:null
};

const app = document.getElementById('app');
const HISTORY_KEY = 'animal_test_history';

function render(){
  switch(state.screen){
    case 'hero': renderHero(); break;
    case 'quiz': renderQuiz(); break;
    case 'loading': renderLoading(); break;
    case 'result': renderResult(); break;
    case 'history': renderHistory(); break;
    case 'encyclopedia': renderEncyclopedia(); break;
  }
}

// ===== 首页 =====
function renderHero(){
  app.innerHTML = `
    <div class="card hero">
      <div class="logo">🧬</div>
      <h1>你是哪种动物？</h1>
      <p class="subtitle">30道超有趣题目，解锁你的隐藏动物人格</p>
      <div class="stats">
        <div>📝 <span>30</span> 道题</div>
        <div>🐾 <span>12</span> 种动物</div>
        <div>⏱️ 约 <span>5</span> 分钟</div>
      </div>
      <button class="btn btn-primary" onclick="startQuiz()">开始测试 🚀</button>
      <div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-outline btn-small" onclick="showEncyclopedia()">🐾 动物图鉴</button>
        <button class="btn btn-outline btn-small" onclick="showHistory()" id="historyEntryBtn">📋 历史记录</button>
      </div>
      <p style="margin-top:16px;font-size:0.8rem;color:#bbb;">纯属娱乐 · 基于巴纳姆效应原理 · 别太认真</p>
    </div>
  `;
}

function startQuiz(){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  state.screen = 'quiz';
  state.currentQ = 0;
  state.answers = {};
  state.scores = null;
  state.resultAnimal = null;
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

// ===== 答题页 =====
function renderQuiz(){
  const q = QUESTIONS[state.currentQ];
  const total = QUESTIONS.length;
  const answeredCount = Object.keys(state.answers).length;
  const progress = (answeredCount / total) * 100;
  const selectedOpt = state.answers[state.currentQ];

  // 题目选项卡
  let tabsHTML = '';
  for(let i = 0; i < total; i++){
    let cls = 'future';
    if(state.answers[i] !== undefined) cls = 'done';
    if(i === state.currentQ) cls = 'current';
    tabsHTML += `<div class="q-tab ${cls}" onclick="jumpToQuestion(${i})" title="第${i+1}题">${i+1}</div>`;
  }

  let optionsHTML = q.o.map((opt,i) => {
    const selClass = (selectedOpt !== undefined && selectedOpt === i) ? 'selected' : '';
    return `
      <div class="option ${selClass}" onclick="selectAnswer(${i})" data-index="${i}">
        <span class="opt-letter">${String.fromCharCode(65+i)}</span>
        <span class="opt-emoji">${opt.e}</span>
        <span>${opt.t}</span>
      </div>
    `;
  }).join('');

  const prevDisabled = state.currentQ === 0 ? 'disabled style="opacity:0.4"' : '';
  const isLastQ = state.currentQ === QUESTIONS.length - 1;

  const nextBtnHTML = isLastQ ? '' : `<button class="btn btn-primary btn-small" onclick="nextQuestion()">下一题 →</button>`;

  app.innerHTML = `
    <div class="card question-area active">
      <div class="progress-wrap">
        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <span class="progress-num">${answeredCount}/${total}</span>
      </div>
      <div class="question-num">第 ${state.currentQ + 1} 题</div>
      <div class="question-text">${q.q}</div>
      <div class="options">${optionsHTML}</div>
      <div class="btn-row">
        <button class="btn btn-outline btn-small btn-prev" ${prevDisabled} onclick="prevQuestion()">← 上一题</button>
        ${nextBtnHTML}
      </div>
      <div class="question-tabs-wrap">
        <div class="question-tabs" id="questionTabs">${tabsHTML}</div>
      </div>
    </div>
  `;

}

function selectAnswer(optIndex){
  // 清除之前的自动跳转计时器
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);

  state.answers[state.currentQ] = optIndex;
  renderQuiz();

  // 全部答完才进结果，否则跳到下一题
  const allAnswered = Object.keys(state.answers).length === QUESTIONS.length;
  state.autoAdvanceTimer = setTimeout(() => {
    if(allAnswered){
      finishQuiz();
    } else if(state.currentQ < QUESTIONS.length - 1){
      state.currentQ++;
      renderQuiz();
      window.scrollTo({top:0,behavior:'smooth'});
    }
  }, 200);
}

function jumpToQuestion(index){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  state.currentQ = index;
  renderQuiz();
  window.scrollTo({top:0,behavior:'smooth'});
}

function nextQuestion(){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  // 全部答完→进结果
  if(Object.keys(state.answers).length === QUESTIONS.length){
    finishQuiz();
    return;
  }
  // 还有下一题→前进
  if(state.currentQ < QUESTIONS.length - 1){
    state.currentQ++;
    renderQuiz();
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

function backToHome(){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  state.screen = 'hero';
  state.answers = {};
  state.scores = null;
  state.resultAnimal = null;
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function prevQuestion(){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  if(state.currentQ > 0){
    state.currentQ--;
    renderQuiz();
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

// ===== 计算分数 =====
let loadingTimer = null;

function finishQuiz(){
  if(state.answers[state.currentQ] === undefined) return;
  state.screen = 'loading';
  render();
  window.scrollTo({top:0,behavior:'smooth'});

  // 清除之前的计时器
  if(loadingTimer) clearTimeout(loadingTimer);

  // 模拟分析延迟
  loadingTimer = setTimeout(() => {
    if(window._loadingInterval) clearInterval(window._loadingInterval);
    calcScores();
    saveToHistory();
    state.screen = 'result';
    render();
    window.scrollTo({top:0,behavior:'smooth'});
  }, 2000 + Math.random() * 1000);
}

function calcScores(){
  try {
    const scores = {};
    Object.keys(ANIMALS).forEach(k => scores[k] = 0);

    for(let qi = 0; qi < QUESTIONS.length; qi++){
      const optIdx = state.answers[qi];
      if(optIdx === undefined) continue;
      if(!QUESTIONS[qi] || !QUESTIONS[qi].o[optIdx]) continue;
      const points = QUESTIONS[qi].o[optIdx].p;
      for(const [animalId, pts] of Object.entries(points)){
        scores[animalId] = (scores[animalId] || 0) + pts;
      }
    }

    state.scores = scores;
    // 找出最高分
    let maxScore = -1;
    let winner = 'cat';
    for(const [id, score] of Object.entries(scores)){
      if(score > maxScore){ maxScore = score; winner = id; }
    }
    state.resultAnimal = winner;
  } catch(e){
    console.error('calcScores error:', e);
    state.resultAnimal = 'cat'; // fallback
  }
}

// ===== 加载页 =====
function renderLoading(){
  const msgs = [
    '正在提取你的动物DNA... 🧬',
    '正在分析你的行为模式... 🔍',
    '正在对照动物大数据库... 📊',
    '正在计算你的灵魂动物... ✨',
    '快了快了别急！🐾'
  ];
  app.innerHTML = `
    <div class="card loading-screen active">
      <div class="loading-spinner">🔬</div>
      <p class="loading-text" id="loadingMsg">${msgs[0]}</p>
    </div>
  `;
  // 轮换文字
  let idx = 0;
  const msgEl = document.getElementById('loadingMsg');
  const interval = setInterval(() => {
    idx = (idx + 1) % msgs.length;
    if(msgEl) msgEl.textContent = msgs[idx];
  }, 600);
  // loading screen 会在 setTimeout 后被替换，interval 自动失效
  // 但为了安全，存一下
  window._loadingInterval = interval;
}

// ===== 结果页 =====
function renderResult(){
  if(!state.resultAnimal || !ANIMALS[state.resultAnimal]){
    console.warn('No valid result animal, redirecting to hero');
    state.screen = 'hero';
    renderHero();
    return;
  }
  const animal = ANIMALS[state.resultAnimal];

  app.innerHTML = `
    <div class="card result-card" style="border-top: 4px solid ${animal.color}">
      <div class="result-animal-emoji">${animal.emoji}</div>
      <div class="result-animal-name" style="color:${animal.color}">${animal.emoji} ${animal.name}</div>
      <div class="result-tagline">${animal.tagline}</div>

      <div class="result-desc">${animal.desc}</div>

      <div class="result-traits">
        <div class="trait-box">
          <div class="trait-label">✨ 你的超能力</div>
          <div class="trait-content">${('· ' + animal.superpower.replace(/\｜/g, '<br>· '))}</div>
        </div>
        <div class="trait-box">
          <div class="trait-label">🐛 你的小Bug</div>
          <div class="trait-content">${('· ' + animal.bug.replace(/\｜/g, '<br>· '))}</div>
        </div>
      </div>

      <div class="match-row">
        <span class="match-chip match-best">
          💚 天选搭档：${ANIMALS[animal.bestMatch].emoji} ${ANIMALS[animal.bestMatch].name}
        </span>
        <span class="match-chip match-worst">
          ⚡ 相爱相杀：${ANIMALS[animal.worstMatch].emoji} ${ANIMALS[animal.worstMatch].name}
        </span>
      </div>
      <p style="font-size:0.8rem;color:#aaa;margin-top:8px;">
        ${animal.bestWhy}<br>${animal.worstWhy}
      </p>

      <div class="share-buttons">
        <button class="btn btn-outline btn-small" onclick="shareResult()">📤 分享结果</button>
        <button class="btn btn-outline btn-small" onclick="copyResult()">📋 复制文案</button>
        <button class="btn btn-primary btn-small" onclick="backToHome()">🔄 再测一次</button>
        <button class="btn btn-outline btn-small" onclick="showHistory()">📋 历史记录</button>
        <button class="btn btn-outline btn-small" onclick="showEncyclopedia()">🐾 动物图鉴</button>
      </div>
    </div>

    <div style="text-align:center;margin-top:16px;">
      <p style="font-size:0.75rem;color:#bbb;">
        ⚠️ 纯属娱乐，请勿作为人生决策依据<br>
        基于巴纳姆效应原理——模糊的描述总让人觉得"说的就是我"
      </p>
    </div>
  `;
}

// ===== 分享功能 =====
function loadScript(src){
  return new Promise((resolve, reject) => {
    if(document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('Script load failed'));
    document.head.appendChild(s);
  });
}

async function shareResult(){
  const a = ANIMALS[state.resultAnimal];
  const card = document.querySelector('.result-card');
  if(!card) return;

  showToast('📸 正在生成截图...');

  try {
    if(!window.html2canvas){
      await loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js');
    }

    const canvas = await html2canvas(card, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false
    });

    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
    const file = new File([blob], `animal-test-${a.name}.png`, {type:'image/png'});

    if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({ files:[file] });
      showToast('✅ 分享成功！');
    } else if(navigator.share){
      const text = `我在"你是哪种动物"测试中测出了${a.emoji}【${a.name}】！\n${a.tagline}\n快来测测你是什么动物吧～`;
      await navigator.share({
        title:'你是哪种动物？超有趣动物人格测试',
        text:text,
        url:window.location.href
      });
    } else {
      downloadScreenshot(canvas, a.name);
    }
  } catch(err){
    if(err && err.name === 'AbortError') return;
    // html2canvas 加载失败或截图出错，回退到复制文案
    copyResult();
  }
}

function downloadScreenshot(canvas, name){
  const link = document.createElement('a');
  link.download = `animal-test-${name}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('📥 截图已下载，快去分享给朋友们吧～');
}

function copyResult(){
  const a = ANIMALS[state.resultAnimal];
  const text = `🦁 我在"你是哪种动物"测试中测出了 ${a.emoji}【${a.name}】！\n\n"${a.tagline}"\n\n✨ 我的超能力：${a.superpower.replace(/\｜/g, ' | ')}\n🐛 我的小Bug：${a.bug.replace(/\｜/g, ' | ')}\n💚 天选搭档：${ANIMALS[a.bestMatch].emoji} ${ANIMALS[a.bestMatch].name}\n\n👉 你也来测测：${window.location.href}`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('✅ 结果已复制！去朋友圈发给朋友们吧～');
  }).catch(() => {
    showToast('复制失败，请手动截图分享吧～');
  });
}

function showToast(msg){
  const existing = document.querySelector('.toast');
  if(existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

// ===== 历史记录 =====
function saveToHistory(){
  const entry = {
    timestamp: Date.now(),
    animalId: state.resultAnimal,
    animalName: ANIMALS[state.resultAnimal].name,
    animalEmoji: ANIMALS[state.resultAnimal].emoji,
    scores: state.scores,
    answers: state.answers
  };
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  history.unshift(entry);
  // 最多保留50条
  if(history.length > 50) history.length = 50;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function showHistory(){
  state.screen = 'history';
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderHistory(){
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

  let listHTML;
  if(history.length === 0){
    listHTML = `
      <div class="history-empty">
        <div class="he-emoji">📭</div>
        <p>还没有测试记录哦～</p>
        <p style="font-size:0.85rem;margin-top:4px;">快去测一次看看你是什么动物吧！</p>
      </div>
    `;
  } else {
    listHTML = `<div class="history-list">` + history.map((h,i) => `
      <div class="history-item" onclick="viewHistoryResult(${i})">
        <span class="hi-emoji">${h.animalEmoji}</span>
        <div class="hi-info">
          <div class="hi-name">${h.animalEmoji} ${h.animalName}</div>
          <div class="hi-time">${formatTime(h.timestamp)}</div>
        </div>
        <button class="hi-delete" onclick="event.stopPropagation();deleteHistoryItem(${i})" title="删除此记录">🗑️</button>
        <span class="hi-arrow">→</span>
      </div>
    `).join('') + `</div>`;
  }

  app.innerHTML = `
    <div class="card">
      <div class="history-header">
        <h2>📋 历史记录</h2>
        <div class="history-actions">
          ${history.length > 0 ? `<button class="btn btn-outline btn-small" onclick="clearHistory()" style="color:#D04040;border-color:#FFD0D0;">🗑️ 清空</button>` : ''}
          <button class="btn btn-outline btn-small" onclick="showEncyclopedia()">🐾 图鉴</button>
          <button class="btn btn-outline btn-small" onclick="state.screen='hero';render();">← 返回</button>
        </div>
      </div>
      ${listHTML}
    </div>
  `;
}

function viewHistoryResult(index){
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  if(!history[index]) return;
  const entry = history[index];
  state.resultAnimal = entry.animalId;
  state.scores = entry.scores;
  state.screen = 'result';
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function clearHistory(){
  if(confirm('确定要清空所有历史记录吗？此操作不可恢复！')){
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
}

function deleteHistoryItem(index){
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  if(!history[index]) return;
  const entry = history[index];
  if(confirm(`确定要删除 ${entry.animalEmoji} ${entry.animalName} 的这条记录吗？`)){
    history.splice(index, 1);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderHistory();
  }
}

function formatTime(ts){
  const d = new Date(ts);
  const now = new Date();
  const diff = now - d;
  if(diff < 60000) return '刚刚';
  if(diff < 3600000) return Math.floor(diff/60000) + ' 分钟前';
  if(diff < 86400000) return Math.floor(diff/3600000) + ' 小时前';
  if(diff < 604800000) return Math.floor(diff/86400000) + ' 天前';
  return d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' ' +
    String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
}

// ===== 键盘支持 =====
document.addEventListener('keydown', (e) => {
  if(state.screen !== 'quiz') return;
  const key = e.key.toLowerCase();
  if(key === '1' || key === 'a'){ selectAnswer(0); return; }
  if(key === '2' || key === 'b'){ selectAnswer(1); return; }
  if(key === '3' || key === 'c'){ selectAnswer(2); return; }
  if(key === '4' || key === 'd'){ selectAnswer(3); return; }
  if(key === 'arrowright'){
    e.preventDefault();
    if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
    if(state.currentQ < QUESTIONS.length - 1 && state.answers[state.currentQ] !== undefined){
      state.currentQ++;
      renderQuiz();
    }
  }
  if(key === 'arrowleft'){
    e.preventDefault();
    prevQuestion();
  }
});

// ===== 动物图鉴 =====
function showEncyclopedia(){
  if(state.autoAdvanceTimer) clearTimeout(state.autoAdvanceTimer);
  state.screen = 'encyclopedia';
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

let encyFilter = 'all'; // all | social | chill | boss | heal

function renderEncyclopedia(){
  const animalList = Object.values(ANIMALS);
  const categories = {
    social: ['dog','dolphin','rabbit'],
    chill: ['capybara','sloth','panda'],
    boss: ['lion','wolf','eagle'],
    heal: ['cat','fox','owl']
  };

  let filtered = animalList;
  if(encyFilter !== 'all'){
    filtered = animalList.filter(a => categories[encyFilter] && categories[encyFilter].includes(a.id));
  }

  const tabClass = (key) => `ency-tab${encyFilter === key ? ' active' : ''}`;

  const cardsHTML = filtered.map(a => `
    <div class="animal-card" onclick="openAnimalDetail('${a.id}')" style="border-top:3px solid ${a.color}">
      <span class="ac-emoji">${a.emoji}</span>
      <div class="ac-name" style="color:${a.color}">${a.name}</div>
      <div class="ac-tagline">${a.tagline}</div>
    </div>
  `).join('');

  // 构建CP数据
  const cpPairs = [];
  const seen = new Set();
  animalList.forEach(a => {
    const b = ANIMALS[a.bestMatch];
    if(b && !seen.has(a.id) && !seen.has(b.id) && ANIMALS[b.id].bestMatch === a.id){
      seen.add(a.id); seen.add(b.id);
      cpPairs.push({a:a, b:b});
    }
  });

  const cpHTML = cpPairs.map(p => `
    <div class="cp-pair" onclick="checkCompat('${p.a.id}','${p.b.id}')">
      <div class="cpp-badge">💚 天选CP</div>
      <div class="cpp-emojis">${p.a.emoji} + ${p.b.emoji}</div>
      <div class="cpp-names">${p.a.name} × ${p.b.name}</div>
      <div class="cpp-why">${p.a.bestWhy}</div>
    </div>
  `).join('');

  const animalOptions = animalList.map(a =>
    `<option value="${a.id}">${a.emoji} ${a.name}</option>`
  ).join('');

  app.innerHTML = `
    <div class="card" style="padding:32px 28px;">
      <div class="ency-header-row">
        <button class="btn btn-outline btn-small" onclick="state.screen='hero';render();">← 返回</button>
        <h2 style="font-size:1.3rem;font-weight:800;">🐾 动物图鉴</h2>
        <div style="width:70px;"></div>
      </div>
      <p style="text-align:center;color:#aaa;font-size:0.85rem;margin-bottom:20px;">
        ✨ 点击卡片查看详细分析 · 十二种动物人格全收录 ✨
      </p>

      <div class="ency-tabs">
        <button class="${tabClass('all')}" onclick="encyFilter='all';renderEncyclopedia();">🐾 全部</button>
        <button class="${tabClass('social')}" onclick="encyFilter='social';renderEncyclopedia();">🎉 社交担当</button>
        <button class="${tabClass('chill')}" onclick="encyFilter='chill';renderEncyclopedia();">🧘 佛系选手</button>
        <button class="${tabClass('boss')}" onclick="encyFilter='boss';renderEncyclopedia();">👑 气场王者</button>
        <button class="${tabClass('heal')}" onclick="encyFilter='heal';renderEncyclopedia();">🧠 脑力担当</button>
      </div>

      <div class="animal-grid">${cardsHTML}</div>

      <div class="section-title">💚 官方天选CP大公开</div>
      <div class="cp-pairs">${cpHTML}</div>

      <div class="compat-checker" id="compatSection">
        <div class="section-title" style="margin-bottom:16px;">🔮 任意组合匹配度查询</div>
        <p style="font-size:0.82rem;color:#bbb;margin-bottom:18px;">选两个动物，看看他们在一起会擦出什么火花～</p>
        <div class="compat-selects">
          <select id="compatA" onchange="checkCompat()">${animalOptions}</select>
          <span class="vs-text">VS</span>
          <select id="compatB" onchange="checkCompat()">${animalOptions}</select>
        </div>
        <div class="compat-result" id="compatResult">
          <span class="cr-empty">👆 选两个动物看看缘分吧～</span>
        </div>
      </div>
    </div>
  `;
}

function openAnimalDetail(animalId){
  const a = ANIMALS[animalId];
  if(!a) return;

  const best = ANIMALS[a.bestMatch];
  const worst = ANIMALS[a.worstMatch];

  const overlay = document.createElement('div');
  overlay.className = 'animal-detail-overlay';
  overlay.id = 'animalDetailOverlay';
  overlay.innerHTML = `
    <div class="animal-detail-popup" onclick="event.stopPropagation()">
      <button class="ad-close" onclick="closeAnimalDetail()">✕</button>
      <span class="ad-emoji">${a.emoji}</span>
      <div class="ad-name" style="color:${a.color}">${a.emoji} ${a.name}</div>
      <div class="ad-tagline">"${a.tagline}"</div>
      <div class="ad-desc">${a.desc}</div>
      <div class="ad-traits">
        <div class="ad-trait">
          <div class="adt-label" style="color:var(--teal)">✨ 超能力</div>
          <div class="adt-content">${a.superpower.replace(/\｜/g, '<br>')}</div>
        </div>
        <div class="ad-trait">
          <div class="adt-label" style="color:var(--coral)">🐛 小Bug</div>
          <div class="adt-content">${a.bug.replace(/\｜/g, '<br>')}</div>
        </div>
      </div>
      <div class="ad-matches">
        <span class="ad-match" style="background:#E8FFF0;color:#20A060;" onclick="event.stopPropagation();openAnimalDetail('${a.bestMatch}')">
          💚 天选搭档：${best.emoji} ${best.name}
        </span>
        <span class="ad-match" style="background:#FFF0F0;color:#D04040;" onclick="event.stopPropagation();openAnimalDetail('${a.worstMatch}')">
          ⚡ 相爱相杀：${worst.emoji} ${worst.name}
        </span>
      </div>
      <p style="font-size:0.75rem;color:#bbb;margin-top:12px;text-align:center;">${a.bestWhy}<br>${a.worstWhy}</p>
      <p style="font-size:0.7rem;color:#ccc;text-align:center;margin-top:8px;">点击搭档头像可跳转查看～</p>
    </div>
  `;
  overlay.addEventListener('click', closeAnimalDetail);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeAnimalDetail(){
  const overlay = document.getElementById('animalDetailOverlay');
  if(overlay) overlay.remove();
  document.body.style.overflow = '';
}

// 键盘ESC关闭弹窗
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && document.getElementById('animalDetailOverlay')){
    closeAnimalDetail();
  }
});

function checkCompat(idA, idB){
  // 支持从下拉框自动读取
  if(!idA || !idB){
    const selA = document.getElementById('compatA');
    const selB = document.getElementById('compatB');
    if(!selA || !selB) return;
    idA = selA.value;
    idB = selB.value;
  }
  if(!idA || !idB || idA === idB){
    const el = document.getElementById('compatResult');
    if(el) el.innerHTML = '<span class="cr-empty">😅 选两个不同的动物来看看缘分吧～</span>';
    return;
  }

  const a = ANIMALS[idA];
  const b = ANIMALS[idB];
  if(!a || !b) return;

  let score, emoji, label, msg;

  const isMutualBest = a.bestMatch === b.id && b.bestMatch === a.id;
  const isOneWayBest = a.bestMatch === b.id || b.bestMatch === a.id;
  const isWorst = a.worstMatch === b.id || b.worstMatch === a.id;

  if(isMutualBest){
    score = 98; emoji = '💚💚'; label = '天选CP！双向奔赴';
    msg = `${a.emoji}和${b.emoji}的匹配度简直拉满！<br>就像${a.bestWhy}，这就是传说中的"天生一对"吧～`;
  } else if(isOneWayBest && !isWorst){
    score = 82; emoji = '💚'; label = '很来电！';
    msg = `${a.emoji}和${b.emoji}的组合相当不错！<br>${a.bestMatch === b.id ? a.bestWhy : b.bestWhy}`;
  } else if(isWorst && !isOneWayBest){
    score = 30; emoji = '⚡'; label = '相爱相杀组';
    msg = `${a.emoji}和${b.emoji}在一起就像火星撞地球！<br>${a.worstMatch === b.id ? a.worstWhy : b.worstWhy}`;
  } else if(isOneWayBest && isWorst){
    score = 55; emoji = '🎭'; label = '又爱又恨型';
    msg = `${a.emoji}和${b.emoji}的关系相当复杂——<br>一边被吸引一边互相嫌弃，传说中的"欢喜冤家"！`;
  } else {
    // 通过名称hash算出稳定的伪随机分数
    const hash = (a.id + b.id).split('').reduce((s,c) => s + c.charCodeAt(0), 0);
    score = 55 + (hash % 30);
    const msgs = [
      '各有各的节奏，但偶尔碰撞也会有意外惊喜～',
      '不做CP做朋友也挺好，互相欣赏就好啦！',
      '两个独立星球的偶遇，保持距离反而更美好～',
      '频道不太一样，但谁说不同频就不能擦出火花？',
      '一个向左一个向右，也许某天会在圆上相遇吧～',
      '都不按套路出牌的组合，反而更有意思！'
    ];
    msg = `${a.emoji}和${b.emoji}<br>${msgs[hash % msgs.length]}`;
    if(score >= 75){ emoji = '👍'; label = '还不错！'; }
    else if(score >= 65){ emoji = '🤝'; label = '普通朋友'; }
    else { emoji = '🫂'; label = '随缘吧～'; }
  }

  const barColor = score >= 75 ? '#20A060' : score >= 55 ? '#FFB347' : '#D04040';

  const resultEl = document.getElementById('compatResult');
  if(resultEl){
    resultEl.innerHTML = `
      <div class="compat-score-wrap">
        <div class="compat-score" style="color:${barColor}">${score}<span style="font-size:1rem;">分</span></div>
        <div class="cs-label">${emoji} ${label}</div>
      </div>
      <div class="compat-msg">${msg}</div>
    `;
  }
}

// ===== 初始化 =====
render();

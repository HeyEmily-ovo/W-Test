# W-Test ⚡

<div align="center">

**探索你的内心世界 · 一站式心理测试集合平台**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://heyemily-ovo.github.io/W-Test/)

</div>

---

## 📖 项目简介

**W-Test** 是一个集成了多种心理学测试的集合网站，涵盖 MBTI 人格测试、历史人物人格测试、恋爱类型测试、心理成熟度测试、动物人格测试、暗黑人格测试等。只需一次点击，即可跳转到你感兴趣的测试，开启自我探索之旅。

## 🧩 已集成测试

| 测试名称 | 图标 | 题量 | 用时 | 简介 | 图鉴 | 历史 |
|---------|------|------|------|------|------|------|
| [MBTI 性格测试](tests/mbti/) | 🧠 | 60 题 | ~12 分钟 | 基于荣格心理学理论，探索你的 16 种人格类型 | 📖 16 型档案 + 配对兼容度 | ✅ |
| [历史人物人格测试](tests/history/) | 🏯 | 50 题 | ~8 分钟 | 基于大五人格科学，找到跨越千年的灵魂共鸣者 | 📖 16 位人物画廊 | ✅ |
| [恋爱类型测试](tests/love/) | 💘 | 30 题 | ~6 分钟 | 结合 ECR 量表，发现你的 8 种恋爱人格 | 📖 类型图鉴 + 8×8 配对矩阵 | ✅ |
| [心理成熟度测试](tests/maturity/) | 🧘 | 50 题 | ~10 分钟 | 基于 Kegan 成人发展理论，八维评估你的心理成熟水平 | 📖 五级阶梯 + 八维详解 | ✅ |
| [动物人格测试](tests/animal/) | 🐾 | 30 题 | ~5 分钟 | 12 种动物人格原型，发掘你的内在动物 | 📖 12 动物图鉴 + CP 匹配度 | ✅ |
| [暗黑人格测试](tests/dark-triad/) | 🌑 | 27 题 | ~5 分钟 | 基于 SD3 学术量表，测量马基雅维利主义、自恋、精神病态三大暗黑维度 | 📖 8 种暗黑人格画像 | ✅ |

## 🚀 快速开始

### 在线访问

直接访问 GitHub Pages：**[https://heyemily-ovo.github.io/W-Test/](https://heyemily-ovo.github.io/W-Test/)**

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/HeyEmily-ovo/W-Test.git

# 进入目录
cd W-Test

# 使用任意静态服务器启动，例如：
python -m http.server 8080
# 或
npx serve .
```

然后打开浏览器访问 `http://localhost:8080`

## ✨ 特色功能

- **📋 历史记录**：每次测试结果自动保存在浏览器本地，随时回顾、对比成长轨迹
- **📖 类型图鉴**：每个测试配套完整图鉴——MBTI 16 种人格档案、历史人物画廊、恋爱类型配对矩阵、动物人格 CP 组合、心理成熟度五级阶梯、暗黑人格 8 型完全档案
- **🌓 浅/深色主题**：一键切换，偏好自动记忆

## 🎨 设计风格

- **年轻化配色**：深色背景 + 紫色/粉色渐变，符合现代审美
- **玻璃态卡片**：毛玻璃效果 + 微交互动画，视觉层次丰富
- **响应式布局**：完美适配手机、平板、电脑等多种设备
- **星空动画**：动态星空背景，沉浸式浏览体验

## ➕ 如何添加新测试

在 `js/config.js` 文件的 `TEST_CONFIG` 数组中添加一个新对象即可：

```javascript
{
  id: 'my-test',           // 对应 tests/ 下的目录名
  name: '我的测试',         // 测试名称
  icon: '🎯',              // 展示图标（emoji）
  description: '测试描述',  // 简短介绍
  color: '#7C5CFC',        // 主题色
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  questions: 30,           // 题目数量
  duration: 5,             // 预计用时（分钟）
  tags: ['趣味', '心理'],  // 分类标签
  featured: false,         // 是否精选
  path: 'tests/my-test/index.html'  // 测试页面路径
}
```

然后将你的测试文件放入 `tests/my-test/` 目录即可，系统会自动在主页面生成对应的卡片入口。

## 🏗️ 项目结构

```
W-Test/
├── index.html                  # 主入口页面
├── favicon.svg                 # 网站图标（大脑图案）
├── css/
│   └── style.css               # 主页样式
├── js/
│   ├── config.js               # 测试配置（添加新测试只需修改此文件）
│   └── main.js                 # 主交互逻辑
├── tests/                      # 各测试子目录
│   ├── mbti/                   # MBTI 性格测试
│   ├── history/                # 历史人物人格测试
│   ├── love/                   # 恋爱类型测试
│   ├── maturity/               # 心理成熟度测试
│   ├── animal/                 # 动物人格测试
│   └── dark-triad/             # 暗黑人格测试（SD3）
├── README.md
├── 开发规范.md                   # 新增测试开发规范（必读）
└── .gitignore
```

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">
Made with ❤️ by <a href="https://github.com/HeyEmily-ovo">HeyEmily</a>
</div>

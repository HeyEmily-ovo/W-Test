# 🃏 塔罗牌面图片

本目录存放 Rider-Waite-Smith 塔罗牌（Geldard 高清修复版）的牌面图片。

## 版权说明

Pamela Colman Smith 1909 年绘制的 Rider-Waite-Smith 塔罗牌插画在美国已进入**公共领域**（Public Domain）。Geldard 版为原始扫描件的高清修复版本，发布于 Wikimedia Commons 并采用 **CC0** 许可协议，可自由使用。

## 图片来源

Wikimedia Commons — Category:Rider-Waite-Smith tarot deck (Geldard)
https://commons.wikimedia.org/wiki/Category:Rider-Waite-Smith_tarot_deck_(Geldard)

- **格式**：PNG
- **分辨率**：2100 × 3600 像素
- **文件大小**：每张约 10–15 MB
- **总数**：78 张（完整牌组）

## 下载方式

### 自动下载（推荐）

在项目根目录运行：
```bash
node scripts/download-images.js
```

脚本会通过 Wikipedia API 自动查询并下载全部 78 张高清牌图到本目录。

### 手动下载

访问上面的 Wikimedia Commons 分类页面，手动下载需要的牌图，按以下规则命名放入本目录：

`{卡牌ID}.png`

例如：
- `fool.png` — 愚人
- `magician.png` — 魔术师
- `wands_ace.png` — 权杖王牌
- `cups_3.png` — 圣杯三
- `pentacles_king.png` — 星币国王

### 自定义卡背

将卡背图片命名为 `card-back.png` 放入本目录，洗牌和选牌阶段将显示自定义卡背。

## 注意事项

- 图片缺失不影响使用 — 应用会自动降级为纯文字模式
- 如需使用 `.jpg` 格式，修改 `js/data.js` 中 `IMAGE_CONFIG.extension` 为 `.jpg`
- 可使用任意自定义牌图，只需按卡牌 ID 命名即可

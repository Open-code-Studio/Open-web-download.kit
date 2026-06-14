# Project Memory — Open-web-download.kit

## 项目概述
MD3 风格静态下载站框架，纯前端无构建工具，适合部署到任何静态托管服务（GitHub Pages、Vercel、COS 等）。

## 文件结构
- `index.html` — 根引导页面，自动跳转到 page/index.html
- `page/` — 站点主目录
  - `index.html` — 主页面（Top App Bar + Hero + 搜索 + 卡片 + 详情面板 + Footer）
  - `config.json` — 站点全局配置（名称、描述、项目列表、主题、Footer 链接）
  - `css/md3.css` — Material Design 3 设计令牌 + 组件样式
  - `css/main.css` — 补充样式（动画、骨架屏、滚动条等）
  - `js/config.js` — 加载 config.json 暴露为 SITE_CONFIG
  - `js/main.js` — 核心逻辑（主题切换、搜索、筛选、卡片渲染、详情面板、下载）
- `file/<project>/` — 每个项目目录
  - `main.json` — 项目元数据（名称、版本、描述、平台、文件列表、更新日志等）
  - 可下载产物（zip, dmg, AppImage 等）

## 技术选型
- 纯 HTML/CSS/JS，无框架，无构建步骤
- Material Design 3 全套 CSS 变量（亮色/暗色主题）
- 自动平台检测（推荐当前平台版本）
- 响应式设计

## 如何添加新项目
1. 在 `file/` 下创建新文件夹，放入 `main.json` 和产物文件
2. 在 `page/config.json` 的 `projects` 数组中加入该文件夹名

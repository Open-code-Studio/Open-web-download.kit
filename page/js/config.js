/**
 * config.js — 站点全局配置（内嵌数据，无需 fetch，兼容 file:// 协议）
 *
 * 所有可配置项都在这里修改。对应 page/config.json，两者需保持同步。
 */
window.SITE_CONFIG = {
    "site": {
        "name": "Open-web-download.kit",
        "description": "一个 Material Design 3 风格的静态下载站点",
        "language": "zh-CN",
        "theme": {
            "default": "dark",
            "allowToggle": true
        },
        "primaryColor": "#4AA26F"
    },
    "projects": [
        "publish1"
    ],
    "footer": {
        "copyright": "© 2026 Open-web-download.kit. All rights reserved.",
        "links": [
            { "label": "GitHub", "url": "https://github.com" }
        ]
    }
};

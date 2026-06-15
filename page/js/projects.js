/**
 * projects.js — 所有项目数据（内嵌，兼容 file:// 协议）
 *
 * 每个项目的 main.json 内容直接写在这里。
 * 添加/修改项目：编辑此文件中对应的对象即可。
 *
 * 键名 = 项目文件夹名（与 page/config.json 的 projects 数组一致）
 */
window.PROJECTS_DATA = {
    "publish1": {
        "name": "示例项目 v1.0",
        "version": "1.0.0",
        "description": "这是一个示例项目，展示下载站的功能。",
        "author": "Your Name",
        "date": "2026-06-14",
        "category": "工具",
        "platforms": ["windows", "macos", "linux"],
        "files": [
            {
                "name": "示例程序-Windows-x64.zip",
                "platform": "windows",
                "arch": "x64",
                "size": "45.2 MB",
                "type": "zip",
                "url": "../file/publish1/example-app-windows-x64.zip"
            },
            {
                "name": "示例程序-macOS-arm64.dmg",
                "platform": "macos",
                "arch": "arm64",
                "size": "52.8 MB",
                "type": "dmg",
                "url": "../file/publish1/example-app-macos-arm64.dmg"
            },
            {
                "name": "示例程序-Linux-x64.AppImage",
                "platform": "linux",
                "arch": "x64",
                "size": "48.1 MB",
                "type": "appimage",
                "url": "../file/publish1/example-app-linux-x64.AppImage"
            }
        ],
        "changelog": [
            { "version": "1.0.0", "date": "2026-06-14", "changes": ["首次发布", "支持 Windows/macOS/Linux 三平台"] }
        ],
        "tags": ["工具", "示例", "跨平台"]
    }
};

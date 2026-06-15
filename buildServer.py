#!/usr/bin/env python3
"""
本地开发服务器 —— 在项目根目录运行即可预览下载站
用法: python3 buildServer.py
然后浏览器打开 http://localhost:8080
"""
import http.server
import socketserver

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, '': 'text/html'}

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f" 服务已启动 → http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n 服务器已停止")

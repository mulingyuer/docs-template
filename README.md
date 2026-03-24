# 文档模板

基于 [VitePress](https://vitepress.dev/) 构建的中文文档模板，开箱即用，包含常用功能配置与自定义主题。

## 功能特性

- **中文本地化**：导航、搜索、大纲、404 页面等 UI 文案全部汉化
- **本地搜索**：内置 VitePress 本地搜索，无需外部服务
- **图片缩放**：集成 [medium-zoom](https://github.com/francoischalifour/medium-zoom)，点击文档内图片可放大预览
- **任务列表**：通过 [@mdit/plugin-tasklist](https://mdit-plugins.github.io/tasklist.html) 支持 Markdown 任务列表语法
- **代码行号**：代码块默认显示行号
- **图片懒加载**：Markdown 图片自动启用懒加载
- **Clean URL**：URL 不带 `.html` 后缀
- **最后更新时间**：基于 Git 提交记录自动显示页面最后更新时间
- **站点地图**：自动生成 `sitemap.xml`
- **自定义样式**：使用 SCSS 模块化管理样式，覆盖默认主题变量

## 技术栈

| 依赖                                                                  | 版本             | 说明                   |
| --------------------------------------------------------------------- | ---------------- | ---------------------- |
| [vitepress](https://vitepress.dev/)                                   | `2.0.0-alpha.17` | 静态站点生成器         |
| [vue](https://vuejs.org/)                                             | `^3.5.30`        | Vue 3                  |
| [medium-zoom](https://github.com/francoischalifour/medium-zoom)       | `^1.1.0`         | 图片放大预览           |
| [@mdit/plugin-tasklist](https://mdit-plugins.github.io/tasklist.html) | `^0.23.1`        | 任务列表 Markdown 插件 |
| [sass-embedded](https://sass-lang.com/)                               | `^1.98.0`        | SCSS 预处理器          |
| [oxfmt](https://oxc.rs/)                                              | `^0.41.0`        | 代码格式化工具         |

## 目录结构

```
.
├── public/                   # 静态资源（favicon 等）
├── src/                      # Markdown 文档源文件（srcDir）
│   ├── index.md              # 首页
│   ├── api-examples.md       # API 示例
│   └── markdown-examples.md  # Markdown 示例
├── .vitepress/
│   ├── config.ts             # VitePress 主配置入口
│   ├── config/
│   │   ├── head.ts           # HTML <head> 配置
│   │   ├── markdown.ts       # Markdown 扩展配置
│   │   ├── themeConfig.ts    # 主题配置（导航、搜索等）
│   │   └── vite.ts           # Vite 配置
│   └── theme/
│       ├── index.ts          # 自定义主题入口
│       ├── components/
│       │   └── Layout.vue    # 布局组件（集成 medium-zoom）
│       └── styles/           # SCSS 样式模块
│           ├── index.scss
│           ├── _colors.scss
│           ├── _layout.scss
│           ├── _navbar.scss
│           ├── _sidebar.scss
│           ├── _content.scss
│           ├── _content-aside.scss
│           ├── _medium-zoom.scss
│           └── _task-list.scss
├── package.json
└── pnpm-lock.yaml
```

## 快速开始

### 前置要求

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/)

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm docs:dev
```

启动后访问 `http://localhost:5173` 查看文档。

### 构建

```bash
pnpm docs:build
```

构建产物默认输出到 `dist/` 目录。

### 预览构建结果

```bash
pnpm docs:preview
```

## 代码格式化

本项目使用 [oxfmt](https://oxc.rs/) 进行代码格式化，配置文件为 `.oxfmtrc.json`。

```bash
# 格式化代码
pnpm fmt

# 检查格式（不修改文件）
pnpm fmt:check
```

## 配置说明

### 站点基础配置

主配置位于 [.vitepress/config.ts](.vitepress/config.ts)，关键配置项：

| 配置项             | 默认值                              | 说明                |
| ------------------ | ----------------------------------- | ------------------- |
| `lang`             | `zh-CN`                             | 站点语言            |
| `base`             | `/docs-template`                    | 部署路径前缀        |
| `title`            | `文档模板`                          | 站点标题            |
| `srcDir`           | `src`                               | Markdown 源文件目录 |
| `outDir`           | `dist`                              | 构建输出目录        |
| `sitemap.hostname` | `https://xxx.xxx.com/docs-template` | 站点地图域名        |

> 部署前请修改 `base` 和 `sitemap.hostname` 为实际地址。

## 许可证

[LICENSE](./LICENSE)

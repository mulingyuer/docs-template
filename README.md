# docs-template

支持多语言的文档模板

## 1. 项目简介

这是一个基于 VitePress 构建的支持多语言的文档模板，旨在帮助用户快速搭建和部署文档站点。它提供了清晰的项目结构、灵活的配置选项以及丰富的 Markdown 扩展支持。

## 2. 目录说明

- `.` 项目根目录：包含项目配置文件、依赖管理文件等。
- `.gitignore`：Git 版本控制忽略文件。
- `.prettierignore`：Prettier 格式化忽略文件。
- `.prettierrc.json`：Prettier 格式化配置文件。
- `package.json`：项目依赖及脚本配置。
- `pnpm-lock.yaml`：pnpm 依赖锁定文件。
- `README.md`：项目说明文档。
- `src/`：文档源文件目录。
  - `src/en/`：英文文档目录。
  - `src/zh/`：中文文档目录。
  - `src/public/`：静态资源目录，如 `favicon.ico`。
- `.vitepress/`：VitePress 配置目录，是整个文档站点的核心。
  - `config.ts`：VitePress 主配置文件，用于定义站点的基本信息、主题配置、多语言配置、导航栏、侧边栏等。
  - `src/`：VitePress 相关的源文件，如自定义主题组件、Markdown 扩展配置等。
    - `doc-config.ts`：文档相关配置。
    - `head.ts`：HTML `<head>` 标签的配置。
    - `locales/`：多语言配置，定义不同语言的文本内容。
    - `markdown.ts`：Markdown 扩展配置，如自定义容器、代码高亮等。
    - `navs/`：导航栏配置。
    - `sidebars/`：侧边栏配置。
    - `theme-config/`：主题相关配置。
    - `vite.ts`：Vite 配置。
  - `theme/`：自定义主题目录。
    - `MyLayout.vue`：自定义布局组件。
    - `index.ts`：主题入口文件。
    - `styles/`：主题样式文件。

## 3. 主题配置说明

本模板基于 VitePress 默认主题进行扩展。主题配置主要在 `.vitepress/config.ts` 文件中进行。您可以自定义以下方面：

- **颜色配置**：VitePress 允许通过 CSS 变量来定制主题颜色。例如，您可以在 `.vitepress/theme/styles/vars.css` 或其他样式文件中覆盖默认的颜色变量，如 `--vp-c-brand-1` 用于品牌色。
- **导航栏 (Navbar)**：在 `config.ts` 的 `themeConfig.nav` 中配置。
- **侧边栏 (Sidebar)**：在 `config.ts` 的 `themeConfig.sidebar` 中配置，支持多语言。
- **主页 (Homepage)**：通过在 Markdown 文件的 Frontmatter 中设置 `layout: home` 来创建自定义主页布局。
- **页脚 (Footer)**：在 `config.ts` 的 `themeConfig.footer` 中配置。

更多详细的主题配置选项，请参考 VitePress 官方文档：[VitePress Default Theme Config](https://vitepress.dev/reference/default-theme-config)。

## 4. 项目特性和优点

- **多语言支持**：轻松配置和管理多种语言的文档，满足国际化需求。
- **快速构建**：基于 VitePress，享受 Vite 带来的极速开发体验和构建速度。
- **Markdown 增强**：支持 VitePress 提供的所有 Markdown 扩展，如自定义容器、代码高亮、Emoji 等。
- **灵活的配置**：通过 `.vitepress` 目录下的配置文件，可以高度定制站点的行为和外观。
- **易于部署**：生成静态 HTML 文件，可轻松部署到任何静态文件托管服务。
- **响应式设计**：默认主题支持响应式布局，在不同设备上提供良好的阅读体验。
- **图片缩放**：集成了 `medium-zoom`，为文档中的图片提供点击放大功能，提升用户体验。配置位于 `s-template\.vitepress\theme\MyLayout.vue` 中。

## 5. 注意事项

- **Node.js 版本**：请确保您的 Node.js 版本符合 VitePress 的要求（通常是 LTS 版本）。
- **依赖安装**：首次克隆项目后，请运行 `pnpm install` 或您使用的包管理工具的相应命令来安装依赖。
- **开发模式**：使用 `pnpm docs:dev` 启动本地开发服务器，实时预览文档更改。
- **构建文档**：使用 `pnpm docs:build` 构建生产环境的静态文档。
- **预览构建结果**：使用 `pnpm docs:preview` 预览构建后的文档。
- **路径配置**：在配置导航和侧边栏时，请注意路径是否正确，特别是多语言环境下的路径前缀。
- **图片和资源**：静态资源（如图片）应放置在 `src/public` 目录下，并在 Markdown 中通过相对路径引用。

import { defineConfig } from "vitepress";
import { markdown } from "./config/markdown";
import { themeConfig } from "./config/themeConfig";
import { head } from "./config/head";
import { viteConfig } from "./config/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	/** lang */
	lang: "zh-CN",
	/** 路由前缀 */
	base: "/docs-template",
	/** 网站标题 */
	title: "文档模板",
	/** 网站描述 */
	description: "这是一个基于 VitePress 的文档模板",
	/** 相对于项目根目录的 markdown 文件所在的文件夹 */
	srcDir: "src",
	/** 输出路径 */
	outDir: "dist",
	/** 从 URL 中删除 `.html` 后缀 */
	cleanUrls: true,
	/** 显示页面最后更新时间（基于 Git 提交时间） */
	lastUpdated: true,
	/** Markdown 配置 */
	markdown,
	/** 主题配置 */
	themeConfig,
	/** HTML `<head>` 配置 */
	head,
	/** Vite 配置 */
	vite: viteConfig,
	/** 站点地图 */
	sitemap: {
		hostname: "https://xxx.xxx.com/docs-template"
	}
});

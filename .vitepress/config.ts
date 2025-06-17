import { defineConfig } from "vitepress";
import { docConfig } from "./src/doc-config";
import { head } from "./src/head";
import { themeConfig } from "./src/theme-config";
import { zhLocal } from "./src/locales/zh";
import { enLocal } from "./src/locales/en";
import { viteConfig } from "./src/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	/* 文档配置 */
	...docConfig,
	/* 标头配置 */
	head,
	/* 主题配置 */
	themeConfig,
	/* 语言配置 */
	locales: {
		root: { label: "简体中文", lang: "zh-CN", ...zhLocal },
		en: { label: "English", lang: "en-US", link: "/en/", ...enLocal }
	},
	vite: viteConfig
});

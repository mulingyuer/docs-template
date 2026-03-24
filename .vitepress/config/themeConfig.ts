/*
 * @Author: mulingyuer
 * @Date: 2026-03-24 16:31:35
 * @LastEditTime: 2026-03-24 16:43:46
 * @LastEditors: mulingyuer
 * @Description: themeConfig 配置
 * @FilePath: \docs-template\.vitepress\config\themeConfig.ts
 * 怎么可能会有bug！！！
 */
import type { UserConfig } from "vitepress";

// https://vitepress.dev/reference/default-theme-config
export const themeConfig: UserConfig["themeConfig"] = {
	lastUpdated: {
		text: "最后更新时间"
	},
	returnToTopLabel: "回到顶部",
	docFooter: {
		prev: "上一页",
		next: "下一页"
	},
	outline: {
		/** 右侧大纲标题层级 deep表示全部层级 */
		level: "deep",
		/** 右侧大纲标题文本配置 */
		label: "页面导航"
	},
	sidebarMenuLabel: "文档导航",
	/** 移动端菜单里的外观分组标签 */
	darkModeSwitchLabel: "外观",
	/** 当前为深色时，切换按钮的 hover 提示 */
	lightModeSwitchTitle: "切换到浅色模式",
	/** 当前为浅色时，切换按钮的 hover 提示 */
	darkModeSwitchTitle: "切换到深色模式",
	/** 404页面 */
	notFound: {
		quote: "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
		title: "页面未找到",
		linkLabel: "前往首页",
		linkText: "带我回首页"
	},
	/** 搜索 */
	search: {
		provider: "local",
		options: {
			locales: {
				root: {
					translations: {
						button: {
							buttonText: "搜索文档",
							buttonAriaLabel: "搜索文档"
						},
						modal: {
							noResultsText: "无法找到相关结果",
							resetButtonTitle: "清除查询条件",
							footer: {
								selectText: "选择",
								navigateText: "切换"
							}
						}
					}
				}
			}
		}
	},
	/** 站点logo */
	logo: "/favicon.ico",

	nav: [
		{ text: "Home", link: "/" },
		{ text: "Examples", link: "/markdown-examples" }
	],

	sidebar: [
		{
			text: "Examples",
			items: [
				{ text: "Markdown Examples", link: "/markdown-examples" },
				{ text: "Runtime API Examples", link: "/api-examples" }
			]
		}
	],

	/** 社交链接 */
	socialLinks: [{ icon: "github", link: "https://github.com/mulingyuer/docs-template" }]
};

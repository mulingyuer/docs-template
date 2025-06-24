/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:34:53
 * @LastEditTime: 2025-06-24 15:22:20
 * @LastEditors: mulingyuer
 * @Description: 中文多语言配置
 * @FilePath: \docs-template\.vitepress\src\locales\zh.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { defineNav } from "../navs/zh";
import { zhSidebar } from "../sidebars/zh";

export const zhLocal: LocaleSpecificConfig<DefaultTheme.Config> = {
	themeConfig: {
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
		darkModeSwitchLabel: "暗黑模式",
		/** 网站标题 */
		siteTitle: "文档模板",
		nav: defineNav(),
		sidebar: zhSidebar,
		/** 404页面 */
		notFound: {
			quote: "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
			title: "页面未找到",
			linkLabel: "前往首页",
			linkText: "带我回首页"
		}
	}
};

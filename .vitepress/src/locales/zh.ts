/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:34:53
 * @LastEditTime: 2025-06-17 09:44:04
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
		sidebar: zhSidebar
	}
};

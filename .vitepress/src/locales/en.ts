/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:36:43
 * @LastEditTime: 2025-06-17 09:44:35
 * @LastEditors: mulingyuer
 * @Description: 英文多语言配置
 * @FilePath: \docs-template\.vitepress\src\locales\en.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { defineNav } from "../navs/en";
import { enSidebar } from "../sidebars/en";

export const enLocal: LocaleSpecificConfig<DefaultTheme.Config> = {
	themeConfig: {
		outline: {
			/** 右侧大纲标题层级 deep表示全部层级 */
			level: "deep"
		},
		/** 网站标题 */
		siteTitle: "docs template",
		nav: defineNav(),
		sidebar: enSidebar
	}
};

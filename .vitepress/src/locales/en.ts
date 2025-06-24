/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:36:43
 * @LastEditTime: 2025-06-24 15:22:52
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
		sidebar: enSidebar,
		/** 404页面 */
		notFound: {
			quote:
				"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
			title: "PAGE NOT FOUND",
			linkLabel: "go to home",
			linkText: "Take me home"
		}
	}
};

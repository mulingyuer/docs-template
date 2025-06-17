/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:58:57
 * @LastEditTime: 2025-06-17 10:16:46
 * @LastEditors: mulingyuer
 * @Description: 英文侧边栏导航
 * @FilePath: \docs-template\.vitepress\src\sidebars\en.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme } from "vitepress";

export const enSidebar: DefaultTheme.Sidebar = [
	{
		text: "Guide",
		items: [
			{
				text: "Markdown Examples",
				link: "/en/markdown-examples.md"
			},
			{
				text: "API Examples",
				link: "/en/api-examples.md"
			}
		]
	}
];

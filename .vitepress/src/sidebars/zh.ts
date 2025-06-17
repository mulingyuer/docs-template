/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:53:38
 * @LastEditTime: 2025-06-17 10:16:36
 * @LastEditors: mulingyuer
 * @Description: 中文侧边栏导航
 * @FilePath: \docs-template\.vitepress\src\sidebars\zh.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme } from "vitepress";

export const zhSidebar: DefaultTheme.Sidebar = [
	{
		text: "指南",
		items: [
			{
				text: "markdown示例",
				link: "/zh/markdown-examples.md"
			},
			{
				text: "API示例",
				link: "/zh/api-examples.md"
			}
		]
	}
];

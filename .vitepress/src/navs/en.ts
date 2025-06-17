/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:02:00
 * @LastEditTime: 2025-06-17 10:00:58
 * @LastEditors: mulingyuer
 * @Description: 英文导航栏
 * @FilePath: \docs-template\.vitepress\src\navs\en.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme } from "vitepress";

export function defineNav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "More",
			items: [
				{
					text: "Admin Dashboard Template",
					link: "https://github.com/mulingyuer/element-admin-template"
				},
				{
					text: "Chrome Extension Template",
					link: "https://github.com/mulingyuer/chrome-extension-template"
				},
				{
					text: "Node Backend Template",
					link: "https://github.com/mulingyuer/nestjs-prisma-template"
				},
				{
					text: "Documentation Template",
					link: "https://github.com/mulingyuer/docs-template"
				}
			]
		}
	];
}

/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:01:56
 * @LastEditTime: 2025-06-17 10:00:03
 * @LastEditors: mulingyuer
 * @Description: 中文导航栏
 * @FilePath: \docs-template\.vitepress\src\navs\zh.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme } from "vitepress";

export function defineNav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "更多",
			items: [
				{
					text: "后台管理模版",
					link: "https://github.com/mulingyuer/element-admin-template"
				},
				{
					text: "谷歌插件模板",
					link: "https://github.com/mulingyuer/chrome-extension-template"
				},
				{
					text: "node后端模板",
					link: "https://github.com/mulingyuer/nestjs-prisma-template"
				},
				{
					text: "文档模板",
					link: "https://github.com/mulingyuer/docs-template"
				}
			]
		}
	];
}

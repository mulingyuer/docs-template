/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:25:25
 * @LastEditTime: 2025-06-17 10:38:44
 * @LastEditors: mulingyuer
 * @Description: 主题配置
 * @FilePath: \docs-template\.vitepress\src\theme-config\index.ts
 * 怎么可能会有bug！！！
 */
import type { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
	/** 站点logo */
	logo: "/favicon.ico",
	/** 大纲显示级别，deep表示全部 */
	outline: "deep",
	/** 搜索配置 */
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
				},
				en: {
					translations: {
						button: {
							buttonText: "Search Docs",
							buttonAriaLabel: "Search Docs"
						},
						modal: {
							noResultsText: "No relevant results found",
							resetButtonTitle: "Clear Query Conditions",
							footer: {
								selectText: "Select",
								navigateText: "Switch"
							}
						}
					}
				}
			}
		}
	},
	/** 社交链接 */
	socialLinks: [
		{
			icon: "github",
			link: "https://github.com/mulingyuer/docs-template"
		}
	]
};

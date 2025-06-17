/*
 * @Author: mulingyuer
 * @Date: 2024-08-13 10:52:07
 * @LastEditTime: 2025-06-17 09:42:42
 * @LastEditors: mulingyuer
 * @Description: markdown配置
 * @FilePath: \docs-template\.vitepress\src\markdown.ts
 * 怎么可能会有bug！！！
 */

import type { MarkdownOptions } from "vitepress";

export const markdown: MarkdownOptions = {
	/** 代码高亮主题 */
	theme: {
		dark: "one-dark-pro",
		light: "one-light"
	},
	lineNumbers: true, // 代码块显示行号
	image: {
		lazyLoading: true // 图片懒加载
	},
	/** 目录 */
	toc: {
		level: [1, 2, 3, 4, 5, 6] // 目录深度
	}
};

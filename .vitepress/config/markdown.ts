/*
 * @Author: mulingyuer
 * @Date: 2026-03-24 16:31:35
 * @LastEditTime: 2026-03-24 16:43:42
 * @LastEditors: mulingyuer
 * @Description: markdown 配置
 * @FilePath: \docs-template\.vitepress\config\markdown.ts
 * 怎么可能会有bug！！！
 */
import type { UserConfig } from "vitepress";
import { tasklist } from "@mdit/plugin-tasklist";

export const markdown: UserConfig["markdown"] = {
	/** 显示行号 */
	lineNumbers: true,
	image: {
		/** 启用图片懒加载 */
		lazyLoading: true
	},
	toc: {
		/** 目录深度 */
		level: [1, 2, 3, 4, 5, 6]
	},
	/** markdown-it 插件 */
	config: (md) => {
		// todo list 插件
		md.use(tasklist);
	}
};

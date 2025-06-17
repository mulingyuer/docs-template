/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 10:12:51
 * @LastEditTime: 2025-06-17 11:00:59
 * @LastEditors: mulingyuer
 * @Description: 文档配置
 * @FilePath: \docs-template\.vitepress\src\doc-config.ts
 * 怎么可能会有bug！！！
 */
import type { UserConfig } from "vitepress";

export const docConfig: UserConfig = {
	/** 网站标题 */
	title: "文档模板",
	/** 网站描述 */
	description: "这是一个基于 VitePress 的文档模板",
	/** 路由前缀 */
	base: "/docs-template/",
	/** 输出路径 */
	outDir: "dist",
	/** 相对于项目根目录的 markdown 文件所在的文件夹 */
	srcDir: "src",
	/** 从 URL 中删除 `.html` 后缀 */
	cleanUrls: true,
	/** 路由重定向 */
	rewrites: {
		"zh/:rest*": ":rest*"
	}
};

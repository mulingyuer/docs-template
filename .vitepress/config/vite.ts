/*
 * @Author: mulingyuer
 * @Date: 2026-03-24 16:31:35
 * @LastEditTime: 2026-03-24 16:43:57
 * @LastEditors: mulingyuer
 * @Description: vite配置
 * @FilePath: \docs-template\.vitepress\config\vite.ts
 * 怎么可能会有bug！！！
 */
import type { UserConfig } from "vitepress";
import { fileURLToPath } from "node:url";

export const viteConfig: UserConfig["vite"] = {
	/** 公共资源目录 */
	publicDir: fileURLToPath(new URL("../../public", import.meta.url))
};

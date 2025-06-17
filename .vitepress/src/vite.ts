/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 16:09:16
 * @LastEditTime: 2025-06-13 16:12:58
 * @LastEditors: mulingyuer
 * @Description: vite配置
 * @FilePath: \sprite-docs\.vitepress\src\vite.ts
 * 怎么可能会有bug！！！
 */
import type { UserConfig, DefaultTheme } from "vitepress";

export const viteConfig: UserConfig<DefaultTheme.Config>["vite"] = {
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler"
			}
		}
	}
};

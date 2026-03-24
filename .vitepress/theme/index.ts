/*
 * @Author: mulingyuer
 * @Date: 2026-03-24 16:31:35
 * @LastEditTime: 2026-03-24 16:46:27
 * @LastEditors: mulingyuer
 * @Description: 主题配置
 * @FilePath: \docs-template\.vitepress\theme\index.ts
 * 怎么可能会有bug！！！
 */
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";

import "./styles/index.scss";

export default {
	...DefaultTheme,
	Layout
};

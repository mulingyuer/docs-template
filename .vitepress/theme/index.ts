/*
 * @Author: mulingyuer
 * @Date: 2025-06-13 17:50:24
 * @LastEditTime: 2025-06-13 17:58:36
 * @LastEditors: mulingyuer
 * @Description: 自定义主题
 * @FilePath: \sprite-docs\.vitepress\theme\index.ts
 * 怎么可能会有bug！！！
 */
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import MyLayout from "./MyLayout.vue";
// 引入样式
import "./styles/medium-zoom.scss";
import "./styles/style.scss";
import "./styles/custom.scss";

const theme: Theme = {
	extends: DefaultTheme,
	Layout: MyLayout
};

export default theme;

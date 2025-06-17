<!--
 * @Author: mulingyuer
 * @Date: 2025-06-13 17:52:42
 * @LastEditTime: 2025-06-13 18:30:00
 * @LastEditors: mulingyuer
 * @Description: 包装布局组件
 * @FilePath: \sprite-docs\.vitepress\theme\MyLayout.vue
 * 怎么可能会有bug！！！
-->
<template>
	<Layout></Layout>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import { nextTick, onMounted, watch } from "vue";

const { Layout } = DefaultTheme;
const route = useRoute();

// medium-zoom
function initZoom() {
	mediumZoom(".main img", { background: "var(--vp-medium-zoom-overlay)" });
}

onMounted(() => {
	initZoom();
});
watch(
	() => route.path,
	() => nextTick(() => initZoom())
);
</script>

<style lang="scss" scoped></style>

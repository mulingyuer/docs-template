<!--
 * @Author: mulingyuer
 * @Date: 2026-03-24 16:31:35
 * @LastEditTime: 2026-03-24 16:46:07
 * @LastEditors: mulingyuer
 * @Description: 布局组件
 * @FilePath: \docs-template\.vitepress\theme\components\Layout.vue
 * 怎么可能会有bug！！！
-->
<template>
	<Layout></Layout>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";

const route = useRoute();

const { Layout } = DefaultTheme;

// medium-zoom
function initZoom() {
	mediumZoom(".vp-doc img:not(.no-zoom)", { background: "var(--vp-c-bg)" });
}
onMounted(() => {
	initZoom();
});
watch(
	() => route.path,
	() => nextTick(() => initZoom())
);
</script>

<style scoped></style>

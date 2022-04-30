<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue';
import { ref } from 'vue';

const content = ref('')
</script>

<template>
<main>
    <Editor v-model="content"  :height="500"  placeholder="请输入内容" />
</main>
</template>

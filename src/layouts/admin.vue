<script lang="ts" setup>
</script>

<template>
<main>
    <h2>layouts ---admin</h2>
    <router-view />
</main>
</template>


<script lang="ts">
export default {
    route:{ meta : {auth:true} }
}
</script>

<style scoped>
</style>
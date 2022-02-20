<script setup lang="ts">
const props = defineProps({
  modelValue:String
})
</script>

<template>
    <input type="text"  class="yc-input" :value="props.modelValue" @input="$emit('update:modelValue',$event.target.value)" />
</template>

<style lang="scss">
 .yc-input{
      @apply border border-gray-200 outline-none focus:ring-2  ring-offset-2 ring-violet-600 duration-300 
            w-full rounded-sm py-1 px-2 placeholder:text-sm focus:border-white
   }
</style>
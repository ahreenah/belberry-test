<template>
  <button :type="type" class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineProps<{type?:"button" | "submit"}>()
</script>

<style scoped lang="css">
.button{
  line-height: 64px;
  border:none;
  border-radius: 64px;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-white);
  width: 100%;
  background: linear-gradient(258.13deg, var(--color-primary-dark) -68.35%, var(--color-primary-light) 71.73%)
}
</style>

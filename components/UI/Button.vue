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
  line-height: 44px;
  border:none;
  border-radius: 64px;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
  width: 100%;
  background: linear-gradient(258.13deg, var(--color-primary-dark) -68.35%, var(--color-primary-light) 71.73%);
  cursor: pointer;
  &:hover{
    background: linear-gradient(43.61deg, var(--color-primary-dark) -47.07%, var(--color-primary-light) 99.92%);
  }
  @media (width >= 1320px){
    font-size: 24px;
    line-height: 64px;
  }
}
</style>

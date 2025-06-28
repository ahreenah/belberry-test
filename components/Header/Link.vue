<template>
  <NuxtLink :href="href" class="header-link" :class="variant">
    {{title}}
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title: string;
      href: string;
      variant?: "light" | "dark"
    }>(),
    {
      variant:'light'
    }
  )
</script>

<style scoped lang="css">
.header-link{
  background: #F7F7F7;
  padding: 15px 9px 13px 12px;
  text-decoration: none;
  color: var(--color-black);
  border-radius: 100px;
  font-weight: 600;
  font-size: 16px;

}


.header-link.dark{
  color: white;
  background: var(--color-black);
}
</style>

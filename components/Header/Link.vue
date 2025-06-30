<template>
  <NuxtLink :href="href" class="header-link" :class="variant">
    {{title}}
    <span class="notifications" v-if="notifications">
      {{notifications}}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title: string;
      href: string;
      variant?: "light" | "dark";
      notifications?: number;
    }>(),
    {
      variant:'light'
    }
  )
</script>

<style scoped lang="css">
.header-link{
  background: #F7F7F7;
  padding: 15px 12px 13px;
  text-decoration: none;
  color: var(--color-black);
  border-radius: 100px;
  font-weight: 600;
  font-size: 16px;
  position: relative;
}

.header-link.dark{
  color: white;
  background: var(--color-black);
}

.notifications{
  position: absolute;
  top: 6px;
  right: 4px;
  font-size: 14px;
  line-height: 10px;
  font-weight: 600;
  background: linear-gradient(to right, var(--color-primary-dark) 0%, var(--color-primary-light) 100%);
  background-clip: text;
  color: transparent;
}
</style>

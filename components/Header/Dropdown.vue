<template>
  <HeadlessMenu class="menu" as="div" v-slot="{ open }">
    <HeadlessMenuButton class="header-link">
      {{title}}
      <span class="notifications" v-if="notifications">
        {{notifications}}
      </span>
      <Icon name="belberry:chevron-down" mode="svg" size="25px" :class="{open}" class="menu-icon"/> 
    </HeadlessMenuButton>   
    <HeadlessMenuItems class="items">
      <HeadlessMenuItem v-for="item in items">
        <NuxtLink :href="item.href" class="menu-item-link">
          {{ item.label }}
        </NuxtLink>
      </HeadlessMenuItem>
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>

<script setup lang="ts">
import {HeadlessMenu, HeadlessMenuButton, HeadlessMenuItem, HeadlessMenuItems} from '#components';
import type MenuItem from '~/types/MenuItem';

  const props = withDefaults(
    defineProps<{
      title: string;
      href: string;
      variant?: "light" | "dark";
      notifications?: number;
      items: Array<MenuItem>;
    }>(),
    {
      variant:'light'
    }
  )
</script>

<style scoped lang="css">
.header-link{
  background: var(--color-grey-100);
  padding: 9px 12px 7px;
  text-decoration: none;
  color: var(--color-black);
  border-radius: 100px;
  font-weight: 600;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
}

.header-link.dark{
  color: white;
  background: var(--color-black);
}

.notifications{
  position: absolute;
  top: 0px;
  right: 4px;
  font-size: 14px;
  line-height: 10px;
  font-weight: 600;
  background: linear-gradient(to right, var(--color-primary-dark) 0%, var(--color-primary-light) 100%);
  background-clip: text;
  color: transparent;
}

.menu{
  position: relative;
}

.items{
  position: absolute;
  background-color: var(--color-white);
  box-shadow: var(--color-grey-200) 0 0 20px 0px;
  z-index: 1;
  padding: 6px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  top: 50px;
}


.menu-item-link{
  width: max-content;
  line-height: 40px;
  padding: 0 20px;
  text-decoration: none;
  color: var(--color-black);
  &:hover{
    color: var(--color-primary-light);
  }
}

.menu-icon.open{
  transform: scaleY(-1);
}

.menu-shown{
  opacity:1;
}

.menu-hidden{
  opacity:0;
}
</style>

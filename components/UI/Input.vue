<template>
  <label class="wrapper">
    <span class="label" :class="{'moved-up':!!modelValue?.length}">{{label}}</span>
    <input class="input" v-model="modelValue">
  </label>
</template>

<script setup lang="ts">
  defineProps<{
    label: string;
  }>();

  const modelValue = defineModel<string>();
</script>

<style scoped lang="css">
.wrapper{
  height: 64px;
  border-radius: 20px;
  background-color: #F5F7FA;
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 31px 16px 13px;
}

.input{
  line-height: 20px;
  border: none;
  padding: 0;
  background-color: transparent;
  outline:none;
  font-size: 15px;
  font-weight: 500;
}

.label{
  position: absolute;
  line-height: 20px;
  top: 22px;
  left: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #AABACF;
  &:has(+:focus), &.moved-up{
    top: 13px;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>


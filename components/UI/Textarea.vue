<template>
  <div class="textarea-wrapper">
    <label :for="textareaId" class="textarea-label" :class="{'moved-up': !!model?.length}">
      {{label}}
    </label>
    <textarea v-model="model" :id="textareaId" />
  </div>
</template>

<script setup lang="ts">
  const textareaId = useId();

  const props = defineProps<{label: string}>();

  const model = defineModel<string>();
</script>

<style scoped lang="css">
.textarea-label{
  line-height: 35px;
  color: var(--color-black);
  &:has(+textarea:focus), &.moved-up{
    line-height: 19px;
    font-size: 12px;
  }
}

.textarea-wrapper{
  background-color: white;
  border-radius: 20px;
  width: 100%;
  height: 232px;
  padding: 14.5px 28px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  & label{
    color: var(--color-black);
  }
  & textarea{
    flex: 1;
    border: none;
    box-sizing: border-box;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 100%;
    outline: none;
    resize: none;;
  }
}

</style>

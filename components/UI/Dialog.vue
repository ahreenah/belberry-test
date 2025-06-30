<template>
  <HeadlessDialog :open="open" @close="$emit('close')">
    <div class="backdrop" aria-hidden="true" />
    <div class="dialog-panel-wrapper"> 
      <HeadlessDialogPanel class="dialog">
        <button class="close-button" @click="closeDialog($event)">
          <Icon name="belberry:close" mode="svg" size="32px" />
        </button>
        <slot />
      </HeadlessDialogPanel>
    </div>
  </HeadlessDialog>
</template>

<script setup lang="ts">
  defineProps<{
    open: boolean;
  }>();

  const emit = defineEmits(['close'])

  function closeDialog(event: Event){
    event.preventDefault()
    emit('close')
  }
</script>

<style scoped lang="css">
.dialog-panel-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #02004B70;
}

.dialog{
  background: white;
  width: calc(100% - 40px);
  max-width: 820px;
  border-radius: 20px;
  padding: 24px 20px;
  position: relative;
  box-sizing: border-box;
  @media (width >= 1320px){
    padding: 60px;
  }
}

.backdrop{
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #02004B66;
  opacity: 0.4;
  backdrop-filter: blur(12px);
}

.close-button{
  position: absolute;
  width: 32px;
  height: 32px;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline:none;
  top: -36px;
  right: 0;
  color: var(--color-white);

  @media (width >= 1320px){
    top: 24px;
    right: 24px;
    color: var(--color-black);
  }
}
</style>

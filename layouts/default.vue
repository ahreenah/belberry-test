<template>
  <div class="layout">
    <Header />
    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="css">
.layout{
  background-color: #F2F2F4;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
.page-content{
  padding: 40px 0 107px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 40px;
}
</style>

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
  padding: 35px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 60px;

  @media (width >= 1320px){
    padding: 40px 0 107px;
    gap: 80px;
  }
}
</style>

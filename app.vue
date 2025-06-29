<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  provideHeadlessUseId(() => useId())
</script>

<style>
body{
  margin:0;
  padding: 0;
}

*{
  margin:0;
  padding: 0;
  font-family: "Golos Text";
}

:root{
  --color-black: #313131;
  --content-width: 1280px;
  --color-white: #FFFFFF;
  --color-primary-dark: #0804A1;
  --color-primary-light: #9278FA;
  --color-grey-100: #F8F8F8;
  --color-grey-200: #E4E4E4;
  --color-grey-300: #DEDEDE;
  --color-grey-400: #CECECE;
  --color-grey-500: #ADADAD;
  --color-grey-600: #6C6C6C;
  --color-grey-700: #494949;
  --color-grey-800: #343434;
  --color-grey-900: #212121;
}
</style>

<template>
  <header aria-label="Навигация" class="header">
    <button class="burger-menu-button">
      <Icon name="belberry:burger" mode="svg" size="45px" />
    </button>
    <div class="logo-wrapper">
      <NuxtImg src="/logo.png" class="logo"/>
    </div>
    <HeaderLink href='/' title="Напишите нам" variant="dark" class="write-us" />
    <ul role="presentation" class="links">
      <li>
        <HeaderLink href='/' title="Проекты" :notifications="18"/>
      </li>
      <li>
        <HeaderDropdown href='/' title="Услуги" :notifications="36" :items="serviceLinks"/>
      </li>
      <li>
        <HeaderDropdown href='/' title="Мы" :items="aboutUsLinks" />
      </li>
      <li class="blog">
        <HeaderLink href='/' title="Блог" :notifications="31"/>
      </li>
      <li>
        <HeaderLink href='/' title="Контакты" />
      </li>
      <li>
        <HeaderLink href='/' title="Cвязаться с нами" variant="dark" />
      </li>
    </ul>
  </header>
</template>

<style scoped lang="css">
.header{
  display: flex;
  height: 85px;
  padding-left: 20px;
  padding-right: 20px;
  background: white;
  align-items: center;
  @media (min-width: 1320px){
    height: 67px;
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}

.logo-wrapper, .links{
  grid-row: 1;
  grid-column:1;
  flex:1;
}

.links{
  display: none;
  list-style: none;
  gap: 24px;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  @media (min-width: 1320px){
    display: flex;
  }
}

.burger-menu-button{
  display: flex;
  width: 48px;
  height: 48px;
}

.burger-menu-button, .write-us{
  display: flex;
  border: none;
  background-color: transparent;
  @media (min-width: 1320px){
    display: none;
  }
}

.logo-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog{
  margin-left: auto;
}
</style>

<script setup lang="ts">
import {HeaderDropdown} from '#components';

const serviceLinks = ref([
  {label:'Разработка сайтов', href:'/'},
  {label:'Продвижение сайтов', href:'/'},
  {label:'Реклама', href:'/'},
])

const aboutUsLinks = ref([
  {label:'Наши соцсети', href:'/'},
  {label:'Наши проекты', href:'/'},
])
</script>

<template>
  <header aria-label="Навигация" class="header">
    <div class="logo-wrapper">
      <NuxtImg src="/logo.png" class="logo"/>
    </div>
    <ul role="presentation" class="links">
      <li>
        <HeaderLink href='/' title="Проекты" />
      </li>
      <li>
        <HeaderLink href='/' title="Услуги" />
      </li>
      <li>
        <HeaderLink href='/' title="Мы" />
      </li>
      <li class="blog">
        <HeaderLink href='/' title="Блог"/>
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
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  height: 67px;
  background: white;
}

.logo-wrapper, .links{
  grid-row: 1;
  grid-column:1;
}

.links{
  display: flex;
  list-style: none;
  gap: 24px;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
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

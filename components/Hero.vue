<template>
  <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="round">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>
  <section class="hero">
    <section aria-label="О нас" class="site-development">
      <h4 class="subtitle">
        digital creative agency
      </h4>
      <h3 class="title">
        Создание и продвижение сайтов
      </h3>
      <section aria-label="Наши проекты" class="projects">
        <ul role="presentation" class="project-list">
          <li>
            <NuxtLink href="http://example.com" aria-label="ЗАП Строй" class="project-link">
              <NuxtImg src="/showcase-1.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="ALIA" class="project-link">
              <NuxtImg src="/showcase-2.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Uber" class="project-link">
              <NuxtImg src="/showcase-3.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Teo by cosmoscow" class="project-link">
              <NuxtImg src="/showcase-4.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Alfa properties Dubai" class="project-link">
              <NuxtImg src="/showcase-5.png"/>
            </NuxtLink>
          </li>
        </ul>
        <span class="our-projects">
          Наши проекты
        </span>
        <NuxtLink href="/" aria-label="Все проекты" class="all-projects">
          <Icon name="belberry:arrow-up-right" size="24px" class="all-projects-icon" />
        </NuxtLink>
      </section>
    </section>
    <section aria-label="Заказать сайт" class='order-site'>
      <div class="bg" />
      <div class="round">
        <div class="order-site-bg"></div>
      </div>
      <NuxtImg src="/flowers.png" class="flowers" />
      <div class="order-content">
        <span class="support">
          техподдержка сайта на 30 дней — в подарок
        </span>
        <span class="price">
          320 000 ₽
        </span>
        <div class="cta">
          <span class='top-ten'>
            Топ-10 самых креативных разработчиков сайтов в России
          </span>
          <button class="order-now">
            <Icon name="belberry:arrow-right" size="24px" />
            Заказать
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="css">
.hero{
  display: flex;
  gap: 20px;
  max-width: var(--content-width);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.title{
  font-size: 68px;
  font-weight: 500;
  line-height: 82px;
  margin-top: 16px;
}

.subtitle{
  font-size: 20px;
  line-height: 24px;
}

.site-development{
  background-image: linear-gradient(108.96deg, var(--color-primary-dark) -2.15%, var(--color-primary-light) 137.97%);
  padding: 60px;
  color: var(--color-white);
  border-radius: 20px;
  flex:2;
}

.order-site-bg{
  flex:1;
  height: 600px;
  width: 413px;
  background-image: linear-gradient(200.75deg, #0804A1B0 -57.41%, #9278FAB0 99.52%), url("/flowers-bg-flipped.png");
  clip-path: polygon(0 0, 100% 0, 100% 100%, 275px 100%, 216px calc(100% - 60px), 0 calc(100% - 60px));
  background-position: -60px bottom;
  background-size: 1080px;
}

.round {
  filter:url(#round);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.projects{
  /*background-color: var(--color-white);*/
  background-image: url(/projects-background.png);
  background-position: bottom;
  background-repeat: no-repeat;
  width: 728px;
  height: 134px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  gap: 19px;
  box-sizing: border-box;
  position: relative;
  margin-top: 60px;
}

.project-list{
  display: flex;
  flex-direction: row;
  gap: 12px;
  list-style: none;
}


.project-link{
  width: 114px;
  height: 112px;
  display: flex;
  border-radius: 8px;
}

.our-projects{
  background-color: transparent;
  color: var(--color-black);
  align-self: flex-end;
}

.all-projects{
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #ECF96E;
  display: flex;
  align-items: center;
  justify-content: center;
}


.all-projects-icon{
  margin-right: -4px;
  margin-bottom: -1px;
}

.order-site{
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}
.order-content{
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  padding: 53px 8px 8px 5px;
  z-index: 1;
}

.support{
  color: #ECF96E;
  font-size: 16px;
  line-height: 19px;
  color: #ECF96E;
  max-width: 190px;
  text-align: right;
  align-self: flex-end;
  margin-right: 12px;
}

.price{
  margin-top: auto;
  font-weight: 500;
  font-size: 72px;
  line-height: 72px;
  letter-spacing: 0%;
  margin-bottom: 29px;
  color: var(--color-white);
  text-align: center;
}


.cta{
  display:flex;
  gap: 15px;
  align-items: flex-end;
}

.top-ten{
  flex-basis: 244px;
  font-size: 15px;
}

.order-now{
  border:none;
  background: color(--color-white);
  border-radius: 100px;
  height: 50px;
  padding: 10px 23px 10px 9px;
  gap: 6px;
  display: flex;
  align-items: center;
}

.flowers{
position: absolute;
    bottom: -50px;
    right: -130px;
    width: 780px;
    transform: rotate(-13.8deg);
}
</style>

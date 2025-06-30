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
      <NuxtLink href="/" class="all-projects-link">
        <div class="all-projects-text">
          Наши проекты
        </div>
        <div class="all-projects">
          <Icon name="belberry:arrow-up-right" size="24px" class="all-projects-icon desktop-only" />
          <Icon name="belberry:arrow-up-right" size="33.75px" class="all-projects-icon mobile-only" />
        </div>
      </NuxtLink>
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
        <span class="your-price">
          Ваша цена
        </span>
        <span class="price">
          320 000 ₽
        </span>
        <div class="cta">
          <span class='top-ten'>
            Топ-10 самых креативных разработчиков сайтов в России
          </span>
          <button class="order-now" @click="showContactForm">
            <div class="icon-wrapper">
              <Icon name="belberry:arrow-right" size="24px" />
            </div>
            <span class="order-text">
              Заказать
            </span>
          </button>
        </div>
      </div>
    </section>
  </section>
  <ContactDialog :open="isContactDialogShown" @close="closeContactDialog()"/>
</template>

<script setup lang="ts">
const isContactDialogShown = ref(false);

function closeContactDialog(){
  console.log('close in calculator')
  isContactDialogShown.value = false;
}

function showContactForm(event: Event){
  event.preventDefault()
  isContactDialogShown.value = true;
}
</script>

<style scoped lang="css">
.hero{
  display: flex;
  gap: 20px;
  max-width: var(--content-width);
  margin: 0 auto;
  position: relative;
  flex-direction: column;
  width: 100%;
  @media (width >= 1320px){
     overflow: hidden;
    flex-direction: row;
  }
}

.title{
  font-weight: 500;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0%;
  text-transform: uppercase;
  margin-top: 20px;

  @media (width >= 1320px){
    font-size: 68px;
    font-weight: 500;
    line-height: 82px;
    margin-top: 16px;
  }
}

.subtitle{
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0%;

  @media (width >= 1320px){
    font-size: 20px;
    line-height: 24px;
  }
}

.site-development{
  background-image: linear-gradient(108.96deg, var(--color-primary-dark) -2.15%, var(--color-primary-light) 137.97%);
  padding: 30px;
  color: var(--color-white);
  border-radius: 20px;
  flex:2;

  @media (width >= 1320px){
    padding: 60px;
  }
}

.order-site-bg{
  flex:1;
  background-image: linear-gradient(99.73deg, #0804A1B0 -18.29%, #9278FAB0 77.18%), url("/flowers-bg-flipped.png");
  background-position: -60px bottom;
  background-size: 1080px;
  height: 250px;

  @media (width >= 1320px){
    background-image: linear-gradient(200.75deg, #0804A1B0 -57.41%, #9278FAB0 99.52%), url("/flowers-bg-flipped.png");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 275px 100%, 216px calc(100% - 60px), 0 calc(100% - 60px));
    height: 600px;
    width: 413px;
  }
}

.round {
  filter:url(#round);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.projects{
  display:none;
  /*background-color: var(--color-white);*/
  background-image: url(/projects-background.png);
  background-position: bottom;
  background-repeat: no-repeat;
  width: 728px;
  height: 134px;
  border-radius: 10px;
  padding: 10px;
  gap: 19px;
  box-sizing: border-box;
  position: relative;
  margin-top: 60px;
  @media (width >= 1320px){
    display: flex;
  }
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
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  border-radius: 32px;
  background-color: #ECF96E;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (width >= 1320px){
    position: absolute;
    width: 32px;
    height: 32px;
  }
}


.all-projects-icon{
  margin-right: -4px;
  margin-bottom: -1px;
  &.desktop-only{
    display: none;
    @media(width >= 1320px){
      display: flex;
    }
  }
  &.mobile-only{
    display: flex;
    @media(width >= 1320px){
      display: none;
    }
  }
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
  padding: 30px;
  z-index: 1;

  @media(width >= 1320px){
    padding: 53px 8px 8px 5px;
  }
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
  display: none;
  @media(width >= 1320px){
    display: block;
  }
}

.your-price{
  margin-top: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0%;

  color: var(--color-white);

  @media(width >= 1320px){
    display: none;
  }
}

.price{
  font-size: 36px;
  line-height: 120%;
  font-weight: 500;
  letter-spacing: 0%;
  margin-bottom: 12px;
  color: var(--color-white);

  @media(width >= 1320px){
    margin-top: auto;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
    margin-bottom: 29px;
  }
}


.cta{
  display:flex;
  gap: 15px;
  align-items: flex-end;
}

.top-ten{
  flex-basis: 244px;
  font-size: 15px;
  display: none;
  @media(width >= 1320px){
    display: block;
  }
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
  position: relative;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;

  &:before{
    content:'';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    left: 9px;
    border-radius: 15px;
    background-color: #ECF96E;
  }
  &:hover:before{
    width: 125px;
    height: 42px;
    top: 4px;
    left: 6px;
  }
}

.icon-wrapper{
  flex-basis: 30px;
  flex-shrink: 0;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flowers{
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 400px;

  @media(width >= 1320px){
    right: -130px;
    width: 780px;
    transform: rotate(-13.8deg);
  }
}

.order-text{
  z-index: 1;
}

.all-projects-link{
  display: flex;
  gap: 4px;
  align-items: stretch;
  height: 44px;
  text-decoration: none;
  margin-top: 40px;
  @media(width >= 1320px){
    display: none;
  }
}

.all-projects-text{
  line-height: 44px;
  border-radius: 44px;
  background-color: var(--color-white);
  color: var(--color-black);
  color: #0D08A4;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 213px;
}
</style>

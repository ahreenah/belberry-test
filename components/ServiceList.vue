<template>
  <section aria-label="Наши услуги" class="services">
    <h2 class="title">
      Наши услуги
    </h2>
    <ul class="service-list mobile-only ssr-service-list">
      <li v-for="service in services" :key="service.title" class="service-card ssr-service-card">
        <h3 class="service-title">
          {{service.title}}
        </h3>
        <span class="service-description">
          {{service.description}}
        </span>
      </li>
    </ul>
    <div class="swiper-and-controls">
      <ClientOnly>
        <swiper-container 
          ref="containerRef" 
          :slides-per-view="3" 
          :space-between="20"
          @swiper="console.log($event)"
          @slide-change="console.log($event)"
        >
          <swiper-slide
            v-for="(service, idx) in services"
            :key="idx"
          >
            <section class="service-card">
              <h3 class="service-title">
                {{service.title}}
              </h3>
              <span class="service-description">
                {{service.description}}
              </span>
            </section>
          </swiper-slide>
        </swiper-container>
        <template #fallback>
          <ul class="service-list ssr-service-list">
            <li v-for="service in services" :key="service.title" class="service-card ssr-service-card">
              <h3 class="service-title">
                {{service.title}}
              </h3>
              <span class="service-description">
                {{service.description}}
              </span>
            </li>
          </ul>
        </template>
      </ClientOnly>
      <div class="swiper-controls">
        <button @click="showPreviousSlide()" class="swiper-control-button" :disabled="isBeginning">
          <Icon name="belberry:arrow-left" mode="svg" size="30px" />
        </button>
        <button @click="showNextSlide()" class="swiper-control-button" :disabled="isEnd">
          <Icon name="belberry:arrow-right" mode="svg" size="30px" />
        </button>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
  const services = ref([
    {
      title: "Landing page",
      description: "Лендинги с адаптивным дизайном для всех типов устройств",
    },
    {
      title: "Внедрение BITRIX24",
      description: "Оформление интерфейсов под устройства",
    },
    {
      title: "Интернет-магазин",
      description: "Удобные интерфейсы с фокусом на мобильную версию",
    },
    {
      title: "Личный кабинет",
      description: "Интуитивно понятные личные кабинеты",
    },
    {
      title: "Техническая поддержка ",
      description: "Лендинги с адаптивным дизайном для всех типов устройств",
    },
    {
      title: "Сайты на WordPress",
      description: "Оформление интерфейсов под устройства.",
    },
    {
      title: "Проектирование интерфейса",
      description: "Удобные интерфейсы с фокусом на мобильную версию",
    },
  ])

  const containerRef = ref(null)

  const swiper = useSwiper(containerRef)

  function showNextSlide(){
    swiper.next()
  }

  function showPreviousSlide(){
    swiper.prev()
  }

  const isBeginning = ref(true);
  const isEnd = ref(false)

  watch([containerRef], ()=>{
  //@ts-ignore
    containerRef.value.addEventListener('swiperslidechange', (e)=>{
      console.log('slide change',e.detail[0].isBeginning)
      isBeginning.value = e.detail[0].isBeginning
      isEnd.value = e.detail[0].isEnd
    })
  })
</script>

<style scoped lang="css">
.title{
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #4B4B4B;
  
  @media (width >= 1320px){
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
  }
}

.services{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  @media (width >= 1320px){
    gap: 40px;
  }
}

.service-list{
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (width >= 1320px){
    flex-direction: row;
    overflow: auto;
    gap: 20px;
  }
}
@media (width >= 1320px){
  .mobile-only{
    display: none;
  }
}
@media (width < 1320px){
  .desktop-only{
    display: none;
  }
}

.service-card{
  background: var(--color-white);
  border-radius: 20px;
  padding: 16px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 134px;
  box-sizing: border-box;
  @media (width >= 1320px){
    height: 400px;
    padding: 30px;
  }
}

.service-title{
  background: linear-gradient(to right, var(--color-primary-dark) 0%, var(--color-primary-light) 100%);
  background-clip: text;
  max-width: 100%;
  -webkit-text-fill-color: transparent;
  width: max-content;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  @media (width >=  1320px){
    font-size: 44px;
    line-height: 53px;
  }
}

.service-description{
  font-size: 16px;
  color: var(--color-black);
  font-weight: 500;
  line-height: 22px;
}

.services{
  max-width: var(--content-width);
  margin: 0 auto;
}

.ssr-service-card{
  @media (width >= 1320px){
    width: 413px;
  }
  flex-shrink: 0;
}

.ssr-service-list::-webkit-scrollbar{
  display: none;
}

.swiper-controls{
  display: flex;
  gap: 20px;
}

.swiper-control-button{
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--color-white);
  border-radius: 10px;
  color: var(--color-black);
  cursor: pointer;
  &:disabled{
    background: #FFFFFF80;
    color: #3131315D;
  }
}

.swiper-and-controls{
  display: none;
  @media(width >= 1320px){
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>

<template>
  <section aria-label="Наши услуги" class="services">
    <h2 class="title">
      Наши услуги
    </h2>
    <ul class="service-list">
      <li v-for="service in services" :key="service.title" class="service-card">
        <h3 class="service-title">
          {{service.title}}
        </h3>
        <span class="service-description">
          {{service.description}}
        </span>
      </li>
    </ul>
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
</script>

<style scoped lang="css">
.title{
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  color: #4B4B4B;
}

.services{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
}

.service-list{
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (width >= 1000px){
    flex-direction: row;
    overflow: auto;
    gap: 20px;
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
  @media (width >= 1000px){
    width: 413px;
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
  @media (width >= 1000px){
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
</style>

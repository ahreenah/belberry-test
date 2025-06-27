<template>
  <section aria-label="Наши услуги">
    <h2>
      Наши услуги
    </h2>
    <ul>
      <li v-for="service in services" :key="service.title">
        <h3>
          {{service.title}}
        </h3>
        <span>
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

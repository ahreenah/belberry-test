<template>
  <section>
    <section aria-label="О нас">
      <span>
        digital creative agency
      </span>
      <h3>
        Создание и продвижение сайтов
      </h3>
      <section aria-label="Наши проекты">
        <ul role="presentation">
          <li>
            <NuxtLink href="http://example.com" aria-label="ЗАП Строй">
              <NuxtImg src="/showcase-1.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="ALIA">
              <NuxtImg src="/showcase-2.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Uber">
              <NuxtImg src="/showcase-3.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Teo by cosmoscow">
              <NuxtImg src="/showcase-4.png"/>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="http://example.com" aria-label="Alfa properties Dubai">
              <NuxtImg src="/showcase-5.png"/>
            </NuxtLink>
          </li>
        </ul>
        <span>
          Наши проекты
        </span>
        <NuxtLink href="/" aria-label="Все проекты">
          <Icon name="belberry:arrow-up-right" size="24px" />
        </NuxtLink>
      </section>
    </section>
    <section aria-label="Заказать сайт">
      <span>
        техподдержка сайта на 30 дней — в подарок
      </span>
      <span>
        320 000 ₽
      </span>
      <span>
        Топ-10 самых креативных разработчиков сайтов в России
      </span>
      <button>
        <Icon name="belberry:arrow-right" size="24px" />
        Заказать
      </button>
    </section>
  </section>
</template>

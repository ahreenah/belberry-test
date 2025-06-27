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

  <section aria-label="Посчитайте стоимость вашего сайта">
    <h2>
      Посчитайте стоимость вашего сайта:
    </h2>
    <form>
      <div>
        <label for="site-type">
          Тип сайта
        </label>
        <select placeholder="Тип сайта" id="site-type">
          <option value="landing">Лендинг</option>
          <option value="store">Интернет-магазин</option>
        </select>
      </div>
      <div>
        <label for="cms-select">
          Тип CMS
        </label>
        <select placeholder="Тип CMS" id="cms-select">
          <option value="bitrix">Bitrix</option>
          <option value="wordpress">WordPress</option>
        </select>
      </div>
      <div>
        <label for="site-topic">
          Тeматика сайта
        </label>
        <select placeholder="Тeматика сайта" id='dite-topic'>
          <option value="it">IT</option>
          <option value="medicine">Медицина</option>
          <option value="education">Образование</option>
        </select>
      </div>
      <div>
        <label for="site-design">
          Дизайн сайта
        </label>
        <select placeholder="Дизайн сайта" id="site-design">
          <option value="basic">Базовый</option>
          <option value="custom">Авторский</option>
        </select>
      </div>
      <div>
        <label for="additional-services">
          Дополнительные услуги
        </label>
        <select placeholder="Дополнительные услуги" id="additional-services">
          <option selected>Нет</option>
          <option value="deploy">Разворачиваниие на домене</option>
          <option value="seo">SEO</option>
          <option value="advertisement">Настройки рекламы</option>
        </select>
      </div>
      <div>
        <label for="project-comment">
          Комментарий к проекту
        </label>
        <textarea placeholder="Комментарий к проекту" id="project-comment" />
      </div>
      <span>Стоимость проекта</span>
      <span>0 ₽</span>
      <button type="submit">Связаться с нами</button>
      <div>
        <input type="checkbox" id="accept-policy">
        <label for="accept-policy">
          Нажимая кнопку, я соглашаюсь с <NuxtLink href='/'>политикой конфиденциальности</NuxtLink> и даю разрешение на обработку моих персональных данных.
        </label>
      </div>
    </form>
    

  </section>

  <dialog open>
    <button aria-label="Закрыть">
      <Icon name='belberry:close' size="32px"/>
    </button>
    <h2>
      Осталось совсем немного!
    </h2>
    <p>
      Мы рассчитали стоимость вашего сайта, она составила 320 000 рублей. Оставьте контакты, и наш менеджер свяжется с вами в ближайшее время.
    </p>
    <form aria-label="Выши контакты">
      <div>
        <label for="contact-name">Имя</label>
        <input id="contact-name">
      </div>
      <div>
        <label for="contact-phone">Телефон</label>
        <input id="contact-phone">
      </div>
      <button type="submit">
        Оставить заявку
      </button>
      <div>
        <input type="checkbox" id="dialog-accept-policy">
        <label for="dialog-accept-policy">
          Нажимая кнопку, я соглашаюсь с <NuxtLink href='/'>политикой конфиденциальности</NuxtLink> и даю разрешение на обработку моих персональных данных.
        </label>
      </div>
    </form>
  </dialog>
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

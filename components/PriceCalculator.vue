<template>

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
</template>

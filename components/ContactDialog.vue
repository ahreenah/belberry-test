<template>
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

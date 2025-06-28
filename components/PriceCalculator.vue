<template>

  <section aria-label="Посчитайте стоимость вашего сайта" class="calculator">
    <h2 class="calculator-title">
      Посчитайте стоимость вашего сайта:
    </h2>
    <form class="price-form">
      <div class="fields">
        <div class="input-wrapper">
          <label for="site-type">
            Тип сайта
          </label>
          <select placeholder="Тип сайта" id="site-type">
            <option value="landing">Лендинг</option>
            <option value="store">Интернет-магазин</option>
          </select>
        </div>
        <div class="input-wrapper">
          <label for="cms-select">
            Тип CMS
          </label>
          <select placeholder="Тип CMS" id="cms-select">
            <option value="bitrix">Bitrix</option>
            <option value="wordpress">WordPress</option>
          </select>
        </div>
        <div class="input-wrapper">
          <label for="site-topic">
            Тeматика сайта
          </label>
          <select placeholder="Тeматика сайта" id='dite-topic'>
            <option value="it">IT</option>
            <option value="medicine">Медицина</option>
            <option value="education">Образование</option>
          </select>
        </div>
        <div class="input-wrapper">
          <label for="site-design">
            Дизайн сайта
          </label>
          <select placeholder="Дизайн сайта" id="site-design">
            <option value="basic">Базовый</option>
            <option value="custom">Авторский</option>
          </select>
        </div>
        <div class="input-wrapper">
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
        <div class="input-wrapper comment">
          <label for="project-comment">
            Комментарий к проекту
          </label>
          <textarea placeholder="Комментарий к проекту" id="project-comment" />
        </div>
        <div class="pricing">
          <span class="price-label">Стоимость проекта</span>
          <span class="price">0 ₽</span>
        </div>
      </div>
      <UIButton type="submit">Связаться с нами</UIButton>
      <div class="accept-policy">
        <input type="checkbox" id="accept-policy">
        <label for="accept-policy">
          Нажимая кнопку, я соглашаюсь с <NuxtLink href='/' class="accept-policy-link">политикой конфиденциальности</NuxtLink> и даю разрешение на обработку моих персональных данных.
        </label>
      </div>
    </form>
    

  </section>
</template>


<style scoped lang="css">
.calculator{
  margin: 0 auto;
  width: 100%;
  max-width: var(--content-width);
  background: #313131;
  padding: 60px;
  border-radius: 20px;
  color: var(--color-white);
  box-sizing: border-box;
  overflow: hidden;
}

.calculator:before{
  content:'';
  background-image: url(/flowers.png);
  width: 100%;
  height: 683px;
  margin-bottom: -683px;
  display:  block;
  background-size: contain;
  opacity: 0.05;
  background-repeat: no-repeat;
  transform: rotate(-17.34deg);
}

.fields{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 22px;
}

.calculator-title{
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 50px;
}

  .price-form{
    position: relative;
  }

.input-wrapper{
  position: relative;
  & label{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  & select, textarea{
    padding: 10px;
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 64px;
  }
  & textarea{
    height: 232px;
    box-sizing: border-box;
  }
}

.comment{
  grid-row: 2 / 4;
  grid-column: 3;
}
.pricing{
  grid-row: 3;
  grid-column: 1 / 3;
  margin-top: auto;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.price{
  font-family: Golos Text;
  font-weight: 500;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: 0%;
}

.price-label{
  font-family: Golos Text;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0%;
  vertical-align: middle;
}

.accept-policy{
  margin-top: 32px;
  height: 24px;
  display: flex;
  align-items: flex-start;
  gap:8px;
  font-weight: 500;
  color: #8B8B8B;
}

.accept-policy-link{
  font-weight: 700;
  text-decoration: none;
  color: #8B8B8B;
}

.license-checkbox{
  width: 20px;
  height: 20px;
  
}

</style>

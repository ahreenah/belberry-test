<template>
  <section aria-label="Посчитайте стоимость вашего сайта" class="calculator">
    <h2 class="calculator-title">
      Посчитайте стоимость вашего сайта:
    </h2>

    <form class="price-form">
      <div class="fields">
        <UISelect label="Тип сайта" :options="siteTypeOptions" v-model="siteType" />
        <UISelect label="Тип CMS" :options="cmsTypeOptions" v-model="cmsType" />
        <UISelect label="Тeматика сайта" :options="topicOptions" v-model="topic" />
        <UISelect label="Дизайн сайта" :options="designTypeOptions" v-model="designType" />
        <UISelect label="Дополнительные услуги" :options="additionalOptions" v-model="additionalOption" />
        <div class="input-wrapper comment">
          <UITextarea label="Комментарий к проекту" />
        </div>
        <div class="pricing">
          <span class="price-label">Стоимость проекта</span>
          <span class="price">0 ₽</span>
        </div>
      </div>

      <UIButton type="submit" @click="showContactForm($event)">Связаться с нами</UIButton>
    
      <UILabeledCheckbox class="accept-policy">
          Нажимая кнопку, я соглашаюсь с <NuxtLink href='/' class="accept-policy-link">политикой конфиденциальности</NuxtLink> и даю разрешение на обработку моих персональных данных.
      </UILabeledCheckbox>
    </form>
  </section>

  <ContactDialog :open="isContactDialogShown" :price="320000" @close="closeContactDialog()"/>
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

<script setup lang="ts">
import {UILabeledCheckbox} from '#components';
import type {Nullable} from '~/types/Nullable';
import type {SelectOption} from '~/types/SelectOption';


const siteTypeOptions = [
  { name: 'Сайт-визитка', description: 'Сайт с информацией о вашем бизнесе или проекте', price: 40000, id:1 },
  { name: 'Интернет-магазин', description: 'Сайт для продажи товаров', price: 200000, id:2 },
  { name: 'Админ-панель', description: 'Панель настроек', price: 100000, id: 3 },
]

const cmsTypeOptions = [
  {name: 'Bitrix', description: 'Российкая CMS с удобной интеграцией с 1С', price: 50000, id: 1},
  {name: 'WordPress', description: 'Популярная CMS с большим коммьюнити', price: 30000, id: 2}
]

const topicOptions = [ 
  {name: 'IT', description: 'Техноблоги, форумы, новости из мира IT', price: 30000, id: 1},
  {name: 'Медицина', description: 'Медицинские сайты, сайты больниц, системы учета пациентов', price: 50000, id: 2 },
  {name: 'Образование', description: 'Образовательные порталы, онлайн-школы, сайты с учебными материалами', price: 70000, id: 3},
]

const designTypeOptions = [
  {name: 'Базовый', description: 'Сделаем стандартный сайт в соответствии с современными трендами', price: 0, id: 1},
  {name: 'Авторский', description: 'Разработаем уникальный дизайн под Вас и Ваших клиентов', price: 100000, id: 2}
]

const additionalOptions = [
  {name: 'Нет', description: 'Мы сделаем сайт, остальное вы сделаете сами', price: 0, id: 1},
  {name: 'Разворачиваниие на домене', description: 'Всё запустим, подключим домен, сдадим Вам запущенный сайт', price: 50000, id: 2 },
  {name: 'SEO', description: 'Настроим интеграцию с поисковыми сервисами', price: 70000, id: 3},
  {name: 'Настройки рекламы', description:'Найдем способы привлечь клиентов, запустим рекламу Вашего сайта', price:30000, id: 4}
]

const siteType = ref<Nullable<SelectOption>>(null)
const cmsType = ref<Nullable<SelectOption>>(null)
const topic = ref<Nullable<SelectOption>>(null)
const designType = ref<Nullable<SelectOption>>(null)
const additionalOption = ref<Nullable<SelectOption>>(null)

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

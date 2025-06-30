<template>
  <UIDialog :open="open" @close="closeDialog($event)">
    <div class="contact-form-wrapper">
      <div class="contact-form-description">
        <h3 class="title">Осталось совсем немного</h3>
        <p class="summary" v-if="price">Мы рассчитали стоимость вашего сайта, она составила {{formatPrice(price)}} рублей. Оставьте контакты, и наш менеджер свяжется с вами в ближайшее время.</p>
      </div>
      <form class="contact-form" @submit.prevent="closeDialog($event)">
        <div class="contact-form-fields">
          <div class="fields">
            <UIInput label="Имя"/>
            <UIInput label="Телефон" />
          </div>

          <UIButton>Оставить заявку</UIButton>
        </div>
      
        <UILabeledCheckbox class="accept-policy">
            Нажимая кнопку, я соглашаюсь с <NuxtLink href='/' class="accept-policy-link">политикой конфиденциальности</NuxtLink> и даю разрешение на обработку моих персональных данных.
        </UILabeledCheckbox>
      </form>
    </div>
  </UIDialog>
</template>

<script setup lang="ts">
  const emit = defineEmits(['close'])
  defineProps<{
    open: boolean;
    price?: number;
  }>();

  function closeDialog(event: Event){
    console.log('close event')
    emit('close')
  }
</script>

<style scoped lang="css">
.contact-form-wrapper{
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-form-description, .contact-form{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-form-fields{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title{
  font-weight: 600;
  font-size: 28px;
  line-height: 110.00000000000001%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;

  @media (width >= 1320px){
    font-size: 44px;
    line-height: 120%;
  }
}

.summary{
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  
  @media (width >= 1320px){
    font-size: 18px;
    max-width: 604px;
    margin: 0 auto;
  }
}

.fields{
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (width >= 1320px){
  grid-template-columns: 1fr 1fr;
  }
}

.accept-policy-link{
  font-weight: 700;
  text-decoration: none;
  color: #8B8B8B;
}
</style>

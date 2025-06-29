<template>
  <div class="container mx-auto">
    <div class="listbox-wrapper">
      <HeadlessListbox v-model="selectedOption" v-slot="{ open }">
        <div class="relative mt-1">
          <HeadlessListboxButton
            class="listbox-button"
          >
            <div class="selected-value-wrapper">
              <HeadlessListboxLabel class="listbox-label" :class="{centered:!selectedOption}">{{label}}</HeadlessListboxLabel>
              <span class="selected-value" v-if="selectedOption">{{ selectedOption?.name }}</span>
            </div>
            <Icon name="belberry:chevron-down" mode="svg" class="listbox-icon" size="24px" :class="{open}" />
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="listbox-options"
            >
              <HeadlessListboxOption
                v-for="option in options"
                :key="option.id"
                :value="option"
                as="template"
              >
                <li>
                  <div class="select-option">
                    <div class="option-name-description">
                      <span class="option-name">{{ option.name }}</span>
                      <span class="option-description" v-if="option.description">{{ option.description }}</span>
                    </div>
                    <span class="option-price" v-if="option.price">{{formatPrice(option.price)}}</span>
                  </div>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import {HeadlessListboxLabel} from '#components';
import type {Nullable} from '~/types/Nullable';
import type {SelectOption} from '~/types/SelectOption';

defineProps<{
  options:Array<SelectOption>;
  label: string;
}>()

const selectedOption = defineModel<Nullable<SelectOption>>();


</script>

<style scoped lang="css">

.listbox-button{
  position: relative;
  width: 100%;
  cursor: pointer;
  border-radius: 24px;
  background: white;
  padding: 20px 28px;
  text-align: left;
  border:none;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus{
    outline:none;
  }
}
.listbox-options{
  position: absolute;
  margin-top: 4px;
  max-height: 240px;
  width: 100%;
  overflow:auto;
  border-radius: 24px;
  background: white;
  padding: 12px;
  color: black;
  box-sizing: border-box;
  z-index: 1;
  
}

.listbox-wrapper{
  position: relative;
}

.listbox-label{
  top:0;
  color: black;
  font-size: 12px;
  line-height: 19px;
  &.centered{
    line-height: 64px;
    font-size: 16px;
  }
}


.listbox-icon.open{
  transform: scaleY(-1);
}

.select-option{
  display: flex;
  padding: 8px;
  border-radius: 12px;
  gap: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  &:hover{
    background: var(--color-grey-200);
  }
}

.option-name-description{
  display: flex;
  flex-direction: column;
  flex: 1;
}

.option-name, .option-description{
  display: block;
}

.option-description{
  color: var(--color-grey-600);
  font-size: 14px;
}

.selected-value-wrapper{
  display: flex;
  flex-direction: column;
}
</style>

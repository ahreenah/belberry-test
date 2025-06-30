<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" :id="checkboxId">
    <label :for="checkboxId" class="label">
      <div class="checkmark">
        <Icon name="belberry:checkbox-checked" mode="svg" class="checked-icon" size="24px" />
        <Icon name="belberry:checkbox-empty" mode="svg" class="unchecked-icon" size="24px" />
      </div>
      <span class="label-text">
        <slot />
      </span>
    </label>
  </div>
</template>

<style scoped lang="css">
.checkbox-wrapper{
  display: flex;
  align-items: flex-end;
  gap:8px;
  font-weight: 500;
  color: #8B8B8B;
}

.label{
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

input[type="checkbox"]{
  display: none;
}

.checkbox-wrapper:has(input:checked) .unchecked-icon{
  display: none;
}

.checkbox-wrapper:has(input:not(:checked)) .checked-icon{
  display: none;
}

.checkmark{
  display: flex;
}

.label-text{
  font-size: 12px;
  line-height: 16px;
  padding-top: 4px;
  @media (width >= 1320px){
    font-size: 16px;
    line-height: 19px;
  }
}
</style>

<script setup lang="ts">
  const checkboxId = useId()
</script>

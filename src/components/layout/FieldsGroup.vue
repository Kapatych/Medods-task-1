<template>
  <div class="fields-group">
    <div class="fields-group__label" v-if="label">{{ label }}</div>
    <div class="fields-group__content">
      <slot></slot>
    </div>
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.fields-group {
  width: 100%;
  max-width: 260px;
  &:not(:first-child) {
    margin-left: 10px;
  }
}
.fields-group__label {
  font-weight: 600;
}
.fields-group__content {
  display: flex;
}
</style>

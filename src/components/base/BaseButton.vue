<template>
  <button v-on="$listeners" v-bind="$attrs" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 15px;
  padding: 10px 25px;
  color: #fff;
  background: #1e88e5;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: #42a5f5;
  }
}
</style>

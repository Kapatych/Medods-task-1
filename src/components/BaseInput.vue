<template>
  <div class="field">
    <label v-if="label">
      {{ label }}
      <input
        v-bind="$attrs"
        :value="value"
        @input="updateValue"
        v-on="listeners"
      />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  width: 100%;
  &:not(:first-child) {
    margin-left: 10px;
  }
}
label {
  font-weight: 600;
}
input {
  margin-bottom: 10px;
  padding: 9px 15px;
  width: 100%;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
}
</style>

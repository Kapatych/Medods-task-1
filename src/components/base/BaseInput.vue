<template>
  <div class="field" :class="inputClass">
    <label v-if="label">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="updateValue"
      v-on="listeners"
    />
    <slot></slot>
  </div>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
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
  position: relative;
  width: 100%;
  padding-bottom: 20px;

  &.wide {
    max-width: none;
  }
}

label {
  font-weight: 600;
}

input {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid rgba(31, 32, 65, 0.5);
  }

  &.error {
    border: 1px solid red;
  }
}

@media screen and (min-width: 768px) {
  .field {
    max-width: 260px;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>

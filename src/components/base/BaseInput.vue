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
  width: 100%;
  max-width: 260px;
  &:not(:first-child) {
    margin-left: 10px;
  }

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
}
</style>

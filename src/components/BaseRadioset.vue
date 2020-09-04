<template>
  <div class="radioset" :class="inputClass">
    <div class="radioset__label">{{ label }}</div>
    <div class="radioset__content">
      <label class="radio" v-for="(option, idx) in options" :key="idx">
        <input
          v-bind="$attrs"
          type="radio"
          :value="idx ? 'woman' : 'man'"
          @input="updateValue"
        />
        <span class="radio__control"></span>
        <span class="radio__label">{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.radioset {
  width: 100%;
  max-width: 260px;
  &:not(:first-child) {
    margin-left: 10px;
  }

  &.column {
    .radioset__content {
      flex-direction: column;
      align-items: start;
      height: auto;
    }
    .radio {
      &:not(:first-child) {
        margin-left: 0;
      }
    }
  }
}

.radioset__label {
  font-weight: 600;
}

.radioset__content {
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.radio {
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 10px;
  }
}

input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked ~ .radio__control:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: #1e88e5;
    border-radius: 50%;
  }
}

.radio__control {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 10px;
  cursor: pointer;

  :before {
    content: "";
  }
}

.radio__label {
  cursor: pointer;
}
</style>

<template>
  <div class="checkbox-set">
    <div class="checkbox-set__label">{{ label }}</div>
    <label class="option" v-for="option in options" :key="option">
      <input
        type="checkbox"
        v-bind="$attrs"
        :value="value"
        @change="selectOptionHandler(option)"
      />
      <span class="option__control"></span>
      <span class="option__title">{{ option }}</span>
    </label>
  </div>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  data: () => ({
    selectedItems: []
  }),
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectOptionHandler(value) {
      if (this.value.includes(value)) {
        // delete value
        let idx = this.selectedItems.findIndex(item => item === value);
        this.selectedItems.splice(idx, 1);
      } else {
        // add value
        this.selectedItems.push(value);
      }
      this.$emit("input", this.selectedItems);
    }
  },
  mounted() {
    this.selectedItems = [...this.value];
  }
};
</script>

<style lang="scss" scoped>
.checkbox-set {
  width: 100%;
  max-width: 260px;
  padding-bottom: 20px;
}
.checkbox-set__label {
  font-weight: 600;
}
.option {
  width: 100%;
  max-width: 260px;
  height: 37px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  /*&:not(:first-child) {*/
  /*  margin-left: 10px;*/
  /*}*/
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
}
.option__control {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  flex-shrink: 0;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
}

input:checked + .option__control {
  border: 1px solid #1e88e5;

  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 6px;
    width: 6px;
    height: 8px;
    border-color: #1e88e5;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}
@media screen and (min-width: 768px) {
  .checkbox-set {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>

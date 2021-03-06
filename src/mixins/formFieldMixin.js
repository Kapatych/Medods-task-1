export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number, Array, Boolean],
    inputClass: String
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};

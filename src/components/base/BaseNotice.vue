<template>
  <div class="notice">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data: () => ({
    timeout: null
  }),
  mounted() {
    this.timeout = setTimeout(() => this.$emit("clear"), 2000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  }
};
</script>

<style lang="scss" scoped>
.notice {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #263238;
  color: #ffffff;
  padding: 14px 24px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
}
</style>

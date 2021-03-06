<template>
  <div class="select">
    <div class="select__label" v-if="label">{{ label }}</div>
    <div
      class="select__body"
      :class="{ 'select__body--active': active }"
      @click="toggleHandler"
    >
      <input
        class="select__input"
        :class="{ 'select__input--active': active }"
        ref="select"
        :value="multi ? normalizeValues : value"
        type="text"
        readonly="readonly"
        v-bind="$attrs"
        v-on="$listeners"
      />
      <span class="select__icon" @click.stop="toggleHandler"></span>
    </div>
    <div class="select__list" v-if="active">
      <p
        class="select__option"
        v-for="option in options"
        :key="option"
        :class="{ 'select__option--active': value.includes(option) }"
        @click="selectItemHandler(option)"
      >
        {{ option }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  data: () => ({
    active: false
  }),
  props: {
    multi: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    normalizeValues() {
      return this.value.join(", ");
    }
  },
  methods: {
    toggleHandler() {
      this.active = !this.active;
    },
    selectItemHandler(item) {
      if (this.multi) {
        let selectedItems = [...this.value];
        if (this.value.includes(item)) {
          // delete value
          let idx = selectedItems.findIndex(i => i === item);
          selectedItems.splice(idx, 1);
        } else {
          // add value
          selectedItems.push(item);
        }
        this.$emit("input", selectedItems);
      } else {
        this.$emit("input", item);
      }
      this.active = false;
    },
    outsideClickHandler(e) {
      if (e.target !== this.$refs.select && this.active) {
        this.active = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", e => this.outsideClickHandler(e));
  },
  beforeDestroy() {
    document.removeEventListener("click", e => this.outsideClickHandler(e));
  }
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  position: relative;
  padding-bottom: 20px;
}
.select__label {
  font-weight: 600;
}
.select__body {
  position: relative;
}
.select__icon {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background: url("../../assets/down-arrow.svg") center center no-repeat;
  cursor: pointer;
}

.select__body--active {
  .select__icon {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}

.select__input {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  cursor: pointer;

  &--active {
    border-radius: 4px 4px 0 0;
  }

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
}
.select__list {
  position: absolute;
  top: calc(100% - 21px);
  padding: 0 15px 10px;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(31, 32, 65, 0.5);
  z-index: 98;
  border-radius: 0 0 4px 4px;
}

.select__option {
  cursor: pointer;
  padding-top: 10px;
}

.select__option--active {
  text-decoration: line-through;
  color: grey;
}

@media screen and (min-width: 768px) {
  .select {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>

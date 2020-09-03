import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import BaseInput from "@/components/BaseInput";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component("BaseInput", BaseInput);

new Vue({
  render: h => h(App)
}).$mount("#app");

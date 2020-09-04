import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import BaseInput from "@/components/base/BaseInput";
import BaseSelect from "@/components/base/BaseSelect";
import BaseRadioset from "@/components/base/BaseRadioset";
import BaseCheckset from "@/components/base/BaseCheckset";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component("BaseInput", BaseInput);
Vue.component("BaseSelect", BaseSelect);
Vue.component("BaseRadioset", BaseRadioset);
Vue.component("BaseCheckset", BaseCheckset);

new Vue({
  render: h => h(App)
}).$mount("#app");

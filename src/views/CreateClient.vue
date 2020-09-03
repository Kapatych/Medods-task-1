<template>
  <div class="create-client">
    <div class="create-client__container">
      <div class="create-client__wrapper">
        <h1 class="create-client__title">Новый клиент</h1>
        <form @click.prevent="submitHandler">
          <div class="fields-row">
            <BaseInput
              label="Фамилия"
              v-model="client.surname"
              type="text"
              name="surname"
              placeholder="Фамилия"
            />
            <BaseInput
              label="Имя"
              v-model="client.name"
              type="text"
              name="name"
              placeholder="Имя"
            />
            <BaseInput
              label="Отчество"
              v-model="client.middleName"
              type="text"
              name="middle name"
              placeholder="Отчество"
            />
          </div>

          <div class="fields-row">
            <BaseSelect
              label="Лечащий врач"
              v-model="client.doctor"
              :options="doctors"
              name="doctor"
              placeholder="Лечащий врач"
            />
          </div>

          <h3>Адрес</h3>
          <div class="fields-row">
            <BaseInput
              label="Индекс"
              v-model="client.index"
              type="text"
              name="index"
              placeholder="Индекс"
            />
            <BaseInput
              label="Страна"
              v-model="client.country"
              type="text"
              name="country"
              placeholder="Страна"
            />
            <BaseInput
              label="Область"
              v-model="client.region"
              type="text"
              name="region"
              placeholder="Область"
            />
          </div>
          <div class="fields-row">
            <BaseInput
              label="Город"
              v-model="client.city"
              type="text"
              name="city"
              placeholder="Город"
            />
            <BaseInput
              label="Улица"
              v-model="client.street"
              type="text"
              name="street"
              placeholder="Улица"
            />
            <BaseInput
              label="Дом "
              v-model="client.house"
              type="text"
              name="house"
              placeholder="Дом"
            />
          </div>

          <h3>Паспорт</h3>
          <button type="submit">Создать</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { required } from "vuelidate/lib/validators";
export default {
  data: () => ({
    doctors: ["Иванов", "Захаров", "Чернышева"],
    client: {
      surname: "",
      name: "",
      middleName: "",
      doctor: ""
    }
  }),
  methods: {
    submitHandler() {
      console.log("created successfully");
    }
  }
};
</script>

<style lang="scss">
.create-client {
  height: 100%;
  display: flex;
  align-items: center;
}
.create-client__container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.create-client__wrapper {
  padding: 40px 30px 30px;
  background: #fff;
  border: 1px solid rgba(31, 32, 65, 0.1);
  box-shadow: 0 0 25px rgba(31, 32, 65, 0.25);
  border-radius: 4px;
}
.create-client__title {
  margin-top: 0;
}

.fields-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

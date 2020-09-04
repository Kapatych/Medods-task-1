<template>
  <div class="create-client">
    <div class="create-client__container">
      <div class="create-client__wrapper">
        <h1 class="create-client__title">Новый клиент</h1>
        <form @submit.prevent="submitHandler">
          <div class="fields-row">
            <BaseInput
              label="Фамилия"
              v-model.trim="client.surname"
              type="text"
              placeholder="Иванов"
            />
            <BaseInput
              label="Имя"
              v-model.trim="client.name"
              type="text"
              placeholder="Иван"
            />
            <BaseInput
              label="Отчество"
              v-model.trim="client.middleName"
              type="text"
              placeholder="Иванович"
            />
          </div>
          <div class="fields-row">
            <FieldsGroup label="Дата рождения">
              <BaseInput
                v-model.trim.number="client.birth.day"
                type="text"
                placeholder="10"
              />
              <BaseInput
                v-model.trim.number="client.birth.month"
                type="text"
                placeholder="10"
              />
              <BaseInput
                v-model.trim.number="client.birth.year"
                type="text"
                placeholder="2010"
              />
            </FieldsGroup>
            <BaseInput
              label="Номер телефона"
              v-model.trim.number="client.phoneNumber"
              type="text"
              placeholder="79123456789"
            />
            <BaseRadioset
              label="Пол"
              name="gender"
              v-model="client.gender"
              :options="gender"
            />
          </div>
          <div class="fields-row">
            <BaseSelect
              label="Группа клиентов"
              v-model="client.category"
              :options="category"
              :multi="true"
              placeholder="Выберите группу"
            />
            <BaseSelect
              label="Лечащий врач"
              v-model="client.doctor"
              :options="doctors"
              placeholder="Выберите врача"
            />
            <BaseCheckset
              label="Уведомления"
              :options="notifications"
              v-model="client.notifications"
              name="notifications"
            />
          </div>

          <h3>Адрес</h3>
          <div class="fields-row">
            <BaseInput
              label="Индекс"
              v-model.trim.number="client.address.postalCode"
              type="text"
              placeholder="192007"
            />
            <BaseInput
              label="Страна"
              v-model.trim="client.address.country"
              type="text"
              placeholder="Россия"
            />
            <BaseInput
              label="Область"
              v-model.trim="client.address.region"
              type="text"
              placeholder="Санкт-Петербург"
            />
          </div>
          <div class="fields-row">
            <BaseInput
              label="Город"
              v-model.trim="client.address.city"
              type="text"
              placeholder="Санкт-Петербург"
            />
            <BaseInput
              label="Улица"
              v-model.trim="client.address.street"
              type="text"
              placeholder="Невский проспект"
            />
            <BaseInput
              label="Дом "
              v-model.trim.number="client.address.houseNumber"
              type="text"
              placeholder="12"
            />
          </div>

          <h3>Документ</h3>
          <div class="fields-row">
            <BaseSelect
              label="Тип документа"
              v-model="client.passport.type"
              :options="documents"
              placeholder="Выберите документ"
            />
            <FieldsGroup>
              <BaseInput
                label="Серия"
                v-model.trim.number="client.passport.series"
                type="text"
                placeholder="4010"
              />
              <BaseInput
                label="Номер"
                v-model.trim.number="client.passport.number"
                type="text"
                placeholder="123456"
              />
            </FieldsGroup>
            <FieldsGroup label="Дата выдачи">
              <BaseInput
                v-model.trim.number="client.passport.issuance.day"
                type="text"
                placeholder="12"
              />
              <BaseInput
                v-model.trim.number="client.passport.issuance.month"
                type="text"
                placeholder="12"
              />
              <BaseInput
                v-model.trim.number="client.passport.issuance.year"
                type="text"
                placeholder="2012"
              />
            </FieldsGroup>
          </div>
          <div class="fields-row">
            <BaseInput
              label="Кем выдан"
              v-model.trim="client.passport.place"
              type="text"
              inputClass="wide"
              placeholder="ТП №1 отдела УФМС России по Санкт-Петербургу"
            />
          </div>
          <button type="submit">Создать</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { required } from "vuelidate/lib/validators";
import FieldsGroup from "@/components/layout/FieldsGroup.vue";
export default {
  data: () => ({
    doctors: ["Иванов", "Захаров", "Чернышева"],
    category: ["VIP", "Проблемные", "ОМС"],
    documents: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
    gender: ["Мужчина", "Женщина"],
    notifications: ["Не отправлять СМС"],
    client: {
      surname: "",
      name: "",
      middleName: "",
      birth: {
        day: null,
        month: null,
        year: null
      },
      phoneNumber: null,
      gender: "man",
      category: [],
      doctor: "",
      notifications: [],
      address: {
        postalCode: "",
        country: "",
        region: "",
        city: "",
        street: "",
        houseNumber: ""
      },
      passport: {
        type: "",
        series: "",
        number: "",
        issuance: {
          day: null,
          month: null,
          year: null
        },
        place: ""
      }
    }
  }),
  methods: {
    submitHandler() {
      let data = {
        ...this.client,
        birth: +new Date(
          this.client.birth.year,
          this.client.birth.month - 1,
          this.client.birth.day
        ),
        passport: {
          ...this.client.passport,
          issuance: +new Date(
            this.client.passport.issuance.year,
            this.client.passport.issuance.month - 1,
            this.client.passport.issuance.day
          )
        }
      };
      console.log(data);
    }
  },
  components: { FieldsGroup }
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
  margin-bottom: 10px;
}
</style>

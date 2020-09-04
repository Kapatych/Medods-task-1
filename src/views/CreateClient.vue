<template>
  <div class="create-client">
    <div class="create-client__container">
      <div class="create-client__wrapper">
        <h1 class="create-client__title">Новый клиент</h1>
        <form @submit.prevent="submitHandler">
          <div class="fields-row">
            <BaseInput
              label="Фамилия"
              v-model="client.surname"
              type="text"
              placeholder="Иванов"
            />
            <BaseInput
              label="Имя"
              v-model="client.name"
              type="text"
              placeholder="Иван"
            />
            <BaseInput
              label="Отчество"
              v-model="client.middleName"
              type="text"
              placeholder="Иванович"
            />
          </div>
          <div class="fields-row">
            <div class="fields-group">
              <div class="fields-group__label">Дата рождения</div>
              <div class="fields-group__content">
                <BaseInput
                  v-model="client.birth.day"
                  type="text"
                  placeholder="10"
                />
                <BaseInput
                  v-model="client.birth.month"
                  type="text"
                  placeholder="10"
                />
                <BaseInput
                  v-model="client.birth.year"
                  type="text"
                  placeholder="2010"
                />
              </div>
            </div>
            <BaseInput
              label="Номер телефона"
              v-model="client.phoneNumber"
              type="text"
              placeholder="79123456789"
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
          </div>

          <h3>Адрес</h3>
          <div class="fields-row">
            <BaseInput
              label="Индекс"
              v-model="client.address.postalCode"
              type="text"
              placeholder="192007"
            />
            <BaseInput
              label="Страна"
              v-model="client.address.country"
              type="text"
              placeholder="Россия"
            />
            <BaseInput
              label="Область"
              v-model="client.address.region"
              type="text"
              placeholder="Санкт-Петербург"
            />
          </div>
          <div class="fields-row">
            <BaseInput
              label="Город"
              v-model="client.address.city"
              type="text"
              placeholder="Санкт-Петербург"
            />
            <BaseInput
              label="Улица"
              v-model="client.address.street"
              type="text"
              placeholder="Невский проспект"
            />
            <BaseInput
              label="Дом "
              v-model="client.address.houseNumber"
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
            <div class="fields-group">
              <div class="fields-group__content">
                <BaseInput
                  label="Серия"
                  v-model="client.passport.series"
                  type="text"
                  placeholder="4010"
                />
                <BaseInput
                  label="Номер"
                  v-model="client.passport.number"
                  type="text"
                  placeholder="123456"
                />
              </div>
            </div>
            <div class="fields-group">
              <div class="fields-group__label">Дата выдачи</div>
              <div class="fields-group__content">
                <BaseInput
                  v-model="client.passport.issuance.day"
                  type="text"
                  placeholder="12"
                />
                <BaseInput
                  v-model="client.passport.issuance.month"
                  type="text"
                  placeholder="12"
                />
                <BaseInput
                  v-model="client.passport.issuance.year"
                  type="text"
                  placeholder="2012"
                />
              </div>
            </div>
          </div>
          <div class="fields-row">
            <BaseInput
              label="Кем выдан"
              v-model="client.passport.place"
              type="text"
              class="field--wide"
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
export default {
  data: () => ({
    doctors: ["Иванов", "Захаров", "Чернышева"],
    category: ["VIP", "Проблемные", "ОМС"],
    documents: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
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
      sex: "man",
      category: [],
      doctor: "",
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
        surname: this.client.surname,
        name: this.client.name,
        middleName: this.client.middleName,
        doctor: this.client.doctor,
        category: this.client.category,
        dateBirth: +new Date(
          this.client.birth.year,
          this.client.birth.month - 1,
          this.client.birth.day
        ),
        issuanceDate: +new Date(
          this.client.passport.issuance.year,
          this.client.passport.issuance.month - 1,
          this.client.passport.issuance.day
        )
      };
      console.log(data);
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
  align-items: center;
  margin-bottom: 10px;
}
.fields-group {
  max-width: 260px;
  &:not(:first-child) {
    margin-left: 10px;
  }
}
.fields-group__label {
  font-weight: 600;
}
.fields-group__content {
  display: flex;
}
</style>

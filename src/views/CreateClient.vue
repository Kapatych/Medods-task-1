<template>
  <div class="create-client">
    <div class="create-client__container">
      <div class="create-client__wrapper">
        <h1 class="create-client__title">Новый клиент</h1>
        <form @submit.prevent="submitHandler">
          <div class="fields-row">
            <BaseInput
              label="Фамилия*"
              v-model.trim="client.surname"
              type="text"
              placeholder="Иванов"
              @blur="$v.client.surname.$touch()"
            >
              <div v-if="$v.client.surname.$error" class="errorMessage">
                <span v-if="!$v.client.surname.required">
                  Заполните поле
                </span>
                <span v-if="!$v.client.surname.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
            <BaseInput
              label="Имя*"
              v-model.trim="client.name"
              type="text"
              placeholder="Иван"
              @blur="$v.client.name.$touch()"
            >
              <div v-if="$v.client.name.$error" class="errorMessage">
                <span v-if="!$v.client.name.required">
                  Заполните поле
                </span>
                <span v-if="!$v.client.name.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
            <BaseInput
              label="Отчество"
              v-model.trim="client.middleName"
              type="text"
              placeholder="Иванович"
              @blur="$v.client.middleName.$touch()"
            >
              <div v-if="$v.client.middleName.$error" class="errorMessage">
                <span v-if="!$v.client.middleName.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
          </div>
          <div class="fields-row">
            <FieldsGroup label="Дата рождения*">
              <BaseInput
                v-model.trim.number="client.birth.day"
                type="text"
                placeholder="10"
                @blur="$v.client.birth.day.$touch()"
              />
              <BaseInput
                v-model.trim.number="client.birth.month"
                type="text"
                placeholder="10"
                @blur="$v.client.birth.month.$touch()"
              />
              <BaseInput
                v-model.trim.number="client.birth.year"
                type="text"
                placeholder="2010"
                @blur="$v.client.birth.year.$touch()"
              />
              <template v-slot:error>
                <div v-if="$v.client.birth.$error" class="errorMessage">
                  <span
                    v-if="
                      !$v.client.birth.day.between ||
                        !$v.client.birth.month.between ||
                        !$v.client.birth.year.maxValue
                    "
                    >Неверный формат даты</span
                  >
                  <span v-else>Заполните поле полностью</span>
                </div>
              </template>
            </FieldsGroup>
            <BaseInput
              label="Номер телефона*"
              v-model.trim="client.phoneNumber"
              type="text"
              placeholder="79123456789"
              @blur="$v.client.phoneNumber.$touch()"
            >
              <div v-if="$v.client.phoneNumber.$error" class="errorMessage">
                <span v-if="!$v.client.phoneNumber.required">
                  Заполните поле
                </span>
                <span
                  v-if="
                    $v.client.phoneNumber.required &&
                      !$v.client.phoneNumber.mustBePhone
                  "
                >
                  Некорректный номер
                </span>
              </div>
            </BaseInput>
            <BaseRadioset
              label="Пол"
              name="gender"
              v-model="client.gender"
              :options="gender"
            />
          </div>
          <div class="fields-row">
            <BaseSelect
              label="Группа клиентов*"
              v-model="client.category"
              :options="category"
              :multi="true"
              placeholder="Выберите группу"
              @blur="$v.client.category.$touch()"
            >
              <div v-if="$v.client.category.$error" class="errorMessage">
                <span v-if="!$v.client.category.required">
                  Выберите вариант из списка
                </span>
              </div>
            </BaseSelect>
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
              v-model.trim="client.address.postalCode"
              type="text"
              placeholder="192007"
              @blur="$v.client.address.postalCode.$touch()"
            >
              <div
                v-if="$v.client.address.postalCode.$error"
                class="errorMessage"
              >
                <span v-if="!$v.client.address.postalCode.mustBeCode">
                  Неверный формат
                </span>
              </div>
            </BaseInput>
            <BaseInput
              label="Страна"
              v-model.trim="client.address.country"
              type="text"
              placeholder="Россия"
              @blur="$v.client.address.country.$touch()"
            >
              <div v-if="$v.client.address.country.$error" class="errorMessage">
                <span v-if="!$v.client.address.country.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
            <BaseInput
              label="Область"
              v-model.trim="client.address.region"
              type="text"
              placeholder="Санкт-Петербург"
              @blur="$v.client.address.region.$touch()"
            >
              <div v-if="$v.client.address.region.$error" class="errorMessage">
                <span v-if="!$v.client.address.region.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
          </div>
          <div class="fields-row">
            <BaseInput
              label="Город*"
              v-model.trim="client.address.city"
              type="text"
              placeholder="Санкт-Петербург"
              @blur="$v.client.address.city.$touch()"
            >
              <div v-if="$v.client.address.city.$error" class="errorMessage">
                <span v-if="!$v.client.address.city.required">
                  Заполните поле
                </span>
                <span v-if="!$v.client.address.city.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
            <BaseInput
              label="Улица"
              v-model.trim="client.address.street"
              type="text"
              placeholder="Невский проспект"
              @blur="$v.client.address.street.$touch()"
            >
              <div v-if="$v.client.address.street.$error" class="errorMessage">
                <span v-if="!$v.client.address.street.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
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
              label="Тип документа*"
              v-model="client.passport.type"
              :options="documents"
              placeholder="Выберите документ"
              @blur="$v.client.passport.type.$touch()"
            >
              <div v-if="$v.client.passport.type.$error" class="errorMessage">
                <span v-if="!$v.client.passport.type.required">
                  Выберите вариант из списка
                </span>
              </div>
            </BaseSelect>
            <FieldsGroup>
              <BaseInput
                label="Серия"
                v-model.trim="client.passport.series"
                type="text"
                placeholder="4010"
              />
              <BaseInput
                label="Номер"
                v-model.trim="client.passport.number"
                type="text"
                placeholder="123456"
                @blur="$v.client.passport.number.$touch()"
              >
                <div
                  v-if="$v.client.passport.number.$error"
                  class="errorMessage"
                >
                  <span v-if="!$v.client.passport.number.mustBeCode">
                    Неверный формат
                  </span>
                </div>
              </BaseInput>
            </FieldsGroup>
            <FieldsGroup label="Дата выдачи*">
              <BaseInput
                v-model.trim.number="client.passport.issuance.day"
                type="text"
                placeholder="12"
                @blur="$v.client.passport.issuance.day.$touch()"
              />
              <BaseInput
                v-model.trim.number="client.passport.issuance.month"
                type="text"
                placeholder="12"
                @blur="$v.client.passport.issuance.month.$touch()"
              />
              <BaseInput
                v-model.trim.number="client.passport.issuance.year"
                type="text"
                placeholder="2012"
                @blur="$v.client.passport.issuance.year.$touch()"
              />
              <template v-slot:error>
                <div
                  v-if="$v.client.passport.issuance.$error"
                  class="errorMessage"
                >
                  <span
                    v-if="
                      !$v.client.passport.issuance.day.between ||
                        !$v.client.passport.issuance.month.between ||
                        !$v.client.passport.issuance.year.maxValue
                    "
                    >Неверный формат даты</span
                  >
                  <span v-else>Заполните поле полностью</span>
                </div>
              </template>
            </FieldsGroup>
          </div>
          <div class="fields-row">
            <BaseInput
              label="Кем выдан"
              v-model.trim="client.passport.place"
              type="text"
              inputClass="wide"
              placeholder="ТП №1 отдела УФМС России по Санкт-Петербургу"
              @blur="$v.client.passport.place.$touch()"
            >
              <div v-if="$v.client.passport.place.$error" class="errorMessage">
                <span v-if="!$v.client.passport.place.mustBeCyrWord">
                  Только кириллические буквы
                </span>
              </div>
            </BaseInput>
          </div>

          <BaseButton type="submit">Создать</BaseButton>
        </form>
      </div>
    </div>
    <BaseNotice
      v-if="notice"
      text="Новый клиент успешно создан"
      @clear="toggleNoticeHandler"
    />
  </div>
</template>

<script>
import { required, between, maxValue } from "vuelidate/lib/validators";
import FieldsGroup from "@/components/layout/FieldsGroup.vue";
const mustBePhone = value =>
  value.length === 11 && /^[0-9]*$/.test(value) && value[0] === "7";
const mustBeCode = value => value.length === 6 && /^[0-9]*$/.test(value);
const mustBeCyrWord = value => /^[А-ЯЁа-яё]*$/.test(value);
export default {
  data() {
    return {
      notice: false,
      doctors: ["Иванов", "Захаров", "Чернышева"],
      category: ["VIP", "Проблемные", "ОМС"],
      documents: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
      gender: ["Мужчина", "Женщина"],
      notifications: ["Не отправлять СМС"],
      client: this.createEmptyClient()
    };
  },
  validations: {
    client: {
      surname: { required, mustBeCyrWord },
      name: { required, mustBeCyrWord },
      middleName: { mustBeCyrWord },
      birth: {
        day: { required, between: between(1, 31) },
        month: { required, between: between(1, 12) },
        year: { required, maxValue: maxValue(new Date().getFullYear()) }
      },
      phoneNumber: { required, mustBePhone },
      category: { required },
      address: {
        postalCode: { mustBeCode },
        country: { mustBeCyrWord },
        region: { mustBeCyrWord },
        city: { required, mustBeCyrWord },
        street: { mustBeCyrWord },
        houseNumber: {}
      },
      passport: {
        type: { required },
        series: "",
        number: { mustBeCode },
        issuance: {
          day: { required, between: between(1, 31) },
          month: { required, between: between(1, 12) },
          year: { required, maxValue: maxValue(new Date().getFullYear()) }
        },
        place: { mustBeCyrWord }
      }
    }
  },
  methods: {
    toggleNoticeHandler() {
      this.notice = !this.notice;
    },
    createEmptyClient() {
      return {
        surname: "",
        name: "",
        middleName: "",
        birth: {
          day: null,
          month: null,
          year: null
        },
        phoneNumber: "",
        gender: "",
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
      };
    },
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.toggleNoticeHandler();
        this.client = this.createEmptyClient();
        this.$v.$reset();
        // Example sending data
        console.log(data);
      }
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
  padding: 40px 20px;
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
</style>

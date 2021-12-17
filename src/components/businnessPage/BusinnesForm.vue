<template>
  <section class="businnes-callback">
    <div class="businnes-callback__container">
      <h2 class="businnes-callback__subheading">Свяжитесь с нами</h2>

      <h1 class="businnes-callback__heading">
        Наши специалисты по пенсионным программам помогут составить персональную программу для
        сотрудников вашей компании
      </h1>

      <form class="businnes-callback__form" @submit.prevent="checkForm">
        <div class="my-form my-form-business">
          <div class="my-form__label-container my-form-business__label-container">
            <FirstNameInput @emitInputValues="onInputFirstName" />
          </div>

          <div class="my-form__label-container my-form-business__label-container">
            <PhoneInput @emitInputValues="onInputPhone" />
          </div>

          <div class="my-form__label-container my-form-business__label-container">
            <EmailInpit @emitInputValues="onInputEmail" />
          </div>

          <div class="my-form__label-container my-form-business__label-container">
            <CompanyNameInput @emitInputValues="onInputCompanyName" />
          </div>
        </div>

        <div class="my-form__button-container">
          <button class="primary-button">
            Оставить заявку
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators';

import FirstNameInput from '@/components/gui/FirstNameInput.vue';
import PhoneInput from '@/components/gui/PhoneInput.vue';
import EmailInpit from '@/components/gui/EmailInpit.vue';
import CompanyNameInput from '@/components/gui/CompanyNameInput.vue';

export default {
  mixins: [validationMixin],
  name: 'BusinnesForm',
  data() {
    return {
      registrationPassed: false,

      form: {
        firstName: '',
        phone: '',
        email: '',
        companyName: '',
      },
    };
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(2) },
      phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
      email: { required, email },
      companyName: { required, minLength: minLength(2) },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();

      if (!this.$v.form.$error) {
        this.registrationPassed = true;
        console.log('Валидация прошла успешно', this.form);
        // this.$emit('closeCallBack');
      }
    },

    onInputFirstName(valueInput) {
      this.form.firstName = valueInput;
      // console.log('Ok', valueInput, this.form.firstName);
    },
    onInputPhone(valueInput) {
      this.form.phone = valueInput;
      // console.log('Ok', valueInput, this.form.phone);
    },
    onInputEmail(valueInput) {
      this.form.email = valueInput;
    },
    onInputCompanyName(valueInput) {
      this.form.companyName = valueInput;
    },
  },
  components: {
    FirstNameInput,
    PhoneInput,
    EmailInpit,
    CompanyNameInput,
  },
};
</script>

<style lang="scss" scoped>
// businnes-callback
.businnes-callback {
  width: 100%;
  margin: 0 auto;
  background: #f3f5f7;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  &__container {
    max-width: 960px;
    margin: 0 auto;
  }

  &__subheading {
    font-size: 13px;
    color: #5a646e;
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 72px;
    }
  }

  &__form {
    width: 100%;
  }
}
// businnes-callback

// my-form-business
.my-form-business {
  width: 100%;
  display: block;

  @media screen and (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // my-form-business__label-container
  &__label-container {
    width: 100%;
    max-width: 320px;

    @media screen and (min-width: 1160px) {
      max-width: 219px;
    }
  }
}
// my-form-business

// my-form
.my-form {
  width: 100%;

  &__label-container {
    width: 100%;
  }

  &__label {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
  }

  &__title {
    position: absolute;
    top: 24px;
    left: 0px;
    font-size: 16px;
    color: #78828c;
  }

  &__field {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 24px 0 8px;
    color: #28323c;
    border-bottom: 1px solid #b5bdc8;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      line-height: 23px;
      border-bottom: 2px solid #50287d;
    }

    &:focus {
      line-height: 23px;
      border-bottom: 2px solid #50287d;
    }
  }

  &__error {
    display: block;
    position: absolute;
    top: 67px;
    left: 0;
    font-size: 12px;
    line-height: 12px;
    color: red;
  }

  &__button-container {
    width: 184px;
    margin-top: 24px;
  }

  &__button {
    &[disabled] {
      background-color: #d2dce6;
    }
  }
} // my-form
</style>

<template>
  <section class="support-form">
    <div class="support-form__container">
      <div class="support-form__content">
        <div class="support-form__customer-service">
          <h1 class="support-form__header">
            Клиентская <span class="support-form__span">служба</span>
          </h1>
          <a class="support-form__phone-support" href="tel:+78002004766">8 800 200-47-66</a>
          <p class="support-form__phone-title">звонок бесплатный</p>
        </div>

        <form class="support-form__form" @submit.prevent="checkForm">
          <GuiNameInput @emitInputValues="onInputFirstName" />

          <GuiPhoneInput @emitInputValues="onInputPhone" />

          <GuiEmailInput @emitInputValues="onInputEmail" />

          <GuiCompanyInput @emitInputValues="onInputCompanyName" />

          <GuiMessageInput @emitInputValues="onInputMessageInput" />

          <div class="support-form__button-container">
            <button class="support-form__button primary-button">
              Оставить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators';

import GuiNameInput from '@/components/gui/guiInput/GuiNameInput.vue';
import GuiPhoneInput from '@/components/gui/guiInput/GuiPhoneInput.vue';
import GuiEmailInput from '@/components/gui/guiInput/GuiEmailInput.vue';
import GuiCompanyInput from '@/components/gui/guiInput/GuiCompanyInput.vue';
import GuiMessageInput from '@/components/gui/guiInput/GuiMessageInput.vue';

export default {
  mixins: [validationMixin],
  name: 'SupportForm',
  data() {
    return {
      registrationPassed: false,

      form: {
        firstName: '',
        phone: '',
        email: '',
        companyName: '',
        message: '',
      },
    };
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(2) },
      phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
      email: { required, email },
      companyName: { required, minLength: minLength(2) },
      message: { required, minLength: minLength(15) },
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
    onInputMessageInput(valueInput) {
      this.form.message = valueInput;
    },
  },
  components: {
    GuiNameInput,
    GuiPhoneInput,
    GuiEmailInput,
    GuiCompanyInput,
    GuiMessageInput,
  },
};
</script>

<style lang="scss" scoped>
// support-form
.support-form {
  width: 100%;
  background: #f3f5f7;
  padding: 48px 24px;

  @media screen and (min-width: 576px) {
    padding: 72px 28px;
  }

  &__container {
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 1160px) {
      flex-wrap: nowrap;
    }
  }

  &__customer-service {
    width: 100%;

    @media screen and (min-width: 1160px) {
      max-width: 360px;
    }
  }

  &__header {
    font-size: 34px;
    line-height: 48px;
    font-weight: 500;
    color: black;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__span {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    display: inline;

    @media screen and (min-width: 1160px) {
      display: block;
    }
  }

  &__phone-support {
    font-size: 34px;
    line-height: 48px;
    font-weight: 500;
    color: #00e;
    display: block;
    outline: none;
    text-decoration: none;
  }

  &__phone-title {
    font-size: 13px;
    line-height: 24px;
    color: #96a0aa;
    margin-bottom: 48px;
  }

  &__form {
    width: 100%;
    max-width: 460px;
    @media screen and (min-width: 1160px) {
      max-width: 460px;
      margin-left: 40px;
    }
  }
  &__button-container {
    width: 184px;
  }
}
</style>

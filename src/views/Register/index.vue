<template>
  <div class="register">
    <img class="register__img" src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt="" />
    <form class="register__form" @submit.prevent="handleRegisterSubmit">
      <user-input type="text" placeholder="请输入手机号"
        v-model="userData.username" />
      <user-input class="register__form__password" type="password"
        placeholder="请输入密码" v-model="userData.password" />
      <user-input class="register__form__password" type="password"
        placeholder="确认密码" v-model="userData.confirmPassword" />
      <input class="register__form__submit" type="submit" value="注册" />
    </form>
    <div class="register__navigation">
      <router-link :to="{ name: 'Login' }" class="register__navigation__login">
        已有账号去登陆</router-link>
    </div>
    <toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script>
import UserInput from '@/components/Public/UserInput.vue'
import Toast, { useToastEffect } from '@/components/Public/Toast.vue'
import useRegisterEffect from './useRegisterEffect'
export default {
  name: 'Register',
  components: {
    UserInput,
    Toast
  },
  setup() {
    const { toastData, showToast } = useToastEffect()
    const { userData, handleRegisterSubmit } = useRegisterEffect({ showToast })
    return {
      handleRegisterSubmit,
      toastData,
      userData
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  text-align: center;
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    margin: 1.2rem auto 0.4rem auto;
  }
  &__form {
    &__password {
      margin: 0.16rem auto 0 auto;
    }
    &__submit {
      margin-top: 0.32rem;
      width: 2.95rem;
      height: 0.48rem;
      font-size: 0.16rem;
      background-color: #0091ff;
      color: #fff;
      border: none;
      outline: none;
      box-shadow: 0 4px 8px #0091ff;
    }
  }
  &__navigation {
    margin: 0.16rem 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.14rem;
    font-weight: 550;
    &__login {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>

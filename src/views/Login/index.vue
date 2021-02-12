<template>
  <div class="login">
    <img class="login__img" src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt="" />
    <form class="login__form" @submit.prevent="handleLoginSubmit">
      <user-input type="text" placeholder="请输入手机号" v-model="data.username" />
      <user-input class="login__form__password" type="password"
        placeholder="请输入密码" v-model="data.password" />
      <input class="login__form__submit" type="submit" value="登陆" />
    </form>
    <div class="login__navigation">
      <router-link :to="{ name: 'Register' }"
        class="login__navigation__register">立即注册</router-link>
      <span class="login__navigation__gap">|</span>
      <span class="login__navigation__forget">忘记密码</span>
    </div>
    <toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script>
import UserInput from '@/components/Public/UserInput.vue'
import Toast, { useToastEffect } from '@/components/Public/Toast.vue'
import useLoginEffect from './useLoginEffect'
// useLoginEffect 登录组件绑定的数据和ajax请求
// deps: 依赖项
// reutrn:{
//  handleLoginSubmit, // 调用登入的方法
//  data  用户输入绑定的信息
// }

export default {
  name: 'Login',
  components: {
    UserInput,
    Toast
  },
  setup() {
    const { toastData, showToast } = useToastEffect()
    const { data, handleLoginSubmit } = useLoginEffect({ showToast })
    return {
      handleLoginSubmit,
      data,
      toastData
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    margin: 1.2rem auto 0.4rem auto;
  }
  &__form {
    &__password {
      margin: 0.16rem auto 0.32rem auto;
    }
    &__submit {
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
    &__register {
      text-decoration: none;
      color: inherit;
    }
    &__gap {
      font-size: 0.1rem;
      margin: 0.12rem;
      text-justify: top;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="outer6">
      <h4>登录</h4>
      <form action="">
        <div class="div">
          <input type="text" name="username" />
          <span id="s1">手机/邮箱/用户名</span>
        </div>
        <div class="div">
          <input type="password" name="password" />
          <span id="s2">登录密码</span>
        </div>
        <div class="inter1">
          <a href="./青竹注册.html">注册</a>
          <a href="./忘记密码.html" class="right">忘记密码</a>
        </div>
        <input type="submit" value="登录" id="submit" />
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Login",
  components: {},
};
</script>
<style scoped>

@import "../css/青竹登录.css";
</style>
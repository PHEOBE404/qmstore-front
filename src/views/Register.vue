<template>
  <div class="register">
    <div class="outer7">
      <h4>注册</h4>
      <form action="">
        <div class="div">
          <input type="text" name="username" />
          <span id="s1">手机/邮箱/用户名</span>
        </div>
        <div class="div div1">
          <input type="text" name="code" />
          <span id="sp1">手机验证码</span>
          <span class="sp2">获取验证码</span>
        </div>
        <div class="div">
          <input type="password" name="password" />
          <span id="s2">设置密码</span>
        </div>
        <div class="div">
          <input type="password" name="repassword" />
          <span id="s3">确认密码</span>
        </div>
        <div class="inter1">
          <span>已有账号，请</span><a href="./青竹登录.html">直接登录</a>
        </div>
        <input type="submit" value="注册" id="submit" />
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Register",
  components: {},
};
</script>
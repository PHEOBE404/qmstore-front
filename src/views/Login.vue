<template>
  <div class="login">
    <div class="outer6">
      <h4>登录</h4>

      <div class="div">
        <input type="text" name="username" v-model="userId" />
        <span id="s1">手机/邮箱/用户名</span>
      </div>
      <div class="div">
        <input type="password" name="password" v-model="password" />
        <span id="s2">登录密码</span>
      </div>
      <div class="inter1">
        <a href="./青竹注册.html">注册</a>
        <a href="./忘记密码.html" class="right">忘记密码</a>
      </div>
      <input type="submit" value="登录" id="submit" @click="login" />
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      userId: "",
      password: "",
      user: null,
    };
  },
  mounted() {},
  methods: {
    login() {
      axios
        .post("http://localhost:8080/user/login", {
          userId: this.userId,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data.data);
          this.$store.commit("$_setStorage", { user: res.data.data });
          this.$router.go(-1);
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <div class="outer6">
      <h4>登录</h4>

      <el-input v-model="userId" placeholder="请输入用户id"
        ><template slot="prepend">用户名:</template></el-input
      >
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        style="margin-top: 15px"
        ><template slot="prepend">密码:</template></el-input
      >
      <el-button
        type="primary"
        @click="login"
        style="margin-top: 15px; float: right"
        >登录</el-button
      >
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
      this.$axios
        .post("http://localhost:8080/user/login", {
          userId: this.userId,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.data != null) {
            this.$store.commit("$_setStorage", { user: res.data.data });
            this.$router.go(-1);
          } else {
            alert("用户名或密码错误！");
          }
        });
    },
  },
};
</script>

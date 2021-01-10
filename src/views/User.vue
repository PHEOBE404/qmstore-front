<template>
  <div class="user">
    <el-container>
      <el-header>个人中心</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1">
            <el-menu-item>
              <router-link to="/user/profile">个人信息</router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link to="/user/Order">订单管理</router-link>
            </el-menu-item>
          </el-menu>

          <!-- <router-link to="/user/profile">收件地址管理</router-link> -->
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>

export default {
  name: "User",
  components: {
  },
  methods:{
    //   setParentOrders(order){
    //       this.$parent.orders = [];
    //       this.$parent.orders = [order];
    //   }
  }
};
</script>




<style>
* {
  padding: 0;
  margin: 0;
}
.user {
  margin-top: 100px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

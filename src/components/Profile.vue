<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="用户id" v-model="user.userId" :disabled="true">
          </el-input>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="用户名" v-model="user.userName" :disabled="isDisabled">
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="电话号码" v-model="user.phone" :disabled="isDisabled">
          </el-input>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="邮箱" v-model="user.email" :disabled="isDisabled">
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" v-if="isChangePassword">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="新密码" v-model="user.firstPassword" :disabled="isDisabled">
          </el-input>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-input placeholder="再次输入新密码" v-model="user.secondPassword" :disabled="isDisabled">
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="primary" :disabled="!isButtonDisabled" @click="changeInfo">修改信息</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="success" :disabled="isButtonDisabled" @click="saveChange">保存修改</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// public class RegisterCondition {
//     private String userId;
//     private String userName;
//     private String firstPassword;
//     private String secondPassword;
//     private String phone;
//     private String email;
//     private String userGroup;
// }

export default {
    data(){
        return{
            isButtonDisabled:true,
            isChangePassword:false,
            isDisabled:true,
            user:{
                userId:'',
                userName:'',
                phone:'',
                email:'',
                firstPassword:'',
                secondPassword:'',
            }
        }
    },
    mounted(){
        this.user.userId=this.$store.getters.getStorage.user.userId;
        this.user.userName=this.$store.getters.getStorage.user.userName;
        this.user.phone=this.$store.getters.getStorage.user.phone;
        this.user.email=this.$store.getters.getStorage.user.email;
        this.user.firstPassword = '';
        this.user.secondPassword = '';
    },
    methods:{
        changeInfo(){
            this.isDisabled=false;
            this.isChangePassword=true;
            this.isButtonDisabled=false;
        },
        saveChange(){
            this.isDisabled=true;
            this.isChangePassword=false;
            this.isButtonDisabled=true;
            this.$axios.post("/user/updateUser",this.user).then((res)=>{
                if(res.data.code==200){
                    this.$store.getters.getStorage.user.userId = this.user.userId;
                    this.$store.getters.getStorage.user.userName=this.user.userName;
                    this.$store.getters.getStorage.user.phone = this.user.phone;
                    this.$store.getters.getStorage.user.email=this.user.email;
                }
            });

        }
    }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
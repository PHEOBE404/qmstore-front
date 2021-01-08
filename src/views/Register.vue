<template>
  <div class="register">
    <div class="outer7">
      <h4>注册</h4>
      <!-- <form action="">
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
      </form> -->

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userId">
        <el-input v-model="ruleForm.userId"></el-input>
      </el-form-item>

      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Register",
  components: {},
  data() {
      var checkUserId = (rule, value, callback) => {
        if(!checkUserId) {
          return callback(new Error('账号不能为空'));
        }
          else if(value.length < 5){
            return callback(new Error('账号不能小于5位'));
          }else if(value.length > 18){
            return callback(new Error('账号不能大于18位'));
          }else{
            callback();
          }
      };

      var checkUserName = (rule, value, callback) => {
        if(!checkUserId) {
          return callback(new Error('用户名不能为空'));
        }else if(value.length < 5){
            return callback(new Error('用户名不能小于5位'));
          }else if(value.length > 18){
            return callback(new Error('用户名不能大于18位'));
          }else{
            callback();
          }
      };


      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 800);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userId: '',
          userName: '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          userId:[
            {validator: checkUserId, trigger: 'blur'}
          ],
          userName: [
            {validator: checkUserName, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
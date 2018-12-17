<template>
  <div class="login">
    <el-card class="box-card" v-show="registerHandel == false">
      <div >
        <el-form label-width="80px"
                 :model="loginForm"
                 :rules="loginRule"
                 ref="loginForm">
          <div class="h2">{{ loginForm.title }}</div>
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <div>
            <el-button type="primary" @click="login('loginForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card-register" v-show="registerHandel == true">
      <div >
        <el-form label-width="80px"
                 :model="registerForm"
                 :rules="registerRule"
                 ref="registerForm">
          <div class="h2-register">{{ registerForm.title }}</div>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="registerForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input v-model="registerForm.password2"></el-input>
          </el-form-item>
          <div class="mes">请完善你的信息。根据国家相关规定,网络用户需要使用有效身份证件进行实名注册
该实名认证信息将您在蛙声一片的所有涉身份信息的服务,如账号密码找回、防沉迷认证等,请务必填写准确。</div>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="registerForm.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="identity">
            <el-input v-model="registerForm.identity"></el-input>
          </el-form-item>
          <div>
            <el-button type="primary" @click="register('registerForm')">立即注册</el-button>
          </div>
        </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
  export default{
    props: ['id'],
    data(){
      return {
        //是否是注册界面
        registerVisible: false,
        //注册表单
        registerForm: {
          title: '用户注册',
          userName: '',
          password: '',
          password2: '',
          name: '',
          identity: '',
        },
        registerRule: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          password2: [
            { required: true, message: '请确认密码', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          identity: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
          ],
        },
        //登录表单
        loginForm: {
          title: '用户登录',
          account: '',
          password: '',
        },
        loginRule: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
    },
    computed:{
      registerHandel(){
        var bool = false;
        if(this.id == 0){
          bool = false;
        }else{
          bool = true;
        }
        return bool;
      }
    },
    methods: {
      login(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: '提示',
              message: '即将开放，敬请期待！',
              type: 'warning'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      register(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: '提示',
              message: '即将开放，敬请期待！',
              type: 'warning'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

    }
  }
</script>

<style scoped lang="less">
  .login{
    text-align: center;
    .el-card{
      width: 60%;
      height: 450px;
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      bottom: 0;
      margin: auto;
    }
    .box-card-register{
      height: 560px;
    }
    .el-form-item{
      margin: 0 auto 22px;
      width: 400px;
    }
    .h2{
      font-size: 1.5rem;
      margin: 60px;
    }
    .h2-register{
      font-size: 1.5rem;
      margin: 20px;
    }
    .mes{
      text-align: left;
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }
</style>

<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/image/logo.png" alt="">
    </div>
    <ul>
      <li v-for="(item, index) in routeList" @click="routeTo(item.path)">
        {{ item.name }}
        <b></b>
        </li>
    </ul>
    <div class="button-group">
      <el-button type="text" @click="toLogin(0)">登录</el-button>
      <el-button type="text" @click="toLogin(1)">注册</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        routeList: [
          {
            name: '首页',
            path: '/',
          }
        ]
      }
    },
    mounted:function () {

    },
    methods: {
      routeTo(path){
        this.$router.push({path: path})
      },

      toLogin(id){
        this.$router.push({ path: '/login/'+id});
      }
    }
  }
</script>

<style scoped lang="less">

  /*.header .nav li{float: left; position: relative;}*/
  /*.header .nav>li>a{font-size: 14px;color: #353535;margin: 0 23px;display: block;line-height: 78px;}*/
  /*.header .nav>li:hover>a{color: #0280bb;position: relative;}*/
  /*.header .nav>li>a b{display: block;width: 0px;margin: 0 auto;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;transition: all .3s ease-in-out;border-bottom: 2px solid #0280bb;}*/
  /*.header .nav>li:hover>a b{width: 100%;}*/

  .header{
    width: 100%;
    margin: auto;
    box-shadow: 0px 0px 10px #e3e3e3;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
    .logo{
      width: 120px;
      padding-left: 20px;
      position: absolute;
      top: 0;
      left: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    ul{
      width: 500px;
      margin: auto;
      text-align: center;
      list-style-type: none;
      overflow: hidden;
      li{
        font-size: 16px;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
      }
      li:hover{
        color: #409EFF;position: relative;
      }
      li b{
        display: block;width: 0px;margin: -2px auto;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;transition: all .3s ease-in-out;border-bottom: 2px solid #409EFF;
      }
      li:hover b{
        width: 100%;
      }

    }
    .button-group{
      position: absolute;
      top: 0;
      right: 0;
      padding-right: 20px;
    }
  }
</style>

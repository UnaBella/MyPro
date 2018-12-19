<template>
  <div class="header">
    <!--<div class="logo">logo-->
      <!--&lt;!&ndash;<img src="../../assets/image/logo.png" alt="">&ndash;&gt;-->
    <!--</div>-->
    <!--<ul>-->
      <!--&lt;!&ndash;<li v-for="(item, index) in routeList" @click="routeTo(item.path)">&ndash;&gt;-->
        <!--&lt;!&ndash;{{ item.name }}&ndash;&gt;-->
        <!--&lt;!&ndash;<b></b>&ndash;&gt;-->
      <!--&lt;!&ndash;</li>&ndash;&gt;-->
    <!--</ul>-->
    <!--<div class="button-group">-->
      <!--<el-button type="text" @click="toLogin(0)">登录</el-button>-->
      <!--<el-button type="text" @click="toLogin(1)">注册</el-button>-->
    <!--</div>-->
    <div class="wrap clearfix">
      <ul class="fl">
        <li>hi!欢迎光临流连优品！</li>
        <li>请登录</li>
        <li>免费注册</li>
      </ul>
      <ul class="fr">
        <li>我的订单</li>
        <li>我的收藏</li>
        <li>客户服务</li>
      </ul>
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
          },
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
    font-size: 12px;
    width: 100%;
    margin: auto;
    background: #333;
    color: #d9d9d9;
    box-shadow: 0px 0px 10px #e3e3e3;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    .wrap{
      width: 1240px;
      margin: auto;
    }
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
      /*width: 500px;*/
      margin: auto;
      text-align: center;
      list-style-type: none;
      overflow: hidden;
      li{
        font-size: 12px;
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
      }
      li:hover{
        color: #409EFF;position: relative;
      }
      li b{
        display: block;
        width: 0px;
        margin: -2px auto;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        border-bottom: 2px solid #409EFF;
      }
      li:hover b{
        width: 100%;
      }

    }
    .button-group{
      position: absolute;
      top: 0;
      right: 20px;
      .el-button{
        padding: 20px;
      }
    }
  }
</style>

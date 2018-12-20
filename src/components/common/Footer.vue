<template>
  <div class="common-footer">
    <div class="wrap">
      <ul>
        <li class="em">导航</li>
        <li>首页</li>
        <li>日本馆</li>
        <li>韩国馆</li>
        <li>欧美馆</li>
      </ul>
      <ul>
        <li class="em">服务</li>
        <li>FAQ</li>
        <li>微信客服</li>
        <li>电话客服</li>
        <li>意见反馈</li>
      </ul>
      <ul>
        <li class="em">关于岂止</li>
        <li>加入我们</li>
        <li>成为经销商</li>
        <li>业务模式</li>
      </ul>
      <ul>
        <li class="em">关注我们</li>
        <li>
          <i class="iconfont icon-facebook"></i>
          <i class="iconfont icon-twitter"></i>
        </li>
      </ul>
    </div>
    <div class="wrap-bottom">
      <ul>
        <li class="logo"><img src="../../assets/image/llwell.png" alt=""></li>
      </ul>
      <ul>
        <li>辽宁省大连市中山区五五路一号</li>
        <li>港湾中心2213A</li>
      </ul>
      <ul>
        <li>(800) 222 - 1111</li>
        <li>hr@llwell.com</li>
      </ul>
      <ul>
        <li class="btn" v-anchor>返回顶部</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    mounted() {},
    methods: {}
  }
</script>

<style scoped lang="less">
  .common-footer{
    width: 100%;
    background: #343538;
    text-align: center;
    .wrap{
      font-size: 12px;
      width: 1160px;
      margin:  auto ;
      padding: 140px 0 50px;
      color: rgba(255,255,255,0.60);
      display: flex;

      /*flex-wrap: wrap;*/
      /*align-content: space-between;*/
      ul{
        flex-basis: 100%;
        text-align: left;
        li{
          margin-bottom: 30px;
        }
        .em{
          color: #FFF
        }
      }
    }
    .wrap-bottom{
      border-top: 1px solid rgba(255,255,255,0.05);
      font-size: 12px;
      width: 1160px;
      margin:  auto ;
      padding: 50px 0 80px;
      color: rgba(255,255,255,0.60);
      display: flex;
      ul{
        flex-basis: 100%;
        text-align: left;
        li{
          margin-bottom: 10px;
        }
        .logo{
          width: 180px;
          height: 46px;
          img{
            /*width: 100%;*/
            height: 100%;
          }
        }
        .btn{
          cursor: pointer;
          width: 145px;
          height: 48px;
          line-height: 48px;
          text-align: center;
          background: #BFBFBF;
        }
      }
    }
  }
</style>

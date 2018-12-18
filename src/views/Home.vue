<template>
  <div class="home">
    <div class="search clearfix">
      <div class="left fl">
        <img src="../../src/assets/image/llwell.png" alt="">
      </div>
      <div class="center fl">
        <div>
          <el-input class="c-input" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="inputSearch">
              <el-button round slot="append" type="danger" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <ul class="keyword">
          <li>面膜</li>
          <li>面膜</li>
          <li>面膜</li>
        </ul>
      </div>
      <div class="right fl">

        <el-button round>
          <i class="iconfont icon-gouwuchekong"></i>
          <span> 购物车</span>
        </el-button>

      </div>
    </div>
    <div class="carousel">
      <div class="title clearfix">
        <div class="classify fl"></div>
        <div class="subject fl"></div>
      </div>
      <div class="content">

      </div>
    </div>
    <ul class="brand">
      <li class=""></li>
    </ul>
    <div class="unit">
      <div class="goods">
        <div class="title clearfix">
          <div class="fl">新品推荐</div>
          <div class="fr">查看全部＞</div>
        </div>
        <div class="content clearfix">
          <div class="sideImg fl"></div>
          <div class="fr goods"></div>
        </div>
      </div>
      <div class="ad"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
            inputSearch: '',
        }
    }
}
</script>
<style lang="less">
.home{
  width: 1240px;
  margin: auto;
  .search{
    padding-top: 30px;
    padding-bottom: 20px;
    height: 130px;
    .left{
      width: 235px;
      height: 55px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .center{
      width: 740px;
      margin: 0 40px;
      .c-input{
        position: relative;
        .el-icon-search{
          font-size: 20px;
        }
        .el-input__inner{
          border: 3px solid #DC4549;
          border-right: transparent;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
          position: relative;
          top: 0;
          height: 55px;
          line-height: 55px;
        }
        .el-input-group__append{
          border: 1px solid #DC4549;
          border-radius: 50px;
          background: #DC4549;
          color: #fff;
          right: 25px;
          /*position: absolute;*/
          /*right: 10px;*/
          /*top: 0;*/
        }
      }
      .keyword{
        font-size: 14px;
        color: #B2B2B2;
        overflow: hidden;
        li{
          display: inline-block;
          margin: 5px 15px;
          cursor: pointer;
        }
      }
    }
    .right{
      .el-button{
        border: 3px solid #DC4549;
        border-radius: 50px;
        padding: 13px 28px;
        color: #333;
      }
      .el-button:hover{
        background: #fff;
      }
    }
  }
  .brand{

  }
}
</style>

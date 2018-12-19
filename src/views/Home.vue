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
      <div class="title">
        <div class="classify">
          <div class="click">
            <i class="iconfont icon-fenlei"></i>所有分类
          </div>

          <ul class="hover none">
            <li>生活用品</li>
            <li>生活用品</li>
            <li>生活用品</li>
          </ul>

        </div>
        <ul class="subject">
          <li>首页</li>
          <li>日本馆</li>
          <li>韩国馆</li>
          <li>欧美馆</li>
        </ul>
      </div>
      <div class="content">
        <el-carousel :interval="5000" arrow="always" height="435px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img :src="item.src" alt="">
            <!--<h3>{{ item }}</h3>-->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <ul class="brand">
      <li class="" v-for="item in 30" :key="item">
        <img src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif" alt="">
      </li>
    </ul>
    <div class="unit">
      <div class="goods">
        <div class="title clearfix">
          <div class="fl name">新品推荐</div>
          <div class="fr checkAll">查看全部＞</div>
        </div>
        <div class="content clearfix">
          <div class="fl side">
            <img src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif" alt="">
            <div class="content">
              <div class="area">日用专区</div>
              <div class="keyword">日用精选领券可享折扣</div>
            </div>
          </div>
          <div class="fl goods">
            <div class="goods-unit" v-for="(item,index) in goodsList" :key="index">
              <el-card :body-style="{ padding: '0px',width: '220px',
            height: '270px' }" shadow="hover">
                <img :src="item.src" class="image">
                <div style="padding:0px 20px 5px">
                  <div class="name">{{item.title}}</div>
                  <div class="price">￥{{item.price}}</div>

                </div>
              </el-card>
            </div>
          </div>
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
            imgList: [
                {src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'},
                {src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'},
                {src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'},
                {src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'},
                ],
            brands:[
                'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
            ],
            goodsList:[
                {
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },{
                    src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    title:'韩国Mypil天然乳胶促进睡眠高级 保健枕女士用 980g',
                    price: '99999.00'
                },
            ]
        }
    }
}
</script>
<style lang="less">
.home{
  width: 1160px;
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
  .carousel{
    .title{
      position: relative;
      .classify{
        cursor: pointer;
        position: relative;
        top: 0;
        left: 0;
        .click{
          width: 220px;
          height: 50px;
          background:  #DD4A57;
          color: #fff;
          line-height: 50px;


        }
        .hover{
          position: absolute;
          top: 50px;
          left: 0;
          z-index: 20;
          width: 220px;
          height: 435px;
          background: rgba(0,0,0,.7);
          color: #fff;
          font-size: 16px;
          li{
            padding-top: 20px;
          }
        }

      }
      .classify:hover{
        .hover{
          display: block;
        }
      }
      .subject{
        position: absolute;
        top: 0;
        left: 220px;
        li{
          display: inline-block;
          line-height: 50px;
          font-size: 18px;
          color: #000000;
          margin: 0 25px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .content{
      img{
        height: 100%;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
  }
  .brand{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li{
      /*display: inline-block;*/
      width: 114px;
      height: 110px;
      margin: 1px;
      border: 1px solid #EBEBEB;
      background: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .unit{
    margin-top: 50px;
    .goods{
      .title{
        margin-bottom: 10px;
        .name{
          font-size: 20px;
        }
        .checkAll{
          font-size: 16px;
        }
      }
      .content{
        .side{
          width: 220px;
          height: 580px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .content{
            position: absolute;
            bottom:100px ;
            left: 0;
            .area{
              float: left;
              width: 65px;
              height: 65px;
              background: rgba(0,0,0,0.73);
              font-size: 20px;
              color: rgba(255,255,255,0.85);
              padding: 5px;
              overflow: hidden;
            }
            .keyword{
              float: left;
              width: 120px;
              height: 65px;
              background: rgba(0,0,0,.4);
              font-size: 16px;
              color: rgba(255,255,255,0.85);
              padding: 10px;
              overflow: hidden;
            }
          }
        }
        .goods{
          width: 940px;
          /*margin-left:15px ;*/
          .goods-unit{
            display: inline-block;
            width: 220px;
            height: 270px;
            text-align: center;
            margin: 0 0 28px 14px;
            .image{
              width: 200px;
              height: 200px;
              margin: 10px;
              display: block;
            }
            .name{
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 12px;
              color: #000000;
              margin-bottom: 8px;
            }
            .price{
              font-size: 12px;
              color: #DD7427;
            }
          }
        }
      }
    }
  }
}
</style>

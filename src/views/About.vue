<template>
  <div class="about">
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
          <li><router-link target="_blank" :to="{path:'/about'}">日本馆</router-link></li>
          <li>韩国馆</li>
          <li>欧美馆</li>
        </ul>
      </div>
      <div class="content">
        <el-carousel :interval="5000" arrow="always" height="650px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <img :src="item.src" alt="">
            <!--<h3>{{ item }}</h3>-->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="wrap">


      <div class="pavilion">
        <div class="unit" v-for="(item,index) in pavilions" :key="index">
          <el-card :body-style="{ padding: '0px',width: '370px',
              height: '320px' }" shadow="hover">

            <div style="padding: 7px;">
              <span class="name">{{item.name}} </span>
              <span class="enName"> {{item.enName}}</span>
            </div>
            <img :src="item.img" class="image">
          </el-card>
        </div>
      </div>
      <ul class="brand">
        <li class="" v-for="item in 30" :key="item">
          <img src="http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif" alt="">
        </li>
      </ul>
      <div class="tag">
        <el-tag
          v-for="tag in tags"
          :key="tag"
          closable
          >
          {{tag}}
        </el-tag>
      </div>
      <div class="filtrate">
        <div class="checkbox">
          <div class="unit">
            <div class="title">品类</div>
            <el-checkbox-group
              v-model="tags"
            >
              <el-checkbox v-for="item in filtrate.classifyOptions" :label="item" :key="item">{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>


          <!--<el-checkbox-group-->
            <!--v-model="tags"-->
          <!--&gt;-->
            <!--<el-checkbox v-for="item in filtrate.otherOptions" :label="item" :key="item">{{item}}</el-checkbox>-->
          <!--</el-checkbox-group>-->
        </div>
        <div class="slider"></div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'about',
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
                pavilions:[
                  {
                    name:'日本馆',
                    enName:'Japan Pavilion',
                    img:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                  },{
                    name:'韩国馆',
                    enName:'Korea Pavilion',
                    img:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                  },{
                    name:'欧美馆',
                    enName:'Europe&American Pavilion',
                    img:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                  }
                ],
                brands:[
                    'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif',
                    'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                ],
                tags:['护肤品'],
                filtrate:{
                    classifyOptions: ['护肤品', '彩妆', '母婴用品', '生活用品'],
                    otherOptions: ['抗皱', '美白', '保湿', '防晒'],
                },
                goods:[
                    {
                        title:'热卖商品',
                        checkAll:'查看全部>',
                        side:{
                            keyword:'热卖商品',
                            des:'实时更新热销商品排行',
                            src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                        },
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
                        ],
                        ad:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                    },{
                        title:'热卖商品',
                        checkAll:'查看全部>',
                        side:{
                            keyword:'热卖商品',
                            des:'实时更新热销商品排行',
                            src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                        },
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
                        ],
                        ad:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                    },{
                        title:'热卖商品',
                        checkAll:'查看全部>',
                        side:{
                            keyword:'热卖商品',
                            des:'实时更新热销商品排行',
                            src:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/gigi.gif'
                        },
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
                        ],
                        ad:''
                    },
                ]

            }
        }
    }
</script>
<style lang="less">
  .about{

    margin: 0 auto ;
    .search{
      width: 1160px;
      margin: auto;
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
        width: 700px;
        margin: 0 30px 0 40px;
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
        width: 1160px;
        margin: auto;
        position: relative;
        .classify{
          cursor: pointer;
          position: relative;
          top: 0;
          left: 0;
          width: 220px;
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
    .wrap{
      background: #F0F0F0;
      .pavilion{
        width: 1160px;
        margin: 0px auto 0;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        .unit{
          text-align: left;

          .name{
            font-size: 22px;
            color: #000000;
          }
          .enName{
            font-size: 16px;
            color: #545454;
          }
          img{
            width: 355px;
            height: 263px;
            margin: 7px;
          }
        }
      }
      .brand{
        width: 1160px;
        margin: 30px auto 0;
        /*margin-top: 20px;*/
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
      .tag{
        width: 1160px;
        margin: 30px auto 30px;
        text-align: right;
        .el-tag{
          background: #343538;
          color: #FFF;
          margin-left: 10px;
          .el-icon-close{
            color: #FFF
          }
          .el-icon-close:hover{
            background: #fff;
            color: #343538;
          }
        }
      }
      .filtrate{
        width: 1160px;
        margin: 0px auto ;
        text-align: left;
        padding: 50px 60px 90px;
        background: #fff;
        .checkbox{
          display: flex;
          .unit{

            flex-basis: 100%;
            .title{

            }
            .el-checkbox-group{

              display: flex;
              flex-direction: column;
              .el-checkbox{
                margin: 25px 0 0;
              }
            }
          }
        }
      }
    }

  }
</style>

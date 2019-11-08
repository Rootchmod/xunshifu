<template>
  <div id="app">
    <div class="title">
      <img src="@/assets/logo.png" class="logo" alt="">
      <div class="navContent">
        <div class="navBar" @click="$router.push('/')"> 首页 </div>
        <div class="navBar" @click="$router.push('/')"> 服务保障 </div>
        <div class="navBar" @click="$router.push('/')"> 优惠活动 </div>
        <div class="navBar" @click="$router.push('/')"> 解决方案 </div>
        <div class="navBar" @click="$router.push('/')"> 关于我们 </div>
      </div>
      <div class="rightContact">
        <div class="QRCodeContent">
          <img src="@/assets/home/QRCode.png" class="QRCode" alt="">
          <center style="font-size: 10px">公众号</center>
        </div>
        <div class="phoneContent">
          <img src="@/assets/home/phone.png" class="phone" alt="">
          0532-88772229 </div>
      </div>
    </div>

    <router-view/>

    <div class="footer">
      <div class="centerContent">
        <div class="about">
          <div class="left">
            <img src="@/assets/logo.png" style="margin-top: 27px" width="130">
          </div>

          <div class="center">
            <div class="nav">首页 | 导航地图 | 加入我们 | 联系我们</div>
            <br>
            <div class="qrCode">
              <div class="item">
                <div class="itemImg">.</div>
                <br>
                用户版APP
              </div>
              <div class="item">
                <div class="itemImg">.</div>
                <br>
                师傅版APP
              </div>
              <div class="item">
                <div class="itemImg">.</div>
                <br>
                用户版微信小程序
              </div>
              <div class="item">
                <div class="itemImg">.</div>
                <br>
                师傅版微信小程序
              </div>
            </div>
          </div>

          <div class="right">
            <div class="tel" style="display: block;">0532-88772229</div>
            <div class="info" style="display: block;">微信: ketaisoft</div>
            <div class="info" style="display: block;">邮箱: zzg@thincoo.com</div>
            <div class="info" style="display: block;">地址: 青岛市市南区山东路广发金融大厦1004室</div>
            <div style="display: block;margin-top: 10px">
              友情链接: <a href=""> 讯科智能科技 </a> <a href=""> 中国家具网 </a> <a href=""> 淘宝网 </a>
            </div>
          </div>
        </div>
        <br>
        <div>
          版权所有
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
html,body{
  border: 0;
  margin: 0;
  padding: 0;
}
a{
  color:#1CA6BD;
  text-decoration:none;
}
</style>

<style lang="less" scoped>
  #app{
    .title{
      /*background-color: red;*/
      .logo{
        width: 180px;
        display: inline-block;
      }
      .navContent{
        display: inline-block;
        width: 1024px;
        margin: 0 auto;
        color: #707070;
        vertical-align: top;
        .navBar{
          display: inline-block;
          padding: 30px 0;
          margin: 0 25px;
          font-size: 18px;
          font-weight: 500;
        }
        .navBar:hover{
          cursor: pointer;
          border-bottom: 2px solid #1CA6BD;
        }
      }

      .rightContact{
        /*display: inline-block;*/
        width: 256px;
        float: right;
        .QRCodeContent{
          display: inline-block;
          .QRCode{
            width: 70px;
          }
        }

        .phoneContent{
          vertical-align: top;
          display: inline-block;
          margin-left: 15px;
          margin-top: 35px;
          .phone{
            display: inline-block;
            width: 20px;
          }
        }
      }
    }

    .footer{
      background-color: #333333;
      padding: 35px;
      .centerContent{
        margin: 20px auto 0 auto;
        text-align: center;
        color: #fff;
        .about{
          text-align: center;
          div{
            display: inline-block;
          }
          .left{
            border: 1px dashed #aaa ;
            height: 130px;
            width: 130px;
            vertical-align: top;
          }
          .center{
            margin: 0 50px;
            .nav{
              vertical-align: top;
              text-align: left;
              width: 95%;
            }
            .qrCode{
              vertical-align: bottom;
              font-size: 10px;
              margin-top: 15px;
              .item{
                margin: 0 15px;
                .itemImg{
                  width: 95px;
                  height: 95px;
                  background-color:#fff;
                  border-radius: 5px;
                }
              }
            }
          }
          .right{
            text-align: left;
            .tel{
              font-size: 25px;
              line-height:45px;
            }
            .info{
              line-height:25px
            }
          }
        }
      }
    }
  }
</style>

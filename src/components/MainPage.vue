<template>
    <!-- 首頁 -->
  <div id="main">
        <!-- 幻燈片 Banner -->
        <!-- 品牌介紹 -->
        <div id="banner">
            <div class="block">
              <span class="demonstration"></span>
              <el-carousel height="750px" :interval="5000" arrow="never">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                  <!-- <el-carousel-item > -->
                  <div class="banner-bg-1" v-if="item.id == 0"></div>
                  <div class="banner-bg-2" v-if="item.id == 1"></div>
 vu,3
                    <!-- <el-row>
	      <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
	    </el-row> -->
                </el-carousel-item>
              </el-carousel>
            </div>
        </div>
    <el-container>
      <el-main>
        <el-container class="main-about">
          <el-row>
          <h1 class="main-title">關於大樹貝兒</h1>
          <h3 class="sub-title">『教育無他，唯愛與榜樣。』~德國幼兒教育之父 福祿貝兒Fröbel</h3>
          <el-col :span="24">經過一千多個日子的規劃、統籌、執行，大樹貝兒於2016秋天正式與孩子們見面，
                  您可以說這是一個很新的托育中心，環境新、設備新、育兒觀念新...，您可以說這是一個很有經驗的托育中心，
                  從發想者、創辦人、顧問團隊…在在都是教育界的好手。
            </el-col>
            <el-row>
                <el-col :md="12" :sm="24" class="brand-txt">
                  <div ><img src="../../public/img/tree.png" alt="">
                  在大樹貝兒，每一個孩子都在充滿愛的環境下成長，尊重孩子的發展，給孩子充足的養分，配合日照、雨水，
                  春夏秋冬的交替，孩子們在自然的環境下成長、茁壯。
                  </div>
                </el-col>
                <el-col :md="12" :sm="24"  class="brand-txt">
                  <div><img src="../../public/img/mother-with-baby-in-arms.png" alt="">
                  大樹貝兒提供安全及舒適的托育環境、合格保育人員、專業的幼兒教育團隊、
                  豐富多元的課程安排，啟發孩子的淺能，讓孩子的觸角無限探索。
                  </div>
                </el-col>
            </el-row>
          </el-row>
          <div>  
        </div>
        </el-container>
        <el-container class="main-setting">
            <el-row>
              <h1 class="main-title">大樹貝兒的環境</h1>
              <div class="setting-scetion">
              <el-col class="settimg-img slide-TextUp" :md="8" :sm="24">
                <img src="../../public/img/3.jpg" alt="">
                  <div class="scrolltop-txt">View</div>
              </el-col>
             
              <el-col class="settimg-img slide-TextUp" :md="8" :sm="24">
                <img src="../../public/img/2.jpg" alt="">
                  <div class="scrolltop-txt">View</div>
              </el-col>

              <el-col class="settimg-img slide-TextUp" :md="8" :sm="24">
                <img src="../../public/img/1.jpg" alt="">
                  <div class="scrolltop-txt">View</div>
              </el-col>
              </div>
              <el-row>
                <el-col :md="8" :sm="24" hidden-sm-only class="view-txt">
                環境1
                </el-col>
                <el-col :md="8" :sm="24" class="view-txt">環境2</el-col>
                <el-col :md="8" :sm="24" class="view-txt">環境3</el-col>
            </el-row>
            </el-row> 
            
            
          </el-container>

          <el-container class="main-learn">
            <el-row>
          <h1 class="main-title">大樹貝兒的學習規劃</h1>
            <el-row>
                <el-col :span="24">
                0~3歲是大腦神經細胞突觸最快速連結的時期，也是學習力的關鍵期，
                大樹貝兒啟動幼兒黃金學習關鍵期，發展5Q課程：語言LQ、身體動作PQ、想像力創作CQ、認知IQ、
                品格MQ，經由各項好玩有趣的操作活動，透過孩子五官的探索來認識這個多元的世界。
                </el-col>
                <el-col :md="6" :sm="12" >
                  <div class="brand-txt">
                    <img src="../../public/img/0803-5.png" alt="">
                  語言互動課程
                  </div>
                </el-col>
                
                <el-col :md="6" :sm="12"  >
                  <div class="brand-txt">
                    <img src="../../public/img/0803-3.png" alt="">
                  肢體肌肉發展
                    </div>
                </el-col>
                <el-col :md="6" :sm="12"  >
                  <div class="brand-txt">
                    <img src="../../public/img/0803-4.png" alt="">
                  感覺統合課程
                    </div>
                </el-col>
                <el-col :md="6" :sm="12"  >
                  <div class="brand-txt">
                    <img src="../../public/img/0803-6.png" alt="">
                  音樂律動
                    </div>
                </el-col>
            </el-row>
            <div class="learn-div">
            <el-row >
                <el-col :md="6" :sm="12" >
                  <div class="brand-txt">
                    <img src="../../public/img/0803-2.png" alt="">
                  美術創造力
                    </div>
                </el-col>
                <el-col :md="6" :sm="12">
                  <div class="brand-txt">
                    <img src="../../public/img/0803-1.png" alt="">
                  品格禮貌養成
                    </div>
                </el-col>
                <el-col :md="6" :sm="24">
                  <div class="brand-txt">
                    <img src="../../public/img/0803-7.png" alt="">
                  生活技能操作	
                    </div>
                </el-col>
              </el-row>
              </div>      
            </el-row>
          </el-container>

          <el-container class="main-teacher">
            <el-row>
              <h1 class="main-title">大樹貝兒的師資</h1>
              <el-row>
                  <el-col :span="24">
                    『愛心』與『耐心』是陪伴孩子最重要的元素，具有想像力、
                    創造力並且能夠欣賞孩子更是大樹貝兒的特色，
                    大樹貝兒細心呵護孩子，
                    讓每一個努力奮鬥的家庭無後顧之憂，孩子開心成長。
                  </el-col>
                  <el-col :md="8" :sm="24"  >
                    <div class="teacher-sec">
                      <div class="teacher-txt">合格保母證照</div>
                      <img src="../../public/img/check.png" alt="">
                    </div>                    
                  </el-col>
                   <el-col :md="8" :sm="24" >
                     <div class="teacher-sec">
                      <div class="teacher-txt">培訓課程</div>
                      <img src="../../public/img/online-course.png" alt="">
                    </div>                      
                  </el-col>
                   <el-col :md="8" :sm="24" >
                    <div class="teacher-sec">
                      <div class="teacher-txt">性向測驗</div>
                       <img src="../../public/img/search.png" alt="">
                    </div>  
                  </el-col>
              </el-row>
            </el-row>
          </el-container>
          
                
          <el-container class="main-meals">
            <el-row>
            <h1 class="main-title">大樹貝兒的營養餐表</h1>
              <el-row>
                  <el-col :md="8" :sm="24">
                      <img src="../../public/img/18mo_1.jpg" alt="">
                  </el-col>
                   <el-col :md="8" :sm="24" >
                      <img src="../../public/img/18mo_2.jpg" alt="">
                  </el-col>
                   <el-col :md="8" :sm="24" >
                      <img src="../../public/img/18mo_3.jpg" alt="">
                  </el-col>
              </el-row>
            </el-row>
          </el-container>

      </el-main>
    </el-container>

    </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {
      imgList: [{ id: 0 }, { id: 1 }]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global.scss"; // 全域css
.el-main {
  overflow: hidden;
}
#main {
  #banner {
    width: 100%;
    .banner-bg-1 {
      height: 750px;
      background: url("../../public/img/b01-1.jpg") no-repeat center;
      background-size: cover;
      background-attachment: fixed;
    }
    .banner-bg-2 {
      height: 750px;
      background: url("../../public/img/0803-b02.jpg") no-repeat center;
      background-size: cover;
      background-attachment: fixed;
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .el-main {
    padding: 0;
    .el-container {
      .el-row {
        max-width: 992px;
        margin: 0 auto;
      }
    }
    .main-title {
      border-bottom: solid 1px #cccccc;
      padding-bottom: 5px;
      padding-top: 20px;
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 20px;
      color: #333;
    }
    .sub-title {
      font-size: 20px;
      line-height: 50px;
      color: #008080;
      text-align: center;
    }
    .main-about {
      margin: 50px;
      text-align: left;
      .brand-txt {
        margin-top: 25px;
        font-size: 14px;
        line-height: 26px;
        text-align: left;
        div {
          margin: 15px;
        }
        img {
          margin: auto;
          display: block;
          height: 90px;
          width: 90px;
        }
      }
    }

    // 設定
    .main-setting {
      background: $submaincolor;
      color: $mainbgcolor;
      font-size: 18px;
      padding: 25px;

      .view-txt {
        width: 280px;
        padding: 20px 0 14px 0px;
        margin: 20px 10px;
        border-bottom: solid 1px #ccc;
      }
      .setting-scetion {
        height: 220px;
        .main-title {
          color: $mainbgcolor;
          background: $mainfontcolor;
        }

        .settimg-img {
          position: relative;
          overflow: hidden;
          margin: 10px;
          width: 280px;
          img {
            height: 200px;
          }
          .scrolltop-txt {
            background: rgba(101, 189, 176, 0.6);
            padding-top: 10px;
            color: $maintxtcolor;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: block;
            transition: all 0.3s ease;
            transform: translateY(100%);
          }
        }
        .slide-TextUp:hover .scrolltop-txt {
          transform: translateY(75%);
        }
      }
    }
    //
    .main-learn {
      padding: 50px;
      .el-row {
        .el-col {
          font-size: 14px;
          line-height: 26px;
          padding: 25px;
        }
        .brand-txt {
          width: 50%;
          margin: 0 auto;
        }
      }

      .learn-div {
        .el-row {
          .el-col {
            margin-left: 6%;
          }
        }
      }
    }
    .main-teacher {
      background: $submaincolor;
      color: $mainbgcolor;
      height: 350px;
      .el-row {
        .el-col {
          .teacher-sec {
            padding: 25px;
            margin: auto;
            position: relative;

            img {
              width: 25%;
              position: absolute;
              left: 25px;
            }
            .teacher-txt {
              position: relative;
              background: #e0e0e0;
              padding: 15px;
              text-align: left;
              margin: 25px 0;

              &::after {
                content: "";
                position: absolute;
                border-left-style: inset;
                border-right-style: inset;
                border-top: 22px solid;
                border-right: 22px solid transparent;
                border-left: 0 solid transparent;
                border-top-color: #cccccc;
                left: 100px;
                bottom: -22px;
              }
            }
          }
        }
      }
    }
    .main-meals {
      .el-col {
        & :hover {
          transform: rotateY(360deg);
        }
        display: block;
        padding: 35px 15px;
        img {
          margin-bottom: 70px;
          transition: all 700ms linear;
        }
      }
    }
  }
}
</style>



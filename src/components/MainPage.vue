<template>
    <!-- 首頁 -->
  <div id="main">
        <!-- 幻燈片 Banner -->
        <!-- 品牌介紹 -->
        <div id="banner">

        </div>
    <el-container >
      <el-main>
        
        <div class="main-about">
          <h1 class="main-title">關於大樹貝兒</h1>
          <h3 class="sub-title">『教育無他，唯愛與榜樣。』~德國幼兒教育之父 福祿貝兒Fröbel</h3>
          <el-col :span="24">經過一千多個日子的規劃、統籌、執行，大樹貝兒於2016秋天正式與孩子們見面，
                  您可以說這是一個很新的托育中心，環境新、設備新、育兒觀念新...，您可以說這是一個很有經驗的托育中心，
                  從發想者、創辦人、顧問團隊…在在都是教育界的好手。
            </el-col>
            <el-row>
                <el-col :span="12" class="brand-txt">
                  <div ><img src="../../public/img/tree.png" alt="">
                  在大樹貝兒，每一個孩子都在充滿愛的環境下成長，尊重孩子的發展，給孩子充足的養分，配合日照、雨水，
                  春夏秋冬的交替，孩子們在自然的環境下成長、茁壯。
                  </div>
                </el-col>
                <el-col :span="12" class="brand-txt">
                  <div><img src="../../public/img/mother-with-baby-in-arms.png" alt="">
                  大樹貝兒提供安全及舒適的托育環境、合格保育人員、專業的幼兒教育團隊、
                  豐富多元的課程安排，啟發孩子的淺能，讓孩子的觸角無限探索。
                  </div>
                </el-col>
            </el-row>
        </div>
            <el-row class="main-setting">
              <h1 class="main-title">大樹貝兒的環境</h1>
              <div class="setting-scetion">
              <el-col class="settimg-img slide-TextUp" :span="8">
                <img src="@/assets/images/logo.png" alt="">
                  <div class="scrolltop-txt">環境1</div>
              </el-col>
              <el-col class="settimg-img slide-TextUp" :span="8">
                <img src="@/assets/images/logo.png" alt="">
                  <div class="scrolltop-txt">環境2</div>
              </el-col>
              <el-col class="settimg-img slide-TextUp" :span="8">
                <img src="@/assets/images/logo.png" alt="">
                  <div class="scrolltop-txt">環境3</div>
              </el-col>
              </div>
            </el-row> 
          
          <div class="main-learn">
          <h1 class="main-title">關於學習</h1>
            <el-row>
                <el-col :span="24">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Porro, itaque. Quia ullam ad suscipit commodi.
                </el-col>
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
                      <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
            </el-row>
            <div class="learn-div">
            <el-row >
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
                <el-col :span="6" >
                  <div class="brand-txt"><img src="@/assets/images/logo.png" alt=""></div>
                  Lorem ipsum dolor sit amet consectetur.
                </el-col>
               
            </el-row>
            </div>
            


           <div class="main-teacher">
            <h1 class="main-title">關於師資</h1>
              <el-row>
                  <el-col :span="24">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Porro, itaque. Quia ullam ad suscipit commodi.
                  </el-col>
                  <el-col :span="8" >
                    <div class="teacher-txt">Lorem ipsum dolor sit amet consectetur.</div>
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
                   <el-col :span="8" >
                    <div class="teacher-txt">Lorem ipsum dolor sit amet consectetur.</div>
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
                   <el-col :span="8" >
                    <div class="teacher-txt">Lorem ipsum dolor sit amet consectetur.</div>
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
              </el-row>
            </div>

            <div class="main-meals">
            <h1 class="main-title">關於餐點</h1>
              <el-row>
                  <el-col :span="8" >
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
                   <el-col :span="8" >
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
                   <el-col :span="8" >
                      <img src="@/assets/images/logo.png" alt="">
                  </el-col>
              </el-row>
            </div>
            
        </div>
      </el-main>
    </el-container>

    </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {};
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
    height: 750px;
    background: url("../../public/images.jpg") no-repeat center;
    background-size: cover;
  }
  margin-top: 70px;
  max-width: 960px;
  margin: auto;
  .el-main {
    padding: 0;
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
    padding: 50px;
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
    background: $mainfontcolor;
    color: $mainbgcolor;
    font-size: 18px;
    padding: 25px;
    .setting-scetion {
      display: flex;
      justify-content: space-around;
      .main-title {
        color: $mainbgcolor;
        background: $mainfontcolor;
      }
      .settimg-img {
        position: relative;
        height: 200px;
        overflow: hidden;

        img {
          width: 200px;
          height: 200px;
        }
        .scrolltop-txt {
          background: $mainbgcolor;
          color: $mainfontcolor;
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
    background: $mainbgcolor;
    .el-row {
      .el-col {
        padding: 25px;
      }
    }
    .learn-div {
      color: red;
      .el-row {
        .el-col {
          font-size: 25px;
          margin-left: 6%;
        }
      }
    }
  }
  .main-teacher {
    background: $mainfontcolor;
    color: $mainbgcolor;
    .teacher-txt {
      position: relative;
      background: #cccccc;
      padding: 10px;
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
  .main-meals {
    .el-col {
      & :hover {
        transform: rotateY(360deg);
      }
      display: block;
      img {
        width: 200px;
        height: 200px;
        transition: all 700ms linear;
      }
    }
  }
}
</style>



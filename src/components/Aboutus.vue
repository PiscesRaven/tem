<template>
    <!-- 關於我們 -->
<div id="about-page">

    <el-container >
      <el-row class="hgroup">
        <el-col>
          <h1 class="about-page-title">關於我們</h1>
          <!-- 麵包屑 -->
          <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於我們</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          </el-col>
        </el-row>
      </el-container>


  <el-container>
    <el-col :span="8">
      <el-aside style="min-width:100%;">
        <el-col :span="24" class="about-side">關於我們
          <el-row>
            <el-menu default-active="1" 
              class="el-menu-vertical aside-menu"
              @open="handleOpen"
              @close="handleClose"
              active-text-color="#111111"
              >
              <el-menu-item index="1">
                <span slot="title">關於我們</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">
                <router-link to="/device">
                  大樹貝兒的環境
                </router-link>
                  </span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">大樹貝兒的學習規劃</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">大樹貝兒的師資</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">大樹貝兒的營養餐表</span>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-col>
      </el-aside>
    </el-col>
    
  
   <!-- 主內容 -->
        <el-main>
          <el-col :span="24">
            <span style="font-size:16px;line-height:30px;letter-spacing:1px;">
              <div class="about-txt-title"><img src="../../public/img/icon-.png">
              關於大樹貝兒</div>              

              經過一千多個日子的規劃、統籌、執行，大樹貝兒於2016秋天正式與孩子們見面，您可以說這是一個很新的托育中心
              ，環境新、設備新、育兒觀念新...，您可以說這是一個很有經驗的托育中心，從發想者、創辦人、顧問團隊…在在都是教育界的好手。
              <br>
              <br>
              『教育無他，唯愛與榜樣。』~德國幼兒教育之父 福祿貝兒Fröbel<br>
              <br>
              在大樹貝兒，每一個孩子都在充滿愛的環境下成長，尊重孩子的發展，
              給孩子充足的養分，配合日照、雨水，春夏秋冬的交替，孩子們在自然的環境下成長、茁壯。<br>
              <br>
              大樹貝兒提供安全及舒適的托育環境、合格保育人員、
              專業的幼兒教育團隊、豐富多元的課程安排，啟發孩子的淺能，讓孩子的觸角無限探索，。
            </span>
          </el-col>
        </el-main>
    </el-container>
    
</div>
    

</template>

<script>
export default {
  name: "Aboutus",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/global.scss"; // 全域css

#about-page {
  max-width: 960px;
  margin: auto;
  padding: 70px auto;
  text-align: left;
  .hgroup {
    width: 100%;
    margin: 50px 0;
  }

  .about-page-title {
    padding-top: 17px;
    padding-bottom: 17px;
    border-bottom: 1px solid #cccccc;
    font-size: 30px;
    font-weight: 300;
    line-height: 1em;
  }

  .bread {
    font-size: 12px;
    background-color: #ffffff;
    margin: 0 0 0px;
    padding: 6px 15px;
    border: solid 1px #cccccc;
    position: absolute;
    bottom: -15px;
    right: 0px;
  }
  .el-container {
    margin-top: 50px;
    font-size: 25px;
    .el-menu-vertical {
      margin-top: 15px;
      border-right: none;
      .el-menu-item {
        margin-top: 2px;
        background: $submaincolor;
        &:active,
        &:hover {
          background: #e3e3e3;
        }
      }
    }
    .el-main {
      margin: 15px;
      .about-txt-title {
        text-align: center;
        color: #ff6666;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>


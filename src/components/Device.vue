<template>
 <!-- 硬體設備 -->
 <div id="device-page">
   <el-container >
    <el-row class="hgroup">
      <el-col :span="24">
        <h1 class="device-title">硬體設備</h1>
        <!-- 麵包屑 -->
        <div class="bread">
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item>硬體設備</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </el-container>
  <el-container>
    <el-row class="pic-row">
      <el-col :md="6" :sm="24"  v-for="(item, index) in img" :key="index">
         <a href="#">
        <img :src="item.url" >
        </a>
      </el-col>
    </el-row>
  </el-container>
 </div>
</template>

<script>
import LightBox from "vue-image-lightbox";
export default {
  name: "device",
  components: {
    LightBox
  },
  data() {
    return {
      img: [
        {
          url: "img/u1610071409181475820558254.jpg"
        },
        {
          url: "img/u1610071409121475820552105.jpg"
        },
        {
          url: "img/u1610071409191475820559790.jpg"
        },
        {
          url: "img/u1610071409211475820561084.jpg"
        },
        {
          url: "img/u1610071409131475820553095.jpg"
        },
        {
          url: "img/u1610071409181475820558185.jpg"
        },
        {
          url: "img/u1610071409211475820561084.jpg"
        },
        {
          url: "img/u1610071409181475820558254.jpg"
        },
        {
          url: "img/u1610071409211475820561495.jpg"
        },
        {
          url: "img/u1610071409221475820562032.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#device-page {
  max-width: 960px;
  margin: auto;
  padding: 70px auto;
  text-align: left;
  .hgroup {
    width: 100%;
    margin: 50px 0;
  }
  .device-title {
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
  .pic-row {
    .el-col {
      width: 200px;
      height: 250px;
      padding: 10px;
      border-bottom: 1px solid #b2b2b2;
      margin: 20px;
      img {
        width: 185px;
        height: 200px;
      }
    }
  }
}
</style>


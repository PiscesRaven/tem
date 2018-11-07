<template>
  <!-- 最新消息 -->
  <div id="news-page">
    <el-container >
      <el-row class="hgroup">
        <el-col :span="24">
          <h1 class="device-title">硬體設備</h1>
          <!-- 麵包屑 -->
          <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>最新消息</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container  v-for="post in article.slice().reverse()"> 
      <el-row class="news-row">
        <el-col :span="20" class="news-title">{{post.title}}</el-col>
        <el-col :span="4" class="news-info">{{post.date}}
          <div class="txt-big">{{post.dateBig}}</div>
        </el-col>
      </el-row>
  </el-container>

  
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      article: [
        {
          id: 1,
          title: "官方網站全新改版上線!!!",
          date: "2016/10",
          dateBig: "07",
          img: "",
          txt:
            "以更專業的形象，期許帶給您更好的產品、更好的服務！舊雨新知，請多指教！"
        },
        {
          id: 2,
          title: "期間限定!!!",
          date: "2017/08",
          dateBig: "09",
          img: "",
          txt:
            "以更專業的形象，期許帶給您更好的產品、更好的服務！舊雨新知，請多指教！"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#news-page {
  max-width: 960px;
  margin: auto;
  padding: 70px auto;
  text-align: left;
  min-height: 750px;
  .hgroup {
    width: 100%;
    margin: 50px 0;
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
  .news-row {
    width: 100%;
    padding: 44px 0px;
    border-bottom: 1px solid #cccccc;
    .news-title {
      font-size: 24px;
      height: 100%;
      line-height: 100px;
      margin: auto;
    }
    .news-info {
      height: 100%;
      border-left: 1px solid #cccccc;
      padding-left: 10px;
      color: #afafaf;
      font-size: 12px;
      letter-spacing: 2px;
      .txt-big {
        font-size: 50px;
        color: #000;
      }
    }
  }
}
</style>


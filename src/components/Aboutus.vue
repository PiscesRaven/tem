<template>
    <!-- 關於我們 -->
<div id="about-page">
  <el-row>
    <el-col>
      <div class="about-page-title">關於我們</div>
    <!-- 麵包屑 -->
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
        <el-breadcrumb-item>關於我們</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
  </el-row>

<el-row>
    <el-col :span="6">01234568</el-col>
    <el-col :span="18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Blanditiis ex voluptate aut iusto commodi vitae, accusantium, 
      facilis asperiores nisi unde exercitationem, eum omnis. 
      Quia quasi adipisci, architecto optio nesciunt dicta?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Blanditiis ex voluptate aut iusto commodi vitae, accusantium, 
      facilis asperiores nisi unde exercitationem, eum omnis. 
      Quia quasi adipisci, architecto optio nesciunt dicta?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Blanditiis ex voluptate aut iusto commodi vitae, accusantium, 
      facilis asperiores nisi unde exercitationem, eum omnis. 
      Quia quasi adipisci, architecto optio nesciunt dicta?</el-col>
</el-row>

   


  
</div>
    

</template>

<script>
export default {
  name: "Aboutus",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
#about-page {
  max-width: 960px;
  margin: 70px auto;

  .about-page-title {
    margin-top: 26px;
    margin-bottom: 26px;
    padding-top: 17px;
    padding-bottom: 17px;
    border-bottom: 1px solid #cccccc;
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
}
</style>


<template>
<!-- 課程 -->
<div id="course">
  <el-comtainer class="hgroup">
    <el-row>
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
  </el-comtainer>

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
                <span slot="title">0~8個月課表</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">9~16個月課表</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">17~24個月課表</span>
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
          <div class="about-txt-title">
            <img src="../../public/img/icon-.png">
              臺中市私立大樹貝兒托嬰中心活動課程表 ( 0~8個月 )
          </div>              
   
        </span>
      </el-col>
    </el-main>
  </el-container>



</div>
</template>

<script>
export default {
  name: Course,
  data() {
    return {
      table: [{}]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>


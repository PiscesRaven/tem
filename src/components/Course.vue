<template>
<!-- 課程 -->
<div id="course-page">
  <el-container>
    <el-row class="hgroup">
      <el-col>
        <h1 class="course-page-title">課表</h1>
        <!-- 麵包屑 -->
        <div class="bread">
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item>課程內容</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </el-container>

  <el-container>
    <el-row>
       <el-col :md="8" :sm="24"> 
        <el-aside style="min-width:100%;">
          <el-col :span="24" class="about-side">關於我們
            <el-row>
              <el-menu default-active="1" 
                class="el-menu-vertical aside-menu"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="#111111"
                >
                <el-menu-item index="1" >
                    <span slot="title">
                      <router-link to="/course">
                       0~8個月課表
                      </router-link>
                    </span>                  
                </el-menu-item>
                <el-menu-item index="2">                  
                    <span slot="title">
                      <router-link to="/course/course9-16">
                       9~16個月課表
                      </router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">
                    <router-link to="/course/course17-24">
                      17~24個月課表
                    </router-link>
                  </span>
                </el-menu-item>
              </el-menu>
            </el-row>
          </el-col>
        </el-aside>
      </el-col>
    <el-col :md="16" :sm="24">

    </el-col>
    <el-main>
        <span style="font-size:16px;line-height:30px;letter-spacing:1px;">
          <div class="about-txt-title">
              <!-- 主內容 -->
              <router-view></router-view>
          </div>              
        </span>

    </el-main>
    </el-row>
  </el-container>
</div>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      month1: "0~8",
      month2: "9~16",
      month3: "17~24",
      month: [
        {
          id: "0~8"
        },
        {
          id: "9~16"
        },
        {
          id: "17~24"
        }
      ]
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
#course-page {
  max-width: 960px;
  margin: auto;
  padding: 70px auto;
  text-align: left;
  .hgroup {
    width: 100%;
    margin: 50px 0;
  }

  .router-link-exact-active {
    background: #e3e3e3;
  }
  .course-page-title {
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
      overflow: hidden;
      .el-menu-item {
        margin-top: 2px;
        background: $submaincolor;
        padding: 0px !important;
        .el-menu-item {
        }
        &:active,
        &:hover {
          background: #e3e3e3;
        }
        span {
          > a {
            padding-left: 20px;
            display: block;
          }
        }
      }
    }
    .el-main {
      margin: 15px;
      .about-txt-title {
        text-align: center;
        letter-spacing: 0;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>


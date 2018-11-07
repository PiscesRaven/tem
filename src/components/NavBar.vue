<template>
  <div class="navbar">
    <span><img src="../../public/img/0819-LOGO.png" alt="" class="hidden-md-and-up"></span>
      <!-- <img src="../../public/img/0819-LOGO.png" alt=""> -->
    <div id="menu" :class="{active: isActive}">
      <el-menu  :default-active="activeIndex2" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
        <el-menu-item id="logo" class="hidden-sm-and-down"><img src="../../public/img/0819-LOGO.png" alt=""></el-menu-item>
        <el-menu-item index="1">
          <router-link to="/aboutus">關於我們</router-link>
        </el-menu-item>
        <el-menu-item index="2" >
          <router-link to="/course">課程內容</router-link>
        </el-menu-item>
        <el-menu-item index="3" >
          <router-link to="/device">硬體設備</router-link>
          </el-menu-item>
        <el-menu-item index="4" >
           <router-link to="/news">最新消息</router-link>
        </el-menu-item>
        <el-menu-item index="5" >活動照片</el-menu-item>
        <el-menu-item index="6" >預約參觀</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">下拉式選單</template>
          <el-menu-item index="2-1">下拉式選單 Lv1</el-menu-item>
          <el-menu-item index="2-2">下拉式選單 Lv1</el-menu-item>
          <el-menu-item index="2-3">下拉式選單 Lv1</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">下拉式選單 Lv2</template>
            <el-menu-item index="2-4-1">下拉式選單 Lv2-1</el-menu-item>
            <el-menu-item index="2-4-2">下拉式選單 Lv2-2</el-menu-item>
            <el-menu-item index="2-4-3">下拉式選單 Lv2-3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
        <!-- <el-menu-item index="3" disabled> Menu 3</el-menu-item> -->
        <!-- <el-menu-item index="4" :default-active="activeIndex2" >Menu 4</el-menu-item> -->
        <!-- <el-menu-item index="5" >Menu 5</el-menu-item> -->

        <div class="nav-info hidden-sm-only">
          <el-menu-item index="7" class="tel">預約參觀電話 <span>04-2471-5737</span> </el-menu-item>
          <el-menu-item index="8" >FACEBOOK</el-menu-item>
          <el-menu-item index="9" >YOUTUBE</el-menu-item>
        </div>
      </el-menu>
      

    </div>
    <!--  -->
    <div id="toggle" @click="select()">
        <div class="span" id="top" :class="{ active: isActive }"></div>
        <div class="span" id="middle" :class="{ active: isActive }"></div>
        <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      // activeIndex: "1",
      // activeIndex2: "1",
      isActive: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    select() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global.scss"; // 全域css

.navbar {
  z-index: 10;
  width: 100%;
  background: $maincolor;
  position: fixed;
  height: 90px;
  top: 0;
  .navbar :after {
    content: "";
    display: block;
    clear: both;
  }
  #menu {
    ul {
      background: $maincolor;
      border: none;

      // width: 70%;
      margin: auto;
      li {
        display: inline;
        // margin: 15px;
        line-height: 80px;
        color: $mainfontcolor;
        &:nth-last-child(-n + 7) {
          &:hover {
            border-bottom: 2px white solid !important;
          }
        }
      }
      #logo {
        margin-right: 5px;
        margin-left: 20%;
      }
      .nav-info {
        float: left;

        display: inline-flex;
        .tel {
          width: 135px;
          white-space: normal;
          height: 90px;
          line-height: 25px;
          padding-top: 16px;
          margin: 0 35px;
          span {
            color: $hovercolor;
          }
        }
      }
    }
  }

  #toggle {
    position: absolute;
    right: 20px;
    top: 14px;
    z-index: 999;
    width: 40px;
    height: 40px;
    cursor: pointer;
    float: right;
    transition: all 0.3s ease-out;
    visibility: hidden;
    opacity: 0;
    .span {
      border-radius: 10px;
      background: $nav-toggle-color;
      transition: all 0.3s ease-out;
      backface-visibility: hidden;
    }
  }

  #top.span.active {
    transform: rotate(45deg) translateX(3px) translateY(5px);
  }

  #middle.span.active {
    opacity: 0;
  }

  #bottom.span.active {
    transform: rotate(-45deg) translateX(8px) translateY(-10px);
  }

  @media only screen and (max-width: $screen-md-min) {
    #menu {
      ul {
        // width: 100%;
      }
    }
    #toggle {
      visibility: visible;
      opacity: 1;
      margin-top: 6px;
      .span {
        height: 4px;
        margin: 5px 0;
        transition: all 0.3s ease-out;
        backface-visibility: visible;
        visibility: visible;
        opacity: 1;
      }
    }

    #menu {
      .nav-info,
      .tel,
      .el-menu-item,
      .el-submenu {
        display: none;
      }

      &.active {
        margin: 70px 0;
        visibility: visible;
        opacity: 0.98;
        transition: all 0.5s ease-out;
        @include sm-menu;
      }
    }
  }
}
</style>

<template>
  <div class="navbar">
    <div id="menu" :class="{active: isActive}">
      <el-menu  :default-active="activeIndex2" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
        <el-menu-item id="logo"><img src="@/assets/images/logo.png" alt=""></el-menu-item>
        <el-menu-item index="1">Menu 1</el-menu-item>
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
        <el-menu-item index="3" disabled> Menu 3</el-menu-item>
        <el-menu-item index="4" :default-active="activeIndex2" >Menu 4</el-menu-item>
        <el-menu-item index="5" >Menu 5</el-menu-item>
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
      activeIndex: "1",
      activeIndex2: "1",
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
  height: 70px;
  background: $mainbgcolor;
  position: fixed;
  top: 0;
  .navbar :after {
    content: "";
    display: block;
    clear: both;
  }
  ul {
    background: $mainbgcolor;
    border: none;
    li {
      display: inline;
      // margin: 15px;
      a {
        color: $mainfontcolor;
      }
    }
    #logo img {
      margin-right: 5px;
      width: 40px;
      height: 40px;
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

<template>
    <div class="footer" >
  <el-footer class="footer" style="height:auto">
      <el-row>
          <el-col :span="12" class="footer-contact">
              <ul>
                  <li v-for=" item in menus">
                      <a href="#">{{item}}</a>
                  </li>
              </ul>
          </el-col>
          <el-col :span="12" class="footer-ownerinfo">
              <ul>
                  <li v-for="item in info">{{item}}</li>
              </ul>
          </el-col>
          <el-col class="design-info">
            Copyright © 2018 Idea-Infinite Information Marketing Co.Ltd.. All rights reserved
          </el-col>
      </el-row>
  </el-footer>

    </div>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      menus: ["menusA", "menusB", "menusC", "menusD", "menusE"],
      info: ["單位: AAA", " 電話: 041234679", "地址: 台中市區北屯區"]
    };
  }
};
</script>

<style lang="scss" scoped>
// @import "global.scss";
@import "../assets/scss/global.scss"; // 全域css

.footer {
  width: 100%;
  background: navy;
  position: relative;
  @include pd-0;
  font-size: $mainfont-sm;

  .design-info {
    width: 100%;
    color: $mainfontcolor;
    background: $mainbgcolor;
    position: relative;
    bottom: 0;
  }
  ul {
    padding: 10px;
  }
  .footer-contact {
    ul li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: $mainfontcolor;
    }
  }
  .footer-ownerinfo {
    ul li {
      text-align: left;
      color: $mainfontcolor;
    }
  }
}
</style>

<template>
    <div class="footer" >
  <el-footer class="footer" style="height:auto">
      <el-row>
          <el-col :span="24" class="footer-contact">
                  大樹貝兒 │ 電話：04-2471-5737 │ 地址：台中市南屯區文心南三路338號(好市多對面) 
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global.scss"; // 全域css

.footer {
  width: 100%;
  background: $maincolor;
  position: relative;
  @include pd-0;
  font-size: $mainfont-sm;
  height: 100px;

  .design-info {
    width: 100%;
    color: $mainfontcolor;
  }
  ul {
    padding: 10px;
  }
  .footer-contact {
    margin: 30px 0 10px auto;
    color: $maintxtcolor;
  }
}
</style>

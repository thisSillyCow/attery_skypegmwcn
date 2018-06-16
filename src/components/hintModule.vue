<template>
    <div id="hint">
        <div class="drape"></div>
        <div class="loading" v-if='hintType=="loading"'>
            <img src="../assets/image/loading.gif">
        </div>
    </div>
</template>

<script>
export default {
  name: "hint",
  props: ["introduceDate"],
  data() {
    return {
      hintType: "",
      loadingDate: ""
    };
  },
  mounted() {
    const that = this;
    that.hintType = that.introduceDate.type;
    that.loadingDate = that.introduceDate.loadingDate;
  }
};
</script>

<style scoped>
.drape {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1040;
  background: #000;
  opacity: 0.5;
}
.loading {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 1040;
}
.loading img {
  width: 50px;
}
</style>
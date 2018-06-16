<template>
    <div>
        <carousel></carousel>
        <content-roll></content-roll>
        <content-roll></content-roll>
        <content-roll></content-roll>
        <foot-bgcolor></foot-bgcolor>
    </div>
</template>

<script>
import footBgcolor from "../components/footer";
import Carousel from "../components/carousel";
import ContentRoll from "../components/contentRoll";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    footBgcolor,
    Carousel,
    ContentRoll
  }
};
</script>

<style scoped>
</style>
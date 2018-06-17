<template>
    <div>
        <carousel></carousel>
        <content-roll></content-roll>
        <content-roll></content-roll>
        <content-roll></content-roll>
    </div>
</template>

<script>
import footBgcolor from "../components/footer";
import Carousel from "./carousel";
import ContentRoll from "./contentRoll";
export default {
    name: "home",
    data() {
        return {};
    },
    components: {
        Carousel,
        ContentRoll
    }
};
</script>

<style scoped>
</style>
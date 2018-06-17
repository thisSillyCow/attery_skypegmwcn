<template>
    <div class="pageHome">
        <theme class="theme"></theme>
        <router-view class="contentView"></router-view>
        <foot-bgcolor></foot-bgcolor>
        <hint-module :introduceDate="HimtDate" v-if="HimtDateType"></hint-module>
    </div>
</template>

<script>
import theme from "../components/theme";
import footBgcolor from "../components/footer";
import hintModule from "../components/hintModule";
export default {
    name: "index",
    components: {
        theme,
        hintModule,
        footBgcolor
    },
    data() {
        return {
            HimtDateType: true,
            HimtDate: {
                type: "",
                loadingDate: ""
            }
        };
    },
    mounted() {
        const that = this;
        that.HimtDate = { type: "loading", loadingDate: "加载中" };
        const IntervalTime = setInterval(() => {
            const readyState = document.readyState;
            if (readyState == "complete") {
                clearInterval(IntervalTime);
                that.HimtDateType = false;
            }
        });
    }
};
</script>

<style scoped>
.pageHome {
    display: flex;
    flex-direction: column;
}

.contentView {
    margin-top: 50px;
}
</style>
<template>
    <div class="pageHome">
        <theme class="theme"></theme>
        <router-view class="contentView"></router-view>
    </div>
</template>

<script>
import theme from "../components/theme.vue";
export default {
    name: "index",
    components: {
        theme
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
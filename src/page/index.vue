<template>
    <div class="pageHome">
         <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
        </ul>
        <theme class="theme"></theme>
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

.theme {
    position: fixed;
    flex: 1;
    top: 0;
    left: 0;
    right: 0;
}
</style>
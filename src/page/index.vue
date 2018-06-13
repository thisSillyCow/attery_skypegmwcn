<template>
    <div class="pageHome">
        <theme class="theme"></theme>
        <router-view></router-view>
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
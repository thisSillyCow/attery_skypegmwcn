<template>
    <div id="contentRoll">
        <div class="row">
            <div class="rollType" rollType='rollTop'>
                <h1 class="text-center scw-title">Manage Your Infrastructure at Scale</h1>
                <h2 class="text-center scw-title-desc">Build your cloud infrastructure in seconds.</h2>
            </div>
            <div class="container section" id="section1">
                <div class="row">
                    <div class="col-md-7  rollType" rollType='rollRight' >
                        <h3>All your GitHub notifications on your desktop. Nice &amp; Easy.</h3>
                        <p class="lead">
                            Gitify is all about making your life easier. It just does a job. Sitting on your dock or tray it
                            informs you for any GitHub notifications without being annoying and of course without adverts. Works with 
                            <strong><a href="#">GitHub Enterprise</a></strong> 
                            and 
                            <strong>multiple</strong> 
                            accounts.
                        </p>
                        <a href="#">查看更多</a>
                    </div>
                    <div class="col-md-4 col-md-offset-1  rollType" rollType="rollLeft">
                        <img class="img-fluid screenshot "  src="../assets/image/screenshot.png" alt="Gitify App">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rollState from "../assets/js/animate"
export default {
    name: "contentRoll",
    data() {
        return {
        };
    },
    mounted() {
        const that = this;
        rollState.rollState(document.documentElement.clientHeight);
    }
};
</script>
<style scoped >
    @import url(../assets/css/animate.css);
</style>
<style scoped>
@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}
@media (min-width: 992px) {
  .col-md-offset-1 {
    margin-left: 0;
  }
}
.row {
  padding-top: 80px;
  margin-left: 0px;
  margin-right: 0px;
}
.section .screenshot {
  margin: 30px auto;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
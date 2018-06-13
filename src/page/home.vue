<template>
    <div>
        <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>   
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="http://www.iremax.hk/uploadfile/2018/0502/20180502043002742.jpg" alt="First slide">
                </div>
                <div class="item">
                    <img src="http://www.iremax.hk/uploadfile/2018/0502/20180502043457968.jpg" alt="Second slide">
                </div>
                <div class="item">
                    <img src="http://www.iremax.hk/uploadfile/2018/0126/20180126094502234.jpg" alt="Third slide">
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
       <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev", //上一张
        nextButton: ".swiper-button-next", //下一张
        scrollbar: ".swiper-scrollbar", //滚动条
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  //   created() {
  //     var swiper = new Swiper(".swiper-container", {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //       slidesPerGroup: 3,
  //       loop: true,
  //       loopFillGroupWithBlank: true,
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true
  //       },
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev"
  //       }
  //     });
  //   },
  mounted() {}
};
</script>

<style scoped>
.carousel-control {
  width: 5%;
}
.carousel-control .glyphicon-chevron-left,
.carousel-control .icon-prev {
  margin-left: -20px;
}
.carousel-indicators li {
  width: 20px;
  height: 3px;
  background-color: #e1e1e1;
}
.carousel-indicators .active {
  background-color: yellow;
  margin: 1px;
  border: 1px solid yellow;
}
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
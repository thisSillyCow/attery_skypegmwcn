<template>
    <div  id="carousel">
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
                    <img src="../assets/image/20180502043002742.jpg" alt="First slide">
                </div>
                <div class="item">
                    <img src="../assets/image/20180502043457968.jpg" alt="Second slide">
                </div>
                <div class="item">
                    <img src="../assets/image/20180126094502234.jpg" alt="Third slide">
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
         <div id="myCarousel2" class="carousel slide CarouselAmend">
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item active">
                    <div class="itemActive itemActiveF">
                     <img src="../assets/image/0.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/1.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/2.jpg" alt="First slide">
                    </div>
                </div>
                <div class="item">
                    <div class="itemActive itemActiveF">
                     <img src="../assets/image/3.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/4.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/5.jpg" alt="First slide">
                    </div>
                </div>
                <div class="item">
                    <div class="itemActive itemActiveF">
                     <img src="../assets/image/6.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/7.jpg" alt="First slide">
                    </div>
                    <div class="itemActive">
                     <img src="../assets/image/8.jpg" alt="First slide">
                    </div>
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <a class="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "carousel",
    data() {
        return {
        };
    },
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
.CarouselAmend {
  width: 80%;
  margin: 3% 10%;
}
.itemActive {
  float: left;
  width: 25%;
  margin: 0% 2.5%;
  height: auto;
}
.itemActiveF {
  margin-left: 5%;
}
.itemActive img {
  display: block;
  padding: 5%;
  max-width: 100%;
  height: auto;
}

.itemActive img:hover {
  padding: 0;
  box-shadow: 5px 5px 5px #888888;
}

</style>
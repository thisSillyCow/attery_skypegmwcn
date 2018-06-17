<template>
    <div class="product">
        <img class="phoneBattery" src="../assets/image/phone-battery.jpg">
        <section class="clearfix section-inner">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <div class="min-nav clearfix">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#minTabs">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="mobile-head clearfix">Products</div>
                        </div>
                        <div class="collapse min-tabs clearfix" id="minTabs">
                            <ul class="clearfix">
                                <li class="clearfix">
                                    <a class="" href="#" title="Battery for iPhone">
                                        <i class="fa fa-angle-right"></i>
                                        Battery for iPhone
                                    </a>
                                </li>
                                <li class=" ">
                                    <a class="active" href="#" title="Battery for Samsung">
                                        <i class="fa fa-angle-right"></i>
                                        Battery for Samsung
                                    </a>
                                </li>
                                <li class=" ">
                                    <a class="" href="#" title="High-capacity Battery">
                                        <i class="fa fa-angle-right"></i>
                                        High-capacity Battery
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-9">
                        <div class="main-top clearfix">
                            <span>
                                <i class="fa fa-angle-right fa-lg"></i>Battery for Samsung</span>
                        </div>
                        <div class="main-content">
                            <div class="main-product clearfix">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 pro-item">
                                        <a href="/battery-for-samsung/battery-for-samsung-galaxy-s7-edge.html" title="Battery for Samsung Galaxy S7 Edge">
                                            <div class="pro-pic clearfix">
                                                <img src="../assets/image/S7Edge.jpg" alt="Battery for Samsung Galaxy S7 Edge">
                                            </div>
                                            <div class="pro-title clearfix">
                                                Battery for Samsung Galaxy S7 Edge
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-sm-6 col-md-4 pro-item">
                                        <a href="/battery-for-samsung/battery-for-samsung-galaxy-s6-edge.html" title="Battery for Samsung Galaxy S6 Edge">
                                            <div class="pro-pic clearfix">
                                                <img src="../assets/image/S6Edge.jpg" alt="Battery for Samsung Galaxy S6 Edge">
                                            </div>
                                            <div class="pro-title clearfix">
                                                Battery for Samsung Galaxy S6 Edge
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-sm-6 col-md-4 pro-item">
                                        <a href="/battery-for-samsung/battery-for-samsung-galaxy-s6-edge.html" title="Battery for Samsung Galaxy S6 Edge">
                                            <div class="pro-pic clearfix">
                                                <img src="../assets/image/S6Edge.jpg" alt="Battery for Samsung Galaxy S6 Edge">
                                            </div>
                                            <div class="pro-title clearfix">
                                                Battery for Samsung Galaxy S6 Edge
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col-sm-6 col-md-4 pro-item">
                                        <a href="/battery-for-samsung/battery-for-samsung-galaxy-s6-edge.html" title="Battery for Samsung Galaxy S6 Edge">
                                            <div class="pro-pic clearfix">
                                                <img src="../assets/image/S6Edge.jpg" alt="Battery for Samsung Galaxy S6 Edge">
                                            </div>
                                            <div class="pro-title clearfix">
                                                Battery for Samsung Galaxy S6 Edge
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 ">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">1</a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">5</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "product",
    data() {
        return {
            msg: ""
        };
    },
    mounted() {}
};
</script>

<style scoped>
section {
    padding: 15px 0;
}

@media (min-width: 768px) {
    section {
        padding: 30px 0;
    }
    .mobile-head {
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .mobile-head {
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .min-tabs.collapse {
        display: block !important;
        height: auto !important;
    }
    .min-tabs.collapse {
        display: block !important;
    }
    .main-top {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 0px;
    }
    .innerpath.breadcrumb {
        float: right;
        margin-bottom: 0px;
        background-color: transparent;
        padding: 0;
        margin-right: 15px;
    }
    .innerpath.breadcrumb li {
        font-size: 14px;
    }
}
.phoneBattery {
    width: 100%;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.min-nav {
    position: relative;
    background-color: #2f2f2f;
}

.mobile-head {
    color: #fff;
    font-size: 16px;
    float: left;
    text-transform: uppercase;
    padding-top: 13px;
    padding-left: 15px;
    word-spacing: 3px;
}

.min-tabs {
    background-color: #ffffff;
    padding: 0;
    position: relative;
    margin-top: 0px;
}
ul,
ol,
li,
dl,
dt,
dd {
    margin: 0;
    padding: 0;
    list-style: none;
}
.min-tabs ul li {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #dddddd;
    position: relative;
    height: auto !important;
}
.min-tabs ul li a {
    display: block;
    background-color: #f5f5f5;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 15px;
    color: #000;
    text-transform: uppercase;
    position: relative;
}

a {
    color: #666;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
}
.collapse {
    visibility: inherit;
}
.min-tabs ul li a:hover {
    color: #cc0000;
    margin-left: 10px;
}
.min-tabs ul li a.active {
    color: #cc0000;
}

.main-top {
    padding-top: 10px;
    padding-left: 0;
    margin-top: 10px;
    border-bottom: 1px solid #dddddd;
}
.main-top span {
    display: inline-block;
    float: left;
    color: #cc0000;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    padding-left: 5px;
}
.pro-item {
    margin-bottom: 30px;
}
.pro-item a {
    display: block;
    border: 1px solid #d9d9d9;
}
.pro-item a:hover {
    border: 1px solid blue;
}
a {
    color: #666;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
}
.pro-pic img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}
.pro-title {
    font-size: 14px;
    line-height: 40px;
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 30px;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    border-top: 1px solid #d9d9d9;
}
.pro-title i {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    text-align: center;
    float: right;
    height: 40px;
    line-height: 40px;
}
.min-nav .icon-bar {
    border-color: #ffffff;
    background-color: #ffffff;
}
.main-content {
    padding: 20px 0;
}
.fa-lg {
    vertical-align: -5%;
    margin-right: 5px;
}
</style>
<template>
    <div class="page-index">
        <nav class="navbar  navbar-fixed-top  navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" @click="navbarToggle " class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <div class="collapse navbar-collapse navbar-right collapseNavbar" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li :class="{'active':homeActive}">
                            <a href="#" @click="home">HOME </a>
                        </li>
                        <li :class="{'active':productActive}" @mouseover="productShow" @mouseout="productHide">
                            <a href="#" @click="product">Product</a>
                            <ul class="dropdown-menu" :style="{'display':productType}">
                                <li>
                                    <a href="#" @click="product">Product1</a>
                                </li>
                                <li>
                                    <a href="#" @click="product">Product2</a>
                                </li>
                                <li>
                                    <a href="#" @click="product">Product3</a>
                                </li>
                                <li>
                                    <a href="#" @click="product">Product4</a>
                                </li>
                            </ul>
                        </li>
                        <li :class="{'active':FaqActive}">
                            <a href="#" @click="Faq">FAQ</a>
                        </li>
                        <li :class="{'active':caseActive}">
                            <a href="#" @click="customer">CUSTOMER CASE</a>
                        </li>
                        <li :class="{'active':blogActive}">
                            <a href="#" @click="Blog">BLOG</a>
                        </li>
                        <li :class="{'active':aboutActive}">
                            <a href="#" @click="about">ABOUT US</a>
                        </li>
                    </ul>
                    <div class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            homeActive: true,
            productActive: false,
            FaqActive: false,
            caseActive: false,
            blogActive: false,
            aboutActive: false,
            productType: "none"
        };
    },
    methods: {
        init() {
            const that = this;
            that.homeActive = false;
            that.productActive = false;
            that.FaqActive = false;
            that.caseActive = false;
            that.blogActive = false;
            that.aboutActive = false;
            that.productType = "none";
            var clientHeight = document.documentElement.clientHeight;
            if (clientHeight < 750) {
                var collapse = document.getElementsByClassName(
                    "collapseNavbar"
                )[0];
                var getComputedStyle = document.defaultView.getComputedStyle(
                    collapse,
                    null
                );
                if (getComputedStyle.display == "block") {
                    document.getElementsByClassName("navbar-toggle")[0].click();
                }
            }
        },
        home() {
            const that = this;
            that.init();
            that.homeActive = true;
            this.$router.push({
                path: "/gw/home",
                query: {}
            });
        },
        product() {
            const that = this;
            that.init();
            that.productActive = true;
            this.$router.push({
                path: "/gw/product",
                query: {}
            });
        },
        productShow() {
            const that = this;
            that.productType = "block";
        },
        productHide() {
            const that = this;
            that.productType = "none";
        },
        Faq() {
            const that = this;
            that.init();
            that.FaqActive = true;
        },
        customer() {
            const that = this;
            that.init();
            that.caseActive = true;
        },
        Blog() {
            const that = this;
            that.init();
            that.blogActive = true;
        },
        about() {
            const that = this;
            that.init();
            that.aboutActive = true;
        }
    }
};
</script>

<style lang="less" scoped>
@menuHeight: 35px;
.navbar-default {
    background-color: #545c64;
}
.navbar {
    margin-bottom: 0px !important;
}
.dropdown-menu {
    background: #fafafa;
    min-width: 200px;
}
.dropdown-menu > li > a {
    height: @menuHeight;
    line-height: @menuHeight;
}
</style>
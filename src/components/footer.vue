<template>
    <div class="clearfix foot-bgcolor">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-5 col-lg-5">
                    <div class="foot-contact-head clearfix">Contact Us</div>
                    <div class="foot-contact-list clearfix">
                        <ul class="clearfix">
                            <li class="clearfix"><i class="fa fa-phone"></i>Tel/Skype: +86 13823208950</li>
                            <li class="clearfix"><i class="fa fa-envelope"></i>E-mail: <a href="mailto:pinky@huarigor.com">pinky@huarigor.com</a> &nbsp;</li>
                            <li class="clearfix"><i class="fa fa-whatsapp"></i>Wechat/Whatsapp: +86 13823208950</li>
                            <li class="clearfix">
                                <i class="glyphicon glyphicon-map-marker"></i>
                                Factory Address: 38th,Gongchang Road,Beian Country,Huangjiang Town,Dongguan,Guangdong,China<br>
                                Office Address: A1-10, 4th Floor, Building A, zhangkeng Industrial Zone, Minzhi Street, Longhua New District, Shenzhen, Guangdong
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-md-7 col-lg-7">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 md-bord">
                            <div class="foot-namecls clearfix">Quick navigation</div>
                            <div class="foot-clslist clearfix">
                                <ul>
                                    <li><a href="/company-profile/" title="About Us">About Us</a></li>
                                    <li><a href="/products/" title="Products">Products</a></li>
                                    <li><a href="/news/" title="News">News</a></li>
                                    <li><a href="/contact-us/" title="Contact Us">Contact Us</a></li>
                                    
                                </ul>
                            </div>
                            <div class="foot-pic clearfix">
                                <img class="img-responsive center-block" src="http://www.huarigor.com//web/template/themes/default/skins/images/xrm_05.png">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="foot-wxcode clearfix">
                                <div style="text-align: center;"><img src="http://www.huarigor.com//web/userfiles/huarigor-phone-battery.jpg" alt="huarigor iPhone battery supplier "></div>
                            </div>
                            <div class="foot-social clearfix">
                                <i class="fa fa-camera-retro fa-lg"></i> 
                                <ul>
                                    <li><a target="_blank" href="https://www.linkedin.com/company/huarigorbattery"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a target="_blank" href="https://plus.google.com/u/0/109638876578841121881"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a target="_blank" href="https://www.facebook.com/huarigorphonebattery/"><i class="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank" href="https://twitter.com/Huarigorbattery"><i class="fa fa-tumblr"></i></a></li>
                                    <li><a target="_blank" href="skype:+86 13823208950?chat"><i class="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="section-copy clearfix">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="copyright clearfix">
                            <table cellspacing="1" cellpadding="1" width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td>Copyright © 2007~2017 Shenzhen&nbsp;XinRuiMing&nbsp;Technology&nbsp;Co.,Ltd. All rights reserved.</td>
                                        <td style="text-align: right">Webdesign-Tiandixin.net</td>
                                    </tr>
                                </tbody>
                             </table> 
                        </div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
export default {
    name: "foot",
    data() {
        return {};
    },
    computed: {},
    mounted() {}
};
</script>


<style  lang="less" type="text/less" scoped>
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
.foot-bgcolor {
    background-color: #3b3b3b;
    padding-top: 30px;
}
.foot-contact-head {
    color: #ececec;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: bold;
}
.fa-phone:before {
    content: "\f095";
}
.foot-contact-list ul li {
    color: #ececec;
    font-size: 16px;
    line-height: 1.65;
    margin-top: 10px;
}
.foot-contact-list ul li a {
    color: #ececec;
}
.foot-contact-list ul li i {
    font-size: 18px;
    width: 30px;
}
.foot-clslist ul li a {
    color: #ececec;
    line-height: 1.45;
    display: block;
}

.foot-social {
    margin-top: 10px;
    text-align: center;
}
.foot-social ul li {
    display: inline-block;
    zoom: 1;
    margin: 3px;
}
.foot-social ul li a {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    display: block;
    border-radius: 15px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
}
.section-copy {
    background-color: #0f1011;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 30px;
}
.copyright {
    text-align: center;
    color: #9e9e9e;
    font-size: 12px;
    line-height: 2;
}
.md-bord {
    border-left: 1px solid #4a4a4a;
    border-right: 1px solid #4a4a4a;
}
.foot-clslist {
    margin-top: 15px;
    margin-bottom: 25px;
}
.foot-pic {
    border-top: 1px dashed #4a4a4a;
    padding-top: 15px;
}

.foot-namecls {
    color: #ececec;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
}
@media (min-width: 768px) {
    .foot-contact-head {
        font-size: 20px;
    }
}
@media (min-width: 768px) {
    .foot-namecls {
        font-size: 16px;
    }
}
</style>
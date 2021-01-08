<template>
  <div id="app">
    <div class="outer">
        <div class="inter">
            <router-link to="/" class="logo"><img src="./images/logo.png" alt=""></router-link>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/product">所有产品</router-link></li>
            </ul>
            <a href="" class="sousuo"><i class="icon iconfont icon-sousuo"></i></a>
            <div class="inter_right">
                <router-link to="/login">登录</router-link>
                <span>|</span>
                <router-link to="/register">注册</router-link>
                <router-link to="/cart"><i class="icon iconfont icon-gouwuche" id="shop"></i>0</router-link>
            </div>
            <div class="shop">
                <p>3件商品 总计:¥1111</p>
                <div class="shop1"><router-link to="/accounting">去结算</router-link></div>
            </div>

        </div>
    </div>


    <router-view/>


    <div class="outer5">
        <div class="inter1">
            <div class="left">
                <a href=""><img src="images/logo.png" alt=""></a>
                <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
            </div>
            <div class="center">
                <dl>
                    <dt><a href="">关于我们</a></dt>
                    <dd><a href="">我的品牌</a></dd>
                    <dd><a href="">公司动态</a></dd>
                    <dd><a href="">经历发展</a></dd>
                    <dd><a href="">商品推广</a></dd>
                </dl>
                <dl>
                    <dt><a href="">支付方式</a></dt>
                    <dd><a href="">微信支付</a></dd>
                    <dd><a href="">支付宝</a></dd>
                    <dd><a href="">百度钱包</a></dd>
                    <dd><a href="">货到付款</a></dd>
                </dl>
                <dl>
                    <dt><a href="">相关服务</a></dt>
                    <dd><a href="">退货政策</a></dd>
                    <dd><a href="">购物流程</a></dd>
                    <dd><a href="">客服服务</a></dd>
                    <dd><a href="">商务合作</a></dd>
                </dl>
            </div>
            <div class="right">
                <img src="images/weixin.png" alt="">
                <img src="images/weibo.png" alt="">
                <span>微信公众号</span>
                <span>微博公众号</span>
            </div>
        </div>
        <hr>
        <div class="inter2">

        </div>
    </div>
  </div>
</template>


<style>
@import "css/青竹0.css";
@import "css/图片.css";
@import "css/青竹1.css";
@import "iconfont/iconfont.css";
@import "css/青竹2.css";
@import "css/青竹3（1）.css";
@import "css/青竹4.css";
@import "css/青竹5.css";
@import "css/青竹6.css";

</style>

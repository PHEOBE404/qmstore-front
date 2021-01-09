<template>
  <div class="home">
        <!-- <div class="outer0"> -->

        <!-- <ul class="imgList">
            <li style="z-index:1;"><a  href=""><img src="../images/start.png" alt=""></a></li>
            <li><a  href=""><img src="../images/start1.png" alt=""></a></li>
            <li ><a  href=""><img src="../images/start2.png" alt=""></a></li>
        </ul>
        <div class="focusList">
            <span class="active"></span>
            <span></span>
            <span></span>
        </div> -->

         <div class="block " style="text-align: center; margin-top:140px">
            <el-carousel height="300px" type="card" :interval="2000">
            <el-carousel-item v-for="item in carouselList" :key="item.goodsId">
                <!-- <h3 class="small">{{ item }}</h3> -->
            <router-link :to="'/detail?id='+ item.goodsId"><img :src= item.picUrl></router-link>
            </el-carousel-item>
            </el-carousel>
            </div>
        <!-- </div> -->
    <div class="outer1">
        <a href="" class="a1">销量巅峰，精心挑选</a>
        <a href="" class="a2"><span >家居必备实用小单品</span></a>
        <div class="inter1">

            <div class="bbb">
                <ul>
                    <li v-for="item in bestSale" :key="item.goodsId">
                         <router-link :to="'/detail?id='+ item.goodsId"><img :src= item.picUrl></router-link>
                          <router-link :to="'/detail?id='+ item.goodsId"><p>{{item.goodsName}}</p> </router-link>
                       <span>¥{{item.goodsPrice}}</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div class="outer2">
        <p class="outer2_p1"><a href="">专题活动，现实促销</a></p>
        <div class="inter2">
            <p>严选材质，用心设计，精致家居生活</p>
        </div>
        <div class="inter3">
            <div class="left">
                <a href=""><img src="../images/pic1.jpg" alt=""></a>
                <span class="border1"></span>
            </div>
            <div class="right1">
                <a href=""><img src="../images/pic2.jpg" alt=""></a>
                <span class="border2"></span>
            </div>
            <div class="right2">
                <a href=""><img src="../images/pic3.jpg" alt=""></a>
                <span class="border3"></span>
            </div>
        </div>
    </div>
    <div class="box">
        <p class="p1"><a href="">青竹良品，你的家居首选</a></p>
        <div class="box1">
            <p>天然之源，诚挚之礼，严格质检</p>
        </div>
        <div class="box2">
            <ul>
                <div class="start">
                    <a href=""><img src="../images/png1.png" alt=""></a>
                    <a href="" class="a1"></a>
                </div>
                <div class="start1">
                    <a href=""><img src="../images/png6.png" alt=""></a>
                    <a href="" class="a2"></a>
                </div>
                <div class="end">
                    <li class="l1"><a href="查看详情.html"><img src="../images/png2.png" alt=""></a>
                        <a href=""><p class="p11">简约时尚水泥花瓶</p></a>
                        <p class="p22">¥450.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png3.png" alt=""></a>
                        <a href=""><p class="p11">黑陶器具</p></a>
                        <p class="p22">¥450.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png4.png" alt=""></a>
                        <p class="p11"><a href="">经典系列时钟</a></p>
                        <p class="p22">¥580.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png5.png" alt=""></a>
                        <p class="p11"><a href="">不锈钢夹子</a></p>
                        <p class="p22">¥120.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li class="l1"><a href="查看详情.html"><img src="../images/png7.png" alt=""></a>
                        <p class="p11"><a href="">黑桃自然花香蜡烛</a></p>
                        <p class="p22">¥580.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png8.png" alt=""></a>
                        <p class="p11"><a href="">简单大容量瓷碗</a></p>
                        <p class="p22">¥150.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png9.png" alt=""></a>
                        <p class="p11"><a href="">不锈钢汤勺</a></p>
                        <p class="p22">¥120.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                    <li><a href="查看详情.html"><img src="../images/png10.png" alt=""></a>
                        <p class="p11"><a href="">不锈钢大号汤勺</a></p>
                        <p class="p22">¥120.00</p>
                        <a href="" class="a11"><div class="d11">查看详情</div></a>
                    </li>
                </div>
            </ul>
        </div>

    </div>
    <div class="outer3">
        <p class="p1"><a href="">全球大牌优选，买手用心挑选</a></p>
        <div class="inter1">
            <p>全球好货 原装正品 海外直邮 自有保税仓</p>
        </div>
        <div class="inter2">
            <div class="left">
                <a href=""><img src="../images/pic4.jpg" alt=""></a>
                <span class="border1"></span>
            </div>
            <div class="mid">
                <div class="mid1">
                    <a href=""><img src="../images/pic5.jpg" alt=""></a>
                    <span class="border2"></span>
                </div>
                <div class="mid2">
                    <a href=""><img src="../images/pic6.jpg" alt=""></a>
                    <span class="border3"></span>
                </div>
            </div>
            <div class="right">
                <a href=""><img src="../images/pic7.jpg" alt=""></a>
                <span class="border4"></span>
            </div>
        </div>
        <div class="inter3">
            <ul>
                <li>
                    <a href="" class="a1"><img src="../images/pic8.png" alt=""></a>
                    <a href=""><p>自然生活，精选用料</p></a>
                </li>
                <li>
                    <a href="" class="a1"><img src="../images/pic9.png" alt=""></a>
                    <a href=""><p>源点生活</p></a>
                </li>
                <li>
                    <a href="" class="a1"><img src="../images/pic10.png" alt=""></a>
                    <a href=""><p>puree好设计好生活</p></a>
                </li>
                <li>
                    <a href="" class="a1"><img src="../images/pic11.png" alt=""></a>
                    <a href=""><p>家居精品之选</p></a>
                </li>
                <li class="last">
                    <a href="" class="a1"><img src="../images/pic12.png" alt=""></a>
                    <a href=""><p>木香，手工制作</p></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="outer4">
        <p class="p1"><a href="">良品体验</a></p>
        <div class="inter1">
            <p>用户反馈，是我们改进的目标</p>
        </div>
        <div class="inter2">
            <ul>
                <li>
                    <div class="top1">
                        <a href=""><img src="../images/end1.png" alt=""></a>
                    </div>
                    <div class="bottom">
                        <div class="bottom1">
                            <b>天草陶石咖啡杯套装</b>
                            <span class="s1">¥299</span>
                            <div class="p2">
                                <p>使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化。</p>
                            </div>
                            <span class="s2">alice 2016-12-16 09:59</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top2">
                        <a href=""><img src="../images/end2.png" alt=""></a>

                    </div>
                    <div class="bottom">
                        <div class="bottom1">
                            <b>骨瓷印花餐具</b>
                            <span class="s1">¥699</span>
                            <div class="p2">
                                <p>使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化。</p>
                            </div>
                            <span class="s2">王先生 2016-12-17 09:59</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top3">
                        <a href=""><img src="../images/end3.png" alt=""></a>
                    </div>
                    <div class="bottom">
                        <div class="bottom1">
                            <b>黑色帆布双肩包</b>
                            <span class="s1">¥299</span>
                            <div class="p2">
                                <p>挺好的，尺码真的很正！背部拉链设计，放心出行，为短途商旅贴心设计。防水尼龙与牛皮的优雅结合，轻便小巧，简约百搭，防水尼龙，可折叠双肩背包。</p>
                            </div>
                            <span class="s2">爱丽丝 2016-12-10 07:59</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top4">
                        <a href=""><img src="../images/end4.png" alt=""></a>
                    </div>
                    <div class="bottom">
                        <div class="bottom1">
                            <b>桌面书籍收纳组合套装</b>
                            <span class="s1">¥199</span>
                            <div class="p2">
                                <p>挺好的，特别暖，尺码真的很正！就是靴口太小了，要提着穿，心好累哦，本来都是一脚蹬来着，不过看在你这么暖的份上就原谅你了哈哈哈。真的可以媲美油叽叽，很开心。------三石是我男神</p>
                            </div>
                            <span class="s2">小蚂蚁 2016-12-15 08:00</span>
                        </div>
                    </div>
                </li>
            </ul>


        </div>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  data() {
      return {
          carouselList :[],
          bestSale: []
      }
  },
  created () {
      this.$axios.get('banner_goods/all')
      .then((res) => {
          this.carouselList = res.data
        //   console.log(res)
      })

      this.$axios.get('goods_detail/bestSale')
      .then((res) => {
          this.bestSale = res.data.data
                              console.log(this.bestSale)

          
      })
  }
}
</script>

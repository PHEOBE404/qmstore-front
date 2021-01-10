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


    </div>

    <div class="box">
        <div class="box2">
            <ul>

                <li v-for="item in activityGoods" :key="item.goodsId">
                         <router-link :to="'/detail?id='+ item.goodsId"><img :src= item.picUrl></router-link>
                          <router-link :to="'/detail?id='+ item.goodsId"><p>{{item.goodsName}}</p> </router-link>
                       <span>¥{{item.goodsPrice}}</span>
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
          bestSale: [],
          activityGoods: []
      }
},    
  created () {
      this.$axios.get('banner_goods/all')
      .then((res) => {
          this.carouselList = res.data
        //   console.log(res)
      }),

      this.$axios.get('goods_detail/bestSale')
      .then((res) => {
          this.bestSale = res.data.data
      }),

      this.$axios.get('goods_detail/activityGoods')
      .then((res) => {
          console.log(res)
          this.activityGoods = res.data.data
          this.activityGoods = this.activityGoods.slice(0,10)
      })
  }
}
</script>

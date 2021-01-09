<template>
  <div class="detail">
    <div class="outer10">
      <div class="inter1">
        <div class="inter11">
          <a href="a青竹总界面.html">首页</a> > <a href="">所有商品</a> >
          <span>{{goodsName}}</span>
        </div>
      </div>
      <div class="inter2">
        <div class="inter21">
          <a href=""><img :src= picUrl alt="" height="450px" width="450px" /></a>
          <a href="" class="small"><img :src= picUrl alt="" /></a>
        </div>
        <div class="inter22">
          <h1>{{goodsName}}</h1>
          <p>{{detailDesc}}</p>
          <div class="inter221">
            <span class="s1">￥</span>
            <span class="s2">{{goodsPrice}}</span>
            已售出<span class="s3">0</span>件
          </div>
          <h3>选择数量</h3>
          
          <div class="inter222">
              <template>
                <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max=storage label="描述文字">123123</el-input-number>
              </template>
            件
            <!-- <button class="car" @click="addToCart">加入购物车</button> -->
            <el-button type="warning" @click="addToCart">加入购物车</el-button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ProductDetail",
  components: {},
  data() {
    return {
      goodsName: '',
      goodsPrice: '',
      picUrl: '',
      detailDesc: '',
      num:1,
      storage: 255,
      alreadtSale: 123
    }
  },
  created() {
    this.$axios.get('goods_detail/find?id=' + this.$route.query.id)
      .then((res) => {
        this.goodsName = res.data[0].goodsName;
        this.picUrl = res.data[0].picUrl;
        this.goodsPrice = res.data[0].goodsPrice;
        this.detailDesc = res.data[0].detailDesc;
        console.log(res)
      }),

    this.$axios.get('order_state/getAlreadySale?goodsId=' + this.$route.query.id)
      .then((res) => {
        this.alreadtSale = res.data
        console.log(res)
      })

    
  },
  mounted() {
    // console.log("log1"+this.$route.path)
    // console.log("log2" + this.$route.params);
    // console.log("log3" + window.location.href );
    // console.log("log4"+ this.$route.query.id);
  },
  methods: {
    handleChange(value) {
      this.num = parseInt(value)

    },
    addToCart() {

      if(this.$store.getters.getStorage == null || this.$store.getters.getStorage.user.userId == null || this.$store.getters.getStorage.user.userId == ''){
        this.$router.push({ name: 'Login'})
      }else{
        this.$axios.post('shopCart/addShopCart', {
          userId: this.$store.getters.getStorage.user.userId,
          goodsId: this.$route.query.id,
          goodsNum: this.num

        }).then((res) => {
              if (res.data.code == 200) {
                this.$notify({
                  title: '成功',
                  message: '商品已经加入购物车',
                  type: 'success',
                  duration: 1000,
                });
              } else {
                console.log(res.data.error)
                alert(res.data.error);
              }
            });
      }
    }
  }
};
</script>

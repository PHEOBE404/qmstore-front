<template>
  <div class="home">
  <!-- <el-container> -->
    <!-- <el-header>Header -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>商品类别</span>
        </div>
          <div>
            <el-radio-group v-model="categoryCode" @change="radioChange()">
              <el-radio  :label="-1" border >所有商品</el-radio>
              <el-radio  :label="1" border>不锈钢</el-radio>
              <el-radio  :label="2" border>水泥</el-radio>
              <el-radio  :label="3" border>塑料</el-radio>
              <el-radio  :label="4" border>木制</el-radio>
              <el-radio  :label="5" border>陶瓷</el-radio>
              <el-radio  :label="0" border>其他</el-radio>
            </el-radio-group>
          </div>
      </el-card>

    <div v-for= "n in 3" :key="n">
      <div class="outer1" style="height：100%">
        <div class="inter1" style="height：100%">
              <div class="bbb" style="height：100%">
                <el-row type="flex" class="row-bg" justify="space-around">
                  <el-col v-if="(currentPage-1)*3 + (n-1) * 3 +1  < arrayLength " :span="6"><div class="grid-content bg-purple"><router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3 + (n-1) * 3 +1 - 1].goodsId"> <img  :src= dataArray[(currentPage-1)*3+(n-1)*3+1-1].picUrl alt="" :title=dataArray[(currentPage-1)*3+(n-1)*3+1-1].goodsName > </router-link>
                        <router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3+(n-1)*3+1-1].goodsId"> <p class="text1"  >{{dataArray[(currentPage-1)*3+(n-1)*3+1-1].goodsName}}</p></router-link>
                        <span class="text2" >¥{{dataArray[(currentPage-1)*3+(n-1)*3+1-1].goodsPrice}}</span> </div></el-col>

                  <el-col v-if="(currentPage-1)*3 + (n-1) * 3 + 2  < arrayLength " :span="6"><div class="grid-content bg-purple"><router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3 + (n-1) * 3 + 2 - 1].goodsId"> <img  :src= dataArray[(currentPage-1)*3+(n-1)*3+2-1].picUrl alt="" :title=dataArray[(currentPage-1)*3+(n-1)*3+2-1].goodsName > </router-link>
                        <router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3+(n-1)*3+2-1].goodsId"> <p class="text1"  >{{dataArray[(currentPage-1)*3+(n-1)*3+2-1].goodsName}}</p></router-link>
                        <span class="text2" >¥{{dataArray[(currentPage-1)*3+(n-1)*3+2-1].goodsPrice}}</span> </div></el-col>

                  <el-col v-if="(currentPage-1)*3 + (n-1) * 3 + 3   < arrayLength " :span="6"><div class="grid-content bg-purple"><router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3 + (n-1) * 3 +3 - 1].goodsId"> <img  :src= dataArray[(currentPage-1)*3+(n-1)*3+3-1].picUrl alt="" :title=dataArray[(currentPage-1)*3+(n-1)*3+3-1].goodsName > </router-link>
                        <router-link :to=" '/detail?id=' + dataArray[(currentPage-1)*3+(n-1)*3+3-1].goodsId"> <p class="text1"  >{{dataArray[(currentPage-1)*3+(n-1)*3+3-1].goodsName}}</p></router-link>
                        <span class="text2" >¥{{dataArray[(currentPage-1)*3+(n-1)*3+3-1].goodsPrice}}</span> </div></el-col>

                  </el-row>
              </div>
          </div>
        </div>
    </div>



    <el-pagination
      :current-page= currentPage
      background
      layout="prev, pager, next"
      :page-count ="pageCount"
      @current-change="handleCurrentChange"
      style="text-align: center;">
    </el-pagination>



  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Product',
  components: {
    
  },
  data() {
    return{
      categoryCode: -1,
      count: 1,
      loading: false,
      dataArray: [],
      index: 0,
      arrayLength: 0,
      currentPage: 1,
      pageCount: 40
    }
  }, 
   computed: {

    },
    created () {
      this.$axios.get('/goods_detail/getAllByCategory?categoryCode=' + this.categoryCode)
      .then((res) => {
        this.dataArray = res.data.data
        this.arrayLength = res.data.data.length
        this.pageCount = Math.ceil(this.arrayLength / 9)
        console.log(res);
      }),
      console.log(window.location.href )
            console.log(this.$route.path )
    },
    
  methods: {
    radioChange() {
      console.log("ttt")
      console.log(this.categoryCode);
      this.$axios.get('/goods_detail/getAllByCategory?categoryCode=' + this.categoryCode)
      .then((res) => {
        console.log(res.data)
        this.dataArray = res.data.data
        this.arrayLength = res.data.data.length
        this.pageCount = Math.ceil(this.arrayLength / 9)
        this.currentPage = 1
        })
      
    },
    
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(this.currentPage)
    }
  }
}
</script>

<style scoped>
.text1 {
    height: 20px;
    line-height: 20px;
    /* background-color: #795da3; */
    margin: 10px auto 4px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #000000;
}

.text2  {
    display: block;
    /* width: 100%; */
    text-align: center;
    font-size: 14px;
    color: #DB2E2E;
}

  .box-card {
    width: 1860px;
    margin-top: 50px;
  }

  
  /* .bg-purple {
    background: #d3dce6;
  } */
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

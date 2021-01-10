<template>
  <div class="home" style="margin-left:100px;margin-right:100px;margin-top:100px;margin-bottom:32px;background:white;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius:8px;">

    <el-table
      :data="orders"
      stripe
      style="width: 95%;">
      <el-table-column
        
        label="预览"
        width="128">
        <template slot-scope="scope">
            <img :src="scope.row.img" alt="" width="64" height="64">

      </template>
      </el-table-column>
      <el-table-column

        prop="id"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名">
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="total"
        label="总价">
      </el-table-column>
    </el-table>

  <el-row style="margin:16px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" >
    <span style="color:#409EFF;font-size:20px;margin:16px;">收货地址：</span>
    <el-col :span="24">
      <div class="grid-content">
            <div class="grid-content" style="margin:16px;">
              <el-select v-model="value" placeholder="请选择" >
                <el-option
                  selected="selected"
                  label="新建地址"
                  value="">
                </el-option>

                <el-option
                  v-for="addr in addrs"
                  :key="addr.address"
                  :label="addr.address"
                  :value="addr.address">
                  <span>姓名：{{addr.userName}}</span>
                  <span style="margin-left:24px;">电话：{{addr.userPhone}}</span>
                  <span style="margin-left:24px;;color: #8492a6; font-size: 13px;">地址：{{addr.address}}</span>

                </el-option>
              </el-select>
            </div>

            <el-row v-if="value==''" style="border-style:solid;border-width:1px;border-color:#DCDFE6;margin:24px;">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">

                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-input v-model="newAddress.newName" placeholder="请输入收件人姓名" style="margin:16px;"></el-input>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-input v-model="newAddress.newPhone" placeholder="请输入手机号" style="margin:16px;"></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-dark">
                        <el-input
                        type="textarea"
                          placeholder="请输入地址"
                          v-model="newAddress.address" style="margin:16px;">
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>

                </div>
              </el-col>
            </el-row>

      </div>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <!-- <span style="vertical-align:center;">总金额：{{totalAmount}}</span> -->
        <el-button type="danger" style="float:right;margin-right:16px;margin-bottom:16px;" @click="payment">支 付</el-button>
      </div>
    </el-col>
  </el-row>




 </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Accounting",
  components: {},
  mounted() {
    this.addrs = [];
    var userId = this.$store.getters.getStorage.user.userId;
    this.$axios.get("/user_address/selectUserAddressByUserId?userId="+userId).then((res)=>{
      console.log(res.data);
      this.addrs = res.data.data;
    });

    // this.orders = this.$parent.orders;
    console.log( this.$root.orders.length);
    for(let i=0;i<this.$root.orders.length;i++){
      console.log(this.$root.orders[i].userId);
      //todo 请求goodsdetail,请求
      this.$axios.get("/goods_detail/find?id="+this.$root.orders[i].goodsId).then((res)=>{
        console.log(res.data);
        let order={
          id:this.$root.orders[i].orderId,
          img:res.data[0].picUrl,
          name:res.data[0].goodsName,
          status:this.$root.orders[i].orderStateDesc,
          price:this.$root.orders[i].goodsPrice,
          count:this.$root.orders[i].goodsNum,
          total:this.$root.orders[i].goodsAmount,
          goodsId : this.$root.orders[i].goodsId
        }
        console.log("订单");
        console.log(order);
        this.orders=[...this.orders,order];
      });


    }

  },
  data() {
    return {
      orders: [],
      isCreateNewAddress:true,
      value:'',
      addrs:[],
      totalAmount:0,
      newAddress:{
        newName:'',
        newPhone:'',
        address:''
      }

    };
  },
  methods:{
    payment(){
      if(this.value == ''){
        for(let i = 0; i < this.orders.length; i++){
                      console.log(this.orders[i]);

          this.$axios.post("/order_state/updateOrderDetail",{
            orderId : this.orders[i].id,
            userId : this.$store.getters.getStorage.user.userId,
            goodsId : this.orders[i].goodsId,
            goodsNum : this.orders[i].count,
            goodsPrice : this.orders[i].price,
            goodsAmount : this.orders[i].total,
            orderStateCode : '03',
            orderStateDesc : 'paid_unfinished',
            address : this.newAddress.newName + ' ' + this.newAddress.newPhone + ' ' + this.newAddress.address
        })
        .then((res) => {
          console.log(res)
        })
        }
        console.log("address" + this.newAddress)
        this.$axios.post("user_address/insertUserAddress", { 
          userId : this.$store.getters.getStorage.user.userId,
          address : this.newAddress.address,
          userName : this.newAddress.newName,
          userPhone : this.newAddress.newPhone
        })
        .then((res) => {
          console.log(res)
        })
      }else{
          for(let i in this.orders){
          this.$axios.post("/order_state/updateOrderDetail",{
            orderId : this.orders[i].id,
            userId : this.$store.getters.getStorage.user.userId,
            goodsId : this.orders[i].goodsId,
            goodsNum : this.orders[i].count,
            goodsPrice : this.orders[i].price,
            goodsAmount : this.orders[i].total,
            orderStateCode : '03',
            orderStateDesc : 'paid_unfinished',
            address : this.value
        })
        .then((res) => {
          console.log(res)
        })
        }
      }
      
    }
  }
};
</script>


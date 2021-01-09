<template>
  <div class="home" style="padding-left:100px;padding-right:100px;padding-top:64px;padding-bottom:64px;">

    <el-table
      :data="orders"
      stripe
      style="width: 100%;margin-top:100px;">
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

  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">

            <div class="grid-content bg-purple-dark">
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

            <el-row v-if="value==''">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">

                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-input v-model="newAddress.newName" placeholder="请输入收件人姓名"></el-input>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-input v-model="newAddress.newPhone" placeholder="请输入手机号"></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入地址"
                    v-model="newAddress.address">
                  </el-input>
                </div>
              </el-col>
            </el-row>

      </div>
    </el-col>
  </el-row>

  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <span>总金额：{{totalAmount}}</span>
        <el-button type="danger" style="float:right;">支 付</el-button>
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
    this.$axios.post("/user_address/selectUserAddressByUserId?userId="+userId).then((res)=>{
      console.log(res.data);
      this.addrs = res.data.data;
    });

    // this.orders = this.$parent.orders;
    //console.log( this.$parent.orders);
    for(let i=0;i<this.$parent.orders.length;i++){
      console.log(this.$parent.orders[i].userId);
      //todo 请求goodsdetail,请求
      this.$axios.get("/goods_detail/find?id="+this.$parent.orders[i].goodsId).then((res)=>{
        console.log(res.data);
        let order={
          id:this.$parent.orders[i].userId,
          img:res.data[0].picUrl,
          name:res.data[0].goodsName,
          status:this.$parent.orders[i].orderStateDesc,
          price:this.$parent.orders[i].goodsPrice,
          count:this.$parent.orders[i].goodsNum,
          total:this.$parent.orders[i].goodsAmount
        }
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
  }
};
</script>


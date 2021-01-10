<template>
  <div class="order">
    <el-table :data="orders" stripe style="width: 100%">
      <el-table-column label="预览" width="128">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" width="64" height="64" />
        </template>
      </el-table-column>
      <el-table-column prop="id" label="订单号" width="180"> </el-table-column>
      <el-table-column prop="name" label="商品名"> </el-table-column>
      <el-table-column prop="status" label="订单状态"> </el-table-column>
      <el-table-column prop="price" label="单价"> </el-table-column>
      <el-table-column prop="count" label="数量"> </el-table-column>
      <el-table-column prop="total" label="总价"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="accounting(scope.$index, scope.row)"
            :disabled="scope.row.status != 'unpaid'"
            >支付</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="deleteOrder(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.orders = [];
    this.$axios
      .get(
        "/order_state/getAllOrderByUserId?userId=" +
          this.$store.getters.getStorage.user.userId
      )
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.data.length; i++) {
          this.$axios
            .get("/goods_detail/find?id=" + res.data.data[i].goodsId)
            .then((goods) => {
                console.log(goods.data[0].picUrl);
              let order = {
                id: res.data.data[i].orderId,
                img: goods.data[0].picUrl,
                name: goods.data[0].goodsName,
                status: res.data.data[i].orderStateDesc,
                price: res.data.data[i].goodsPrice,
                count: res.data.data[i].goodsNum,
                total: res.data.data[i].goodsAmount,
              };
              console.log(order);
              this.orders = [...this.orders, order];
            });
        }
      });
  },
  methods: {
    accounting(index, row) {
      console.log(index, row);
    //   var userId = this.$store.getters.getStorage.user.userId
    //   var goodsId = this.orders[index].id;
    //   var goodsNum = this.orders[index].count;
    //   var goodsPrice = this.orders[index].price;
    //   var goodsAmount = this.orders[index].total;
    // //   console.log(this.orders[index].discount);
    //   let order = {
    //     userId: userId,
    //     goodsId: goodsId,
    //     goodsNum: goodsNum,
    //     goodsPrice: goodsPrice,
    //     goodsAmount: goodsAmount,
    //   };
      this.$axios.get("/order_state/selectByOrderId?orderId="+row.id).then((res) => {
        console.log(res.data);
        
        console.log("parent",this.$root.orders);
        this.$root.orders = [res.data.data];
        this.$router.push({
          path: "/accounting",
        });
      });
    },
    deleteOrder(index, row) {
      console.log(index, row);
      this.$axios.get("/order_state/deleteByOrderId?orderId="+row.id).then((res)=>{
          console.log(res);
          this.orders.splice(index,1);
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
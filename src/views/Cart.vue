<template>
  <div class="outer9 cart" id="cart">
    <div class="inter1">
      <h1>购物车</h1>
    </div>
    <div class="inter2">
      <div class="inter21">
        <input
          type="checkbox"
          class="checkAll"
          v-model="isAllChecked"
          v-on:click="setAllCheck"
        /><span class="s1">全选</span> <span class="s2">商品名称</span
        ><span class="s3">单价</span> <span class="count">数量</span
        ><span class="total">小计</span><span class="del">操作</span>
      </div>

      <div class="inter22">
        <ul v-for="(item, index) in items" :key="(item, index)">
          <li>
            <input
              type="checkbox"
              class="check"
              v-model="item.checked"
              v-on:click="calculateAll(index)"
            />
            <img v-bind:src="item.img" alt="" />
            <span class="s1">{{ item.name }}</span>
            <span class="money">¥</span>
            <span class="price">{{ item.price }}</span>
            <input
              type="button"
              value="-"
              class="sub"
              v-on:click="minusCommodity(index)"
            />
            <span class="count">{{ item.count }}</span
            ><input
              type="button"
              value="+"
              class="add"
              v-on:click="plusCommodity(index)"
            />
            <span class="money1">¥</span
            ><span class="total">{{ item.total }}</span>
            <span class="del" v-on:click="deleteItem(index)">删除</span>
          </li>
        </ul>
      </div>
      <div class="inter23">
        <div class="picture">
          <img src="../images/购物车.png" alt="" />
        </div>
        <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
        <a href=""><span>去逛逛</span></a>
      </div>
    </div>
    <div class="inter3">
      <div class="inter31">
        <div class="last">
          <!-- TODO 下面这个链接需要增加订单生成再跳转 -->
          <el-button type="danger" @click="generateOrder">确认结算</el-button>
        </div>
        <!-- <input type="checkbox" class="checkAll"><span class="s1">全选</span>
                <span class="ss1">删除</span><span class="ss2">清除下架商品</span> -->
        <div class="foot">
          已选<span class="totalCount">{{ count }}</span
          >件 合计(不含运费) : <span class="totalPrice">¥{{ total }}</span
          >元<br />
          <span class="ss3"
            >已优惠 : <span class="ss4"> ¥{{ discount }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Cart",
  components: {},
  mounted() {
    console.log(this.$store.getters.getStorage.user.userId);
    var userId = this.$store.getters.getStorage.user.userId;
    this.$axios
      .get("shopCart/getShopCartByUser?userId=" + userId)
      .then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          for (let i = 0; i < res.data.data.length; i++) {
            //TODO 对每一个货物获取goodsid，购买数量 ，再请求goodsId对应的goods，返回图片，名称，单价，组成items条目
            console.log(res.data.data[i].goodsId);
            const cnt = res.data.data[i].goodsNum;
            this.$axios
              .get("/goods_detail/find?id=" + res.data.data[i].goodsId)
              .then((res) => {
                console.log(res.data[0]);
                let item = {
                  id: res.data[0].goodsId,
                  img: res.data[0].picUrl,
                  name: res.data[0].goodsName,
                  price: res.data[0].goodsPrice,
                  count: cnt,
                  discount: res.data[0].goodsDiscount,
                  total: cnt * res.data[0].goodsPrice,
                  checked: false,
                };
                this.items = [...this.items, item];
              });
          }
        }
      });
  },
  data() {
    return {
      isAllChecked: false,
      total: 0,
      discount: 0,
      count: 0,
      items: [],
    };
  },
  methods: {
    setAllCheck: function () {
      console.log(this.isAllChecked);
      if (this.isAllChecked) {
        this.isAllChecked = false;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].checked = false;
        }
      } else {
        this.isAllChecked = true;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].checked = true;
        }
      }
      this.calculateAll();
    },
    calculateAll: function (id = null) {
      if (id != null) {
        this.items[id].checked = true;
      }
      var cnt = 0;
      var total_price = 0;
      var total_discount = 0;
      for (var i = 0; i < this.items.length; i++) {
        if (!this.items[i].checked) continue;

        cnt += this.items[i].count;
        total_price += this.items[i].total;
        total_discount += this.items[i].total * (1.0 - this.items[i].discount);
      }
      this.total = total_price;
      this.count = cnt;
      this.discount = total_discount;
    },
    setItemChecked: function () {},
    updateShopCart(index) {
      var userId = this.$store.getters.getStorage.user.userId;
      var goodsId = this.items[index].id;
      var goodsNum = this.items[index].count;
      console.log(userId + " " + goodsId + " " + goodsNum);
      this.$axios
        .post("/shopCart/updateShopCart", {
          userId: userId,
          goodsId: goodsId,
          goodsNum: goodsNum,
        })
        .then((res) => {
          console.log(res);
        });
    },
    plusCommodity: function (index) {
      this.items[index].count += 1;
      this.items[index].total =
        this.items[index].price * this.items[index].count;
      this.calculateAll();
      this.updateShopCart(index);
    },
    minusCommodity: function (index) {
      if (this.items[index].count > 0) {
        this.items[index].count -= 1;
        this.items[index].total =
          this.items[index].price * this.items[index].count;
        this.calculateAll();
        let userId = this.$store.getters.getStorage.user.userId;
        this.$axios
          .post("/shopCart/updateShopCart", {
            userId: userId,
            goodsId: this.items[index].id,
            goodsNum: this.items[index].count,
          })
          .then((res) => {
            console.log(res);
          });
      }
    },
    deleteItem: function (index) {
      this.$axios
        .get(
          "/shopCart/deleteShopCartByUserAndGoodsId?userId=" +
            this.$store.getters.getStorage.user.userId +
            "&goodsId=" +
            this.items[index].id
        )
        .then((res) => {
          console.log(res);
        });
      this.items.splice(index, 1);
      this.calculateAll();
    },
    generateOrder() {
      this.$parent.orders = [];
      var userId = this.$store.getters.getStorage.user.userId;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].checked) {
          var goodsId = this.items[i].id;
          var goodsNum = this.items[i].count;
          var goodsPrice = this.items[i].price;
          var goodsAmount = goodsNum * goodsPrice * this.items[i].discount;
          let order = {
              "userId": userId,
              "goodsId": goodsId,
              "goodsNum": goodsNum,
              "goodsPrice": goodsPrice,
              "goodsAmount": goodsAmount,
          }
          console.log(order);
          this.$axios
            .post("/order_state/insertOrderDetail", order)
            .then((res) => {
              console.log(res.data.data);
              this.$parent.orders = [...this.$parent.orders, res.data.data];
            });
        }
      }
      this.$router.push({
        path:"/accounting"
      });
    },
  },
};
</script>

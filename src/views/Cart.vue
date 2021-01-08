<template>
    <div class="outer9 cart" id="cart">
        <div class="inter1">
            <h1>购物车</h1>
        </div>
        <div class="inter2" >
            <div class="inter21">
                <input type="checkbox" class="checkAll" v-model="isAllChecked" v-on:click="setAllCheck"><span class="s1">全选</span>
                <span class="s2">商品名称</span><span class="s3">单价</span>
                <span class="count">数量</span><span class="total">小计</span><span class="del">操作</span>
            </div>

            <div class="inter22">
                <ul v-for="(item, index) in items" :key="(item,index)">
                    <li>
                        <input type="checkbox" class="check" v-model="item.checked" v-on:click="calculateAll(index)"><img v-bind:src="item.img" alt="">
                        <span class="s1">{{item.name}}</span><span class="money">¥</span>
                        <span class="price">{{item.price}}</span><input type="button" value="-" class="sub" v-on:click="minusCommodity(index)">
                        <span class="count">{{item.count}}</span><input type="button" value="+" class="add" v-on:click="plusCommodity(index)">
                        <span class="money1">¥</span><span class="total">{{item.total}}</span>
                        <span class="del" v-on:click="deleteItem(index)">删除</span>
                    </li>
                </ul>
            </div>
            <div class="inter23">
                <div class="picture">
                    <img src="../images/购物车.png" alt="">
                </div>
                <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
                <a href=""><span>去逛逛</span></a>
            </div>
        </div>
        <div class="inter3">
            <div class="inter31">
                <div class="last">
                    <a href="./青竹登录.html">确认结算</a>
                </div>
                <!-- <input type="checkbox" class="checkAll"><span class="s1">全选</span>
                <span class="ss1">删除</span><span class="ss2">清除下架商品</span> -->
                <div class="foot">
                    已选<span class="totalCount">{{count}}</span>件
                    合计(不含运费) : <span class="totalPrice">¥{{total}}</span>元<br>
                    <span class="ss3">已优惠 : <span class="ss4"> ¥0</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Cart",
  components: {},
    mounted() {
    console.log(this.$store.user);
    axios.get("http://localhost:8080/shopCart/getShopCartByUser").then((res) => {
      this.splice.splice(0, this.data.length);
      for (let i = 0; i < res.data.length; i++) {
        this.items = [
          ...this.items,
          {
            // img: res.data[i].img,
            // name: res.data[i].name,
            // type: res.data[i].type,
            // price: res.data[i].price,
          },
        ];
      }
    });
  },
  data() {
    return {
      isAllChecked: false,
      total: 0,
      count: 0,
      items: [
        {
          img: "../images/s1.png",
          name: "经典系列红色时钟",
          price: 580,
          count: 1,
          total: 580,
          checked: false,
        },
        {
          img: "../images/s2.png",
          name: "便携简约清扫扫帚",
          price: 580,
          count: 1,
          total: 580,
          checked: false,
        },
        {
          img: "../images/s3.png",
          name: "黑色陶瓷研磨器皿",
          price: 150,
          count: 1,
          total: 150,
          checked: false,
        },
      ],
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
      for (var i = 0; i < this.items.length; i++) {
        if (!this.items[i].checked) continue;

        cnt += this.items[i].count;
        total_price += this.items[i].total;
      }
      this.total = total_price;
      this.count = cnt;
    },
    setItemChecked: function () {},
    plusCommodity: function (index) {
      this.items[index].count += 1;
      this.items[index].total =
        this.items[index].price * this.items[index].count;
      this.calculateAll();
    },
    minusCommodity: function (index) {
      if (this.items[index].count > 0) {
        this.items[index].count -= 1;
        this.items[index].total =
          this.items[index].price * this.items[index].count;
        this.calculateAll();
      }
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
      this.calculateAll();
    },
  },
};
</script>

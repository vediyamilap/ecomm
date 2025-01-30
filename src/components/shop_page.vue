<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-6 ps-0">
        <img
          src="../assets/images/shop/13._PLP_-_NEW_IN_3_.avif"
          alt="Shop"
          class="img-fluid"
        />
      </div>
      <div class="col-6">
        <h1 class="font-canela">Shop</h1>
        <p>
          A considered edit of new style solutions every month. <br />
          Shop Now
        </p>
        <div class="container p-5 pt-0 ps-0">
          <a href="#" class="shopspecific font-medium">Dresses</a>
          <a href="#" class="shopspecific font-medium">Occasion Dresses</a>
          <a href="#" class="shopspecific font-medium">Tops</a>
          <a href="#" class="shopspecific font-medium">Trousers</a>
          <a href="#" class="shopspecific font-medium">Jeans</a>
          <a href="#" class="shopspecific font-medium">Dresses</a>
          <a href="#" class="shopspecific font-medium">Occasion Dresses</a>
          <a href="#" class="shopspecific font-medium">Tops</a>
          <a href="#" class="shopspecific font-medium">Trousers</a>
          <a href="#" class="shopspecific font-medium">Jeans</a>
          <a href="#" class="shopspecific font-medium">Dresses</a>
          <a href="#" class="shopspecific font-medium">Occasion Dresses</a>
          <a href="#" class="shopspecific font-medium">Tops</a>
          <a href="#" class="shopspecific font-medium">Trousers</a>
          <a href="#" class="shopspecific font-medium">Jeans</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <div class="d-flex">
    <div class="me-5">
      <select v-model="selectedSize">
        <option value="">All Sizes</option>
        <option v-for="x in sizes" :key="x">
          {{ x }}
        </option>
      </select>
    </div>

    <div>
      <select v-model="selectedColor">
        <option value="">All Colors</option>
        <option v-for="x in colors" :key="x">
          {{ x }}
        </option>
      </select>
    </div>
  </div>

  <div class="container-fluid mt-5">
    <div class="row p-4">
      <!-- product start -->
      <div class="col-md-4 p-1 mb-5" v-for="x in filteredProducts" :key="x.id">
        <img :src="x.img" :alt="x.name" class="img-fluid" />
        <a href="#" class="hpills">{{ x.name }}</a
        ><br />
        <p>$ {{ x.price }}</p>
      </div>
      <!-- product end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Merino Cashmere Rugby Stripe Shirt",
          size: "M",
          color: "Red",
          price: 20,
          img: require("@/assets/images/shop/02.feb_cam_2_m016_ss25kn300_ss25tw314r_ss25acc517_ss25sh549_361.avif"),
        },
        {
          id: 2,
          name: "Double Buckle Clog",
          size: "L",
          color: "Brown",
          price: 40,
          img: require("@/assets/images/shop/accs_feb_2_ss25sh6040000560_2_1_1.avif"),
        },
        {
          id: 3,
          name: "Oversized Blazer + Pleat Front",
          size: "S",
          color: "Red",
          price: 60,
          img: require("@/assets/images/shop/02.feb_32_m002_aw24jd123_aw24acc476_ss25sh605_107_1.avif"),
        },
        {
          id: 4,
          name: "Travel Tailoring Contrast Stitch Midi Dress",
          size: "M",
          color: "Red",
          price: 15,
          img: require("@/assets/images/shop/02.feb_cam_5_ss25wd331_ss25sh606_ss25acc502_1709.avif"),
        },
        {
          id: 5,
          name: "Washed Denim Midi Dress",
          size: "L",
          color: "White",
          price: 80,
          img: require("@/assets/images/shop/02.feb_36_m002_ss25wd243_ss25sh605_aw24acc476_075.avif"),
        },
      ],
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue", "Black", "White"],
      selectedSize: "",
      selectedColor: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((x) => {
        const matchesSize = this.selectedSize
          ? x.size === this.selectedSize
          : true;
        const matchesColor = this.selectedColor
          ? x.color === this.selectedColor
          : true;
        return matchesSize && matchesColor;
      });
    },
  },
};
</script>

<style>
.shopspecific {
  color: black;
  text-decoration: none;
  border: 1px solid lightgrey;
  padding: 10px;
  margin: 8px;
  margin-left: 0px;
  display: inline-flex;
}
.text-grey {
  color: #717171;
}
</style>

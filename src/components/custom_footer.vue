<template>
  <div class="d-flex justify-content-around">
    <div>
      <h3>Size</h3>
      <select v-model="selectedSize">
        <option value="">All Sizes</option>
        <option v-for="x in sizes" :key="x">{{ x }}</option>
      </select>
    </div>
    <div>
      <h3>Color</h3>
      <select v-model="selectedColor">
        <option value="">All Colors</option>
        <option v-for="x in colors" :key="x">
          {{ x }}
        </option>
      </select>
    </div>
  </div>
  <ul>
    <li v-for="product in filteredProducts" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>Size: {{ product.size }}</p>
      <p>Color: {{ product.color }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "T-Shirt", size: "M", color: "Red" },
        { id: 2, name: "Jeans", size: "L", color: "Blue" },
        { id: 3, name: "Jacket", size: "S", color: "Black" },
        { id: 4, name: "Hat", size: "M", color: "Red" },
        { id: 5, name: "Shoes", size: "L", color: "White" },
      ],
      sizes: ["S", "M", "L"],
      colors: ["Red", "Blue", "Black", "White"],
      selectedSize: "",
      selectedColor: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) =>
          (!this.selectedSize || product.size === this.selectedSize) &&
          (!this.selectedColor || product.color === this.selectedColor)
      );
    },
  },
};
</script>

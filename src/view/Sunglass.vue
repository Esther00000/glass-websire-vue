<script setup>
import productLayout from "./layout/ProductLayout.vue";
import { ref } from "vue";

// 圖片引入
import bannerImg1 from "@/assets/images/product-header-3.png";
import bannerImg2 from "@/assets/images/product-header-4.png";
import bannerImg1Sm from "@/assets/images/product-header-sm-3.png";
import bannerImg2Sm from "@/assets/images/product-header-sm-4.png";

import productImg1 from "@/assets/images/product-8.png";
import productImg2 from "@/assets/images/product-9.png";
import productImg3 from "@/assets/images/product-1.png";
import productImg4 from "@/assets/images/product-2.png";
import productImg5 from "@/assets/images/product-3.png";
import productImg6 from "@/assets/images/product-4.png";

let bannerImgList = ref({
  bannerImg: [bannerImg1, bannerImg2],
  bannerImgSm: [bannerImg1Sm, bannerImg2Sm],
});
let bannerTitle = ref({
  enTitle: "2020 NEW COLLECTION",
  chTitle: "賽璐珞鈦金屬混合鏡框",
});
let productItems = ref([
  {
    path: productImg1,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
  {
    path: productImg2,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
  {
    path: productImg3,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
  {
    path: productImg4,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
  {
    path: productImg5,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
  {
    path: productImg6,
    productName: "BJ41600S",
    price: 3490,
    glassColor: ["#5F3E2D", "#B75929"],
  },
]);
</script>

<template>
  <productLayout
    :bannerImgList="bannerImgList"
    :bannerTitle="bannerTitle"
    :productItems="productItems"
  />
</template>

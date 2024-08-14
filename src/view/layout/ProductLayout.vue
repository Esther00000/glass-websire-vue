<script setup>
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 接收data
const props = defineProps(["bannerImgList", "bannerTitle", "productItems"]);
let { bannerImgList, bannerTitle, productItems } = props;
let { bannerImg, bannerImgSm } = bannerImgList;
let { enTitle, chTitle } = bannerTitle;
productItems = productItems.map((item) => {
  item.price = formatNumberWithCommas(item.price);
  return item;
});
</script>

<template>
  <!-- banner -->
  <div
    class="product-catagory-bannner"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="500"
  >
    <div
      class="product-catagory-bannner-img bannner-img"
      v-for="img in bannerImg"
    >
      <img :src="img" alt="optical product header" />
    </div>
    <!-- sm banner -->
    <div
      class="product-catagory-bannner-img bannner-img-sm"
      v-for="img in bannerImgSm"
    >
      <img :src="img" alt="oproduct header" />
    </div>
  </div>
  <!-- product list -->
  <div
    class="container"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="500"
  >
    <div class="productList-container">
      <!-- title -->
      <div class="category-title">
        <h2
          class="Roboto fw-m category-title-en"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          {{ enTitle }}
        </h2>
        <h2
          class="category-title-ch"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          {{ chTitle }}
        </h2>
      </div>
      <!-- products -->
      <div class="row product-card-gap">
        <div
          class="col-3 col-md-6 col-sm-12"
          v-for="(product, i) in productItems"
          :key="i"
          data-aos="fade-up"
          data-aos-delay="(i + 1) * 100 + 500"
          data-aos-duration="500"
        >
          <div class="product-card">
            <div class="product-card-img">
              <img :src="product.path" :alt="product.productName" />
            </div>
            <div class="product-card-info">
              <p class="Roboto">{{ product.productName }}</p>
              <p class="Roboto text-primary-red fw-m">NTD{{ product.price }}</p>
            </div>
            <div class="product-card-color-box">
              <div
                class="color-box"
                v-for="color in product.glassColor"
                :key="color"
                :style="{ backgroundColor: color }"
              ></div>
              <div class="color-box"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div class="pagination-box">
        <ul class="pagination">
          <li class="pagination-item"><a href="#">上一頁</a></li>
          <li class="pagination-item" v-for="i in 5">
            <a href="#">{{ i }}</a>
          </li>
          <li class="pagination-item">
            <a href="#">下一頁</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

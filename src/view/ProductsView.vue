<script setup>
import { ref } from "vue";
let productNav = ref([
  { id: 1, type: "OPTICAL", pathName: "Optical" },
  { id: 2, type: "SUNGLASSES", pathName: "Sunglass" },
  { id: 3, type: "FUNCTIONAL", pathName: "Functional" },
]);
</script>
<template>
  <nav
    class="nav-container"
    data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="500"
  >
    <div class="container">
      <ul class="product-nav">
        <li class="product-nav-item" v-for="item in productNav" :key="item.id">
          <router-link
            class="product-nav-link"
            active-class="product-nav-link-active"
            :to="{ name: item.pathName }"
            ><span>{{ item.type }}</span></router-link
          >
        </li>
      </ul>
    </div>
    <ul class="product-nav-mobile">
      <li class="product-nav-item" v-for="item in productNav" :key="item.id">
        <router-link
          class="product-nav-link"
          active-class="product-nav-link-active"
          :to="{ name: item.pathName }"
          ><span>{{ item.type }}</span></router-link
        >
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";

let navlist = ref([
  { title: "系列鏡框", path: "/products", name: "Products" },
  { title: "門市據點", path: "/stores", name: "Stores" },
  { title: "部落格", path: "/blog", name: "Blog" },
  { title: "常見問題", path: "/question", name: "Question" },
]);
</script>

<template>
  <header class="header wow bounceInUp">
    <div class="container">
      <div class="navbar">
        <!-- logo -->
        <div class="logo nav-block">
          <router-link :to="{ name: 'Home' }" title="眼鏡logo">
            <img src="@/assets/images/logo-white.png" alt="header logo" />
          </router-link>
        </div>
        <!-- nav-list pc/pad-->
        <ul class="nav-list nav-block">
          <li class="nav-item" v-for="nav in navlist" :key="nav.name">
            <router-link :to="nav.path"
              ><span>{{ nav.title }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- nav-list mobile -->
    <ul class="nav-list-mobile">
      <li class="nav-item" v-for="nav in navlist" :key="nav.name">
        <router-link :to="nav.path"
          ><span>{{ nav.title }}</span></router-link
        >
      </li>
    </ul>
  </header>
</template>

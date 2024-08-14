<script setup>
import { ref } from "vue";

let navlist = ref([
  { title: "首頁", path: "/", name: "Home" },
  { title: "系列鏡框", path: "/products", name: "Products" },
  { title: "門市據點", path: "/stores", name: "Stores" },
  { title: "部落格", path: "/blog", name: "Blog" },
  { title: "常見問題", path: "/question", name: "Question" },
]);
</script>

<template>
  <footer>
    <div class="bg-primary">
      <div class="container">
        <div class="footer-content">
          <div class="footer-top">
            <ul class="footer-nav-list">
              <li class="nav-item" v-for="nav in navlist" :key="nav.name">
                <router-link class="nav-link" :to="nav.path"
                  ><span class="hover-underline">{{ nav.title }}</span>
                </router-link>
              </li>
            </ul>
            <ul class="social-media">
              <li class="nav-item">
                <img src="@/assets/images/ic-social-fb.png" alt="fb" />
              </li>
              <li class="nav-item">
                <img src="@/assets/images/ic_social_ig.png" alt="ig" />
              </li>
              <li class="nav-item">
                <img src="@/assets/images/ic_social_line.png" alt="line" />
              </li>
            </ul>
          </div>
          <div class="footer-middle">
            <ul class="footer-info">
              <li class="footer-info-item">
                <a href="tel:0800000000" class="link-white"
                  ><span
                    class="material-symbols-outlined"
                    style="vertical-align: middle"
                  >
                    call </span
                  >0800-000-000</a
                >
              </li>
              <li class="footer-info-item">
                <a href="mailto:glasses@business.com" class="link-white"
                  ><span
                    class="material-symbols-outlined"
                    style="vertical-align: middle"
                  >
                    mail </span
                  >glasses@business.com</a
                >
              </li>
            </ul>
            <ul class="social-media">
              <li class="nav-item">
                <a href="#"
                  ><img src="@/assets/images/ic-social-fb.png" alt="fb"
                /></a>
              </li>
              <li class="nav-item">
                <a href="#"
                  ><img src="@/assets/images/ic_social_ig.png" alt="ig"
                /></a>
              </li>
              <li class="nav-item">
                <a href="#"
                  ><img src="@/assets/images/ic_social_line.png" alt="line"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-copyright">
          <p class="Roboto">Copyright © 2020 Glasses.All rights reserved.</p>
          <ul>
            <li>
              <p>隱私權政策</p>
            </li>
            <li>
              <p>服務條款</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

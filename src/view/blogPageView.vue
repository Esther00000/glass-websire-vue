<template>
  <section>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }" class="breadcrumb-link"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }" class="breadcrumb-link"
              >部落格</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }" class="breadcrumb-link"
              >特別企劃</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }" class="breadcrumb-link active"
              >情人特別企劃</router-link
            >
          </li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-8 col-md-9 col-sm-12 blog-page-left">
          <ul class="blog-page-left-tags">
            <li>
              <span class="fw-bold fs-24 Roboto text-primary-red"
                >#special</span
              >
            </li>
            <li>
              <span class="fw-bold fs-24 Roboto text-primary-red">#event</span>
            </li>
          </ul>
          <div class="blog-page-left-title">
            <h2>情人特別企劃</h2>
            <p>2020 Valentine’s Special</p>
          </div>
          <div class="blog-page-left-cards">
            <div
              class="blog-page-card"
              v-for="blogItem in blogPageList"
              :key="blogItem.id"
            >
              <div class="blog-page-card-img">
                <img :src="blogItem.imgUrl" alt="blogpage img" />
              </div>
              <div class="blog-page-card-paragh">
                <p>
                  {{ blogItem.content }}
                </p>
              </div>
            </div>
          </div>
          <div class="blog-page-left-links">
            <ul class="blog-page-social-link">
              <li>
                <p class="fw-bold">Share</p>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/logo-facebook.png" alt="facebook"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/logo-instagram.png"
                    alt="instagram"
                /></a>
              </li>
            </ul>
            <div class="blog-change-btns">
              <router-link :to="{ name: 'Home' }" class="btn">
                <span class="material-symbols-outlined"> arrow_back </span>
                <span class="blog-change-text">上一篇：街頭潮人訪問 1</span>
              </router-link>
              <router-link :to="{ name: 'Home' }" class="btn">
                <span class="blog-change-text">下一篇：街頭潮人訪問 2</span>
                <span class="material-symbols-outlined"> arrow_right_alt </span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-3 col-sm-12 blog-page-right">
          <h5 class="text-primary-red fs-32 fw-bold">
            <span class="material-symbols-outlined text-primary-red fs-32">
              label </span
            >TAGS
          </h5>
          <ul class="blog-page-right-tags">
            <li>
              <p>#special</p>
            </li>
            <li>
              <p>#sale</p>
            </li>
            <li>
              <p>#new_item</p>
            </li>
            <li>
              <p>#interview</p>
            </li>
            <li>
              <p>#trivia</p>
            </li>
            <li>
              <p>#news</p>
            </li>
            <li>
              <p>#event</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import blogPageImg1 from "../assets/images/blogpage-1.png";
import blogPageImg2 from "../assets/images/blogpage-2.png";
import blogPageImg3 from "../assets/images/blogpage-3.png";
import blogPageImg4 from "../assets/images/blogpage-4.png";

let blogPageList = ref([
  {
    id: 1,
    imgUrl: blogPageImg1,
    content:
      "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
  },
  {
    id: 2,
    imgUrl: blogPageImg2,
    content:
      "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
  },
  {
    id: 3,
    imgUrl: blogPageImg3,
    content:
      "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
  },
  {
    id: 4,
    imgUrl: blogPageImg4,
    content:
      "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！",
  },
]);
</script>

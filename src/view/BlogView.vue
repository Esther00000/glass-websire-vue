<template>
  <nav class="blog-nav">
    <div class="container">
      <div class="blog-nav-box">
        <ul class="blog-nav-list">
          <li class="blog-nav-item">
            <router-link
              class="blog-nav-link hover-underline"
              :to="{ name: 'Blog' }"
              >最新消息</router-link
            >
          </li>
          <li class="blog-nav-item">
            <router-link
              class="blog-nav-link hover-underline"
              :to="{ name: 'Blog' }"
              >特別企劃</router-link
            >
          </li>
          <li class="blog-nav-item">
            <router-link
              class="blog-nav-link hover-underline"
              :to="{ name: 'Blog' }"
              >新品上市</router-link
            >
          </li>
          <li class="blog-nav-item">
            <router-link
              class="blog-nav-link hover-underline"
              :to="{ name: 'Blog' }"
              >鏡框小知識</router-link
            >
          </li>
        </ul>
        <form class="search-box">
          <input type="text" class="input-box" ref="inputBox" />
          <button
            type="button"
            class="search-btn"
            ref="searchBtn"
            @click="openInputBox"
          >
            <span class="material-symbols-outlined"> search </span>
          </button>
          <button
            type="button"
            class="search-close-btn"
            ref="searchCloseBtn"
            @click="openInputBox"
          >
            <span class="material-symbols-outlined"> close </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
  <section>
    <div class="container">
      <h3 class="section-title-2">部落格</h3>
      <div class="blog-info-box" v-if="blogList">
        <div class="row blog-row" v-for="blog in blogList" :key="blog.title">
          <div class="col-6 col-sm-12">
            <div class="blog-img-box">
              <img :src="blog.imgUrl" :alt="blog.title" />
            </div>
          </div>
          <div class="col-6 col-sm-12">
            <div class="blog-content-box">
              <div class="blog-content-title" ref="blogContent">
                <h5>{{ blog.title }}</h5>
                <div class="blog-content-title-detail">
                  <p class="fw-m fs-20 Roboto">{{ blog.enTitle }}</p>
                  <p class="Roboto fs-16 fw-m">{{ blog.date }}</p>
                </div>
              </div>
              <div class="blog-content-content">
                <p class="text-muted-gray fs-20">
                  {{ blog.content }}
                  <router-link
                    :to="{ name: 'blogPage' }"
                    href="#"
                    class="Roboto small-more"
                    >more</router-link
                  >
                </p>
              </div>
              <router-link :to="{ name: 'blogPage' }" href="#" class="Roboto"
                >MORE</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import blogImg1 from "@/assets/images/blog-1.png";
import blogImg2 from "@/assets/images/blog-2.png";
import blogImg3 from "@/assets/images/blog-3.png";
import blogImg4 from "@/assets/images/blog-4.png";
import blogImg5 from "@/assets/images/blog-5.png";

let searchBtn = ref(null);
let searchCloseBtn = ref(null);
let inputBox = ref(null);

function openInputBox() {
  searchBtn.value.classList.toggle("clicked");
  searchCloseBtn.value.classList.toggle("clicked");
  inputBox.value.classList.toggle("clicked");
}

let blogList = ref([
  {
    title: "情人特別企劃",
    enTitle: "2020 Valentine’s Special",
    date: "2020/02/14",
    content:
      "一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯",
    imgUrl: blogImg1,
  },
  {
    title: "街頭潮人訪問",
    enTitle: "Street Interview",
    date: "2020/02/02",
    content:
      "炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯",
    imgUrl: blogImg2,
  },
  {
    title: "春季新品上市",
    enTitle: "New Selection",
    date: "2020/02/02",
    content:
      "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
    imgUrl: blogImg3,
  },
  {
    title: "設計師獨享鏡框優惠",
    enTitle: "Sales for Designer",
    date: "2020/01/18",
    content:
      "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
    imgUrl: blogImg4,
  },
  {
    title: "抵抗夏日大作戰",
    enTitle: "Summer Special",
    date: "2019/08/07",
    content:
      "2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯",
    imgUrl: blogImg5,
  },
]);
</script>

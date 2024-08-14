<script setup>
import { ref, onMounted } from "vue";

import img1 from "@/assets/images/home-section2-1.png";
import img2 from "@/assets/images/home-section2-2.png";
import img3 from "@/assets/images/home-section2-3.png";
import img4 from "@/assets/images/home-sectioin2-4.png";

import section3Img1 from "@/assets/images/home-section3-1.png";
import section3Img2 from "@/assets/images/home-section3-2.png";
import section3Img3 from "@/assets/images/home-section3-3.png";

import section5Img1 from "@/assets/images/home-section5-1.png";
import section5Img2 from "@/assets/images/home-section5-2.png";
import section5Img3 from "@/assets/images/home-section5-3.png";
import section5Img4 from "@/assets/images/home-section5-4.png";

let cardList = ref([
  {
    id: 1,
    imgUrl: img1,
    title: "單一價格",
    content: "無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。",
  },
  {
    id: 2,
    imgUrl: img2,
    title: "20 分鐘即可取件",
    content:
      "為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。",
  },
  {
    id: 3,
    imgUrl: img3,
    title: "安心售後服務",
    content:
      "我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。",
  },
  {
    id: 4,
    imgUrl: img4,
    title: "關於鏡片",
    content: "使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。",
  },
]);

let section3CardList = ref([
  { id: 1, imgUrl: section3Img1, type: "OPTICAL" },
  { id: 2, imgUrl: section3Img2, type: "SUNGLASSES" },
  { id: 3, imgUrl: section3Img3, type: "FUNCTIONAL" },
]);

let section5CustomerList = ref([
  {
    customerName: "Jessy",
    imgUrl: section5Img1,
    recommend: "眼鏡品質優良，下次還會想來這邊購買！",
    date: "2021/06/20",
  },
  {
    customerName: "凱倫",
    imgUrl: section5Img2,
    recommend: "做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！",
    date: "2021/04/18",
  },
  {
    customerName: "悠悠",
    imgUrl: section5Img3,
    recommend: "謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！",
    date: "2020/12/25",
  },
  {
    customerName: "Kyuan",
    imgUrl: section5Img4,
    recommend: "服務很好，品質沒有任何問題，非常喜歡。",
    date: "2020/10/31",
  },
]);
</script>

<template>
  <!-- banner -->
  <section class="banner banner-image">
    <div class="container">
      <div class="row justify-end">
        <div class="col-6 col-lg-10 col-sm-9 content-style">
          <p
            class="banner-text-color banner-text"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            Promise-Desert 2020 早春系列
          </p>
          <h1
            class="banner-text-color banner-title"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1500"
          >
            看得清，才能看得遠
          </h1>
          <button
            class="banner-btn btn-red"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="1500"
          >
            立即購買
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- 用專業的心，做專業的事 -->
  <section class="bg-pink">
    <div class="container">
      <h2
        class="section-title"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        用專業的心，做專業的事
      </h2>
      <div class="row">
        <div
          v-for="(card, i) in cardList"
          :key="card.id"
          class="col-3 col-md-6 col-sm-12 mb-32"
          data-aos="flip-left"
          :data-aos-delay="i * 300"
        >
          <div class="card">
            <div class="card-imge">
              <img :src="card.imgUrl" :alt="card.title" :key="card.id" />
            </div>
            <div class="card-content">
              <h3 class="card-content-title">{{ card.title }}</h3>
              <p>{{ card.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 經典系列鏡框 -->
  <section>
    <div class="container">
      <h2
        class="section-title"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        經典系列鏡框
      </h2>
      <div class="row">
        <div
          class="col-4 col-md-12"
          v-for="(item, i) in section3CardList"
          :key="i"
        >
          <div class="home-section-3-card">
            <img
              :src="item.imgUrl"
              :alt="item.type"
              data-aos="zoom-in"
              :data-aos-delay="i * 300"
            />
            <p data-aos="fade-up" :data-aos-delay="i * 300 + 100">
              {{ item.type }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 聯名設計鏡框 -->
  <section class="section-home-4-bg">
    <h2
      class="section-title section-title-white"
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      聯名設計鏡框
    </h2>
    <div class="container">
      <div
        class="section-home-4-cards"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        <div class="section-home-4-card">
          <img
            src="@/assets/images/home-section4-1.png"
            alt="home-section4-1"
          />
          <p>DOUBLE A+</p>
        </div>
        <div class="section-home-4-card">
          <img
            src="@/assets/images/home-section4-2.png"
            alt="home-section4-2"
          />
          <p>YOUTH</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 顧客推薦 -->
  <section>
    <h2
      class="section-title"
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      顧客推薦
    </h2>
    <div class="container">
      <div class="row">
        <div
          class="col-3 col-md-6 col-sm-12 mb-md-24 mb-sm-16"
          v-for="(customer, i) in section5CustomerList"
          :key="i"
        >
          <div
            class="customer-card"
            data-aos="fade-right"
            :data-aos-delay="i * 500"
          >
            <img :src="customer.imgUrl" :alt="customer.customerName" />
            <div class="customer-card-content">
              <div class="customer-top">
                <p class="fw-m">{{ customer.customerName }}</p>
                <p>{{ customer.recommend }}</p>
              </div>
              <div class="customer-bottom">
                <p>{{ customer.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 聯絡我們 -->
  <section class="bg-pink">
    <h2
      class="section-title"
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      聯絡我們
    </h2>
    <div class="container">
      <div class="row justify-center align-item-center">
        <div class="col-6 col-md-10 col-sm-12">
          <p class="fs-20 mb-24" data-aos="fade-in" data-aos-delay="500">
            我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
          </p>
          <form data-aos="zoom-in" data-aos-delay="800">
            <div class="mb-16">
              <label for="userNameInput" class="form-label">姓名</label>
              <input
                type="text"
                class="form-control"
                id="userNameInput"
                placeholder="陳小明"
              />
            </div>
            <div class="mb-16">
              <label for="userPhoneInput" class="form-label">聯絡電話</label>
              <input
                type="tel"
                class="form-control"
                id="userPhoneInput"
                placeholder="0912-345-678"
              />
            </div>
            <div class="mb-16">
              <label for="userEmailInput" class="form-label">電子郵件</label>
              <input
                type="email"
                class="form-control"
                id="userEmailInput"
                placeholder="example@email.com"
              />
            </div>
            <div class="mb-16">
              <label for="FormControlTextarea1" class="form-label"
                >意見反應</label
              >
              <textarea
                class="form-control"
                id="FormControlTextarea1"
                rows="3"
                placeholder="請輸入您的意見"
              ></textarea>
            </div>
            <!-- 同意 -->
            <div class="mb-16 form-check">
              <input type="checkbox" class="form-check-input" id="Check1" />
              <label class="form-check-label" for="heck1"
                >我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label
              >
            </div>
            <!-- 送出表單 -->
            <div>
              <button
                type="submit"
                class="btn btn-red form-btn mb-3 col-4 col-md-9 col-sm-12"
              >
                確認送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

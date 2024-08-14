<script setup>
import { ref, computed } from "vue";
// 圖片引入
import storeImg1 from "@/assets/images/store-1.png";
import storeImg2 from "@/assets/images/store-2.png";
import storeImg3 from "@/assets/images/store-3.png";
import storeImg4 from "@/assets/images/store-4.png";
import storeImg5 from "@/assets/images/store-5.png";

const stores = ref([
  {
    id: 1,
    imgUrl: storeImg1,
    city: "台北",
    storeName: "台北中山旗艦店",
    phone: "(02) 1234-5678",
    hours: "10:00-21:00",
    address: "台北市中山區南京東路一段123號",
  },
  {
    id: 2,
    imgUrl: storeImg2,
    city: "台北",
    storeName: "台北綠園店",
    phone: "(04) 8765-4321",
    hours: "10:00-21:00",
    address: "台北市中正區復興南路 132-1 號",
  },
  {
    id: 3,
    imgUrl: storeImg3,
    city: "台中",
    storeName: "台中清水旗艦店",
    phone: "(07) 2345-6789",
    hours: "10:00-21:00",
    address: "台中市清水區經南一路 23 號 8 樓",
  },
  {
    id: 4,
    imgUrl: storeImg4,
    city: "高雄",
    storeName: "高雄中正形象店",
    phone: "(07)000-2345",
    hours: "10:00-21:00",
    address: "台南市東區大同路三段321號",
  },
  {
    id: 5,
    imgUrl: storeImg5,
    city: "高雄",
    storeName: "高雄夢時代店",
    phone: "(07)000-1234",
    hours: "10:00-21:00",
    address: "高雄市前鎮區中華一路 63 號 6 樓",
  },
]);
// 篩選值
let selectedCity = ref("全部");

// 篩選要顯示的data
const filterStores = computed(() => {
  if (selectedCity.value === "全部") {
    return stores.value;
  } else {
    return stores.value.filter((store) => store.city === selectedCity.value);
  }
});
</script>

<template>
  <section>
    <div class="container">
      <h3
        class="section-title-2"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        門市據點
      </h3>
      <div class="store-select">
        <label
          for="inputCity"
          class="form-label"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          >選擇地區</label
        >
        <select
          id="inputCity"
          class="form-select"
          v-model="selectedCity"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <option value="全部">全部</option>
          <option value="台北">台北</option>
          <option value="台中">台中</option>
          <option value="高雄">高雄</option>
        </select>
      </div>
      <div class="row storeList">
        <div
          class="col-4 col-md-6 col-sm-12"
          v-for="store in filterStores"
          :key="store.id"
          data-aos="fade-up"
          data-aos-delay="(i + 1) * 100 + 400"
          data-aos-duration="500"
        >
          <div class="store-card">
            <div class="store-card-img">
              <img :src="store.imgUrl" :alt="store.storeName" />
            </div>
            <div class="store-content">
              <div class="store-content-title">{{ store.storeName }}</div>
              <ul class="store-content-info">
                <li class="store-content-info-item">
                  <span class="material-symbols-outlined"> call </span
                  ><span>電話：{{ store.phone }}</span>
                </li>
                <li class="store-content-info-item">
                  <span class="material-symbols-outlined"> schedule </span
                  ><span>營業時間：{{ store.hours }}</span>
                </li>
                <li class="store-content-info-item">
                  <span class="material-symbols-outlined"> location_on </span
                  ><span>地址：{{ store.address }}</span>
                </li>
              </ul>
            </div>
            <!-- <button class="btn-black store-card-btn">詳細資訊</button> -->
            <router-link
              class="btn-black store-card-btn"
              :to="`/store/${store.id}`"
              >詳細資訊
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

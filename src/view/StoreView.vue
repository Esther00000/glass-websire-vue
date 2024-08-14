<template>
  <section>
    <div class="container">
      <h3 class="section-title-2">門市據點</h3>
      <div class="store-select">
        <label for="inputCity" class="form-label">選擇地區</label>
        <select id="inputCity" class="form-select" v-model="selectedStore">
          <option v-for="store in storeAaary" :value="store">
            {{ store }}
          </option>
        </select>
      </div>

      <div class="row single-store-container">
        <!-- info -->
        <div class="col-5 col-md-12">
          <div class="store-card single-store-card" v-if="store">
            <!-- img -->
            <div class="store-card-img single-store single-store-img">
              <img :src="store.imgUrl" :alt="store.storeName" />
            </div>
            <!-- content -->
            <div class="store-content single-store single-store-content">
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
          </div>
        </div>
        <!-- map -->
        <div class="col-7 col-md-12 store-map" ref="storeMap"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// 圖片引入
import storeImg1 from "@/assets/images/store-1.png";
import storeImg2 from "@/assets/images/store-2.png";
import storeImg3 from "@/assets/images/store-3.png";
import storeImg4 from "@/assets/images/store-4.png";
import storeImg5 from "@/assets/images/store-5.png";
const route = useRoute();
const router = useRouter();
// 選擇門市
let selectedStore = ref(null);
//店名陣列
let storeAaary = ref(null);
// 所有門市資訊
const stores = ref([
  {
    id: 1,
    imgUrl: storeImg1,
    city: "台北",
    storeName: "台北中山旗艦店",
    phone: "(02) 1234-5678",
    hours: "10:00-21:00",
    address: "台北市中山區南京東路一段123號",
    map: `<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4470392308276!2d121.52417217537716!3d25.052833077804173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9661461bf73%3A0x3f72f7df41ef171c!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuIDmrrUxMjPomZ8!5e0!3m2!1szh-TW!2stw!4v1723472358498!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>`,
  },
  {
    id: 2,
    imgUrl: storeImg2,
    city: "台北",
    storeName: "台北綠園店",
    phone: "(04) 8765-4321",
    hours: "10:00-21:00",
    address: "台北市中正區復興南路 132-1 號",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115713.52991052093!2d121.38494230312357!3d24.998491350797792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab3015c9a2b3%3A0xb3d99abccee1204a!2z5Y-w5YyX5biC5aSn5a6J5Y2A5b6p6IiI5Y2X6Lev5LqM5q61MTcx5be3MjPomZ8!5e0!3m2!1szh-TW!2stw!4v1723476016575!5m2!1szh-TW!2stw" width="100%"
            height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 3,
    imgUrl: storeImg3,
    city: "台中",
    storeName: "台中清水旗艦店",
    phone: "(07) 2345-6789",
    hours: "10:00-21:00",
    address: "台中市清水區經南一路 23 號 8 樓",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14549.11221661586!2d120.54169133955075!3d24.267016800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469149a596746f7%3A0x31e1a5e39acd9b96!2z5riF5rC05Y2A6L6y5pyDIOWNl-ekvui-puS6i-iZlQ!5e0!3m2!1szh-TW!2stw!4v1723476067639!5m2!1szh-TW!2stw" width="100%"
            height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 4,
    imgUrl: storeImg4,
    city: "高雄",
    storeName: "高雄中正形象店",
    phone: "(07)000-2345",
    hours: "10:00-21:00",
    address: "台南市東區大同路三段321號",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936296.6783969593!2d119.80234219699248!3d23.55375342964261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346922d04c6eabdf%3A0x7756db54090b1fed!2z5Y-w5Y2X6Zi_5qau54mb6IKJ5rmv44CK5Y6f6JGJ5aSn5ZCM54mb6IKJ5rmv44CL!5e0!3m2!1szh-TW!2stw!4v1723476109385!5m2!1szh-TW!2stw" width="100%"
            height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 5,
    imgUrl: storeImg5,
    city: "高雄",
    storeName: "高雄夢時代店",
    phone: "(07)000-1234",
    hours: "10:00-21:00",
    address: "高雄市前鎮區中華一路 63 號 6 樓",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58939.40395156131!2d120.23268512977367!3d22.589844501551223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e03125f125fbb%3A0xde5f2b9fc9d688d2!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A!5e0!3m2!1szh-TW!2stw!4v1723476146450!5m2!1szh-TW!2stw" width="100%"
            height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
]);
// 目前顯示門市
const store = ref(null);
// storeMap HTML TAG
const storeMap = ref();
storeAaary.value = stores.value.map((item) => item.storeName);
// 變更門市
function changeStore(id) {
  router.push({
    name: "Store",
    params: { id },
  });
}
function renderData(routeId) {
  store.value = stores.value.find((store) => store.id === Number(routeId));
  selectedStore.value = store.value.storeName;
  storeMap.value.innerHTML = store.value.map;
}
// 監聽門市改變
watch(selectedStore, (newStore) => {
  let targetStore = stores.value.find((item) => item.storeName === newStore);
  changeStore(targetStore.id);
  renderData(targetStore.id);
});
onMounted(() => {
  renderData(route.params.id);
  console.log(route);
});
</script>

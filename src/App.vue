<script setup>
import { ref, onMounted } from "vue";
let isLoading = ref(true);
import Loader from "./components/loading.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

onMounted(() => {
  window.onload = () => {
    isLoading.value = false;
    document.body.style.overflowY = "auto"; // 恢復滾動
  };
});
</script>

<template>
  <div v-if="!isLoading">
    <Header data-aos="fade-up" data-aos-duration="300" />
    <RouterView />
    <Footer
      class="footer"
      data-aos="fade-zoom-in"
      data-aos-anchor=".footer"
      data-aos-duration="1000"
    />
  </div>

  <Loader v-else />
</template>

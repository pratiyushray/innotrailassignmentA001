<script setup>
import { ref, computed, onMounted } from 'vue';
import daylight from "@/assets/daylight.png";
import nightdark from "@/assets/nightdark.png";
// import ScreenOne from './components/ScreenOne.vue';
// import ScreenSec from "@/components/ScreenSec.vue";
// import ScreenThree from "@/components/ScreenThree.vue";
// import ScreenFour from "@/components/ScreenFour.vue";
const currentTime = computed(() => {
  const date = new Date();
  return date.getHours();
});

const backgroundImage = computed(() => {
  const hour = currentTime.value;
  // console.log(hour)
  // Define your logic to determine background color based on the hour
  if (hour < 18) {
    return daylight; // Morning
  } else {
    return nightdark; // Evening
  }
});

// Set background color on the body element
onMounted(() => {
  document.body.style.backgroundImage = `url('${backgroundImage.value}')`;
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="cover";

});
</script>

<template :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
  <!-- <ScreenOne></ScreenOne> -->
  <!-- <ScreenSec></ScreenSec> -->
  <!-- <ScreenThree></ScreenThree> -->
  <router-view></router-view>
  <!-- <ScreenFour></ScreenFour> -->
  
</template>

<style scoped>
/* Add any additional styles here */
html, body, #app {
  height: 100%;
  margin: 0;
  width: 100%;
  
}
body{
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
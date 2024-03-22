<script setup>
import { ref, computed, onMounted } from "vue";
const OTP_LENGTH = 4;
const otpValue = ref(Array.from({ length: OTP_LENGTH }, () => ""));

const otpValueAfterJoin = computed(() => {
  return otpValue.value.join("").replace(/[^0-9]/g, "");
});

const isOtpValueSomeEmpty = computed(() => {
  return otpValue.value.some((v) => v !== 0 && !v);
});

let isInProgress = ref(false);

const handleInputElsInput = (e, index) => {
  const val = e.target.value.replace(/[^0-9]/g, "");
  if (!val || isNaN(val)) {
    e.target.value = "";
    updateOtpValue();
    return;
  }
  let idx = 0;
  let el = e.target;
  if (val.length === 0) {
    updateOtpValue();
    return;
  }
  if (isInProgress.value) return;
  isInProgress.value = true;
  if (val.length === 1) {
    el.value = val;
    el = el?.nextElementSibling ?? null;
  }
  if (val.length === 2) {
    el.value = val.substring(1, 2);
    el = el?.nextElementSibling ?? null;
  }
  while (val.length > 2 && idx < val.length && !!el) {
    el.value = val.substring(idx, idx + 1);
    el = el?.nextElementSibling ?? null;
    idx++;
  }
  el?.focus();
  isInProgress.value = false;
  updateOtpValue();
};

const inputEls = ref([]);

const updateOtpValue = () => {
  otpValue.value.forEach((v, i) => {
    otpValue.value[i] = inputEls.value[i].value;
  });
};

const addInputEls = (el) => {
  const alreadyIn = inputEls.value.findIndex((v) => v?.id === el?.id) > -1;
  if (alreadyIn) return;
  inputEls.value.push(el);
};

onMounted(() => {
  let el = inputEls.value;
  if (Array.isArray(el)) el = el[0];
  el?.focus();
});

function congratulations(){
  alert("Congratulations Logged In Successfully!")
}
</script>
<template>
<div class="mainContainer">
    <div class="secMainContainer">
        <div class="progressBar">    
        <progress id="file" value="32" max="200"> 32% </progress>
    </div>
    <div class="textApi">
        <h2>Great! Almost There 🙌</h2>
    </div>
    <div class="cardApi">
        <div class="inputBoxes">
            <span><b>Enter OTP!</b></span>
            <span>OTP sent to provided number</span>
            <!-- <input class="textBox" type="text"> -->
            <div id="app">
    <div class="container">
      <div class="wrapper">
        
        <div class="input-wrapper">
          <input
            v-for="i in OTP_LENGTH"
            :key="`input-el-${i}`"
            :ref="addInputEls"
            :id="`input-el-${i}`"
            type="text"
            pattern="[0-9]*"
            @input="handleInputElsInput($event, i - 1)"
          />
        </div>

      </div>
    </div>
  </div>
            <span>Did not receive yet? <b class="resend">Resend</b></span>
            <br>
            <br>
            <router-link to="/" style="text-decoration: none; color: black;" class="routeDiv">
            
              <button class="btnNext" @click="congratulations">Next</button>
            </router-link>
            
        </div>
    </div>
    </div>

</div>
</template>

<style scoped>
.mainContainer{
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    margin-top: 120px;

    
}
.secMainContainer{
    /* border: 2px solid indigo; */
    width: 60%;
    padding: 5px;

}

.progressBar{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

}
#file{
    width: 300px;
}

.textApi{
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: white;

}

.cardApi{
    /* border:2px solid palevioletred; */
    /* width: 90%; */
    padding: 5px;
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;

}
.inputBoxes{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 48%;
    color: white;
    align-items: center;
}

.textBox{
    border: none;
    padding: 8px;
    border-radius: 5px;
}

.resend{
    cursor: pointer;
}

.btnNext{
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: rgb(30, 136, 217);
    color: white;
    font:bold;
}
.container {
  width: 100%;
  /* min-height: 100dvh; */
  .wrapper {
    /* width: 80%; */
    margin: auto;
    /* padding: 20vh 0; */
    .message {
      text-align: center;
      margin-bottom: 24px;
    }
    .input-wrapper {
      width: 100%;
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
      input {
        width: 2em;
        font-size: 24px;
        line-height: 1.5;
        text-align: center;
        border-radius: 6px;
        border: none;
      }
    }
    .results {
      text-align: center;
      margin-top: 24px;
    }
  }
}

</style>
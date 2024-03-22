<script setup>
import { ref, onMounted } from 'vue';

let imageBaseUrl="https://mysa-img.devtest.thestudypod.com/"

const data = ref({
  domainSelectionMessage: null,
  domainSelectionMessageDetails: null,
  domains: [],
});

const errorMessage = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://4caeisr4q3.execute-api.us-east-1.amazonaws.com/dev/mentoapp/onboarding/start', {
      method: 'POST',
      headers: {
          'appflavour': 'DEV',
          'appVersion': '2.5.0',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newUser: true,
          deviceId: "387c2863-6ee3-4a56-8210-225f774edade",
          appFlavour: "DEV",
          versionNumber: "2.5.0",
        }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    data.value = responseData;
    // console.log(data.value)
  } catch (error) {
    console.error('Error fetching data:', error);
    errorMessage.value = error.message;
  }
};

onMounted(fetchData); // Fetch data on component mount

// console.log(data)
</script>

<template>
<div class="mainContainer">
  <div class="secMainContainer">
    <div class="progressBar">
      <progress id="file" value="32" max="200"> 32% </progress>
    </div>
    <div class="textApi">
      <h2 v-if="data.domainSelectionMessage">{{ data.domainSelectionMessage }}⛳</h2>
      <span v-if="data.domainSelectionMessageDetails">{{ data.domainSelectionMessageDetails }}!</span>
      <br />
      <br />
      <p style="color: red;" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <div class="cardApi">
      <router-link v-for="item in data.domains" style="text-decoration: none; color: black;" :key="item.id" to="/screen2">
        <div class="cardBox">
          <img alt="img_Of_logo" class="imgLogo" v-if="item.image" :src="imageBaseUrl+item.image"> 
          <h2 class="labelName">{{ item.label }}</h2>
          <span class="labelDescription">{{ item.description }}</span>
          
        </div>
      </router-link>
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
    width: 45%;
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
    padding: 5px;
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

}
.cardBox{
    /* border: 2px solid green; */
    background-color: white;
    width: 190px;
    border-radius: 10px;
    padding: 12px;
}

.imgLogo{
  width: 75px;
  height: 65px;
  border-radius: 50%;
}




/* Responsive for Mobile Phone  */
@media only screen and (max-width: 600px){
  .secMainContainer{
    /* border: 2px solid indigo; */
    width: 80%;
    padding: 5px;

}

.cardApi{
    /* border:2px solid palevioletred; */
    padding: 5px;

    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 18px;

}
}

/* Responsive for Tablet  */

@media only screen and (max-width:900px){
  .secMainContainer{
    /* border: 2px solid indigo; */
    width: 80%;
    padding: 5px;

}

.cardApi{
    /* border:2px solid palevioletred; */
    padding: 5px;

    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 18px;

}
}
</style>
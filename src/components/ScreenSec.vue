<script setup>
import { ref } from 'vue';

let imageBaseUrl="https://mysa-img.devtest.thestudypod.com/"

const data = ref([]);

async function fetchData() {
  try {
    const response = await fetch('https://4caeisr4q3.execute-api.us-east-1.amazonaws.com/dev/mentoapp/onboarding/domain', {
      method: 'POST',
      headers: {
        'appflavour': 'DEV',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tempUserId: "331aba72-1add-4adf-8d6c-f17e1e4f4a52",
        selectedDomainId: "e_3",
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    data.value = responseData;
    // console.log(responseData)
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors appropriately, display error message to the user
  }
}

fetchData();


</script>
<template>
<div class="mainContainer">
    <div class="secMainContainer">
        <div class="progressBar">    
        <progress id="file" value="32" max="200"> 32% </progress>
    </div>
    <div class="textApi">
        <h2>{{ data[0]?.questionText }}</h2>
        
    </div>
    <div class="cardApi">
      <router-link to="/screen3" style="text-decoration: none; color: black;" class="routeDiv">
        <div class="cardBox" v-for="item in data[0]?.options">
            <img :src="imageBaseUrl+item.image" alt="imgLogo">
            <h4>{{ item?.text }}</h4>
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
    width: 40%;
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
    flex-wrap: wrap;

}
.cardBox{
    /* border: 2px solid green; */
    background-color: white;
    width: 190px;
    height: 105px;
    border-radius: 10px;
    padding: 12px;
}
.routeDiv{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
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
</style>
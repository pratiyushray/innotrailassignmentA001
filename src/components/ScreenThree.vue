<script setup>
import { ref } from 'vue';

const userName = ref('');
const userPhone = ref('');

async function submitData() {
  try {
    // console.log(userName);
    // console.log(userPhone);
    const response = await fetch('https://4caeisr4q3.execute-api.us-east-1.amazonaws.com/dev/mentoapp/onboarding/login', {
      method: 'POST',
      headers: {
        'appflavour': 'DEV',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tempUserId: "f04dd04a-f51d-435a-8d99-28f8e49f03a7",
        deviceId: "387c2863-6ee3-4a56-8210-225f774edade",
        mobileCountryCode: "1",
        mobileCountry: "USA",
        mobileNumber: userPhone.value,
        name: userName.value,
      }),
    });


    if (response.ok) {
      console.log('Data submitted successfully:', userName.value +" with phone number "+userPhone.value);
      alert('Data submitted successfully: '+ userName.value +" with phone number "+userPhone.value);
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    // Handle errors appropriately, display error message to the user.
  }
}
</script>

<template>
<div class="mainContainer">
  <div class="secMainContainer">
    <div class="progressBar">
      <progress id="file" value="32" max="200"> 32% </progress>
    </div>
    <div class="textApi">
      <h2>Great! Almost There</h2>
    </div>
    <div class="cardApi">
      <div class="inputBoxes">
        <span>What should we call You?</span>
        <input class="textBox" type="text" v-model="userName">
        <span>Please Provide your phone number</span>
        <input class="textBox" type="number" v-model="userPhone">
        <div class="nextBtnBox">
          <router-link to="/screen4" style="text-decoration: none; color: black;" class="routeDiv"><button class="btnNext" @click="submitData">Next</button></router-link>
          
        </div>
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
    padding: 5px;
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;
    color: white;

}
.inputBoxes{
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* width: 40%; */
}

.textBox{
    border: none;
    padding: 8px;
    border-radius: 5px;
}

.nextBtnBox{
  display: flex;
  flex-direction: row;
  justify-content: center;
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

/* Responsive for Mobile  */

@media only screen and (max-width: 600px){
  .secMainContainer{
    /* border: 2px solid indigo; */
    width: 80%;
    padding: 5px;

}
.inputBoxes{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
}







}

</style>
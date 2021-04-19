<template>
    <center>
 <div class="ctn">
      <div class="header">
        
      </div>
      <div class="Body" style=" backgroundImage: url(https://lh3.googleusercontent.com/-gS0V6GutSu7StY9v7Hi5tV8tDQL3cFy91it_QXuL7P_0pO6OLTFDJsNvCrSuBgvadPicA4sY7QQXbcsdsqlpi_vZEcyVSvHQfVdxHsbji_CELXOhkVwPt20bbExkFMFGFVa9IP-ff0PXhWgtyzaoezhfUhDDNUxn7hD1Lyr8B3xCdJ1fCj2YYEuRxpCThXf0JwZvHLCPkKQiRtnZKqJD3_ODJwtuHiEnBq99ov67jE3lqIDAZ2R0YdSK-V-NtnDpGq8K7k9YpL3eCq-OBcEhyspAUKL-0hwtr015oRO4ka1YiuHB1_mdmFnHuPv1HW3Dtbb8PnszWa9Zbul8lkIj6nD_hh4iruHUgMdrDO8wpcbjr8PONL28y6SrzYYgkBZJVQjd_nESAQb7MpQXgrung5cTOcYh1xWL5te7UqUMoZ0Ox2rt7H9yEeVFhJCegFFUqS8cOP7pHd9rUa_3lM4gWIzM1M9U-Jerrxie2WYuq4Vj3wsfLmEi6G42cF92zrcUt026oYY6dyQG9T5IF7RB7UE--9ZdbOH-6akC89SCo8_KxrCTxGs2eb69TotN9xNwbJELTWh7l_sh5QL4sHG_IKz1JSxP06TAkImVP3Jhxr_MNQD49ff8Bka_-6jhqJJC4qtkf51G-B8oI4fiy7uGocxONubmg8MBocw130oQ6MJ8AZHDoc4GzUQ1nbd2WUm8rnQ580bXsYPsUYJdKSlmjwQ=w1920-h715-no?authuser=0) ">
        <div class="bodyleft" >
          <center>
      <img src="../assets/img/main/1.png" style="margin-top: 90px;">
          </center>
        </div>
        <div class="bodycenter" align=center>
          <router-link to="/makeOrder"><button class="bodybutton" style="background-color:#F79B8F; margin-top:140px;">Make order</button></router-link>
          <br>
          <router-link to="/checkStock"><button class="bodybutton" style="background-color:#F7B4A8;margin-top:50px;">Check stock</button></router-link>
          <br>
          <router-link to="/historySale"><button class="bodybutton" style="background-color:#FAE4E1;margin-top:50px;">History sale</button></router-link>
        </div>
        <div class="bodyright">
          <center>
          <img src="../assets/img/main/2.png" style="margin-top: 90px;">
        </center>
        </div>
        
      </div>
      <div class="footer"></div>
    </div>
  </center>
  
</template>

<script>
export default {
  data(){
    return {
      image: "",
    }
  }
}
</script>

<style scoped>
button:hover {
  opacity: 0.5;
}
.ctn {
    background-color: rgb(252, 232, 206);
    width: 100%;
    height: 969px;
    
  }
  .header:hover {
    opacity: 0.8;
  }
  .header {
    background-color: #faa9ba;
    width: 100%;
    height: 150px;
  }
  .Body {
    width: 100%;
    height: 719px;
  }
  .footer {
    background-color: #fab3c3;
    width: 100%;
    height: 100px;
  }
  .footer:hover {
    opacity: 0.8;
  }
  .bodyleft {
    width: 33.3%;
    height: 100%;
    float: left;
  }
  .bodyright {
    width: 33.4%;
    height: 100%;
    float: left;
  }
  .bodycenter {
    width: 33.3%;
    height: 100%;
    float: left;
  }
  
  .bodybutton {
    color: aliceblue;
    padding: 25px 30px;
    font-size: 50px;
    border-radius: 45px;
    border: 3px solid #000;
  }
  
</style>
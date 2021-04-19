<template>
    <center>
 <div class="ctn">
      <div class="header">
        
      </div>
      <div class="Body" style="background-image: url(${require('../assets/img/main/3.png')});">
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
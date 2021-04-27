<template>
    <center>
 <div class="ctn">
      <div class="header">
        <img src="../assets/img/main/banner3.png">
      </div>
      <div class="Body" style=" backgroundImage: url(https://1.bp.blogspot.com/-TBd-qil9b3U/YIiKQwttW6I/AAAAAAAAAA4/GPLWSC2ADZ86bXo5y1IFR3MiKEjd23G9wCLcBGAsYHQ/s1920/bgcenter.png) ">
        <div class="bodyleft" >
          <center>
      
          </center>
        </div>
        <div class="bodycenter" align=center>
          <router-link to="/makeOrder"><button class="bodybutton1" style="margin-top:140px;">Make order</button></router-link>
          <br>
          <router-link to="/checkStock"><button class="bodybutton2" style="margin-top:50px;">Check stock</button></router-link>
          <br>
          <router-link to="/historySale"><button class="bodybutton3" style="margin-top:50px;">History sale</button></router-link>
        </div>
        <div class="bodyright">
          <center>
          
        </center>
        </div>
        
      </div>
      <div class="footer">
        <img src="../assets/img/main/footage.png">
      </div>
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

.ctn {
    background-color: rgb(252, 232, 206);
    width: 100%;
    height: 969px;
    
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
  
  .bodybutton1 {
    color: aliceblue;
    padding: 25px 30px;
    font-size: 50px;
    border-radius: 45px;
    border: 3px solid #000;
    background-color:#704d2d;
  }
  .bodybutton1:hover{
    background-color: #3a2817;
  }
  
  .bodybutton2 {
    color: aliceblue;
    padding: 25px 30px;
    font-size: 50px;
    border-radius: 45px;
    border: 3px solid #000;
    background-color:#84644b;
  }
  .bodybutton2:hover{
    background-color: #584332;
  }
  .bodybutton3 {
    color: aliceblue;
    padding: 25px 30px;
    font-size: 50px;
    border-radius: 45px;
    border: 3px solid #000;
    background-color:#997e6d;
  }
  .bodybutton3:hover{
    background-color: #68564a;
  }
</style>
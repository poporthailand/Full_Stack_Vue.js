<template>
  <div class="ctn">
      <div class="header">
        <div class="leftheader">
          <div style="color: #faa9ba; font-size: 15px">0</div>
          <p class="blockheader">History Sale</p>
        </div>
        <div class="rightheader">
          <p style="font-size: 12px; color: #faa9ba">0</p>
          <router-link to="/"
            ><button
              class="headerbutton"
              style="background-color: #ACE7FD; margin-left: 130px"
            >
              Main Menu
            </button></router-link
          >
          <router-link to="/makeOrder"
            ><button
              class="headerbutton"
              style="background-color: #9ABCE3; margin-left: 50px"
            >
              Make Order
            </button></router-link
          >
          <router-link to="/checkStock"
            ><button
              class="headerbutton"
              style="background-color: #B6C4FA; margin-left: 50px"
            >
              Check Stock
            </button></router-link
          >
        </div>
      </div>
      <div class="Body">
        <div
          style="
            margin-top: 20px;
            margin-left: 45px;
            background-color: #EEFAD5;
            width: 95%;
            height: 95%;
          "
        >
        
        
        </div>
      </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>

.ctn {
  background-color: #81f2fd;
  width: 100%;
  height: 969px;
  margin: 0;
}
.header {
  width: 100%;
  height: 150px;
  margin: 0;
}
.Body {
  width: 100%;
  height: 799px;
}
.leftheader {
  width: 50%;
  height: 100%;
  float: left;
}
.rightheader {
  width: 50%;
  height: 100%;
  float: left;
}

.blockheader {
  margin-left: 3%;
  margin-top: 0px;
  font-size: 40px;
  padding-top: 25px;
  text-align: center;
  border: 1px solid #111;
  width: 90%;
  height: 70%;
  color: rgb(255, 255, 255);
  background-color: #58e0fd;
}

.headerbutton {
  color: #111;
  padding: 20px 30px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #000;
}

</style>
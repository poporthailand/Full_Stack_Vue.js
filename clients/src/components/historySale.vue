<template>
  <div class="ctn">
    <div class="header">
      <div class="leftheader">
        
        <div style=" cursor:default;color: #81f2fd; font-size: 15px">0</div>
        <p class="blockheader" >History Sale</p>
      </div>
      <div class="rightheader">
        <p style=" cursor:default;font-size: 12px; color: #81f2fd">0</p>
        <router-link to="/"
          ><button
            class="headerbutton"
            style="background-color: #ace7fd; margin-left: 130px"
          >
            Main Menu
          </button></router-link
        >
        <router-link to="/makeOrder"
          ><button
            class="headerbutton"
            style="background-color: #9abce3; margin-left: 50px"
          >
            Make Order
          </button></router-link
        >
        <router-link to="/checkStock"
          ><button
            class="headerbutton"
            style="background-color: #b6c4fa; margin-left: 50px"
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
          background-color: #eefad5;
          width: 95%;
          height: 95%;
        "
      >
        <pre></pre>
        <table align="center" style="background: white; margin-top: 10px;">
          <tr style="font-weight: bold; font-size: 18px">
            <td style="width: 100px">รายการที่</td>
            <td style="width: 400px">เมนู</td>
            <td style="width: 250px">ท็อปปิ้ง</td>
            <td style="width: 250px">ขนาดแก้ว</td>
            <td style="width: 100px">จำนวนแก้ว</td>
            <td style="width: 250px">ราคา</td>
            <td style="width: 300px; ">
              วันที่
            </td>
          </tr>

          <tr
            v-for="(history, i) in histories"
            :key="history._id"
            style="font-size: 17px"
          >
            <td style="width: 100px">{{ i + 1 }}</td>
            <td style="text-align:left;width: 400px">{{ history.menu }}</td>
            <td style="width: 250px">{{ history.topping }}</td>
            <td style="width: 250px">{{ history.size }}</td>
            <td style="width: 100px">{{ history.numberofglass }}</td>
            <td style="width: 250px">{{ history.price }}</td>
            <td style="width: 300px;">
              {{ history.date.slice(0, 10) }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      histories: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api-history";
    axios
      .get(apiURL)
      .then((res) => {
        this.histories = res.data;
        console.log(this.histories);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
table {
  border-spacing: 0;
  border: 2px solid rgb(61, 86, 226);
}

td {
  text-align: center;
  padding: 8px;
  border: 2px solid rgb(0, 0, 0);
}
tr{
  cursor:default;
}
tr:hover {
  background:#eee;
}

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
  cursor:default;
}
.blockheader:hover {
  background:#48b8d1;
}

.headerbutton {
  color: #111;
  padding: 20px 30px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #000;
}
button:hover {
    opacity: 0.5;
}
</style>
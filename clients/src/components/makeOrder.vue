<template>
  <div class="ctn">
      <div class="header">
        <div class="leftheader">
          <div style="color: #faa9ba; font-size: 15px">0</div>
          <p class="blockheader" >Make Order</p>
        </div>
        <div class="rightheader">
          <p style="font-size: 12px; color: #faa9ba">0</p>
          <router-link to="/"
            ><button
              class="headerbutton"
              style="background-color: #fdbca9; margin-left: 130px; color: #000"
            >
              Main Menu
            </button></router-link
          >
          <router-link to="/checkStock"
            ><button
              class="headerbutton"
              style="background-color: #e39e98; margin-left: 50px; color: #000"
            >
              Check Stock
            </button></router-link
          >
          <router-link to="/historySale"
            ><button
              class="headerbutton"
              style="background-color: #fab3c3; margin-left: 50px; color: #000"
            >
              History Sale
            </button></router-link
          >
        </div>
      </div>
      <div class="Body">
        <div class="leftbody">
          <div
            style="
              margin: 20px;
              background-color: #facacb;
              width: 95%;
              height: 95%;
            "
          >
            <center>
              <pre> </pre>
              <div
                style="
                  border-radius: 25px;
                  height: 140px;
                  width: 70%;
                  background-color: #f5ebeb;
                  margin-top: 10px;
                "
              >
                <pre style="font-size: 1px"> </pre>
                <p style="margin-top: 10px; font-size: 30px" >Menu</p>
                <select
                  align="center"
                  style="
                    font-size: 18px;
                    background-color: #e7e2e3;
                    width: 350px;
                    height: 40px;
                  "
                  v-model="menu"
                >
                  <option value="ชานมไต้หวัน">ชานมไต้หวัน</option>
                  <option value="ชาเขียว">ชาเขียว</option>
                  <option value="โกโก้">โกโก้</option>
                  <option value="นมสด">นมสด</option>
                  <option value="ชาดำ">ชาดำ</option>
                  <option value="กาแฟ">กาแฟ</option>
                  <option value="ช็อกโกแลต">ช็อกโกแลต</option>
                  <option value="ช็อกโกแลตมิ้น">ช็อกโกแลตมิ้น</option>
                  <option value="นมสตอเบอรี่">นมสตอเบอรี่</option>
                  <option value="ชานมมันม่วง">ชานมมันม่วง</option>
                </select>
              </div>
              <br />
              

              <div
                style="
                  border-radius: 25px;
                  height: 140px;
                  width: 70%;
                  background-color: #f5ebeb;
                "
              >
                <pre style="font-size: 1px"> </pre>
                <p style="margin-top: 10px; font-size: 30px">Topping</p>
                <select
                  align="center"
                  style="
                    font-size: 18px;
                    background-color: #e7e2e3;
                    width: 350px;
                    height: 40px;
                  "
                  v-model="topping"
                >
                  <option value="ไม่ใส่">ไม่ใส่</option>
                  <option value="ไข่มุก">ไข่มุก</option>
                  <option value="เจลลี่บุก">เจลลี่บุก</option>
                  <option value="ครีมสด">ครีมสด</option>
                  <option value="ครีมชีส">ครีมชีส</option>
                  <option value="คอนเฟรก">คอนเฟรก</option>
                  <option value="ฟรุตสลัด">ฟรุตสลัด</option>
                </select>
              </div>
              <br />
              

              <div
                style="
                  border-radius: 25px;
                  height: 140px;
                  width: 70%;
                  background-color: #f5ebeb;
                "
              >
                <pre style="font-size: 1px"> </pre>
                <p style="margin-top: 10px; font-size: 30px">Tumblr Size</p>
                <select
                  align="center"
                  style="
                    font-size: 18px;
                    background-color: #e7e2e3;
                    width: 350px;
                    height: 40px;
                  "
                  v-model="size"
                >
                  <option value="S">เล็ก(S)</option>
                  <option selected value="M">กลาง(M)</option>
                  <option value="L">ใหญ่(L)</option>
                </select>
              </div>
              <br />
              

              <div
                style="
                  border-radius: 25px;
                  height: 140px;
                  width: 70%;
                  background-color: #f5ebeb;
                "
              >
                <pre style="font-size: 1px"> </pre>
                <p style="margin-top: 10px; font-size: 30px">Level of sweetness</p>
                <select
                  align="center"
                  style="
                    font-size: 18px;
                    background-color: #e7e2e3;
                    width: 350px;
                    height: 40px;
                  "
                  v-model="level"
                >
                  <option value="หวานน้อย">หวานน้อย</option>
                  <option selected value="หวานปานกลาง">หวานปานกลาง</option>
                  <option value="หวานมาก">หวานมาก</option>
                </select>
              </div>

              <button @click="handlepreview" class="headerbutton" style="margin-top: 30px;padding: 15px 30px;font-size:20px;background-color:#fab3c3;color: #000;">Preview</button>

            </center>
          </div>
        </div>

        <div class="rightbody">
          <div
            style="
              margin: 20px;
              background-color: #facacb;
              width: 95%;
              height: 95%;
            "
          >
         <center> <p style="font-size:50px;font-weight: bold;">Preview</p>
          <div v-show="show">
            <div style="width:393px;height:408px; background-color: rgba(0,0,0,0.1);">
              <img style="margin: 0px 0 0 0;" :src="image">
            </div>
            
            </div>
          <div style="margin-top: 30px;"><span v-show="show" >{{ message }}</span></div>
          <div style="margin-top: 10px;"><span v-show="show" >ราคา : {{ price }} บาท</span></div>
          
          
          <button v-show="show" @click.prevent="handleSubmitForm" class="headerbutton" style="margin-top: 85px;padding: 15px 30px;font-size:20px;background-color:#fab3c3;color: #000;">Make Order</button>
            </center>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      show: false,
      image: '',
      menu: 'ชานมไต้หวัน',
      topping: 'ไม่ใส่',
      size: 'M',
      level: 'หวานปานกลาง',   
      message : '',
      price: '',
      product: {},
      history: {
        menu: '',
        topping: '',
        size: '',
        price: ''
      },

    }
  },
  created(){
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.product = res.data
            console.log(this.product)
        }).catch(error => {
            console.log(error)
        })
  },
  methods: {
    handlepreview(){
      this.show = true
    },
    handleSubmitForm(){
      console.log('++');
        let r = confirm('ต้องการทำรายการนี้ ?')
        if (r){
      for(let i = 0; i < this.product.length; i++){
        if (this.menu == this.product[i].name){
            this.product = this.product[i]
            this.product.quantity -= 1
            // create history
            let apiURL = 'http://localhost:4000/api-history/create';

            axios.post(apiURL, this.history).then(() => {
                //this.$router.push('/view');
                this.history = {
                    menu: '',
                    topping: '',
                    size: '',
                    price: ''
                }
            }).catch(error => {
                console.log(error)
            })

            //  update data
            apiURL = `http://localhost:4000/api/update/${this.product._id}`;
            axios.put(apiURL, this.product).then((res) => {
                console.log(res)
                //this.$router.push('/makeOrder')
            }).catch(error => {
                console.log(error)
            })

            //fetch data
            apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.product = res.data
                console.log(this.product)
            }).catch(error => {
                console.log(error)
            })
            
          }
       }
      }
    }
    
  },
  updated(){


    this.history.menu = this.menu
    this.history.price = this.price
    this.history.topping = this.topping
    this.history.size = this.size
    

    if (this.size == 'S' && this.topping == 'ไม่ใส่') this.price = 20;
    else if (this.size == 'M' && this.topping == 'ไม่ใส่') this.price = 25;
    else if (this.size == 'L' && this.topping == 'ไม่ใส่') this.price = 30;
    else if (this.size == 'S' ) this.price = 25;
    else if (this.size == 'M' )  this.price = 30;
    else if (this.size == 'L' )  this.price = 35;


    if (this.topping == 'ไม่ใส่')
      this.message = this.menu +', Size : '+ this.size +', '+ this.level
    else this.message = this.menu +' + ' + this.topping +', Size : '+ this.size +', '+ this.level

    if (this.menu == 'ชานมไต้หวัน'){
          this.image = require('@/assets/img/makeorder/1.png')
      }
      else if (this.menu == 'ชาเขียว'){
          this.image = require('@/assets/img/makeorder/2.png')
      }
       else if (this.menu == 'โกโก้'){
          this.image = require('@/assets/img/makeorder/3.png')
      }
       else if (this.menu == 'นมสด'){
          this.image = require('@/assets/img/makeorder/4.png')
      }
       else if (this.menu == 'ชาดำ'){
          this.image = require('@/assets/img/makeorder/5.png')
      }
       else if (this.menu == 'กาแฟ'){
          this.image = require('@/assets/img/makeorder/6.png')
      }
       else if (this.menu == 'ช็อกโกแลต'){
          this.image = require('@/assets/img/makeorder/7.png')
      }
       else if (this.menu == 'ช็อกโกแลตมิ้น'){
          this.image = require('@/assets/img/makeorder/8.png')
      }
       else if (this.menu == 'นมสตอเบอรี่'){
          this.image = require('@/assets/img/makeorder/9.png')
      }
       else if (this.menu == 'ชานมมันม่วง'){
          this.image = require('@/assets/img/makeorder/10.png')
      }
    
  }

}
</script>

<style scoped>

select {
  cursor: pointer;
}
p {
  cursor:default;
}
button:hover {
  opacity: 0.5;
}

span {
  font-size: 25px;
  background-color:rgb(240, 234, 234);
  cursor:default;
  
}
.ctn {
  background-color: #faa9ba;
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
  height: 819px;
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
.leftbody {
  width: 50%;
  height: 100%;
  float: left;
}

.rightbody {
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
  background-color: #f79b8f;
}
.blockheader:hover {
  background-color: #d1857b;
}

.headerbutton {
  color: aliceblue;
  padding: 20px 30px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #000;
}

</style>
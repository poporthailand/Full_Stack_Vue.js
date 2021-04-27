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
                  @click="clickmenu"
                >
                  <option value="ชานมไต้หวัน">ชานมไต้หวัน</option>
                  <option value="ชาเขียว">ชาเขียว</option>
                  <option value="โกโก้">โกโก้</option>
                  <option value="นมสด">นมสด</option>
                  <option value="ชาดำ">ชาดำ</option>
                  <option value="กาแฟ">กาแฟ</option>
                  <option value="ช็อกโกแลต">ช็อกโกแลต</option>
                  <option value="ช็อกโกแลตมิ้น">ช็อกโกแลตมิ้น</option>
                  <option value="ชาลูกอมรสมะนาว">ชาลูกอมรสมะนาว</option>
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
                  @click="clicksize_topping"
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
                  @click="clicksize_topping"
                >
                  <option value="S" >เล็ก(S)</option>
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
          <div >
            <div style="width:393px;height:408px; background-color: rgba(0,0,0,0.1);">
              <img style="margin: 0 0 0 0;" :src="image">
            </div>
            
            </div>
            <div style="margin-top: 10px;"><p style="font-size:20px" >จำนวนสินค้าในคลัง : {{ quantity }}</p></div>
          <div style="margin-top: 20px;"><span  >{{ message }}</span></div>
          <div style="margin-top: 5px;"><span  >ราคา : {{ tmp }} บาท</span></div>
          <div style="margin-top: 5px;"><span  >จำนวน</span> <input @click="totalprice" type="number" min=1 :max='full'  v-model="unitquantity"></div>
          
          
          <button v-show="btn"  @click.prevent="handleSubmitForm" class="headerbutton" style="margin-top: 20px;padding: 15px 30px;font-size:20px;background-color:#fab3c3;color: #000;">Make Order</button>
          
          <button v-show="btn1"   class="btn-not" style="cursor:not-allowed;margin-top: 20px;padding: 15px 30px;font-size:20px;">Make Order</button>
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
      tmp: '25',
      full: '',
      btn : true,
      btn1 : false,
      image: '',
      menu: 'ชานมไต้หวัน',
      topping: 'ไม่ใส่',
      size: 'M',
      level: 'หวานปานกลาง',   
      message : '',
      price: 25,
      unitquantity : 1,
      product: {},
      history: {
        menu: '',
        topping: '',
        size: '',
        numberofglass: '',
        price: ''
      },
      quantity: null,

    }
  },
  created(){
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.product = res.data
            console.log(this.product)
            // set app data
            this.quantity = this.product[0].quantity
        }).catch(error => {
            console.log(error)
        })  
        
        
        
  },
  methods: {
    clickmenu(){
      for(var i in this.product){
      if(this.product[i].quantity == 0 && this.product[i].name === this.menu){
        this.btn = false
        this.btn1 = true
        break;
      }
      this.btn = true
      this.btn1 = false
    }
    },
    totalprice(){
      
      this.tmp = this.price 
      this.tmp = this.tmp * this.unitquantity
    },
    clicksize_topping(){
        //console.log('++')
       if ((this.size == 'S' && this.topping == 'ไม่ใส่') && this.unitquantity == 1 ) this.price = this.tmp = 20
       else if ((this.size == 'S' && this.topping == 'ไม่ใส่') && this.unitquantity > 1 ) {
           this.price = this.tmp = 20
           this.tmp = this.price 
            this.tmp = this.tmp * this.unitquantity
       }
    
      else if ((this.size == 'M' && this.topping == 'ไม่ใส่') && this.unitquantity == 1 ) this.price = this.tmp = 25
      else if ((this.size == 'M' && this.topping == 'ไม่ใส่') && this.unitquantity > 1 ) {
           this.price = this.tmp = 25
           this.tmp = this.price 
            this.tmp = this.tmp * this.unitquantity
       }
      else if ((this.size == 'L' && this.topping == 'ไม่ใส่') && this.unitquantity == 1 ) this.price = this.tmp = 30
      else if ((this.size == 'L' && this.topping == 'ไม่ใส่') && this.unitquantity > 1 ) {
           this.price = this.tmp = 30
           this.tmp = this.price 
            this.tmp = this.tmp * this.unitquantity
       }
      else if (this.size == 'S' && this.unitquantity == 1) this.price = this.tmp = 25;
      else if (this.size == 'S' && this.unitquantity > 1 ) {
        this.price = this.tmp = 25;
        this.tmp = this.price 
        this.tmp = this.tmp * this.unitquantity
      }
      else if (this.size == 'M' && this.unitquantity == 1 )  this.price = this.tmp = 30;
      else if (this.size == 'M' && this.unitquantity > 1 ) {
        this.price = this.tmp = 30;
        this.tmp = this.price 
        this.tmp = this.tmp * this.unitquantity
      }
      else if (this.size == 'L' && this.unitquantity == 1 )  this.price = this.tmp = 35;
      else if (this.size == 'L' && this.unitquantity > 1 ) {
        this.price = this.tmp = 35;
        this.tmp = this.price 
        this.tmp = this.tmp * this.unitquantity
      }
    },
    handleSubmitForm(){
      //console.log('++');
       // let r = confirm('ต้องการทำรายการนี้ ?')
       // if (r){
       for(let i = 0; i < this.product.length; i++){
          if (this.menu == this.product[i].name){
            this.product = this.product[i]
            this.product.quantity -= this.unitquantity

            //  update data
            let apiURL = `http://localhost:4000/api/update/${this.product._id}`;
            axios.put(apiURL, this.product).then((res) => {
                console.log(res)
                //this.$router.push('/makeOrder')
            }).catch(error => {
                console.log(error)
            })

            // create history
             apiURL = 'http://localhost:4000/api-history/create';
            axios.post(apiURL, this.history).then(() => {
                this.history = {
                    menu: '',
                    topping: '',
                    size: '',
                    numberofglass: '',
                    price: ''
                }
            }).catch(error => {
                console.log(error)
            })

            
            
          }
       }
       this.$router.go(this.$router.currentRoute)
     // }
    }
    
  },
  updated(){
    //console.log(this.product.length)

    if(this.product[0].quantity == 0 && this.product[0].name === this.menu){
            this.btn = false
            this.btn1 = true
            console.log('123  ')
            
          }

    if(this.product[0].name == this.menu){
        this.full = this.product[0].quantity    
    }
    else if(this.product[1].name == this.menu){
        this.full = this.product[1].quantity  
    }
    else if(this.product[2].name == this.menu){
        this.full = this.product[2].quantity   
    }
    else if(this.product[3].name == this.menu){
        this.full = this.product[3].quantity   
    }
    else if(this.product[4].name == this.menu){
        this.full = this.product[4].quantity   
    }
    else if(this.product[5].name == this.menu){
        this.full = this.product[5].quantity   
    }
    else if(this.product[6].name == this.menu){
        this.full = this.product[6].quantity   
    }
    else if(this.product[7].name == this.menu){
        this.full = this.product[7].quantity   
    }
    else if(this.product[8].name == this.menu){
        this.full = this.product[8].quantity   
    }
    else if(this.product[9].name == this.menu){
        this.full = this.product[9].quantity   
    }
     
      
    

    
    
    

    this.history.menu = this.menu
    this.history.price = this.tmp
    this.history.topping = this.topping
    this.history.numberofglass = this.unitquantity
    this.history.size = this.size
    //console.log( this.history.menu + " " + this.history.topping + " " + this.history.size +" " + this.history.numberofglass + " " + this.history.price)
    
/*
    if (this.size == 'S' && this.topping == 'ไม่ใส่') this.price = 20;
    else if (this.size == 'M' && this.topping == 'ไม่ใส่') this.price = 25;
    else if (this.size == 'L' && this.topping == 'ไม่ใส่') this.price = 30;
    else if (this.size == 'S' ) this.price = 25;
    else if (this.size == 'M' )  this.price = 30;
    else if (this.size == 'L' )  this.price = 35;
*/

    if (this.topping == 'ไม่ใส่')
      this.message = this.menu +', Size : '+ this.size +', '+ this.level
    else this.message = this.menu +' + ' + this.topping +', Size : '+ this.size +', '+ this.level

    if (this.menu == 'ชานมไต้หวัน'){
          this.image = require('@/assets/img/makeorder/1.png')
          this.quantity = this.product[0].quantity
      }
      else if (this.menu == 'ชาเขียว'){
          this.image = require('@/assets/img/makeorder/2.png')
          this.quantity = this.product[1].quantity
      }
       else if (this.menu == 'โกโก้'){
          this.image = require('@/assets/img/makeorder/3.png')
          this.quantity = this.product[2].quantity
      }
       else if (this.menu == 'นมสด'){
          this.image = require('@/assets/img/makeorder/4.png')
          this.quantity = this.product[3].quantity
      }
       else if (this.menu == 'ชาดำ'){
          this.image = require('@/assets/img/makeorder/5.png')
          this.quantity = this.product[4].quantity
      }
       else if (this.menu == 'กาแฟ'){
          this.image = require('@/assets/img/makeorder/6.png')
          this.quantity = this.product[5].quantity
      }
       else if (this.menu == 'ช็อกโกแลต'){
          this.image = require('@/assets/img/makeorder/7.png')
          this.quantity = this.product[6].quantity
      }
       else if (this.menu == 'ช็อกโกแลตมิ้น'){
          this.image = require('@/assets/img/makeorder/8.png')
          this.quantity = this.product[7].quantity
      }
       else if (this.menu == 'ชาลูกอมรสมะนาว'){
          this.image = require('@/assets/img/makeorder/9.png')
          this.quantity = this.product[8].quantity
      }
       else if (this.menu == 'ชานมมันม่วง'){
          this.image = require('@/assets/img/makeorder/10.png')
          this.quantity = this.product[9].quantity
      }
    
  }

}
</script>

<style scoped>
.btn-not {
  background-color: rgb(202, 38, 38);
  color: rgb(255, 255, 255);
  padding: 20px 30px;
  font-size: 25px;
  border-radius: 15px;
  border: 5px solid rgb(124, 122, 122);
}
.btn-not:hover {
  opacity: 1;
}
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
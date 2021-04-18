<template>
  <div class="ctn" >
      <pre> </pre>
      <center>
          <div class="block" >
          <pre style="margin-bottom:30px"> </pre>
          <form @submit.prevent="handleUpdateForm">
                <table align=center >
                <tr>
                    <td style=" text-align: right;">
                        <label > Name : </label>
                    </td>
                    <td>
                        <input type="text" v-model="products.name">
                    </td>
                </tr>

                <tr>
                    <td>
                        <label > Quantity : </label>
                    </td>
                    <td>
                        <input style="width: 100px;" type="number" min="1" v-model="products.quantity">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align=center>
                        <router-link to="/checkStock"><button >Back</button></router-link>
                        <button >Ok</button>
                    </td>
                </tr>
            </table>

          </form>
          
         
            
            
         
      </div>
      </center>
      
       
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            products: []
        }
    },
    methods:{
        handleUpdateForm(){
            let apiURL = `http://localhost:4000/api/update/${this.$route.params.id}`;
            axios.put(apiURL, this.products).then((res) => {
                console.log(res)
                this.$router.push('/checkStock')
            }).catch(error => {
                console.log(error)
            })
        
        }
    },
    updated(){
        //console.log(id)
    },
    created(){
        let apiURL = `http://localhost:4000/api/edit/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.products = res.data
            console.log(this.products)
        })
    }
}
</script>

<style scoped>
button {
    padding: 10px 30px;
    margin-top: 30px;
    border: 1px solid #111;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
}
label {
    font-size: 50px;
    color: white;
}
input {
    width: 450px;
    height: 40px;
    font-size: 30px;
    margin: 0 0 0 20px;
    border: 1px solid #111;
}
.ctn {
  background-color: #cafdee;
  width: 100%;
  height: 969px;
  margin: 0;
}
.block {
    width: 800px;
    height: 400px;
    margin: 70px 0 0 0px;
    background: rgb(109, 100, 100);
    border-radius: 20px;
}
</style>
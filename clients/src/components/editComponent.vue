<template>
  <div class="row justify-centent-center">
      <div class="col-md-6">
          <!-- Update goes here -->
          <h1>Update Student</h1>
           <form @submit.prevent="handleUpdateForm">
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="student.name" required>
              </div>
              <div class="form-group">
                  <label for="email">Quantity</label>
                  <input type="number" v-model="student.quantity" required>
              </div>

              <button >Update</button>
          </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            student: {}
        }
    },
    created(){
        let apiURL = `http://localhost:4000/api/edit/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.student = res.data
            console.log(this.student)
        })
    },
    methods:{
        handleUpdateForm(){
            let apiURL = `http://localhost:4000/api/update/${this.$route.params.id}`;
            axios.put(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        
        }
    }
}
</script>

<style>

</style>
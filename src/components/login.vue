<template>
  <div align="center">
  <va-form 
    class="w-[300px]"
    ref="formRef"

  >
    <va-input
      v-model="name"
      :rules="[(value) => (value && value.length > 0) || 'Please enter username']"
      label="Enter Username:"
    />
<br>
<va-input
      v-model="email"
      :rules="[(value) => (value && value.length > 0) || 'Please enter email']"
      label="Enter Email:"
    />
<br>
    <va-input
      v-model="password"
      :rules="[(value) => (value && value.length>7) || 'Password is too short']"
      class="mt-3"
      type="password"
      label="Enter password:"
    />
    <br>
    <va-input
      v-model="c_password"
      :rules="[(value) => (value && value.length>7) || 'Password is too short']"
      class="mt-3"
      type="password"
      label="Confirm password:"
    />
    <br>
    <br>
    <va-button
      
      class="mt-3"
      :disabled="!isValid" @click="validate() && login()"
    ><font-awesome-icon :icon="['fas', 'plus']" spin/>&nbsp;
      Login
    </va-button>
  </va-form>

</div>
</template>
<script setup>
  import { useForm } from 'vuestic-ui'
 
  const { isValid, validate } = useForm('formRef')



</script>
  <script>
  import router from '@/router';
  import axios from "axios";

const Axios = axios.create({
    baseURL:process.env.REACT_APP_API_ENDPOINT,
    headers: {},
});
  export default {
    name: 'LoginTodo',
    data(){
      return{
        name:"",email:"",password:'',c_password:'',user:{name:"",email:"",password:'',c_password:''}
      }
    },
    methods:{

 async login(){
    this.user['name']=this.name
    this.user['password']=this.password
    this.user['c_password']=this.c_password
    this.user['email']=this.email
  
  Axios
  .post("http://127.0.0.1:8000/api/login",this.user)
  .then(response=>{
      localStorage.clear()  
      // console.log(response.data.data.token)
         localStorage.setItem('access_token', response.data.data.token),
        
         router.push('/home')}).catch(err=>{alert("error"),console.log(err)})

  }
    }
  };
  </script>
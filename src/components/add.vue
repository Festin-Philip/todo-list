<template>
  <div align="center">
  <va-form 
    class="w-[300px]"
    ref="formRef"

  >
    <va-input
      v-model="form.todo"
      :rules="[(value) => (value && value.length > 0) || 'Task is required']"
      label="Enter Task:"
    />
<br>
    <va-input
      v-model="form.email"
      :rules="[(value) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) || 'Invalid Email']"
      class="mt-3"
      type="email"
      label="Enter email:"
    />
    <br>
    <va-select :options="form.options"
      v-model="form.stat"
      class="mt-3"
      label="Select Status:"
      :rules="[(v) => v.length>0 || 'Status is required']"
      
      
    />
    <br>
    <va-button
      
      class="mt-3"
      :disabled="!isValid" @click="validate() && submit()"
    ><font-awesome-icon :icon="['fas', 'plus']" spin/>&nbsp;
      Add
    </va-button>
  </va-form>
  <br> <br>
  <router-link class="nav-link" to="/home">Home</router-link>
</div>
</template>
<script setup>
  import { useForm } from 'vuestic-ui'
  import {reactive} from 'vue'

    const { isValid, validate } = useForm('formRef')

  const form = reactive({
    todo:"",stat:"PENDING",email:"", options: ["PENDING", "COMPLETED"], todos:{'task':"",'status':"",'email':""}
  })



  const submit = () => {
    form.todos['task']=form.todo
    form.todos['status']=form.stat
    form.todos['email']=form.email
  axios
  .post("todos/",form.todos)
  .then().catch(err=>{alert("error"),console.log(err.response)})
  }
</script>
  <script>
  import axios from './axios.js';
  export default {
    name: 'AddTodo'};
  </script>
<template>
  <div id="app">
    <Navbar />
   
</div>
<!-- <button @click="count++">count</button> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld :msg="count"/> -->
<!-- <input type="text" v-model="firstName">
<input type="text" v-model="lastName">
<input type="text" v-model="message"/> -->
<!-- <button @click="alertMessage">Alert</button> -->

</template>

<script>
import Navbar from './components/navbar.vue';

// import HelloWorld from './components/HelloWorld.vue';
// import Delete from './components/delete.vue';
// import Update from './components/update.vue'
// import Add from './components/add.vue'
// import Navbar from './components/navbar.vue'
// import HomePage from './components/home.vue'
// import BasicCRUD from './components/basicCRUD.vue'
export default {
  name: 'App', components: {
    Navbar
  }}
  // components: 
  // {
  //   HomePage}}
  // }, data(){
  //   return {
  //     // message: 'Hello World!',count:0,firstName,lastName
  //   }}  ,
  //   methods:{
  //   //   alertMessage(){
  //   //   alert(this.message)
  //   // }
 



</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
</style>
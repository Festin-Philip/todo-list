<template>
    <va-navbar 
    color="#146C94"
    class="h-24"
    size="lg"
    >
      <template #left>
        <div v-bind:style="{'font-size':'30px','fontStyle': 'italic' ,'fontFamily':'Helvetica','color':'white'}">
        <va-navbar-item class="logo"><router-link  v-bind:style="{'font-size':'30px','fontStyle': 'italic' ,'fontFamily':'Helvetica','color':'white'}" to="/">
          <font-awesome-icon :icon="['fas', 'clipboard-list']" size="lg" />&nbsp;
          To-Do List</router-link>
        </va-navbar-item> </div>
       
      </template>
      <template #right>
        
        <va-navbar-item ><router-link v-bind:style="{ 'color': 'white' }" class="nav-link" to="/add/"><font-awesome-icon :icon="['fas', 'plus']" spin/><b>&nbsp;&nbsp; <va-button round color="info"
    gradient
    class="mr-6 mb-2">Add Item</va-button></b></router-link></va-navbar-item>
        <va-navbar-item v-bind:style="{'fontStyle': 'italic' ,'fontFamily':'Helvetica','color':'blue'}"><input type="text" v-model="tempId"></va-navbar-item>

        <va-navbar-item><va-button round color="info"
    gradient
    class="mr-6 mb-2" @click="Id"><font-awesome-icon :icon="['fas', 'search']" /></va-button> </va-navbar-item>

        <va-dropdown>
    <template #anchor>
      <va-button  round color="info"
    gradient
    class="mr-6 mb-2"><font-awesome-icon :icon="['fas', 'sort']" />&nbsp;
        Sort
      </va-button>
    </template>
    <va-dropdown-content> <va-button  round color="info"
    gradient
    class="mr-6 mb-2" @click="asc">From oldest</va-button> </va-dropdown-content>
    <va-dropdown-content> <va-button round color="info"
    gradient
    class="mr-6 mb-2" @click="desc">From newest</va-button> </va-dropdown-content>
    

  </va-dropdown>
  <va-dropdown>
    <template #anchor>
      &nbsp;
      <va-button round color="info"
    gradient
    class="mr-6 mb-2"><font-awesome-icon :icon="['fas', 'filter']" />&nbsp;
        Filter
      </va-button>

    </template>

    <va-dropdown-content><va-button round  color="info"
    gradient @click="pend">Pending</va-button> </va-dropdown-content>
    <va-dropdown-content><va-button round color="info"
    gradient @click="comp">Completed</va-button> </va-dropdown-content>
    <va-dropdown-content><va-button round color="info"
    gradient @click="all">All</va-button> </va-dropdown-content>
  </va-dropdown>


      </template>
    </va-navbar>
  
  
   <router-view />
  </template>

<script>
// import List from '@/components/list.vue'
export default {
    name: 'NavBar',
      
  data() {
  return {
  tempId:0
  };
  },
methods:{
    asc(){
        this.$store.commit('ascend')

    },desc(){

        this.$store.commit('descend')
    },pend(){
        this.$store.commit('pending')
    },comp(){
        this.$store.commit('completed')
    },all(){
        this.$store.commit('all')
    },
    Id(){
        this.$store.commit('setId',this.tempId)
    }

}
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
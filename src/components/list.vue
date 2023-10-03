<template>
  <div class="flex flex-wrap gap-5" > 
 
 
    <div v-bind:style="{'color':'#991B16'  }" v-if="todosSet" >
  <ul v-for ="(value,k) in todos.data" :key="k">
    
     <va-card  color="#6699CC"
    gradient horizontal>
    
    
    

      <va-card-title></va-card-title>
      <va-card-content >
         <va-card-block
        class="flex-nowrap"
        horizontal
      > 
        <br><br>
        <div class="flex flex-wrap gap-5" v-bind:style="{'font-size':'20px','fontStyle': 'italic' ,'fontFamily':'Helvetica','color':'black'}"><div  v-bind:style="{'font-size':'26px'}"><font-awesome-icon :icon="['fas', 'id-card']" /> {{todos.data[k ].id }}</div><br>
          <br>Task: {{todos.data[k ].task }}<br><br>
          <div v-bind:style="{'color':'#991B16'  }" v-if="todos.data[k ].status=='PENDING'" >Status: {{todos.data[k ].status }}</div>
          <div v-bind:style="{'color':'green'  }" v-if="todos.data[k ].status=='COMPLETED'"  >Status: {{todos.data[k ].status }}</div>
          <br>
     Email: {{todos.data[k ].email }}
    </div></va-card-block>
    </va-card-content>
      <va-card-actions    align="center"
        >
        <va-button @click="onButtonClick(this.selectedId=todos.data[k ].id)" color="info" 
    gradient   size="medium">  <font-awesome-icon :icon="['fas', 'trash']" />  Delete</va-button><br><br>
        <va-button  @click="setSeltodo(todos.data[k ])" color="info"  
    gradient  size="medium"><router-link  :to="'/update/'+todos.data[k ].id" v-bind:style="{ 'color': 'white' }" class="nav-link"><font-awesome-icon :icon="['fas', 'pencil-alt']" />  Update</router-link></va-button>

      </va-card-actions>
   

</va-card>
     <br>


    </ul> 

 </div>
   
 <va-button color="info"
    gradient   @click="setFirst">First Page </va-button>
 <br><br>
    <va-button color="info"
    gradient   @click="setLast">Last Page </va-button><br>
 <br> <va-button color="info"
    gradient v-if="todos.next_page_url"   @click="setNext">Next Page</va-button>
 <br><br>
      <va-button  color="info"
    gradient v-if="todos.prev_page_url" @click="setPrev">Previous Page</va-button>
  <br>
 
 <h4 >page  {{ todos.current_page }} of {{ todos.last_page }} </h4>
 <br>  <br><br><br>

  </div>
  </template>
  <script setup>
import { useModal,useToast } from 'vuestic-ui'
const { init } = useToast()
const { confirm } = useModal()
const onButtonClick =  (id) => {
  confirm({message:'Are you sure you want to delete this item?',blur:'True'})
    .then((ok) => ok && deleteIt(id))
}
const deleteIt=(id) =>{
   
   axios
   .delete("todos/"+id)
   .then(init({message:"Deleted Successfully",color:'success',closeable:false,duration:2000})).catch(err=>{init({message:"Deletion Failed",color:'danger',closeable:false,duration:2000}),console.log(err.response)})
   }
  </script>
  
  <script>
import axios from './axios.js';

  export default {

    name: 'ListTodo',
   
  data() {
  return {
    selectedId:0,  todosProxy:{},todos: {},next:"",prev:"",link:"todos/",todosSet:false
  };
  },
  methods:{setSeltodo(todoObj){
    this.$store.commit('setSelectedTodo',todoObj)
    localStorage.setItem("selectedTodo",JSON.stringify(todoObj))
  },onButtonClick(){
    console.log("hi")
   
    this.confirmIt('Are you sure you want to delete this item?')
      .then((ok) => ok && console.log(this.selectedId))
  },
   
    setNext(){
      
    this.next=this.todos.next_page_url
    console.log(this.next)
    axios
  .get(this.next)
  .then(response => {
    this.$store.commit('setTodo',response.data[0])
  }).catch(err=>{console.log(err.response)})
  },
  setPrev(){
    this.prev=this.todos.prev_page_url
    axios
  .get(this.prev)
  .then(response => {
    this.$store.commit('setTodo',response.data[0])
  }).catch(err=>{console.log(err.response)})
  },
   
   setFirst(){
     
   this.next=this.todos.first_page_url
   
   axios
 .get(this.next)
 .then(response => {
   this.$store.commit('setTodo',response.data[0])
 }).catch(err=>{console.log(err.response)})
 },
   
   setLast(){
     
   this.next=this.todos.last_page_url
  
   axios
 .get(this.next)
 .then(response => {
   this.$store.commit('setTodo',response.data[0])
 }).catch(err=>{console.log(err.response)})
 }
 
  },
  computed: {
 selectedOrder () {
   return this.$store.state.selectedOrder;
 },selectedStatus () {
   return this.$store.state.selectedStatus;
 }  ,selectedID () {
   return this.$store.state.selectedID;
 }  ,
todoObj(){
  return this.$store.state.todoObj;
}   },   
  created: function() {
   

    // if(this.selectedOrder!=""){
    //   this.link="todo-list/"+this.$store.state.selectedOrder+"/"
    // }
    // else{
    //   this.link="todos"
    // }
  axios
  .get(this.link)
  .then(response => {
  // console.log(response.data[0].next_page_url)
    this.$store.commit('setTodo',response.data[0])
  
//   this.todos=this.todos[0]
console.log(this.$store.state.todoObj)
  }).catch(err=>{alert("error fetching list"),console.log(err)})
  },
  watch:{
'todoObj':function(){
  if(this.todoObj!=""){
    console.log(this.todoObj)
    this.todos=this.todoObj
    this.todosSet=true
    console.log(this.todos)
  }
}
  }
//   'selectedOrder': function(){  
  
//     if(this.selectedOrder!=""){
//       if(this.link.includes("asc"))
//       this.link=this.link.replace("asc","desc")
//     else if(this.link.includes("desc"))
//     this.link=this.link.replace("desc","asc")
//     else
//       this.link=this.link+this.$store.state.selectedOrder+"/"
//     }
//     else{
//       this.link="todos"
//     }
//   axios
//   .get(this.link)
//   .then(response => {
//   this.todos = response.data;
//   }).catch(err=>{alert("error fetching list"),console.log(err)})
//   },
//   'selectedStatus': function(){
   
//     if(this.selectedStatus!=""){
//       if(this.$store.state.selectedOrder!="")
//       this.link="todo-list/"+this.$store.state.selectedStatus+"/"+this.$store.state.selectedOrder+"/"
//       else
//       this.link="todo-list/"+this.$store.state.selectedStatus+"/asc/"
//     }
//     else{
//       if(this.$store.state.selectedOrder!="")
//       this.link="todo-list/"+this.$store.state.selectedOrder+"/"
//       else
//       this.link="todo-list/"
//     }
//   axios
//   .get(this.link)
//   .then(response => {
//   this.todos = response.data;
//   }).catch(err=>{alert("error fetching list"),console.log(err)})
//   },
//   'selectedID': function(){
    
//     if(this.selectedID=="")
//     this.link="todo-list/"
//    else
//     this.link="todo-list/view/"+this.selectedID+"/"
//   axios
//   .get(this.link)
//   .then(response => {
//   this.todos = response.data;
//   }).catch(err=>{alert("error fetching list"),console.log(err)})
//   }
//  }
  };
  </script>
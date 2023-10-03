import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createVuestic } from 'vuestic-ui'
import { createStore } from "vuex";
import 'vuestic-ui/css'
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencilAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const Axios = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/v1/",
//   headers: {
   
//   }
// });

// Axios.interceptors.request.use((config) => {
//     const token = localStorage.getItem("access_token");
  
//     if (token) {
//         Axios.headers.common.Authorization = "Bearer " + token
//     }else{
//       window.location.replace("/unauthorized");
//     }
//     return config;
    
//   });


// Axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
     
//      if (error.response.status === 401) {
       
//         const accessToken = await refreshAccessToken();
//         Axios.defaults.headers.common["Authorization"] =
//           "Bearer " + accessToken;
//         return Axios(originalRequest);
//       } else {
//         throw error;
//       }
//     }
//   );
//   const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const data = { refresh: refreshToken };
  
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/v1/token/refresh/',
//         data
//       );
//       const accessToken = response.data.access;
//       localStorage.setItem("access_token", accessToken);
//       return accessToken;
//     } catch (err) {
//       if(err.response.status===401)
//       localStorage.clear();
//      window.location.replace("/unauthorized");
//     }
//   };

  

library.add(faClipboardList)
library.add(faSort)
library.add(faFilter)
library.add(faPhone)
library.add(faIdCard)
library.add(faPencilAlt)
library.add(faPlus)
library.add(faTrash)
library.add(faSearch)


const store = createStore({
    state: {
        selectedStatus: "",selectedOrder:"",selectedID:0,todoObj:{},
        selectedTodo:JSON.parse(localStorage.getItem("selectedTodo"))
        // {


          // "id":"" ,
          // "todo": "",
          // "status": "",
          // "email": "",
          // "version": ""
        // }
      },
      mutations: {
        pending (state) {
          state.selectedStatus='PENDING'
        },
        completed (state) {
            state.selectedStatus='COMPLETED'
          },
          ascend (state) {
            state.selectedOrder='asc'
          },
          descend (state) {
            state.selectedOrder='desc'
          },
          all(state){
            state.selectedStatus=""
          },
          setId(state,id){
            state.selectedID=id
          },
          setSelectedTodo(state,selectedtodoObj){
            state.selectedTodo=selectedtodoObj
          },
          setTodo(state,todoObj){
            state.todoObj=todoObj
          }
  },

});
  

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
app.use(store)
// app.config.globalProperties.$axios={ ...Axios }
app.use(router);


app.use(createVuestic());
app.mount("#app");
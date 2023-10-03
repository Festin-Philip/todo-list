import axios from "axios";
import router from "@/router";
axios.defaults.baseURL="http://127.0.0.1:8000/api/"

// const Axios = axios.create({
//     baseURL:'http://127.0.0.1:8000/api/',
//     headers: {},
// });
// const access = localStorage.getItem("access_token");
// axios.defaults.headers.common['Authorization'] = 'Bearer '+access

axios.interceptors.request.use((config) => {
    console.log(config.headers.Authorization)
    const access = localStorage.getItem('access_token');


        if(access)
        config.headers.Authorization= 'Bearer '+access
     else
             router.push('/')
    
    return config
  })
  
  axios.interceptors.response.use((resp) => {
return(resp)},
async (err)=>{
   //  const originalConfig = err.config;
   //      const refreshToken = localStorage.getItem("refresh_token");
   //      const data = { refresh: refreshToken };
      
   //      try {
   //        const response = await Axios.post('http://127.0.0.1:8000/api/v1/token/refresh/',
   //          data
   //        );
   //        const accessToken = response.data.access;
   //        localStorage.setItem("access_token", accessToken);
   //        return axios(originalConfig);
   //      } catch (err) {
         console.log(err)
          localStorage.clear();
          router.push('/')
      //   }

})
// return resp
// },
// async(err)=>{
//     const originalConfig = err.config;
//     const refreshToken = localStorage.getItem("refresh_token");
//     const data = { refresh: refreshToken };
  
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/v1/token/refresh/',
//         data
//       );
//       const accessToken = response.data.access;
//       localStorage.setItem("access_token", accessToken);
//       return axios(originalConfig);
//     } catch (err) {
     
//       localStorage.clear();
//       router.push('/')
//     }



    // (response) => response,
    // async (error) => {
    //     console.log(error)
    // const accessToken =  refreshAccessToken();
    //         axios.defaults.headers.common["Authorization"] =
    //           "Bearer " + accessToken;
    //         return axios(response);
    

//   }
 
  
// export const accessToken = async () => {
// const access = localStorage.getItem("access_token");


//     if(access)
//         axios.defaults.headers.common['Authorization'] = 'Bearer '+access
//     else
//         router.push('/')
// }


// export const refreshAccessToken = async () => {
//         const refreshToken = localStorage.getItem("refresh_token");
//         const data = { refresh: refreshToken };
      
//         try {
//           const response = await axios.post('http://127.0.0.1:8000/api/v1/token/refresh/',
//             data
//           );
//           const accessToken = response.data.access;
//           localStorage.setItem("access_token", accessToken);
//           return accessToken;
//         } catch (err) {
         
//           localStorage.clear();
//           router.push('/')
//         }
//       };


// axios.interceptors.request.use((req) => {
    
//     const token = localStorage.getItem('access_token');
  
//     if (token) {
//          req.defaults.headers.common['Authorization'] = 'Bearer '+token

//     }else{
//         router.push('/')
//     }
    
    
//   });


// axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
     
//     //  if (error.response === 401) {
       
//         const accessToken = await refreshAccessToken();
//         axios.defaults.headers.common["Authorization"] =
//           "Bearer " + accessToken;
//         return axios(originalRequest);
//       } 
//     //   else {
//     //     throw error;
//     //   }
//     // }
//   );
//   const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const data = { refresh: refreshToken };
  
//     try {
//       const response = await axios.post('axios://127.0.0.1:8000/api/v1/token/refresh/',
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

  export default axios;
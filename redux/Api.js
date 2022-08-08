import axios from "axios";
//const baseURL = "https://yuvasoftapi1.herokuapp.com";

 const baseURL="https://yuvasoftapi2-master2.herokuapp.com/"
const Api = axios.create({
  baseURL: `${baseURL}/api/v1/`,
  headers: {
    "Content-type": "application/json",
  },
});

Api.interceptors.response.use(
  (response) => {
    // if (response.status === 401) {
    //   alert("You are not authorized");
    // }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default Api;

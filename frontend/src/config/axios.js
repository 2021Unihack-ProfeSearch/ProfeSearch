import Axios from 'axios'
import { Loading, Message } from 'element-ui';
import Vue from 'vue'
import {startLoading, closeLoading} from "@/utils/loading";

Axios.defaults.withCredentials = true;

Axios.interceptors.request.use((config) => {
  startLoading();
  return config;
}), (error) => {
  //alert("request失败")
  closeLoading()
  this.$message.error(error);
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  //console.log(response);
  //alert("response成功")
  closeLoading()
  return Promise.resolve(response.data);
}), (error) => {
  //console.log(error);
  //alert("response失败")
  closeLoading()
  this.$message.error(error);
  return Promise.reject(error);
}

export default Axios

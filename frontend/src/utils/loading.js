import {Loading} from "element-ui";

var loading = null;

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: 'Loading...',
    spinner: 'el-icon-loading',
    background: 'white'
  })
}

function closeLoading() {
  loading.close();
}

export {startLoading, closeLoading}

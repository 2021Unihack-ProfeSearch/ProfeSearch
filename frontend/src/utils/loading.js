import {Loading} from "element-ui";

var loading = null;

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: 'Loading...',
    spinner: 'el-icon-loading',
    background: 'white',
    fullscreen: true
  })
}

function closeLoading() {
  loading.close();
}

export {startLoading, closeLoading}

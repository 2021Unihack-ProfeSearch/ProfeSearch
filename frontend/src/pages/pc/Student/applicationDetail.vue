<template>
  <div style="margin: 6rem 3rem;">
    <div id="goBackDiv" style="cursor: pointer;display: inline-block;position: absolute;top: 6rem;" @click="goBack">
      <svg style="width: 3rem; height: auto;" t="1628243597803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3107" width="200" height="200">
        <path id="goBack" d="M475 276V141.4c-12.1-56.3-58.2-22-58.2-22L96.6 395.9c-70.4 48.9-4.8 85.7-4.8 85.7l315.4 274.1c63.1 46.5 67.9-24.5 67.9-24.5V606.4C795.3 506 926.3 907.5 926.3 907.5c12.1 22 19.4 0 19.4 0C1069.4 305.4 475 276 475 276z" p-id="3108" fill="#8a8a8a"/>
      </svg>
    </div>
    <div class="appInfo">
      <div style="display: flex;align-items: center;margin-top: 6rem;position: relative">
        <span class="title">{{title}}</span>
        <span class="statusSpan" style="background: #DDDDDD;color: #777777;" v-if="status === 'rejected'">Rejected</span>
        <span class="statusSpan" style="background: #FFDB99;color: #FF8626"  v-else-if="status === 'processing'">Pending</span>
        <span class="statusSpan" style="background: #CFEDB1;color: #30C530;" v-else>Success</span>
      </div>
      <div>
        <div class="infoSpan">
          <b>Type </b><span>{{type}}</span>
        </div>
        <div class="infoSpan">
          <b>Area </b><span>{{area}}</span>
        </div>
        <div class="infoSpan">
          <b>Posted by </b><span>{{releaser}}</span>
        </div>
        <div class="infoSpan">
          <b>Location </b><span>{{location}}</span>
        </div>
        <div class="infoSpan">
          <b>Description </b><span>{{description}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import api from "../../../config/api";
import {closeLoading} from "../../../utils/loading";
export default {
  name: "applicationDetail",
  mounted() {
    document.getElementById("goBackDiv").addEventListener("mouseover", function () {
      document.getElementById("goBack").setAttribute("fill", "#FF8626");
    })
    document.getElementById("goBackDiv").addEventListener("mouseout", function () {
      document.getElementById("goBack").setAttribute("fill", "#8a8a8a");
    })
    this.$axios.get(api.application.studentGetSingleApplication + '/' + this.$route.params.appId).then(res => {
      console.log(res);
      this.title = res.data.Application.position.title;
      this.area = res.data.Application.position.area;
      this.location = res.data.Application.position.location;
      this.title = res.data.Application.position.title;
      this.description = res.data.Application.position.description;
      this.application_status = res.data.Application.status.toLowerCase();
      this.releaser = res.data.Application.position.faculty.name;
      //this.status = res.data.Application.status;
    }).catch(err => {
      console.log(err);
      closeLoading();
      this.$message.error("Error getting application info. Please try again later");
    })
  },
  data () {
    return {
      type: "Research",
      area: 'CS',
      location: "In person",
      title: "Research Assistant",
      description: "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. " +
        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.The quick brown " +
        "fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
      application_status: "Rejected",
      releaser: "Aaron Cote",
      status: "accepted"
    }
  },
  methods: {
    goBack () {
      window.history.back();
    }
  }
}
</script>

<style scoped lang="less">
.appInfo {
  margin: 0 6rem;
  .title {
    display: inline-block;
    margin-right: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
  .acceptBtn {
    position: absolute;
    right: 0;
    width: 10rem;
    font-size: 1rem;
    font-weight: 700;
  }
  .statusSpan {
    border-radius: 11px;
    padding: 5px 13px;
    font-weight: 600;
    width: 5rem;
    text-align: center;
    font-size: 1rem;
    display: inline-block;
  }
  .infoSpan {
    margin: 1rem 0;
    font-size: 1.1rem;
    b {
      color: #FF8626;
    }
    span {
      display: block;
      padding: 0.8rem 1.5rem;
      background: #80808024;
      border-radius: 1rem;
      color: #5d5c5c;
      margin-top: 10px;
    }
  }
}
</style>

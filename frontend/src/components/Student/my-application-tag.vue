<template>
  <div class="myApplication" ref="application">
    <img style="position: absolute;" :src="institutionImg" :alt="institution"/>
    <div style="margin-left: 7rem;">
      <span style="font-size: 1.3rem;font-weight: 600;color: rgb(107 102 102);">{{institution}}</span><br/>
      <span style="font-size: 1.7rem;font-weight: bold;">{{title}}</span><br/>
    </div>
    <div style="margin-left: 7rem;margin-top: 1rem;">
      <b>Areas</b> &nbsp;
      <span>{{area}}</span><br/>
      <b>Location</b> &nbsp;
      <span>{{location}}</span>
    </div>
    <div class="detailBtn">
      <span class="statusSpan" style="background: #DDDDDD;color: #777777;" v-if="status === 'rejected'">Rejected</span>
      <span class="statusSpan" style="background: #FFDB99;color: #FF8626"  v-else-if="status === 'pending'">Pending</span>
      <span class="statusSpan" style="background: #CFEDB1;color: #30C530;" v-else>Success</span>
      <vs-button
        flat
        :active="false"
        style="display: inline-block;font-size: 13px;"
        @click="goToDetail"
      >
        Full Details
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-application-tag",
  props: {
    application: Object
  },
  mounted() {
    if (this.status === 'rejected') {
      this.$refs.application.style = "border: 2px solid #777777";
    } else if (this.status === 'pending') {
      this.$refs.application.style = "border: 2px solid #FF8626";
    } else {
      this.$refs.application.style = "border: 2px solid #30C530";
    }
  },
  data () {
    return {
      appId: this.application._id,
      title: this.application.position.title,
      area: this.application.position.area,
      location: this.application.position.location,
      institution: this.application.position.faculty.institution,
      releaser: this.application.position.faculty.name,
      status: this.application.status.toLowerCase(),
      institutionImg: require("@/assets/USC.png")
    }
  },
  methods: {
    goToDetail () {
      this.$router.push({
        name: 'applicationDetail',
        params: {
          appId: this.appId
        }
      })
    }
  }
}
</script>

<style scoped>
.myApplication {
  border-radius: 1rem;
  height: 8rem;
  position: relative;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
}
.detailBtn {
  width: 13rem;
  font-size: 1rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.statusSpan {
  border-radius: 11px;
  padding: 5px 13px;
  font-size: 14px;
  font-weight: 600;
}
</style>

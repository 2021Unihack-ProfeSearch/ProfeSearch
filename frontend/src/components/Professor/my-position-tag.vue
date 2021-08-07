<template>
  <div class="myPosition" ref="position">
    <div>
      <span style="font-size: 1.7rem;font-weight: bold;">{{title}}</span><br/>
    </div>
    <div style="margin-top: 1rem;">
      <b>Type</b> &nbsp;
      <span class="info">{{type}}</span><br/>
      <b>Location</b> &nbsp;
      <span v-if="location === 0" class="info">In Person</span>
      <span v-else class="info">Remote</span><br/>
      <b>Audience</b>
      <span class="info">{{audience}}</span><br/>
      <b>Release Time</b>
      <span class="info">{{release_time}}</span><br/>
      <b>Deadline</b>
      <span class="info">{{deadline}}</span><br/>

    </div>
    <div class="detailBtn">
      <span class="statusSpan" style="background: #FFDB99;color: #FF8626;" v-if="status === 'unfulfilled'">Unfulfilled</span>
      <span class="statusSpan" style="background: #CFEDB1;color: #30C530"  v-else-if="status === 'fulfilled'">Fulfilled</span>
      <span class="statusSpan" style="background: #DDDDDD;color: #777777;" v-else>Closed</span>
      <vs-button
        flat
        :active="false"
        style="display: inline-block;font-size: 13px;"
        @click="goToPositionDetail"
      >
        Full Details
      </vs-button>
    </div>
  </div>
</template>

<script>
import parseDate from "../../utils/parseDate";

export default {
  name: "my-position-tag",
  props: {
    position: Object
  },
  mounted() {
    let result = '';
    this.audience.forEach(aud => {
      result += aud + ', ';
    })
    if (result.length > 0) {
      result = result.substr(0,result.length - 2);
    }
    this.audience = result;
    // 0 unfulfilled, 1 fulfilled, 2
    if (this.position.status.toLowerCase() === 'unfulfilled') {
      this.$refs.position.style = "border: 2px solid #FF8626";
    } else if (this.position.status.toLowerCase() === 'fulfilled') {
      this.$refs.position.style = "border: 2px solid #30C530";
    } else {
      this.$refs.position.style = "border: 2px solid #777777";
    }
  },
  data () {
    return {
      positionId: this.position._id,
      title: this.position.title,
      type: this.position.positionType,
      audience: this.position.target,
      location: this.position.location,
      release_time: parseDate(this.position.released),
      deadline: parseDate(this.position.deadline),
      status: this.position.status.toLowerCase()
    }
  },
  methods: {
    goToPositionDetail(){
      this.$router.push({
        name: 'facultyPositionDetail',
        params: {
          positionId: this.positionId
        }
      })
    }
  }

}
</script>

<style scoped>
.myPosition {
  border-radius: 1rem;
  height: 10.3rem;
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
  text-align: right;
}
.statusSpan {
  border-radius: 11px;
  padding: 5px 13px;
  font-size: 14px;
  font-weight: 600;
}
.info{
  margin-left: 1rem;
}
</style>

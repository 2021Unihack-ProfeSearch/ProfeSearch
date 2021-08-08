<template>
  <div class="positionTag">
    <img style="position: absolute;" :src="institutionImg" :alt="institution"/>
    <div style="margin-left: 7rem;">
      <span style="font-size: 1.3rem;font-weight: 600;color: rgb(107 102 102);">{{institution}}</span><br/>
      <span style="font-size: 1.7rem;font-weight: bold;">{{title}}</span><br/>
    </div>
    <div style="margin-left: 7rem;margin-top: 1.5rem;">
      <div style="display: inline-block;margin-right: 5rem;">
        <b>Deadline</b> &nbsp;
        <span>{{deadline}}</span><br/>
        <b>Areas</b> &nbsp;
        <span>{{area}}</span><br/>
        <b>Audience</b> &nbsp;
        <span>{{audience}}</span>
      </div>
      <div style="display: inline-block;">
        <b>Type</b> &nbsp;
        <span>{{type}}</span><br/>
        <b>Posted by</b> &nbsp;
        <span>{{releaser}}</span><br/>
        <b>Location</b> &nbsp;
        <span>{{location}}</span>
      </div>
    </div>
    <div class="detailBtn">
      <span class="statusSpan" style="background: #FFDB99;color: #FF8626;" v-if="status === 'unfulfilled'">Unfulfilled</span>
      <span class="statusSpan" style="background: #CFEDB1;color: #30C530"  v-else-if="status === 'fulfilled'">Fulfilled</span>
      <span class="statusSpan" style="background: #DDDDDD;color: #777777;" v-else>Closed</span>
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
import parseDate from "../../utils/parseDate";

export default {
  name: "find-position-tag",
  props: {
    position: Object
  },
  mounted() {
    let positionFinal = '';
    this.position.target.forEach(aud => {
      positionFinal += aud + ', ';
    })
    if (positionFinal.length > 0) {
      positionFinal = positionFinal.substr(0,positionFinal.length - 2);
    }
    this.audience = positionFinal;
  },
  data () {
    return {
      positionId: this.position._id,
      title: this.position.title,
      deadline: parseDate(this.position.deadline),
      area: this.position.area,
      releaser: this.position.faculty.name,
      type: this.position.positionType,
      location: this.position.location,
      institution: this.position.faculty.institution,
      audience: this.position.target,
      institutionImg: require('@/assets/USC.png'),
      status: this.position.status
    }
  },
  methods: {
    goToDetail () {
      this.$router.push({
        name: "positionDetail",
        params: {
          positionId: this.positionId
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.positionTag {
  margin-bottom: 1rem;
  border: 2px solid #FF8626;
  border-radius: 1rem;
  position: relative;
  padding: 1rem 3rem;
  transition: box-shadow .2s cubic-bezier(.645,.045,.355,1);
}
.positionTag:hover {
  box-shadow: 0 0 6px 0 #ff8626;
  transition: box-shadow .2s cubic-bezier(.645,.045,.355,1);
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
</style>

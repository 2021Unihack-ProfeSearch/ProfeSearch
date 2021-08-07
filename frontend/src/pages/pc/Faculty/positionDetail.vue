<template>
  <div style="margin: 6rem 3rem;">
    <div id="goBackDiv" style="cursor: pointer;display: inline-block;position: absolute;top: 6rem;" @click="goBack">
      <svg style="width: 3rem; height: auto;" t="1628243597803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3107" width="200" height="200">
        <path id="goBack" d="M475 276V141.4c-12.1-56.3-58.2-22-58.2-22L96.6 395.9c-70.4 48.9-4.8 85.7-4.8 85.7l315.4 274.1c63.1 46.5 67.9-24.5 67.9-24.5V606.4C795.3 506 926.3 907.5 926.3 907.5c12.1 22 19.4 0 19.4 0C1069.4 305.4 475 276 475 276z" p-id="3108" fill="#8a8a8a"/>
      </svg>
    </div>
    <div class="positionInfo">
      <div style="display: flex;align-items: center;margin-top: 6rem;position: relative">
        <span class="title">{{title}}</span>
        <span class="statusSpan" style="background: #DDDDDD;color: #777777;" v-if="status === 'closed'">Closed</span>
        <span class="statusSpan" style="background: #FFDB99;color: #FF8626"  v-else-if="status === 'unfulfilled'">Unfulfilled</span>
        <span class="statusSpan" style="background: #CFEDB1;color: #30C530;" v-else>Fulfilled</span>
        <vs-button class="closeBtn" style="background: #DDDDDD;color: #777777;" v-if="status != 'closed'" flat :active="false">Close this position</vs-button>
      </div>

    <div>
      <div class="infoSection">
        <div class="infoSpan">
          <b>Institution </b><span>{{institution}}</span>
        </div>
        <div class="infoSpan">
          <b>Type </b><span>{{type}}</span>
        </div>
        <div class="infoSpan">
          <b>Location </b><span>{{location}}</span>
        </div>
      </div>
      <div class="infoSection" style="float: right;">
        <div class="infoSpan">
          <b>Deadline </b><span>{{deadline}}</span>
        </div>
        <div class="infoSpan">
          <b>Area </b><span>{{area}}</span>
        </div>
        <div class="infoSpan">
          <b>Target Audience </b><span>{{audience}}</span>
        </div>
      </div>
    </div>
    <div class="infoSpan">
      <b>Description </b><span>{{description}}</span>
    </div>
  </div>

  <div style="margin-top:4rem;"class="app-table">
  <span class="title">Student Applications:</span>
    <div style="margin-top: 2rem" class="center">
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>Name</vs-th>
            <vs-th>Grade</vs-th>
            <vs-th>Student Email</vs-th>
            <vs-th>Student Institution</vs-th>
            <vs-th>Student Resume</vs-th>
            <vs-th>Application Status</vs-th>
            <vs-th>Decision</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage(users, page, max)"
            :data="tr"
          >
            <vs-td>{{ tr.student_name }}</vs-td>
            <vs-td>{{ tr.grade}}</vs-td>
            <vs-td>{{ tr.student_email }}</vs-td>
            <vs-td>{{ tr.student_institution }}</vs-td>
            <vs-td>{{ tr.student_resume}}</vs-td>
            <vs-td>
              {{ tr.application_status}}
            </vs-td>
            <vs-td>
              <vs-button style="display:inline" success border :active="active == 2" @click="active = 2">Accept</vs-button>
              <vs-button style="display:inline" danger border :active="active == 2" @click="active = 2">Reject</vs-button>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
        </template>
      </vs-table>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: "positionDetail",
  mounted() {
    let positionFinal = '';
    this.audience.forEach(aud => {
      positionFinal += aud + ', ';
    })
    if (positionFinal.length > 0) {
      positionFinal = positionFinal.substr(0,positionFinal.length - 2);
    }
    this.audience = positionFinal;
  },
  data () {
    return {
      positionId: 1720192381,
      institution: "University of Southern California",
      title: "Research Assistant",
      deadline: '2021-08-23',
      area: "Computer Science",
      location: "In person",
      audience: ["Freshman","Sophomore"],
      description: "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. " +
        "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.The quick brown " +
        "fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
      status: "unfulfilled",
      type: "Research",
      // TODO status: application.status.toLowerCase()
      page: 1,
      max: 3,
      users: [
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        },
        {
          student_name: "Lorena",
          grade: "Freshman",
          student_email: "lorena@haha.edu",
          student_institution: "University of Southern California",
          student_resume:"student_resume",
          application_status:"Accepted",
        }
      ]
    }
  },
  methods: {
    goBack(){
      window.history.back();
    }
  }
}
</script>

<style scoped lang="less">

.positionInfo {
  margin: 0 6rem;
  .title {
    display: inline-block;
    margin-right: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
  .closeBtn {
    position: absolute;
    right: 0;
    width: 12rem;
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
  .infoSection {
    display: inline-block;
    width: 48%;
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
.app-table{
  margin: 0 6rem;
  .title {
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
}

/deep/ .vs-table__th__content{
  font-size:1rem;
}
/deep/ .vs-table__td{
  font-size:1rem;
}
</style>

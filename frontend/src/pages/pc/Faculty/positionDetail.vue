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
        <vs-button @click="dialogOpen = true" class="closeBtn" danger v-if="status !== 'closed'" flat :active="false">Close this position</vs-button>
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
<!--            <vs-th>Student Resume</vs-th>-->
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
            <vs-td>{{ tr.student.name }}</vs-td>
            <vs-td>{{ tr.student.grade}}</vs-td>
            <vs-td>{{ tr.student.user.email }}</vs-td>
            <vs-td>{{ tr.student.institution }}</vs-td>
<!--            <vs-td>{{ tr.student_resume}}</vs-td>-->
            <vs-td>
              {{ tr.status}}
            </vs-td>
            <vs-td>
              <div v-if="tr.status === 'processing'">
                <vs-button style="display:inline" success border :active="false" @click="accept(tr._id)" >Accept</vs-button>
                <vs-button style="display:inline" danger border :active="false" @click="reject(tr._id)">Reject</vs-button>
              </div>
              <span v-else>N/A</span>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
        </template>
      </vs-table>
    </div>
  </div>
    <vs-dialog width="550px" not-center v-model="dialogOpen">
      <template #header>
        <h4 class="not-margin">
          Close Position
        </h4>
      </template>
      <p>
        Are you sure you want to close this position?
      </p>
      <template #footer>
        <div style="display: flex;justify-content: flex-end;">
          <vs-button @click="closePosition" transparent>
            Yes
          </vs-button>
          <vs-button @click="dialogOpen=false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import api from "@/config/api";
import {closeLoading} from "@/utils/loading";
import parseDate from "../../../utils/parseDate";
export default {
  name: "positionDetail",
  mounted() {
    document.getElementById("goBackDiv").addEventListener("mouseover", function () {
      document.getElementById("goBack").setAttribute("fill", "#FF8626");
    })
    document.getElementById("goBackDiv").addEventListener("mouseout", function () {
      document.getElementById("goBack").setAttribute("fill", "#8a8a8a");
    })
    this.$axios.get(api.position.getAllPositions + '/' + this.$route.params.positionId).then(res => {
      console.log(res);
      this.institution = res.data.Position.faculty.institution;
      this.title = res.data.Position.title;
      this.deadline = parseDate(res.data.Position.deadline);
      this.area = res.data.Position.area;
      this.location = res.data.Position.location;
      this.description = res.data.Position.description;
      this.status = res.data.Position.status.toLowerCase();
      this.type = res.data.Position.positionType;
      if (res.data.Position.applications) {
        this.users = res.data.Position.applications;
      }
      console.log(this.users);
      let positionFinal = '';
      res.data.Position.target.forEach(aud => {
        positionFinal += aud + ', ';
      })
      if (positionFinal.length > 0) {
        positionFinal = positionFinal.substr(0,positionFinal.length - 2);
      }
      this.audience = positionFinal;
    }).catch(err => {
      console.log(err);
      closeLoading();
      this.$message.error("Error, please contact admin");
    })
  },
  data () {
    return {
      positionId: this.$route.params.positionId,
      institution: '',
      title: '',
      deadline: '',
      area: '',
      location: '',
      audience: [],
      description: '',
      status: '',
      type: '',
      page: 1,
      max: 3,
      dialogOpen: false,
      users: []
    }
  },
  methods: {
    goBack () {
      window.history.back();
    },
    closePosition() {
      this.dialogOpen = false;
      this.$axios.patch(api.position.getAllPositions + '/' + this.positionId, {
        status: 3
      }).then(res => {
        this.$message.success("The position is closed.");
        setTimeout(() => {
          this.$router.replace('/pc/faculty/MyPosition');
        })
      }).catch(err => {
        console.log(err)
        closeLoading();
        this.$message.error("Error closing the position");
      })
    },
    accept (appId) {
      this.$axios.patch(
        api.application.studentGetAllApplications + '/' + appId,{
          status: 3
        }
      ).then(res => {
        this.$message.success("You have accepted the student's application.");
        this.$router.replace('/pc/faculty/MyPosition');
      }).catch(err => {
        closeLoading();
        console.log(err);
        this.$message.error("Error. Please contact admin");
      })
    },
    reject (appId) {
      this.$axios.patch(
        api.application.studentGetAllApplications + '/' + appId,{
          status: 1
        }
      ).then(res => {
        this.$message.success("You have rejected the student's application.");
        location.reload();
      }).catch(err => {
        closeLoading();
        console.log(err);
        this.$message.error("Error. Please contact admin");
      })
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

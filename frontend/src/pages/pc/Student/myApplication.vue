<template>
  <div>
<!--    搜索栏-->
    <div class="search">
      <!--    title-->
      <vs-input v-model="title" placeholder="Job Title" style="margin: 0 0.5rem;position: relative;top: -4px;"/>

      <!--    type (0 research, 1 internship, 2 others)-->
      <vs-select placeholder="Type" v-model="type">
        <vs-option label="All" value='-1'>All</vs-option>
        <vs-option label="Research" value='0'>Research</vs-option>
        <vs-option label="Internship" value='1'>Internship</vs-option>
        <vs-option label="Others" value='2'>Others</vs-option>
      </vs-select>

      <!--    area (0 cs, 1 business, 2…)-->
      <vs-select placeholder="Area" v-model="area">
        <vs-option label="All" value='-1'>All</vs-option>
        <vs-option label="Architecture" value='0'>Architecture</vs-option>
        <vs-option label="Area, Ethnic, & Multidisciplinary Studies" value='1'>Area, Ethnic, & Multidisciplinary Studies</vs-option>
        <vs-option label="Arts: Visual & Performing" value='2'>Arts: Visual & Performing</vs-option>
        <vs-option label="Business and Economics" value='3'>Business and Economics</vs-option>
        <vs-option label="Communications" value='4'>Communications</vs-option>
        <vs-option label="Sociology" value='5'>Sociology</vs-option>
        <vs-option label="Computer Science & Mathematics" value='6'>Computer Science & Mathematics</vs-option>
        <vs-option label="Education" value='7'>Education</vs-option>
        <vs-option label="Engineering" value='8'>Engineering</vs-option>
        <vs-option label="Language & Literature" value='9'>Language & Literature</vs-option>
        <vs-option label="Philosophy, Religion & Theology" value='10'>Philosophy, Religion & Theology</vs-option>
        <vs-option label="Others" value='11'>Others</vs-option>
      </vs-select>

      <!--    location (0 in-person, 1 remote)-->
      <vs-select placeholder="Location" v-model="location">
        <vs-option label="All" value='-1'>All</vs-option>
        <vs-option label="In Person" value='0'>In Person</vs-option>
        <vs-option label="Remote" value='1'>Remote</vs-option>
      </vs-select>

      <!--    status (0 reject, 1 processing, 2 accept)-->
      <vs-select placeholder="Status" v-model="status">
        <vs-option label="All" value='-1'>All</vs-option>
        <vs-option label="Accept" value='2'>Accept</vs-option>
        <vs-option label="Pending" value='1'>Pending</vs-option>
        <vs-option label="Reject" value='0'>Reject</vs-option>
      </vs-select>

      <vs-button
        :active="saveBtn === 1"
        @click="active = 1"
        class="searchBtn"
      >
        <svg class="searchIcon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z" fill="#ffffff"></path></svg>
        Search
      </vs-button>
    </div>

<!--展示position-->
    <div style="margin: 1rem 13rem">
      <my-application-tag v-for="(application, i) in applicationList" :key="i" :application="application"/>
    </div>

  </div>
</template>

<script>
import MyApplicationTag from "../../../components/Student/my-application-tag";
export default {
  name: "myApplication",
  components: {MyApplicationTag},
  data () {
    return {
      title: '',
      type: '',
      area: '',
      location: '',
      status: '',
      applicationList: [{
        appId: 0,
        title: 'Research Assistant',
        institution: "University of Southern California",
        type: "Research",
        area: 'Computer Science',
        location: "In Person",
        releaser: 'Prof. Flora',
        status: "Accepted",
        institutionImg: require("@/assets/USC.png")
      },{
        appId: 1,
        title: 'Web Internship',
        institution: "University of Southern California",
        type: "Internship",
        area: 'Computer Science',
        location: "In Person",
        releaser: 'Prof. Tom',
        status: "Pending",
        institutionImg: require("@/assets/USC.png")
      },{
        appId: 2,
        title: 'Library Assistant',
        institution: "University of Southern California",
        type: "Internship",
        area: 'Others',
        location: "In Person",
        releaser: 'Prof. Yibo',
        status: "Rejected",
        institutionImg: require("@/assets/USC.png")
      }],
      saveBtn: 0
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  padding: 0.5rem 4rem;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  line-height: 4rem;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-bottom: 1px solid #80808069;
}
/deep/ .vs-select__input.simple {
  background: white;
  border: 1px solid #FF8626;
}
/deep/ .vs-select__label {
  font-weight: 500;
}
/deep/ .vs-input {
  background: white;
  border: 1px solid rgb(240, 139, 64);
  height: 2.4rem;
  width: 10rem;
}
.searchBtn {
  width: 6rem;
  font-size: 1rem;
  display: inline-block;
  margin-left: auto;
  height: 2rem;
  position: relative;
  top: -3px;
}
.vs-select-content.vs-component--primary {
  margin: 0 0.5rem;
  width: 10rem;
  height: 3rem;
}
/deep/ .el-input__inner {
  border: 1px solid rgb(240, 139, 64);;
  border-radius: 13px;
  height: 2.4rem;
  width: 10rem;
  position: relative;
  top: 3px;
}
/deep/ .vs-table__footer {
  background: white;
  border-top: 1px solid #80808054;
  margin-top: 0.5rem;
  padding-top: 1rem;
}
/deep/ .vs-table-content {
  padding: 0 2rem;
  margin-top: 1rem;
}
.searchIcon {
  width: 1rem;
  height: auto;
  position: relative;
  right: 4px;
  top: -1px;
}
</style>

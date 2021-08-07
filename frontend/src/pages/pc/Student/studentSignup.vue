<template>
  <div style="padding: 1rem 5rem;">
    <h1 style="color: #FF8626;margin-bottom: unset">Your Profile Setting</h1>
    <div style="display: flex; justify-content: center">
      <div style="display: inline-block;">
        <div class="myInput">
          <span class="inputLabel">Name</span>
          <vs-input
            primary
            v-model="name"
            placeholder="Lorena Yan"/>
        </div>
        <div class="myInput">
          <span class="inputLabel">Email</span>
          <vs-input
            primary
            v-model="email"
            placeholder="profesearch@youremail.com"/>
        </div>
        <div class="myInput">
          <span class="inputLabel">Institution</span><br/>
          <el-select v-model="institution" placeholder="Select your institution">
            <el-option
              v-for="(institution, index) in institutionList"
              :key="index"
              :label="institution"
              :value="index">
            </el-option>
          </el-select>
        </div>
        <div class="myInput">
          <span class="inputLabel">Major</span>
          <vs-select placeholder="Area" v-model="major" id="majorSelector">
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
        </div>
        <div class="myInput">
          <span class="inputLabel">My Resume</span><br/>
          <a style="display: inline-block;margin: 13px 2rem;">XXX.pdf</a>
          <vs-button
            transparent
            :active="uploadActive === 0"
            @click="uploadActive = 0"
            class="saveBtn uploadBtn"
            style="border: 1px solid rgb(252, 232, 217);"
          >
            Upload My Resume
          </vs-button>
        </div>
        <div class="myInput">
          <span class="inputLabel">Grade</span><br/>
          <vs-select
            v-model="grade"
            placeholder="Select Your Grade"
            style="display: inline-block"
          >
            <!--            0 freshman, 1 sophomore, 2 junior, 3 senior, 4 master, 5 doctor, 6 post-doc-->
            <vs-option label="Freshman" value="0">
              Freshman
            </vs-option>
            <vs-option label="Sophomore" value="1">
              Sophomore
            </vs-option>
            <vs-option label="Junior" value="2">
              Junior
            </vs-option>
            <vs-option label="Senior" value="3">
              Senior
            </vs-option>
            <vs-option label="Master" value="4">
              Master
            </vs-option>
            <vs-option label="Doctor" value="5">
              Doctor
            </vs-option>
            <vs-option label="Post Doctor" value="6">
              Post Doctor
            </vs-option>
          </vs-select>
          <vs-button
            :active="false"
            class="saveBtn"
            @click="saveInfo"
            style="margin-top: 5rem;"
          >
            Save My Info
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import institutionList from '@/utils/institutionList.js'
export default {
  name: "profile",
  mounted() {
    document.getElementById("majorSelector").children[0].style.width = "35rem";
  },
  data () {
    return {
      name: '',
      email: '',
      institution: '',
      major: '',
      grade: '',
      resume: '',
      saveBtn: 0,
      uploadActive: 0,
      institutionList: institutionList
    }
  },
  methods: {
    saveInfo () {
      this.$router.push("/pc/student");
    }
  }
}
</script>

<style scoped>
/deep/ .vs-input {
  width: 35rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
/deep/ .vs-input__label {
  padding: 0 1rem;
  font-size: 1rem;
}
/deep/ .vs-select.vs-select--state-null {
  width: 20rem;
}
/deep/ .vs-select__input.simple {
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
.inputLabel {
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 1rem;
}
.myInput {
  margin: 2rem 0;
}
.saveBtn {
  width: 11rem;
  font-size: 1rem;
  display: inline-block;
  float: right;
}
.uploadBtn {
  transition: box-shadow .3s cubic-bezier(.645,.045,.355,1);
}
.uploadBtn:hover {
  box-shadow: 0 0 15px 0 rgb(253 226 206);
  transition: box-shadow .3s cubic-bezier(.645,.045,.355,1);
}
/deep/ .vs-select__label {
  font-size: 1rem;
  margin-left: 1rem;
}
/deep/ .el-input__inner {
  width: 35rem;
  background: rgb(245, 247, 248);
  border: none;
  height: 3rem;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 1.75rem;
}
/deep/ .el-select-dropdown__item.selected {
  color: #FF8626;
}
/deep/ .vs-select.vs-select--state-null {
  width: 35rem;
}
</style>

<template>
  <div style="padding: 1rem 5rem;">
    <h1 style="color: #FF8626;margin-bottom: unset">Your Profile Setting</h1>
    <div class="myInput" style="float:left;width:50%">
      <span class="inputLabel">Linkedin Profile (optional)</span><br/>
      <div style="margin: 0.5rem 1rem;">
        <span>This will allow us to parse some information from your Linkedin Homepage.</span>
      </div>
      <span class="sub-inputLabel">Linkedin Username</span><br/>
      <vs-input
        style="margin-top:0.5rem;margin-bottom:0.5rem;"
        v-model="linkedinUsername"
        placeholder="Linkedin Username"/>
      <span class="sub-inputLabel">Linkedin Password</span><br/>
      <vs-input
        style="margin-top:0.5rem;margin-bottom:0.5rem;"
        v-model="linkedinPassword"
        placeholder="Linkedin Password"/>
      <span class="sub-inputLabel">Linkedin Homepage Url</span><br/>
      <vs-input
        style="margin-top:0.5rem; margin-bottom:2rem;"
        v-model="linkedinUrl"
        placeholder="Linkedin Homepage Url"/>
      <vs-checkbox style="margin-left:1rem; float:left">* I agree to the conditions and terms.</vs-checkbox>
      <vs-button
        :active="saveBtn === 1"
        @click="active = 1"
        class="parseBtn"
      >Parse</vs-button>
      <div style="clear:both;"></div>
    </div>
    <div style="float:left;width:50%">
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
        <vs-select placeholder="Select your major" v-model="major" id="majorSelector">
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
        <span class="inputLabel">Skills</span><br/>
        <vs-input
          primary
          v-model="skills"
          placeholder="C++; Javascript (using ';' to connect skills)"/>
      </div>

      <div class="myInput">
        <span class="inputLabel">Grade</span><br/>
        <vs-select
          v-model="grade"
          id="grade"
          placeholder="Select Your Grade"
          style="display: inline-block"
        >
          <!--   0 freshman, 1 sophomore, 2 junior, 3 senior, 4 master, 5 doctor, 6 post-doc-->
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
          :active="saveBtn === 1"
          @click="active = 1"
          class="saveBtn"
        >
          Save My Info
        </vs-button>
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
      skills: '',
      linkedinUsername:'',
      linkedinPassword:'',
      linkedinUrl:'',
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
  width: 35rem;
}

/deep/ #grade .vs-select.vs-select--state-null {
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
.sub-inputLabel {
  font-size: 1.2rem;
  font-weight: 400;
  padding-left: 1rem;
}
.myInput {
  margin: 2rem 0;
}
.parseBtn{
  width: 11rem;
  font-size: 1rem;
  display: inline-block;
  float:right;
  margin-right:70px;
}
.saveBtn {
  width: 11rem;
  font-size: 1rem;
  display: inline-block;
  float: right;
  margin-right: 70px;
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

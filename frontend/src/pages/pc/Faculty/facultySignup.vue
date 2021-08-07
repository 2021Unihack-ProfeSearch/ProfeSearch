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
          <span class="inputLabel">Position</span>
          <vs-input
            primary
            v-model="position"
            placeholder="Professor/Advisor/..."/>
        </div>
        <div class="myInput">
          <span class="inputLabel">Field</span>
          <vs-select placeholder="Area" v-model="field">
            <vs-option label="Architecture" :value='0'>Architecture</vs-option>
            <vs-option label="Area, Ethnic, & Multidisciplinary Studies" :value='1'>Area, Ethnic, & Multidisciplinary Studies</vs-option>
            <vs-option label="Arts: Visual & Performing" :value='2'>Arts: Visual & Performing</vs-option>
            <vs-option label="Business and Economics" :value='3'>Business and Economics</vs-option>
            <vs-option label="Communications" :value='4'>Communications</vs-option>
            <vs-option label="Sociology" :value='5'>Sociology</vs-option>
            <vs-option label="Computer Science & Mathematics" :value='6'>Computer Science & Mathematics</vs-option>
            <vs-option label="Education" :value='7'>Education</vs-option>
            <vs-option label="Engineering" :value='8'>Engineering</vs-option>
            <vs-option label="Language & Literature" :value='9'>Language & Literature</vs-option>
            <vs-option label="Philosophy, Religion & Theology" :value='10'>Philosophy, Religion & Theology</vs-option>
            <vs-option label="Others" :value='11'>Others</vs-option>
          </vs-select>
        </div>
        <vs-button
          :active="false"
          @click="saveInfo"
          class="saveBtn"
        >
          Save My Info
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/api"
import institutionList from '@/utils/institutionList.js'
import {closeLoading} from "../../../utils/loading";
export default {
  name: "profile",
  data () {
    return {
      name: '',
      institution: '',
      position: '',
      field: '',
      saveBtn: 0,
      institutionList: institutionList
    }
  },
  methods: {
    saveInfo () {
      if (this.name === '' || this.institution === '' || this.field === '' || this.position === '') {
        this.$message.error("Please fill out all information");
      } else {
        this.$axios.patch(
          api.faculty.facultySignup,
          {
            name: this.name,
            institution: this.institution,
            field: this.field,
            post: this.position
          }
        ).then(res => {
          this.$message.success("Saved successfully!");
          setTimeout(() => {
            this.$router.push("/pc/faculty");
          }, 2000);
        }).catch(err => {
          closeLoading();
          console.log(err);
          this.$message.error("Error. Please contact admin");
        })
      }
    }
  }
}
</script>

<style scoped>
/deep/ .vs-input {
  width: 35rem;
  height: 3rem;
}
/deep/ .vs-input__label {
  padding: 0 1rem;
  font-size: 1rem;
}
/deep/ .vs-select__input.simple {
  height: 3rem;
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
/deep/ .el-input__inner {
  width: 35rem;
  background: rgb(245, 247, 248);
  border: none;
  height: 3rem;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 1.75rem;
  color: black;
}
/deep/ .el-select-dropdown__item.selected {
  color: #FF8626;
}
/deep/ .vs-select__label {
  font-size: 1rem;
  margin-left: 1rem;
}
/deep/ .vs-select.vs-select--state-null {
  width: 35rem;
}
/deep/ .vs-select__input.simple {
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
/deep/ .vs-input {
  width: 35rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
</style>

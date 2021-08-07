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
          <span class="inputLabel">Field</span><br/>
          <el-select v-model="field" placeholder="Select your field">
            <el-option
              v-for="(field, index) in majorList"
              :key="index"
              :label="field"
              :value="index">
            </el-option>
          </el-select>
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
import {closeLoading} from "@/utils/loading";
import institutionList from '@/utils/institutionList.js'
import majorList from "../../../utils/majorList";
export default {
  name: "profile",
  mounted() {
    this.$axios.get(api.faculty.getFacultyProfile).then((res) => {
      console.log(res);
      this.name = res.data.profile.name;
      this.institution = res.data.profile.institution;
      this.position = res.data.profile.post;
      this.field = res.data.profile.field;
    }).catch(err => {
      //console.log(err);
      closeLoading();
      this.$message.error("Fail to get student information. Please contact admin");
    })
  },
  data () {
    return {
      name: '',
      institution: '',
      position: '',
      field: '',
      saveBtn: 0,
      institutionList: institutionList,
      majorList: majorList
    }
  },
  methods: {
    saveInfo () {
      this.$axios.patch(
        api.faculty.facultySignup,
        {
          name: this.name,
          institution: this.institution,
          post: this.position,
          field: this.field
        }
      ).then(res => {
        this.$message.success("Saved successfully!");
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

<style scoped>
/deep/ .vs-input {
  width: 35rem;
  height: 3rem;
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
/deep/ .vs-select.vs-select--state-null {
  width: 35rem;
}
/deep/ .vs-select__input.simple {
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
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
/deep/ .vs-input__label {
  padding: 0 1rem;
  font-size: 1rem;
}
/deep/ .vs-input {
  width: 35rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
</style>

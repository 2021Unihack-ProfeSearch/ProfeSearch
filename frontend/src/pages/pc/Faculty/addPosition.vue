<template>
  <div style="padding: 1rem 5rem;">
    <h1 style="color: #FF8626;margin-bottom: unset">Add New Position</h1>
      <div style="width:50%; display:inline-block; float:left;">
        <!--   title   -->
        <div class="myInput">
          <span class="inputLabel">Name</span>
          <vs-input v-model="title" placeholder="Job Title"/>
        </div>

        <!--    type (0 research, 1 internship, 2 others)-->
        <div class="myInput">
          <span class="inputLabel">Type</span>
          <vs-select placeholder="Type" v-model="type">
            <vs-option label="Research" :value='0'>Research</vs-option>
            <vs-option label="Internship" :value='1'>Internship</vs-option>
            <vs-option label="Others" :value='2'>Others</vs-option>
          </vs-select>
        </div>

        <!--    area (0 cs, 1 business, 2…)-->
        <div class="myInput">
          <span class="inputLabel">Area</span>
          <vs-select placeholder="Area" v-model="area">
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

        <!--    location (0 in-person, 1 remote)-->
        <div class="myInput">
          <span class="inputLabel">Location</span>
          <vs-select placeholder="Location" v-model="location">
            <vs-option label="In Person" :value='-1'>In Person</vs-option>
            <vs-option label="Remote" :value='1'>Remote</vs-option>
          </vs-select>
        </div>

        <!--  deadline(date)  -->
        <div class="myInput">
          <span class="inputLabel">Deadline</span>
          <el-date-picker prefix-icon="none" v-model="deadline" type="date" placeholder="Select Deadline" style="position: relative;top: -6px;margin: 0 0.5rem;display:block;"/>
        </div>

      </div>

      <div style="width:50%; display:inline-block; float:left;">
        <!--    target audience (0 undergrad, 1 grad, 2 PhD)-->
        <div class="myInput">
          <span class="inputLabel">Audience</span>
          <div style="margin-left: 1rem;">
          <div style="display:inline-flex; margin-top:1rem;">
          <vs-checkbox v-model="audience" :val="0" >Freshman</vs-checkbox>
          <vs-checkbox v-model="audience" :val="1">Sophomore</vs-checkbox>
          <vs-checkbox v-model="audience" :val="2">Junior</vs-checkbox>
          <vs-checkbox v-model="audience" :val="3">Senior</vs-checkbox>
          </div>
            <br>
          <div style="display:inline-flex; margin-top:1rem;">
          <vs-checkbox v-model="audience" :val="4">Master</vs-checkbox>
          <vs-checkbox v-model="audience" :val="5">Doctor</vs-checkbox>
          <vs-checkbox v-model="audience" :val="6">Post Doctor</vs-checkbox>
          </div>
          </div>
        </div>

        <!-- description(text) -->
        <div class="myInput">
          <span style="display:inline-block; margin-bottom: 1rem;" class="inputLabel">Description</span>
          <el-input type="textarea" id="description" placeholder="Description" v-model="description">
          </el-input>
        </div>

        <!--  save button  -->
        <vs-button :active="false" @click="addNewPosition" class="saveBtn">
          Submit
        </vs-button>

      </div>

      <div style="clear:both;"></div>

</div>

</template>

<script>
import api from "@/config/api";
import {closeLoading} from "../../../utils/loading";
export default {
  name: "AddPosition",
  data(){
    return{
      title:'',
      type:'',
      area:'',
      location:'',
      audience:[],
      description:'',
      deadline: '',
    }
  },
  methods: {
    addNewPosition () {
      let location = '';
      if (this.location === -2) {
        location = 0;
      } else {
        location = 1;
      }
      this.$axios.post(api.position.createNewPosition, {
        title: this.title,
        description: this.description,
        positionType: this.type + 1,
        target: this.audience,
        status: 1,
        location: location + 1,
        area: this.area,
        deadline: this.deadline
      }).then(res => {
        this.$message.success("Submitted!");
        setTimeout(() => {
          this.$router.replace('/pc/faculty/MyPosition');
        })
        location.reload();
      }).catch(err => {
        console.log(err)
        closeLoading();
        //this.$message.error("Error creating new position. Please contact admin.");
      })
    }
  }
}
</script>

<style scoped>
.myInput {
  margin: 1.5rem 0;
}
.inputLabel {
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 1rem;
}
/deep/ .vs-input {
  height: 3rem;
  width: 33rem;
}
/deep/ .vs-select.vs-select--state-null{
  height: 3rem;
  width: 33rem;
}
/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 33rem;
}

/deep/ .vs-input__label {
  padding: 1rem;
  font-size: 1rem;
}
/deep/ .vs-select__input.simple {
  height: 3rem;
  font-size: 1rem;
}
/deep/ .el-input__inner{
  margin-top: 1rem;
  background: rgb(245, 247, 248);
  height: 3rem;
  border-radius: 14px;
  border: none;
  position: relative;
  left: -5px;
  padding-left: 29px;
  font-size: 1rem;
}
/deep/ .vs-button__content{
  margin:0px;
}
.saveBtn {
  width: 12rem;
  font-size: 1rem;
  float:right;
  margin:0px;
}
/deep/ .vs-select__label {
  font-size: 1rem;
  padding: 0.9rem;
}
/deep/ .el-input__icon.el-icon-date {
  margin-top: 8rem;
}
/deep/ .vs-checkbox-content.vs-component--primary{
  margin-top: 0.3rem;
}
/deep/ #description .vs-input{
  height:5rem;
}
/deep/ .el-textarea__inner{
  width: 40rem;
  height: 18rem;
  border: none;
  border-radius: 20px;
  background-color: rgb(245, 247, 248);
}
/deep/ .vs-input {
  width: 33rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
}
/deep/ .el-input__inner {
  cursor: pointer;
}
</style>

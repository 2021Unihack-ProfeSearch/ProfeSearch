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
          <span class="inputLabel">Institution</span>
          <vs-input
            primary
            v-model="institution"
            placeholder="University of Southern California"/>
        </div>
        <div class="myInput">
          <span class="inputLabel">Major</span>
          <vs-input
            primary
            v-model="major"
            placeholder="Computer Science"/>
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
            :active="saveBtn === 1"
            @click="active = 1"
            class="saveBtn"
          >
            Save My Info
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data () {
    return {
      name: '',
      email: '',
      institution: '',
      major: '',
      grade: '',
      resume: '',
      saveBtn: 0,
      uploadActive: 0
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
</style>

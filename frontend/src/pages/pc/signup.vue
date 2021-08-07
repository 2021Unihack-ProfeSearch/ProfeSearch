<template>
    <div id="signup">
        <div id="left">
        <h1 style="width: 23rem;">Get Started Right Now.</h1>
        <vs-input id="name" size="large" type="text" name="username" v-model="input.email" label-placeholder="Email" />
        <vs-input id="password" type="password" name="password" v-model="input.password" label-placeholder="Password" />
        <vs-input id="confirm" type="password" name="confirm" v-model="confirm" label-placeholder="Confirm Password" />

        <div style="display: flex;justify-content: space-around;margin-top: 1rem;">
          <vs-radio v-model="role" val="student">
            I'm a Student
          </vs-radio>
          <vs-radio v-model="role" val="faculty">
            I'm a Faculty
          </vs-radio>
        </div>
        <vs-row justify="center">
        <vs-button id="signup-button" :active="active === 1" @click="active = 1" v-on:click="signup()">Sign Up</vs-button>
        </vs-row>

        <router-link to="/pc/login"><p id="login">Already have an account?</p></router-link>
        </div>
        <div id="right">
            <img src="../../assets/Login/login.png" id="login-image"/>
        </div>
        <div class="clearfloat"></div>
    </div>
</template>

<script>
import api from '@/config/api'
import {closeLoading} from "../../utils/loading";
    export default {
        name: 'Signup',
        data() {
            return {
              role: null,
                input: {
                  email: "",
                  password: ""
                },
              confirm: '',
              active: ''
            }
        },
        methods: {
            signup() {
              // 验证信息
              if (this.input.email === "" || this.input.email.indexOf("@") <= -1) {
                this.$message.error('Please correctly enter your email address');
              } else if (this.input.password === "") {
                this.$message.error('Please enter your password');
              } else if (this.confirm !== this.input.password) {
                this.$message.error('Two passwords are not the same');
              } else if (this.role === null) {
                this.$message.error('Please select your role');
              } else {
                this.$axios.post(
                  api.authentication.signup,
                  {
                    role: this.role,
                    email: this.input.email,
                    password: this.input.password,
                    passwordConfirm: this.confirm
                  }
                ).then(res => {
                  console.log(res)
                  this.$message.success('Signed up successfully!');
                  setTimeout(() => {
                    if (this.role === 'student') {
                      this.$router.push("/pc/student/signup");
                    } else {
                      this.$router.push("/pc/faculty/signup");
                    }
                  }, 2000);
                }).catch(err => {
                  console.log(err);
                  closeLoading();
                  this.$message.error("Error. Please contact admin");
                })
              }
            }
        },
    }
</script>

<style scoped>
    .clearfloat{
        clear:both;
    }
    #signup{
        height:100%;
    }
    #left{
        width:300px;
        margin-left:7%;
        float:left;
        margin-top:10%;
    }
    #name, #password, #signup-button, #confirm, #institution, #type{
        margin-top:20px;
    }
    /deep/ .vs-input, /deep/ .vs-select.vs-select--state-null{
        width:300px;
    }
    /deep/ .vs-checkbox-content.vs-component--primary{
        width:150px;
    }
    #signup-button{
        width:300px;
        margin-left: 0px;
        margin-right: 0px;
    }
    #login{
        color:gray;
        text-decoration:underline;
        cursor:pointer;
        margin-top:10px;
        text-align:center;
    }
    #right{
        width:60%;
        height:100%;
        float:right;
    }
    #right{
        background-color: rgba(255,187,0,0.1);
    }

    #login-image{
        width:80%;
        height:auto;
        margin-left:10%;
        margin-top:20%;

    }
</style>

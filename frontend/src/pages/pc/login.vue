<template>
    <div id="login">
        <div id="left">
        <h1>Welcome Back!</h1>
        <vs-input id="name" size="large" type="text" name="username" v-model="input.username" label-placeholder="Username" />
        <vs-input id="password" type="password" name="password" v-model="input.password" label-placeholder="Password" />
        <vs-button id="login-button" :active="active === 1" @click="active = 1" v-on:click="login()">Log In</vs-button>
        <router-link to="/pc/signup"><p id="signup">Doesn't have an account?</p></router-link>
        </div>
        <div id="right">
            <img src="../../assets/Login/login.png" id="login-image"/>
        </div>
        <div class="clearfloat"></div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
              active: ''
            }
        },
        methods: {
            login() {
              // TODO: 等登陆API
              let isStudent = true;
              if (isStudent) {
                this.$router.push("/pc/student");
              } else {
                this.$router.push("/pc/faculty");
              }
            }
        }
    }
</script>

<style scoped>
    .clearfloat{
        clear:both;
    }
    #login{
        height:100%;
    }
    #left{
        width:300px;
        margin-left:5.5%;
        float:left;
        margin-top:18%;
    }
    /deep/ #vs-input--name.vs-input, /deep/ #vs-input--password.vs-input {
        width:300px;
    }
    /deep/ #password.vs-input-parent.vs-input-parent--state-null.vs-input-content--has-label.vs-component--primary
    , #name.vs-input-parent.vs-input-parent--state-null.vs-input-content--has-label.vs-component--primary{
        text-align: center;
        margin-top:20px;
        margin-bottom:20px;
    }
    #login-button{
        width:300px;
        margin: 0px;
    }
    #signup{
        color:gray;
        text-decoration:underline;
        cursor:pointer;
        margin-top:10px;
        text-align: center;
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

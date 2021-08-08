<template>
  <div>
    <!--    NavBar-->
    <div class="center examplex">
      <vs-navbar text-white :color="navColor" center-collapsed v-model="active">
        <template #left>
          <svg width="66" height="66" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="200" y="624" width="66" height="66"/></clipPath><clipPath id="clip1"><rect x="201" y="625" width="65" height="65"/></clipPath><clipPath id="clip2"><rect x="201" y="625" width="65" height="65"/></clipPath><clipPath id="clip3"><rect x="201" y="625" width="65" height="65"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-200 -624)"><g clip-path="url(#clip1)"><g clip-path="url(#clip2)"><g clip-path="url(#clip3)"><path d="M248.523 665.293C244.664 664.311 241.339 661.976 237.264 657.251L237.128 657.09 237.256 656.943C241.193 652.401 244.638 649.375 248.648 649.375 251.124 649.372 253.459 650.532 254.952 652.508L250.986 654.798 261.07 657.5 263.772 647.411 259.658 649.787C257.181 646.139 253.057 643.956 248.648 643.958 242.099 643.958 237.31 648.611 233.161 653.394 229.01 648.606 224.224 643.958 217.675 643.958 210.395 643.906 204.451 649.766 204.399 657.046 204.347 664.326 210.206 670.27 217.486 670.322 217.549 670.322 217.612 670.322 217.675 670.322 224.202 670.322 228.831 665.799 233.161 660.787 237.456 665.768 242.12 669.792 248.648 670.322 255.978 670.915 261.163 665.135 261.211 660.738 261.211 660.733 261.207 660.729 261.201 660.729 261.198 660.729 261.194 660.732 261.193 660.735 260.152 663.898 253.824 666.641 248.523 665.293ZM229.063 657.245C224.871 662.097 221.663 664.905 217.675 664.905 213.387 664.975 209.854 661.554 209.784 657.266 209.715 652.977 213.135 649.444 217.424 649.375 217.508 649.374 217.591 649.374 217.675 649.375 221.687 649.375 225.131 652.4 229.068 656.943L229.197 657.09Z" fill="#FFFFFF" fill-rule="nonzero" fill-opacity="1"/></g></g></g></g></svg>
          <span style="font-size: 1.3rem;margin-left: 1rem;font-weight: 600;">ProfeSearch</span>
        </template>
        <vs-navbar-item :active="active === 'primary'" id="primary" @click="navigate('/pc/faculty/MyPosition')">
          My Positions
        </vs-navbar-item>
        <vs-navbar-item :active="active === 'success'" id="success" @click="navigate('/pc/faculty/AddPosition')">
          Add New Position
        </vs-navbar-item>
        <vs-navbar-item :active="active === 'danger'" id="danger" @click="navigate('/pc/faculty/profile')">
          My Profile
        </vs-navbar-item>
        <template #right>
          <span style="cursor: pointer" class="topBarText" @click="dialogOpen = true">Log out</span>
<!--          <img :src="profile" alt="Profile" class="profilePic"/>-->
          <svg t="1628149146509" class="profIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7556" width="200" height="200"><path d="M311.6 592.8c-80.4 0-145.7-65.4-145.7-145.7s65.4-145.7 145.7-145.7S457.3 366.7 457.3 447s-65.4 145.8-145.7 145.8z m0-243.6c-53.9 0-97.8 43.9-97.8 97.8s43.9 97.8 97.8 97.8 97.8-43.9 97.8-97.8-43.9-97.8-97.8-97.8zM556.5 902.6h-47.9V758.3c0-56.4-45.9-102.3-102.3-102.3H216.8c-56.4 0-102.3 45.9-102.3 102.3v144.3H66.6V758.3C66.6 675.4 134 608 216.8 608h189.4c82.8 0 150.2 67.4 150.2 150.2v144.4z" fill="#ffffff" p-id="7557"></path><path d="M957.4 798.7H657.8v-47.9h251.7V159.5H272.4v107.9h-47.9V111.6h732.9z" fill="#ffffff" p-id="7558"></path><path d="M510.715 892.736l184.668-411.903 43.709 19.596-184.668 411.903z" fill="#ffffff" p-id="7559"></path></svg>
          <span style="font-size: 1.1rem;font-weight: 500;color: white">{{username}}</span>
        </template>
      </vs-navbar>
    </div>

    <vs-dialog width="550px" not-center v-model="dialogOpen">
      <template #header>
        <h4 class="not-margin">
          Log out
        </h4>
      </template>
      <p>
        Are you sure you want to log out?
      </p>
      <template #footer>
        <div style="display: flex;justify-content: flex-end;">
          <vs-button @click="logout" transparent>
            Yes
          </vs-button>
          <vs-button @click="dialogOpen=false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <router-view style="margin-top: 5rem"/>
  </div>
</template>

<script>
import api from "@/config/api"
import NavLink from "@/components/nav-link";
import {closeLoading} from "../../../utils/loading";
export default {
  name: "index",
  components: {NavLink},
  mounted() {
    if (this.$route.name === 'facultyMyPosition' || this.$route.name === 'facultyPositionDetail') {
      this.active = 'primary';
    } else if (this.$route.name === 'facultyAddPosition') {
      this.active = 'success';
    } else {
      this.active = 'danger';
    }
    console.log(this.active);
    this.$axios.get(api.faculty.getFacultyProfile).then((res) => {
      this.username = res.data.profile.name;
    }).catch(err => {
      //console.log(err);
      closeLoading();
      this.$message.error("Fail to get student information. Please contact admin");
    })
  },
  data () {
    return {
      profLogo: require("@/assets/logo_white.png"),
      profile: require("@/assets/UserPage/profile.png"),
      username: '',
      active: '',
      dialogOpen: false,
      navColor: 'primary'
    }
  },
  methods: {
    navigate (link) {
      this.$router.push(link);
    },
    logout () {
      this.dialogOpen = false;
      this.$axios.get(api.authentication.logout).then((res) => {
        this.$message.success("You have logged out");
        setTimeout(() => {
          this.$router.push("/pc/home");
        }, 2000);
      }).catch(err => {
        console.log(err);
        closeLoading();
        this.$message.error("Error. Please contact admin");
      })
    }
  },
  watch: {
    '$route' (val) {
      if (val.name === 'facultyMyPosition' || val.name === 'facultyPositionDetail') {
        this.active = 'primary';
      } else if (val.name === 'facultyAddPosition') {
        this.active = 'success';
      } else {
        this.active = 'danger';
      }
    },
  }
}
</script>

<style scoped lang="less">
.profilePic {
  width: 2.5rem;
  border-radius: 50%;
  margin: 0 1rem;
}
.topBarText {
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: text-shadow .2s cubic-bezier(.645,.045,.355,1);
  cursor: pointer;
}
.topBarText:hover {
  text-shadow: 0 4px 6px #af5026;
  transition: text-shadow .1s cubic-bezier(.645,.045,.355,1);
}
.profIcon {
  width: 1.5rem;
  height: auto;
  border: 1px solid white;
  border-radius: 50%;
  padding: 3px;
  margin: 0 1rem;
}
/deep/ .vs-dialog__content {
  padding: 0 3rem;
}
/deep/ .vs-navbar__item {
  //font-size: 1.1rem;
  margin: 0 0.5rem;
}
/deep/ .vs-navbar-content {
  z-index: 1;
}
</style>

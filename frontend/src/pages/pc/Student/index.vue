<template>
  <div>
<!--    NavBar-->
    <div class="center examplex">
      <vs-navbar text-white :color="navColor" center-collapsed v-model="navActive">
        <template #left>
          <svg width="66" height="66" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="200" y="624" width="66" height="66"/></clipPath><clipPath id="clip1"><rect x="201" y="625" width="65" height="65"/></clipPath><clipPath id="clip2"><rect x="201" y="625" width="65" height="65"/></clipPath><clipPath id="clip3"><rect x="201" y="625" width="65" height="65"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-200 -624)"><g clip-path="url(#clip1)"><g clip-path="url(#clip2)"><g clip-path="url(#clip3)"><path d="M248.523 665.293C244.664 664.311 241.339 661.976 237.264 657.251L237.128 657.09 237.256 656.943C241.193 652.401 244.638 649.375 248.648 649.375 251.124 649.372 253.459 650.532 254.952 652.508L250.986 654.798 261.07 657.5 263.772 647.411 259.658 649.787C257.181 646.139 253.057 643.956 248.648 643.958 242.099 643.958 237.31 648.611 233.161 653.394 229.01 648.606 224.224 643.958 217.675 643.958 210.395 643.906 204.451 649.766 204.399 657.046 204.347 664.326 210.206 670.27 217.486 670.322 217.549 670.322 217.612 670.322 217.675 670.322 224.202 670.322 228.831 665.799 233.161 660.787 237.456 665.768 242.12 669.792 248.648 670.322 255.978 670.915 261.163 665.135 261.211 660.738 261.211 660.733 261.207 660.729 261.201 660.729 261.198 660.729 261.194 660.732 261.193 660.735 260.152 663.898 253.824 666.641 248.523 665.293ZM229.063 657.245C224.871 662.097 221.663 664.905 217.675 664.905 213.387 664.975 209.854 661.554 209.784 657.266 209.715 652.977 213.135 649.444 217.424 649.375 217.508 649.374 217.591 649.374 217.675 649.375 221.687 649.375 225.131 652.4 229.068 656.943L229.197 657.09Z" fill="#FFFFFF" fill-rule="nonzero" fill-opacity="1"/></g></g></g></g></svg>
          <span style="font-size: 1.3rem;margin-left: 1rem;font-weight: 600;">ProfeSearch</span>
        </template>
        <vs-navbar-item :active="navActive === 'success'" id="success" @click="navigate('/pc/student/MyApplication')">
          My Application
        </vs-navbar-item>
        <vs-navbar-item :active="navActive === 'primary'" id="primary" @click="navigate('/pc/student/FindPosition')">
          Find Position
        </vs-navbar-item>
        <vs-navbar-item :active="navActive === 'danger'" id="danger" @click="navigate('/pc/student/profile')">
          My Profile
        </vs-navbar-item>
        <template #right>
          <span style="cursor: pointer;" class="topBarText" @click="dialogOpen = true">Log out</span>
<!--          <img :src="profile" alt="Profile" class="profilePic"/>-->
          <svg style="width: 2rem;height: auto;margin: 0 1rem;" t="1628148610806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6642" width="200" height="200"><path d="M488.207059 492.122353a54.512941 54.512941 0 0 1-12.047059 0l-153.6-35.538824v187.934118c0 20.178824 55.115294 55.115294 165.647059 55.115294s165.948235-34.936471 165.948235-55.115294v-189.138823l-153.6 35.237647a43.369412 43.369412 0 0 1-12.348235 1.505882z" p-id="6643" fill="#ffffff"></path><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m234.315294 786.974118a37.044706 37.044706 0 0 1-37.044706-36.74353c0-20.48 16.564706-73.788235 37.044706-73.788235S783.058824 729.750588 783.058824 750.230588a36.743529 36.743529 0 0 1-36.74353 36.74353z m-18.672941-147.275294v-165.948236a18.672941 18.672941 0 0 1 37.044706 0v165.948236a18.672941 18.672941 0 0 1-37.044706 0z m12.649412-204.197648l-49.392941 11.444706v196.367059c0 48.790588-56.018824 92.16-202.691765 92.16S285.515294 692.705882 285.515294 643.312941v-196.367059l-49.091765-11.444706a55.416471 55.416471 0 0 1 0-107.821176l240.941177-55.115294a44.574118 44.574118 0 0 1 10.842353-1.505882 57.223529 57.223529 0 0 1 12.348235 0l240.941177 55.41647a55.416471 55.416471 0 0 1 0 107.821177z" p-id="6644" fill="#ffffff"></path><path d="M731.858824 363.52l-239.435295-55.115294h-8.432941l-240.941176 55.115294a18.672941 18.672941 0 0 0-14.155294 18.070588 18.371765 18.371765 0 0 0 14.155294 18.070588l240.941176 55.115295h8.432941l240.941177-55.115295a18.672941 18.672941 0 0 0 14.45647-18.070588 18.974118 18.974118 0 0 0-15.962352-18.070588z" p-id="6645" fill="#ffffff"></path></svg>
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
    if (this.$route.name === 'studentMyApplication' || this.$route.name === 'applicationDetail') {
      this.navActive = 'success';
    } else if (this.$route.name === 'studentProfile') {
      this.navActive = 'danger';
    } else {
      this.navActive = 'primary';
    }
    this.$axios.get(api.student.getStudentProfile).then((res) => {
      this.username = res.data.CommonApp.name;
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
      navColor: 'primary',
      navActive: 'success',
      dialogOpen: false
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
      if (val.name === 'studentMyApplication' || val.name === 'applicationDetail') {
        this.navActive = 'success';
      } else if (val.name === 'studentProfile') {
        this.navActive = 'danger';
      } else {
        this.navActive = 'primary';
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
}
.topBarText:hover {
  text-shadow: 0 4px 6px #af5026;
  transition: text-shadow .1s cubic-bezier(.645,.045,.355,1);
}
/deep/ .vs-dialog__content {
  padding: 0 3rem;
}
/deep/ .vs-navbar__item {
  font-size: 1.1rem;
  margin: 0 0.5rem;
}
/deep/ .vs-navbar-content {
  z-index: 1;
}
</style>

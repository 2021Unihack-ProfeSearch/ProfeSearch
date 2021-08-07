<template>
  <div style="margin: 0 8rem;">
    <div class="homeNav">
      <div style="align-items: center; display: flex; flex: 1">
        <svg width="66" height="65" xmlns="http://www.w3.org/2000/svg" overflow="hidden"><defs><clipPath id="clip0"><rect x="102" y="28" width="66" height="65"/></clipPath><clipPath id="clip1"><rect x="103" y="28" width="65" height="65"/></clipPath><clipPath id="clip2"><rect x="103" y="28" width="65" height="65"/></clipPath><clipPath id="clip3"><rect x="103" y="28" width="65" height="65"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-102 -28)"><g clip-path="url(#clip1)"><g clip-path="url(#clip2)"><g clip-path="url(#clip3)"><path d="M150.523 68.2932C146.664 67.3108 143.339 64.9755 139.264 60.2508L139.128 60.0904 139.256 59.9428C143.193 55.4009 146.638 52.375 150.648 52.375 153.124 52.3717 155.459 53.5318 156.952 55.5079L152.986 57.7978 163.07 60.5 165.772 50.4115 161.658 52.7867C159.181 49.1387 155.057 46.9556 150.648 46.9583 144.099 46.9583 139.31 51.6106 135.161 56.3942 131.01 51.6058 126.224 46.9583 119.675 46.9583 112.395 46.9061 106.451 52.7655 106.399 60.0457 106.347 67.3257 112.206 73.2697 119.486 73.3219 119.549 73.3224 119.612 73.3224 119.675 73.3219 126.202 73.3219 130.831 68.799 135.161 63.7872 139.456 68.7679 144.12 72.7924 150.648 73.3219 157.978 73.9151 163.163 68.1348 163.211 63.7385 163.211 63.7333 163.207 63.7291 163.201 63.7291 163.198 63.7292 163.194 63.7315 163.193 63.7351 162.152 66.8984 155.824 69.6406 150.523 68.2932ZM131.063 60.2454C126.871 65.0967 123.663 67.9053 119.675 67.9053 115.387 67.9746 111.854 64.5543 111.784 60.2657 111.715 55.9771 115.135 52.4443 119.424 52.375 119.508 52.3736 119.591 52.3736 119.675 52.375 123.687 52.375 127.131 55.4002 131.068 59.9428L131.197 60.0904Z" fill="#FF8626" fill-rule="nonzero" fill-opacity="1"/></g></g></g></g></svg>
        <span class="title">ProfeSearch</span>
      </div>
      <div style="margin-right: 1rem;">
        <nav-link to="/pc/signup">Find a Position</nav-link>
        <nav-link to="/pc/signup">Post a Position</nav-link>
      </div>
      <vs-button flat :active="true" style="width: 7rem;font-size: 1.3rem;" @click="goToSignup">Join Us</vs-button>
    </div>

    <!--    Get your dream position here at ProfeSearch-->
    <div style="margin-top: 5rem;">
      <div style="width: 50%; position: relative;display: inline-block;">
        <span style="font-size: 3rem;font-weight: 600;">
          Get your dream position here at
          <span style="color: #FF8626;">ProfeSearch</span>
        </span><br/>
        <span class="subtitle">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
        </span>
        <vs-button flat :active="true" class="findPositionBtn" @click="goToSignup">Find a Position</vs-button>
        <nav-link to="/pc/signup" style="margin-left: 2rem;">Post a Position</nav-link>
      </div>
      <img style="width: 50%; float: right;margin-top: -5rem;" :src="home1Img" alt=""/>
      <div style="width: 100%;display: flex;justify-content: center;">
        <img style="width: 35rem" :src="universityLogo" alt="university logo"/>
      </div>
    </div>

    <!--    Start Your Journey In Just 4 Steps-->
    <div style="text-align: center; margin-top: 6rem;">
      <span style="font-size: 2rem; font-weight: 600;">Start Your Journey In Just <span style="color: #FF8626">4 Steps</span></span>
      <div class="steps">
        <div>
          <img :src="createAccountImg" alt="Create Account"/><br/>
          <span class="iconTitle">Create Your Account</span>
        </div>
        <img :src="arrowImg" alt="Arrow"/>
        <div>
          <img :src="planImg" alt="Plan"/><br/>
          <span class="iconTitle">Complete Your Profile</span>
        </div>
        <img :src="arrowImg" alt="Arrow"/>
        <div>
          <img :src="searchImg" alt="Search"/><br/>
          <span class="iconTitle">Find Ideal Position</span>
        </div>
        <img :src="arrowImg" alt="Arrow"/>
        <div>
          <img :src="starImg" alt="Star"/><br/>
          <span class="iconTitle">Submit Your Application</span>
        </div>
      </div>
    </div>

    <!--    Explore by Field of Expertise-->
    <div style="margin-top: 14rem; position: relative">
      <img :src="home3Img" alt=""/>
      <div class="discipline">
        <h1 style="color: #FF8626">Explore by Field of Expertise</h1>
        <div style="position: relative; height: 17rem;">
          <ul>
            <li v-for="(discipline, index) in disciplineList1" :key="index">{{discipline}}</li>
          </ul>
          <ul style="left: 18rem;">
            <li v-for="(discipline, index) in disciplineList2" :key="index">{{discipline}}</li>
          </ul>
          <vs-button flat :active="morePosition === 0" class="morePositionLink" @click="morePositionBtn">Click for more positions -------></vs-button>
        </div>
      </div>
    </div>

    <!--    Grad these recommended offer and apply now-->
    <div>
      <div style="text-align: center;">
        <h1>Grad these recommended offer and apply now</h1>
      </div>
      <el-switch
        style="display: block;text-align: center;margin: 1rem 0;"
        v-model="isRemote"
        active-color="#FF8626"
        inactive-color="rgb(127, 127, 127)"
        active-text="In Person"
        inactive-text="Remote">
      </el-switch>
      <!--      Remote-->
      <div v-show="isRemote">
        <recommend-offer-span v-for="(offer, index) in remoteOfferList" :offer="offer" :key="index"/>
      </div>
      <!--      In person-->
      <div v-show="!isRemote">
        <recommend-offer-span v-for="(offer, index) in inPersonOfferList" :offer="offer" :key="index"/>
      </div>
    </div>

    <!--    We help faculties connect with students-->
    <div style="margin-top: 5rem;height: 25rem;">
      <div style="width: 50%; position: relative;display: inline-block;">
        <span style="font-size: 3rem;font-weight: 600;">
          We help faculties connect with students
        </span><br/>
        <span class="subtitle">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
        </span>
        <vs-button flat :active="true" class="findPositionBtn" @click="goToSignup">Join as Faculty</vs-button>
      </div>
      <img style="position: absolute;" :src="home2Img" alt=""/>
    </div>

    <!--    bottom-->
    <div class="bottom">
      <div style="align-items: center; display: flex; flex: 1; margin: 0 4rem;">
        <svg width="66" height="65" xmlns="http://www.w3.org/2000/svg" overflow="hidden"><defs><clipPath id="clip0"><rect x="102" y="28" width="66" height="65"/></clipPath><clipPath id="clip1"><rect x="103" y="28" width="65" height="65"/></clipPath><clipPath id="clip2"><rect x="103" y="28" width="65" height="65"/></clipPath><clipPath id="clip3"><rect x="103" y="28" width="65" height="65"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-102 -28)"><g clip-path="url(#clip1)"><g clip-path="url(#clip2)"><g clip-path="url(#clip3)"><path d="M150.523 68.2932C146.664 67.3108 143.339 64.9755 139.264 60.2508L139.128 60.0904 139.256 59.9428C143.193 55.4009 146.638 52.375 150.648 52.375 153.124 52.3717 155.459 53.5318 156.952 55.5079L152.986 57.7978 163.07 60.5 165.772 50.4115 161.658 52.7867C159.181 49.1387 155.057 46.9556 150.648 46.9583 144.099 46.9583 139.31 51.6106 135.161 56.3942 131.01 51.6058 126.224 46.9583 119.675 46.9583 112.395 46.9061 106.451 52.7655 106.399 60.0457 106.347 67.3257 112.206 73.2697 119.486 73.3219 119.549 73.3224 119.612 73.3224 119.675 73.3219 126.202 73.3219 130.831 68.799 135.161 63.7872 139.456 68.7679 144.12 72.7924 150.648 73.3219 157.978 73.9151 163.163 68.1348 163.211 63.7385 163.211 63.7333 163.207 63.7291 163.201 63.7291 163.198 63.7292 163.194 63.7315 163.193 63.7351 162.152 66.8984 155.824 69.6406 150.523 68.2932ZM131.063 60.2454C126.871 65.0967 123.663 67.9053 119.675 67.9053 115.387 67.9746 111.854 64.5543 111.784 60.2657 111.715 55.9771 115.135 52.4443 119.424 52.375 119.508 52.3736 119.591 52.3736 119.675 52.375 123.687 52.375 127.131 55.4002 131.068 59.9428L131.197 60.0904Z" fill="#FF8626" fill-rule="nonzero" fill-opacity="1"/></g></g></g></g></svg>
        <span class="title">ProfeSearch</span>
      </div>
    </div>

  </div>
</template>

<script>
import NavLink from "@/components/nav-link";
import RecommendOfferSpan from "../../components/recommend-offer-span";
export default {
  name: "pcHome",
  components: {RecommendOfferSpan, NavLink},
  data () {
    return {
      home1Img: require("@/assets/HomePage/home_1.png"),
      universityLogo: require("@/assets/HomePage/university_logo.png"),
      home2Img: require("@/assets/HomePage/home_blackboard_2.png"),
      home3Img: require("@/assets/HomePage/home_explore_3.png"),
      createAccountImg: require("@/assets/HomePage/createAccount.png"),
      planImg: require("@/assets/HomePage/plan.png"),
      searchImg: require("@/assets/HomePage/search.png"),
      starImg: require("@/assets/HomePage/star.png"),
      arrowImg: require("@/assets/HomePage/arrow.png"),
      disciplineList1: ['Engineering', 'Mathematical Sciences', 'Life Sciences', 'Computer Science', 'Physical Sciences', 'Social Sciences'],
      disciplineList2: ['Business', 'Languages', 'Culture', 'Art & Design'],
      morePosition: 1,
      inPersonOfferList: [{
        university: "University of Southern California, Los Angeles",
        jobTitle: "Research Assistant",
        remainTime: "2 days",
        field: ["Computer Science", "Data Science"],
        audience: ["Freshmen"],
        description: "We are looking for the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
        img: require('@/assets/USC.png'),
        type: 0
      }],
      remoteOfferList: [{
        university: "University of California Los Angeles, Los Angeles",
        jobTitle: "Bathroom Janitor",
        remainTime: "2 days",
        field: ["Computer Science", "Data Science"],
        audience: ["Freshmen"],
        description: "We are looking for the quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
        img: require('@/assets/UCLA.png'),
        type: 1,
        salary: 15
      }],
      isRemote: true
    }
  },
  methods: {
    goToSignup () {
      this.$router.push('/pc/signup');
    },
    morePositionBtn () {
      this.morePosition = 0;
      this.$router.push('/pc/signup');
    }
  }
}
</script>

<style scoped lang="less">
  .homeNav {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 2rem;
    margin-left: 1rem;
    font-weight: 600;
    color: #FF8626;
  }
  .subtitle {
    font-weight: 600;
    color: rgb(102, 103, 105);
    font-size: 12px;
    display: block;
    margin: 1rem 0;
  }
  .findPositionBtn {
    font-weight: 600;
    width: 9rem;
    height: 2.5rem;
    display: inline-block;
  }
  .steps {
    margin-top: 1rem;
    position: absolute;
    width: 100%;
    margin-left: -8rem;
    background: rgb(245, 245, 245);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0;
    .iconTitle {
      font-weight: 800;
      color: #FF8626;
    }
    img {
      width: 4rem;
    }
  }
  .discipline {
    width: 55%;
    position: absolute;
    top: 0;
    right: 0;
    ul {
      display: inline-block;
      top: 0;
      position: absolute;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 2.5rem;
    }
    .morePositionLink {
      position: absolute;
      bottom: 0.5rem;
      left: 20rem;
      font-size: 1.3rem;
      width: 12rem;
      text-align: left;
    }
  }
  .bottom {
    position: absolute;
    width: 100%;
    margin-left: -8rem;
    border-top: 3px solid #FF8626;
    background: rgb(242, 242, 242);
    margin-top: 3rem;
    padding: 1.5rem 0;
    height: 7rem;
  }
  /deep/ .el-switch__label.is-active {
    color: #FF8626;
  }
  /deep/ .el-switch__label * {
    font-size: 1rem;
    font-weight: 800;
  }
</style>

import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/pages/index');

// PC端
const pcIndex = () => import('@/pages/pcIndex');
const pcHome = () => import('@/pages/pc/pcHome');
const pcLogin = () => import('@/pages/pc/Login');
const pcSignup = () => import('@/pages/pc/Signup');

// Faculty
const facultyIndex = () => import('@/pages/pc/Faculty/index');
const facultyProfile = () => import('@/pages/pc/Faculty/profile');
const facultyPosition = () => import('@/pages/pc/Faculty/myPosition');
const facultyAddPosition = () => import('@/pages/pc/Faculty/addPosition');
const facultyPositionDetail = () => import('@/pages/pc/Faculty/positionDetail');
const facultySignUp = () => import('@/pages/pc/Faculty/facultySignup');

// Student
const stuIndex = () => import('@/pages/pc/Student/index')
const stuProfile = () => import('@/pages/pc/Student/profile')
const stuFindPosition = () => import('@/pages/pc/Student/findPosition')
const stuMyApplication = () => import('@/pages/pc/Student/myApplication')
const stuApplicationDetail = () => import('@/pages/pc/Student/applicationDetail')
const stuPositionDetail = () => import('@/pages/pc/Student/positionDetail')
const stuSignUp = () => import('@/pages/pc/Student/studentSignup')

// 移动端
const MobileIndex = () => import('@/pages/mobileIndex')
const MobileHome = () => import('@/pages/mobile/mobileHome')

Vue.use(Router)

// 避免重复路由
const originalReplace = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/pc/home'
    },
    {
      path: '/pc',
      name: 'pcIndex',
      redirect: '/home',
      component: pcIndex,
      children: [{
        path: 'home',
        name: 'pcHome',
        component: pcHome
      },{
        path: 'login',
        name: 'pcLogin',
        component: pcLogin
      },{
        path: 'signup',
        name: 'pcSignup',
        component: pcSignup
      },{
        path: 'student/signup',
        component: stuSignUp
      },{
        path: 'faculty/signup',
        component: facultySignUp
      },{
        path: 'student',
        component: stuIndex,
        redirect: 'student/MyApplication',
        children: [{
          path: 'profile',
          component: stuProfile
        },{
          path: 'FindPosition',
          component: stuFindPosition
        },{
          path: 'MyApplication',
          component: stuMyApplication
        },{
          path: 'MyApplication/detail',
          name: 'applicationDetail',
          component: stuApplicationDetail
        },{
          path: 'FindPosition/detail',
          name: 'positionDetail',
          component: stuPositionDetail
        }]
      },{
        path: 'faculty',
        component: facultyIndex,
        redirect: 'faculty/MyPosition',
        children: [{
          path: 'profile',
          component: facultyProfile
        },{
          path: 'MyPosition',
          component: facultyPosition
        },{
          path: 'AddPosition',
          component: facultyAddPosition
        },{
          path: 'MyPosition/detail',
          component: facultyAddPosition
        }]
      }]
    },
    {
      path: '/mobile',
      name: 'mobileIndex',
      component: MobileIndex,
      children: [{
        path: 'home',
        name: 'mobileHome',
        component: MobileHome
      }]
    }
  ]
})

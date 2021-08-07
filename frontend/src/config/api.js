export default {
  authentication: {
    signup: "/api/users/signup",
    login: "/api/users/login",
    logout: "/api/users/logout"
  },
  position: {
    getAllPositions: "/api/positions",
    createNewPosition: "/api/positions/new"
  },
  student: {
    studentSignup: "/api/students/myCommonApp",
    getStudentProfile: "/api/students/myCommonApp"
  },
  faculty: {
    facultySignup: "/api/faculties/myProfile",
    getFacultyProfile: "/api/faculties/myProfile"
  },
  application: {
    studentGetAllApplications: "/api/applications",
    studentGetSingleApplication : "/api/applications",
    createNewApplication: "/api/applications/positions"
  }
}

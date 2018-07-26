import axios from "axios";

export default {
  // !!!!!!!!! Save information to the database !!!!!!!!!!!!!!!!!!!
  // Gets all user info
  getUser: function () {
    console.log("getUser")
    return axios.get("http://localhost:3001/api/users/goals");
  },
  saveUser: function (userData) {
    console.log("saveUser", userData)
    let corsFix = "http://localhost:3001/api/users/goals";
    return axios.post(corsFix, userData);
  }
};

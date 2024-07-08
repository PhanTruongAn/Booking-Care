import axiosClient from "./axiosClient";
const userApi = {
  userLogin: (userData) => {
    let url = "/user/login";
    return axiosClient.post(url, userData);
  },
};
export default userApi;

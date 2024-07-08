import db from "../models/index";
import userService from "../services/userService";
let userLogin = async (req, res) => {
  try {
    let data = await userService.userLogin(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  userLogin,
};

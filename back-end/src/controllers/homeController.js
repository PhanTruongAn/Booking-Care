import db from "../models/index";
import userService from "../services/userService";
let getHomePage = async (req, res) => {
  try {
    return res.render("homePage.ejs");
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (req, res) => {
  try {
    let data = await userService.createUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUserById = async (req, res) => {
  try {
    let data = await userService.deleteUserById(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
  }
};
let getAllUser = async (req, res) => {
  try {
    let data = await userService.getAllUser();
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
  getHomePage,
  createUser,
  getAllUser,
  deleteUserById,
};

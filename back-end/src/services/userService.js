import { where } from "sequelize";
import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
const _ = require("lodash");
const salt = bcrypt.genSaltSync(10);
let getAllUser = async () => {
  let data = await db.User.findAll();
  if (data) {
    return {
      EM: "Get All User Success!",
      EC: 0,
      DT: data,
    };
  }
  return {
    EM: "Get All User Fail!",
    EC: 1,
    DT: [],
  };
};
let createUser = async (data) => {
  const password = bcrypt.hashSync(data.password);
  const newData = {
    ...data,
    password,
  };
  let user = await db.User.create(newData);
  if (user) {
    return {
      EM: "Create User Success!",
      EC: 0,
      DT: user,
    };
  }
  return {
    EM: "Create User Fail!",
    EC: 1,
    DT: "",
  };
};
let deleteUserById = async (data) => {
  let userFounded = await db.User.destroy({
    where: {
      id: data.id,
    },
  });
  if (userFounded) {
    return {
      EM: "Delete User Success!",
      EC: 0,
      DT: userFounded,
    };
  }
  return {
    EM: "Delete User Fail!",
    EC: 1,
    DT: "",
  };
};

// UserLogin
let userLogin = async (userData) => {
  let userFounded = await db.User.findOne({
    where: {
      [Op.or]: [
        { email: userData.userName },
        { phoneNumber: userData.userName },
      ],
    },
  });
  if (userFounded) {
    let comparePassword = bcrypt.compareSync(
      userData.password,
      userFounded.password
    );
    const { password, createdAt, updatedAt, ...respondData } =
      userFounded.dataValues;
    if (comparePassword) {
      return {
        EM: "Login Success!",
        EC: 0,
        DT: respondData,
      };
    }
    return {
      EM: "Wrong password!",
      EC: 1,
      DT: "",
    };
  }
  return {
    EM: "User Not Found!",
    EC: 1,
    DT: null,
  };
};

module.exports = {
  createUser,
  getAllUser,
  deleteUserById,
  userLogin,
};

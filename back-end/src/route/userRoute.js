import express from "express";
import userController from "../controllers/userController";
let router = express.Router();
let initUserRoute = (app) => {
  router.post("/login", userController.userLogin);
  return app.use("/user", router);
};
module.exports = initUserRoute;

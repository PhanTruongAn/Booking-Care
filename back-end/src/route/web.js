import express from "express";
import homeController from "../controllers/homeController";
import initUserRoute from "./userRoute";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.post("/create", homeController.createUser);
  router.get("/get-all", homeController.getAllUser);
  router.post("/delete-by-id", homeController.deleteUserById);

  // User Route
  initUserRoute(app);
  return app.use("/", router);
};
module.exports = initWebRoutes;

const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const auth = require("../middleware/auth");

router
  .route("/")
  .get(profileController.getAllProfile)
  .post(profileController.createProfile)
   .put(profileController.updateProfile)
   .delete(profileController.deleteProfile);

router
   .route("/:id")
   .get(profileController.getProfileByID)
   .put(profileController.putProfileByID)
   .delete(profileController.deleteProfileByID);

module.exports = router;
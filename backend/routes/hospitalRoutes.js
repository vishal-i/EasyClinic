const express = require("express");
const router = express.Router();

const {
  createHospitals,
  getHospitals,
  getHospitalAdmin,
  getHospitalbyID,
} = require("../controllers/hospitalController");

const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

router
  .route("/SA/createHospital")
  .post(isAuthenticatedUser, authorizeRoles("SuperAdmin"), createHospitals);

router
  .route("/SA/getHospital")
  .get(isAuthenticatedUser, authorizeRoles("SuperAdmin"), getHospitals);

router
  .route("/SA/getHospital/:id")
  .get(isAuthenticatedUser, authorizeRoles("SuperAdmin"), getHospitalbyID);

router
  .route("/SA/getHospitalAdmin/:id")
  .get(isAuthenticatedUser, authorizeRoles("SuperAdmin"), getHospitalAdmin);

module.exports = router;

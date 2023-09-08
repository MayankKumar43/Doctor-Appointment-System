const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getSingleDoctorByID,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorController");
const router = express.Router();

// POST SINGLE DOC INFO

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

// POST SINGLE DOCTOR ID

router.get("/getDoctorById/:id", authMiddleware, getSingleDoctorByID);

// GET APPOINTMENTS

router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

// POST UPDATE STATUS
router.post(
  "/update-AppointmentStatus",
  authMiddleware,
  updateStatusController
);

module.exports = router;

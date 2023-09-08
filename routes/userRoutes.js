const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//login routes ||Post
router.post("/login", loginController);

//register route || Post
router.post("/register", registerController);

// Auth || Post
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor || Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Notification  Doctor || Post
router.post(
  "/get-All-Notification",
  authMiddleware,
  getAllNotificationController
);

// Notification  Doctor || Post
router.post(
  "/delete-All-Notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET ALL DOC

router.get("/get-AllDoctor", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT

router.post("/book-appointment", authMiddleware, bookAppointmentController);

// BOOKING AVAILBILITY

router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

// Apppointments List

router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;

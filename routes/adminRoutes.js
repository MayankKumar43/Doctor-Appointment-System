const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersControllers,
  getAllDoctorsControllers,
  changeAccountStatusController,
} = require("../controllers/adminController");

const router = express.Router();

// GET METHOD || USERS

router.get("/getAllUsers", authMiddleware, getAllUsersControllers);

// GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsControllers);

// POST METHOD || ACCOUNT STATUS

router.post(
  "/changeAccountStauts",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;

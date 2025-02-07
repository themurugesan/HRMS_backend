const express = require("express");
const Image = require("../models/product");
const Policy = require("../models/policy");
const loginRoute = require("./login");
const singupRoute = require("./signup");

const userController = require("../controllers/user");

const { authenticateToken } = require("../utils/authMiddeleware");
const DashboardGet = require("../controllers/DashboardGet");
const multer = require("multer");

const router = express.Router();

router.get("/users", authenticateToken, userController.getUsers);

router.route("/dashimages").get(authenticateToken, DashboardGet);
router.use("/auth", loginRoute);
router.use("/user", singupRoute);

const path = require("path");
const { addPolicy } = require("../controllers/PolicyAdd");
const PolicyUpdate = require("../controllers/PolicyUpdate");
const PolicyDelete = require("../controllers/PolicyDelete");
const PolicyGet = require("../controllers/PolicyGet");
const EmpAdd = require("../controllers/EmpAdd");
const EmpUpdate = require("../controllers/EmpUpdate");
const AttanceGet = require("../controllers/attanceget");

// Route to get all policies
router.get("/policies", PolicyGet);

// Route to delete a policy
router.delete("/policies/:id", PolicyDelete);

//add policy
router.post("/policyadd", addPolicy);

// PUT: Update policy
router.put("/policyupdate/:id", PolicyUpdate);






















const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/")); // Make sure the path is correct
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
//emp add
router.post("/upload", upload.single("image"), EmpAdd);

// empp update
router.put("/images/:id", upload.single("image"), EmpUpdate);

router.get("/logs", AttanceGet);

router.get("/images", authenticateToken, async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send({ message: "Error fetching images", error });
  }
});

router.delete("/images/:id", async (req, res) => {
  const { id } = req.params;
  await Image.findByIdAndDelete(id);
  res.json({ message: "Image deleted" });
});

module.exports = router;

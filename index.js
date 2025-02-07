const express = require("express");
// const multer = require("multer");
const userRoute = require("./routes/user");
const cors = require("cors");
const bodyParser = require("body-parser");

const createAdminAccount = require("./scripts/admin");
const Attendance = require("./models/logs");



const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(bodyParser.json());

createAdminAccount();
app.use(express.json());

 

app.use("/api", userRoute);

app.get('/api/attendance', async (req, res) => {
  try {
    const data = await Attendance.find();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

// API endpoint to save attendance data
app.post('/api/attendance', async (req, res) => {
  try {
    const attendanceData = req.body;
    await Attendance.insertMany(attendanceData);
    res.status(200).send("Data saved successfully");
  } catch (err) {
    res.status(500).send("Error saving data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

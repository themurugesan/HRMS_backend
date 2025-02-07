const { mongoose } = require("../configuration/dbConfig");

const attendanceSchema = new mongoose.Schema({
    employeeId: String,
    isCheckIn: String,
    eventtime: Date
  });
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports=Attendance

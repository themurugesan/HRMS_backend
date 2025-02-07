const { mongoose } = require("../configuration/dbConfig");

const ImageSchema = new mongoose.Schema({
  employeeId: String,
  title: String,
  description: String,
  
  image: String,
  middleName: String,
  email: String,
  blood: String,
  department: String,
  location: String,
  designation: String,
  employmentType: String,
  employeeStatus: String,
  sourceOfHire: String,
  dateOfJoining: Date,
  currentExperience: String,
  totalExperience: String,
  
  // Additional fields
  primaryReportingManager: String,
  secondaryReportingManager: String,
  dateOfBirth: Date,
  age: Number,
  gender: String,
  maritalStatus: String,
  aboutMe: String,
  UAN: String,
  PAN: String,
  Aadhaar: String,
  workPhoneNumber: String,
  extension: String,
  seatingLocation: String,
  personalEmailAddress: String,
  presentAddress: String,
  dateOfExit: Date,
  companyName: String,
  jobTitle: String,
  fromDate: Date,
  toDate: Date,
  jobDescription: String,
  instituteName: String,
  degreeDiploma: String,
  specialization: String,
  dateOfCompletion: Date,
  nameOfParent: String,
  relationship: String,
  parentDateOfBirth: Date,
});

const Image = mongoose.model('Images', ImageSchema);

module.exports = Image;

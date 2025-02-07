const Image = require("../models/product");

const EmpAdd=async (req, res) => {
    const {
      title, description, amount, middleName, email, blood, department, location, designation,
      employmentType, employeeStatus, sourceOfHire, dateOfJoining, currentExperience, totalExperience,
      primaryReportingManager, secondaryReportingManager, dateOfBirth, age, gender, maritalStatus, aboutMe,
      UAN, PAN, Aadhaar, workPhoneNumber, extension, seatingLocation, personalEmailAddress, presentAddress,
      dateOfExit, companyName, jobTitle, fromDate, toDate, jobDescription, instituteName, degreeDiploma, specialization,
      dateOfCompletion, nameOfParent, relationship, parentDateOfBirth
    } = req.body;
  
    const image = new Image({
      title,
      description,
      employeeId:req.amount,
      image: req.file.path,
      middleName,
      email,
      blood,
      department,
      location,
      designation,
      employmentType,
      employeeStatus,
      sourceOfHire,
      dateOfJoining,
      currentExperience,
      totalExperience,
      primaryReportingManager,
      secondaryReportingManager,
      dateOfBirth,
      age,
      gender,
      maritalStatus,
      aboutMe,
      UAN,
      PAN,
      Aadhaar,
      workPhoneNumber,
      extension,
      seatingLocation,
      personalEmailAddress,
      presentAddress,
      dateOfExit,
      companyName,
      jobTitle,
      fromDate,
      toDate,
      jobDescription,
      instituteName,
      degreeDiploma,
      specialization,
      dateOfCompletion,
      nameOfParent,
      relationship,
      parentDateOfBirth
    });
  
    await image.save();
    res.status(201).json(image);
  }


  module.exports=EmpAdd
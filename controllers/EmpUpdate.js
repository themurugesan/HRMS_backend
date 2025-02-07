const Image = require("../models/product");

const EmpUpdate=async (req, res) => {
    const { id } = req.params;
    const {
      title, description, amount, middleName, email, blood, department, location, designation,
      employmentType, employeeStatus, sourceOfHire, dateOfJoining, currentExperience, totalExperience,
      primaryReportingManager, secondaryReportingManager, dateOfBirth, age, gender, maritalStatus, aboutMe,
      UAN, PAN, Aadhaar, workPhoneNumber, extension, seatingLocation, personalEmailAddress, presentAddress,
      dateOfExit, companyName, jobTitle, fromDate, toDate, jobDescription, instituteName, degreeDiploma, specialization,
      dateOfCompletion, nameOfParent, relationship, parentDateOfBirth
    } = req.body;
  
    const updateData = {
    employeeId:req.amount,
      title,
      description,
      
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
    };
  
    if (req.file) {
      updateData.image = req.file.path;
    }
  
    const updatedImage = await Image.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updatedImage);
  }

  module.exports=EmpUpdate
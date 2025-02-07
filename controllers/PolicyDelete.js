// import "../models/policy"
const Policy = require('../models/policy'); 


const PolicyDelete=async (req, res) => {
    try {
      await Policy.findByIdAndDelete(req.params.id);
      return res.status(200).json('Policy deleted');
    } catch (error) {
      console.error(error);
      return res.status(200).json({code :'Server error',error:"500"});
    }
  }
  module.exports=PolicyDelete
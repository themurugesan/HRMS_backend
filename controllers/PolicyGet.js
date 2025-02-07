
const Policy = require('../models/policy'); 


const PolicyGet =async (req, res) => {
    try {
      const policies = await Policy.find();
      return res.status(200).json(policies);
    } catch (error) {
      console.error(error);
      return res.status(200).json({error:'Server error',code : 500});
    }
  }

  module.exports=PolicyGet
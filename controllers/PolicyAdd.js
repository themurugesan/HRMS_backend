const Policy = require('../models/policy'); 


const addPolicy = async (req, res) => {
  const { policyType, durationDays, duration } = req.body;

  try {
    
    const newPolicy = new Policy({ policyType, durationDays, duration });

    
    await newPolicy.save();

    
    return res.status(200).json({ message: 'Policy added successfully!', policy: newPolicy });
  } catch (error) {
    console.log(error.message, 'policy error');
    
    return res.status(200).json({ error: 'Failed to add policy.',code:501 });
  }
};

module.exports = {
  addPolicy,
};

const Policy = require('../models/policy'); 


const PolicyUpdate=async (req, res) => {
    const { policyType, durationDays, duration } = req.body;
    try {
      const updatedPolicy = await Policy.findByIdAndUpdate(
        req.params.id,
        { policyType, durationDays, duration },
        { new: true }
      );
      if (!updatedPolicy) {
        return res.status(404).json({ error: 'Policy not found!' });
      }
      res.status(200).json({ message: 'Policy updated successfully!', policy: updatedPolicy });
    } catch (error) {
      res.status(200).json({ error: 'Failed to update policy.',code:500 });
    }
  }


  module.exports=PolicyUpdate
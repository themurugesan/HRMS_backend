const Log = require("../models/logs");

const AttanceGet = async (req, res) => {
  try {
    const logs = await Log.find();  
    console.log("logss",logs)

    return res.status(200).json({logs})
    
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ error: "Error fetching logs", code: 500 });
  }
};

module.exports = AttanceGet;

const { mongoose } = require("../configuration/dbConfig");

const PolicySchema = new mongoose.Schema({
  policyType: String,
  durationDays: Number,
  duration: String,
});

const Policyss = mongoose.model('Policy', PolicySchema);

module.exports = Policyss;

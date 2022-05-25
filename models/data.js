const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    mail: { type: "string", required: true, unique: true },
    utr: { type: "string", required: true },
    mobile: { type: "string", required: true },
    name: { type: "string" },
    teamid: { type: "string" },
    teamoneid: { type: "String" },
    teamtwoid: { type: "String" },
    teamthird: { type: "string" },
    teamname: { type: "string" },
    status: { type: "string" }

})

Schema.index({ mail: 1, utr: 1 }, { unique: true })

const data = mongoose.model("data", Schema)

module.exports = data

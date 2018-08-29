var mongoose = require("mongoose");

var ClmicSchema = mongoose.Schema({
    id: Number,
    clmic_id: Number,
    type: String,
    name: String,
    desc: String,

    Num_Incubation: Number,
    Num_SP: Number,
    Vol_DMSO: Number,
    Vol_Liver_Microsome: Number,
    Vol_Stop: Number,
    Vol_CompoundMix: Number,
    Vol_Kpi_NADPH: Number,
    Num_Timers: Number,
    Vol_Collection_Sample: Number,
    order: [Number],
    Num_Inc_Each_SP: [Number],
    LabwareID: [String],
    PositionID: [String],
    Vol_CMP: [Number],
    SP: [String],
    LM_LabwareID: [String],
    LM_PositionID: [String],
    Timer: [Number],

    authorFirstName: String,
    authorLastName: String,
    date: String,
});

var clmicModel = mongoose.model("ClmicModel", ClmicSchema);


module.exports = clmicModel;

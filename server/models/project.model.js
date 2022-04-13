const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectname: { type: String },
    projectnumber: { type: String },
    projectclient: { type: String },
    projectnumberclient: { type: String },
} , {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
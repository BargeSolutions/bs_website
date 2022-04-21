const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String },
    useremail: { type: String },
    usercompany: { type: String },
    userfunction: { type: String },
    usertelephone: { type: String },
    userrole: { 
        type: String,
        enum: ['Admin', 'Employee', 'Client', 'Viewer'],
        default: 'Viewer' },
    allowed_projects: { type: Array, "default": [] }
} , {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

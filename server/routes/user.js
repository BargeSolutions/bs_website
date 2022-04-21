const router = require('express').Router();
let User = require("../models/user.model")

router.route('/add_new').post((req, res) => {
    const username = req.body.userName;
    const useremail = req.body.userEmail;
    const usercompany = req.body.userCompany;
    const userfunction = req.body.userFunction;
    const usertelephone = req.body.userTelephone;
    const userrole = req.body.role;
    const allowed_projects = req.body.allowed_projects;

    const newUser = new User({
        username,
        useremail,
        usercompany,
        userfunction,
        usertelephone,
        userrole,
        allowed_projects,
    })

    newUser.save()
        .then(() => res.json('New project added!!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;
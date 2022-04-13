const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const projectname = req.body.projectName;
    const projectnumber = req.body.projectNumber;
    const projectclient = req.body.projectClient;
    const projectnumberclient = req.body.projectNumberClient;

    const newProject = new Project({
        projectname,
        projectnumber,
        projectclient,
        projectnumberclient,
    })

    newProject.save()
        .then(() => res.json('New project added!!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;

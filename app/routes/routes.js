const express = require('express');

const Router = express.Router();

const courseController = require('../controller/courseController');
const subController = require('../controller/subjectController');

Router.route('/af18/course/getall').get(courseController.getAll);
Router.route('/af18/course/add').post(courseController.add);
Router.route('/af18/course/getsub/:id').get(courseController.getsubjects);

Router.route('/af18/subject/getall').get(subController.getallsubs);

module.exports = Router;

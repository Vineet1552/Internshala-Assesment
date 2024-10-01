const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Student = require('../Model/StudentModel');

router.post('/postStudentData', async(req, res) => {
    try {
        const studentData = req.body;
        const newStudentData = new Student({
            name: studentData.name,     
            marks: studentData.marks
        });

        const response = await newStudentData.save();
        res.status(200).json({response});

    } catch (error) {
        console.error(error, "error");
        res.status(500).json({message: "Server error"});
    }
});


// 1. Write a MongoDB query to find all documents in a collection where a particular field has a value greater than a certain value.

router.get('/getStudentMarks', async(req, res) => {
    try {
        const response = await Student.find({marks: {$gt: 70}});
        res.status(200).json({response});
    } catch (error) {
        console.error(error, "error");
        res.status(500).json({message: "Server error"});
    }
});

// 2. Write a simple Express.js route that takes in a parameter from the URL and returns it as a response.

router.get('/getParams/:param', async(req, res) => {
    try {
        const response = req.params.param;
        res.status(200).json(`the name we are extracting from param is ${response}`);
    } catch (error) {
        console.error(error, "error");
        res.status(500).json({message: "Server error"});
    }
});

// 3. 3rd question API. 
router.get('/getAllStudentMark', async(req, res) => {
    try {
        const response = await Student.find();
        res.status(200).json({response});
    } catch (error) {
        console.error(error, "error");
        res.status(500).json({message: "Server error"});
    }
});

module.exports = router;
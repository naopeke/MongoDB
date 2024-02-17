const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
},{collection:'school'});


const SubjectSchema = new mongoose.Schema({
    title: String,
    teachers: [TeacherSchema]
},{collection:'school'});


const MarkSchema = new mongoose.Schema({
    date: String,
    mark: Number,
    subjects: SubjectSchema
},{collection:'school'});


const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarkSchema]
},{collection:'school'});


module.exports = {
    Teacher: mongoose.model('Teacher', TeacherSchema),
    Subject: mongoose.model('Subject', SubjectSchema),
    Mark:    mongoose.model('Mark', MarkSchema),
    Student: mongoose.model('Student', StudentSchema)
} 
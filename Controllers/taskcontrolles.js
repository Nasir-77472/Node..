const {IncomingForm}= require ('formidable')    
const {readTasksfromfile, writeTasksTofile} = require("../utils/fileHandler");
const { copyFileSync } = require('fs');
const path = require('path');

exports.getTasks = (req , res) => {
       const tasks = readTasksfromfile();
res.writeHead(200, {'content-type': 'application/json'})
res.end(json.stringify(tasks))
}

exports.createTask = (req , res) => {

}

exports.updateTask = (req , res) =>{
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }))

    
}

exports.deleteTask = (req , res) => {

    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }))

    
    
    
}
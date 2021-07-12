// https://www.youtube.com/watch?v=TlB_eWDSMt4

function sayHello(name){
    console.log("Hello " + name)  // =====>  window.console.log =============> global function
}

sayHello('SWASTIK')
// use node app.js to execute

const loggerModule = require('./logger')
// const to prevent overwrite on the loggerModule
loggerModule.log('hello SWASTIK')
loggerModule.log(loggerModule.Endpoint)

const path = require('path') // built in module path
console.log(path.parse(__filename)) // every file is wrapped in a funciton like function(exports,require,__filename,__dirname) 
// look into nodejs docs for more modules

const os = require('os')
var totalMemory = os.totalmem
var freeMemory = os.freemem

// all units are in bytes


console.log('Total Memory : ' + totalMemory)
console.log(`Free Memory : ${freeMemory}`) // use ` (backtick) for string specefiers

const fs = require('fs')


var files = fs.readdirSync('./')
console.log(files)

var afiles = fs.readdir('./',function(err,fileList) {
    if(err) console.log('Error:' + err)
    else console.log('Files: '+fileList)
})

// Although sync and async gets you the same values for the sync node actually halts the process until competed 
// async methods (readdir) is preffered as node manages these functions to work effeciently




// https://www.youtube.com/watch?v=TlB_eWDSMt4

function sayHello(name){
    console.log("Hello " + name)  // =====>  window.console.log =============> global function
}

sayHello('USER')
// use node app.js to execute

const loggerModule = require('./logger')
// const to prevent overwrite on the loggerModule
loggerModule.log('hello User')
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


var EventListenerModule = require('events') // this require gets you a class (by convention class names are in upper case first letter)
const emmiter = new EventListenerModule()


// Registered listener
emmiter.on("message Logged",function() {
    console.log("registered listener called")
})

// Listeners have to be declared before

// event raiser
emmiter.emit("message Logged")

// Now since afiles is a asynchronus function it takes place after emmiter.emit so it is printed before afiles is executed

emmiter.on("MessageLogged", (arg) => {
    console.log(arg)
})

emmiter.emit("MessageLogged",{id:1,name:"sswastik02"})

// parameters can also be used for event listeners and emitters

const CustomLogger = require('./customLogger')
var customLogger = new CustomLogger()

customLogger.on('custom',() => {
    console.log('Outside Logger')
})
// you can define functions for custom class using this


customLogger.log('hello')

// this is the way to use custom classes

const Server = require('./server')

var serverInstance = new Server()
serverInstance.start()

// this is the way to crreate a server(http)








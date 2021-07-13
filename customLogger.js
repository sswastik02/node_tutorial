const EventListener = require('events')

class CustomLogger extends EventListener {
    
    CustomLogger()
    {this.on('custom',()=>{
        console.log("Inside Logger(Constructor)") // This is never called cuz accirding to function log it doesn't exist(not in scope)
    })
    
    }
    log(mes) {
        this.on('custom',()=>{
            console.log("Inside Logger")
        })
        console.log(mes)
        this.emit('custom')
    }
    
}

module.exports = CustomLogger
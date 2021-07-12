var url = 'https://examplelogger.in'

function log(message) {
    console.log(message)
}

module.exports.log=log;
module.exports.Endpoint = url; // Endpoint is the name of the variable url when imported to another file

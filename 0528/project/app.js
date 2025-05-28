const path = require('path');

const print1 = require(path.join(__dirname, 'lib','routes', 'api', 'log.js')).print1
const print2 = require(path.join(__dirname, 'lib', 'logger.js')).print2

print1()
print2()
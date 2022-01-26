require('@babel/register')
const server = require('../src/server/server').default

module.exports = async () => {
  global.httpServer = await server.start()
}
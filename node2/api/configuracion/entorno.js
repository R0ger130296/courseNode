;
let initVar = () => {
    process.env.PORT = process.env.PORT || 8001
    process.env.CLIENT = process.env.CLIENT || 'mysql'
    process.env.CONNECTION_DB = process.env.CONNECTION_DB || {
                                                                host: '127.0.0.1', 
                                                                user: 'root', 
                                                                password: 'Roger_130296', 
                                                                database: 'node2'
                                                              }
  }
  
  module.exports = {
    initVar
  }
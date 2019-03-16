// const start = () => { 
//     return Promise.resolve();
// }

// start().then(() => {
//     const app = require
// });

const server = require('./app.js')(),
      db = require('./services/database-connection.js').connect();
      
server.set('port', 3001);

server.listen(server.get('port'), () => {
    console.log(`Server is running on port ${server.get('port')}.`);
});
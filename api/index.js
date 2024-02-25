const server = import('../dist/angular-vercel/server/server.mjs');
console.log("Ele entra mesmo aqui!")
module.exports = server.app;
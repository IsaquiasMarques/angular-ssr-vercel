// const server = import('../dist/angular-vercel/server/main.server.mjs');

// module.exports = server.app;

import * as server from '../dist/angular-vercel/server/server.mjs';

export default server.app();
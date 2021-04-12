const server = require("./server");
const port = process.env.PORT || 3000;

server.start(port, () => console.log("Server is running"));

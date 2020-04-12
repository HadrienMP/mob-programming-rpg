const express = require("express");
const app = express();
const http = require('http').createServer(app);
const routes = require("./routes");

routes.setup(app);

start();

function start() {
    app.set('view engine', 'pug');
    app.use(express.static('public'));
    const port = process.env.PORT || 3000;
    http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
}

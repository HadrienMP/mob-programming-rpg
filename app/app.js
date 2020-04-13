const express = require("express");
const app = express();
const http = require('http').createServer(app);
const routes = require("./routes");

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

routes.setup(app);

const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));


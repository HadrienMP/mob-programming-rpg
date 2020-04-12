const express = require("express");
const app = express();
const http = require('http').createServer(app);

exports.get = (path, handle) => app.get(path, handle)

app.set('view engine', 'pug');
app.use(express.static('public'));
const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
let app = require("express")();
let http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

let port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
let app = require("express")();
let http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.set('view engine', 'pug');
let port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
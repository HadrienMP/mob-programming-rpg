let express = require("express");
let app = express();
let http = require('http').createServer(app);

app.get('/', (req, res) => res.render('index', {title: "Règles"}));
app.get('/rolesheets', (req, res) => res.render('rolesheets', {title: "Rôles"}));

app.set('view engine', 'pug');
app.use(express.static('public'));
let port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
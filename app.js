let express = require("express");
let app = express();
let http = require('http').createServer(app);
let fs = require("fs");
let markdown = require("jstransformer-markdown-it");

function toHtml(fileName, callback) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (!err) callback(markdown.render(data))
    });
}

app.get('/', (req, res) => {
    toHtml("markdown/rules-rewrite.md",
            html => res.render('index', {title: "Règles", rules: html}));
});
app.get('/rolesheets', (req, res) => res.render('rolesheets', {title: "Rôles"}));

app.set('view engine', 'pug');
app.use(express.static('public'));
let port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Server running on  http://0.0.0.0:${port}`));
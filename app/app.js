const server = require("./server");
const fs = require("fs");
const markdown = require("jstransformer-markdown-it");

function toHtml(fileName, callback) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (!err) callback(markdown.render(data))
    });
}

server.get('/', (req, res) => {
    toHtml("markdown/rules-rewrite.md",
            html => res.render('index', {title: "Règles", rules: html}));
});
server.get('/rolesheets', (req, res) => res.render('rolesheets', {title: "Rôles"}));
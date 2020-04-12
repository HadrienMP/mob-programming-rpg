const fs = require("fs");
const markdown = require("jstransformer-markdown-it");

exports.setup = app => {
    app.get('/', (req, res) => {
        toHtml("markdown/rules-rewrite.md",
            html => res.render('index', {title: "Règles", rules: html}));
    });

    app.get('/rolesheets', (req, res) => res.render('rolesheets', {
        title: "Rôles",
        roles: [
            ["driver", "navigator", "mobber"],
            ["researcher", "sponsor", "rear-admiral"],
            ["archivist", "automationist", "nose"],
            ["traffic-cop"],
        ]
    }));
}

function toHtml(fileName, callback) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (!err) callback(markdown.render(data))
    });
}
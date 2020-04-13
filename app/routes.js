const fs = require("fs");
const markdown = require("jstransformer-markdown-it");

exports.setup = app => {
    app.get('/', (req, res) => res.redirect("/rules"));
    app.get('/rules', (req, res) => {
        toHtml("markdown/rules-rewrite.md",
            html => res.render('rules', {title: "Règles", rules: html}));
    });

    app.get('/roles', (req, res) => res.render('roles', {
        title: "Rôles",
        roles: [
            ["driver", "navigator", "mobber"],
            ["researcher", "sponsor", "rear-admiral"],
            ["archivist", "automationist", "nose"],
            ["traffic-cop"],
        ]
    }));

    app.get('/role/:role', (req, res) => {
        toHtml(`markdown/roles/${req.params.role}.md`,
            html => {
                return res.render('role', {
                    title: req.params.role,
                    description: html
                });
            },
            err => {
                console.log(err);
                return res.sendStatus(404);
            });
    });
}

function toHtml(fileName, callback, errorCallback) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            errorCallback(err);
        } else {
            callback(markdown.render(data))
        }
    });
}
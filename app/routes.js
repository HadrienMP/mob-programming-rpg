const fs = require("fs");
const markdown = require("jstransformer-markdown-it");

exports.setup = app => {
    app.get('/', (req, res) => res.redirect("/main/rules"));

    app.get('/home', (req, res) => res.render('home'));
    app.post('/home', (req, res) => {
        return res.redirect(`/${req.body.mob}/rules`);
    });

    app.get('/:mob/rules', (req, res) => {
        toHtml("markdown/rules-rewrite.md",
            html => res.render('rules', {title: "Règles", mob: req.params.mob, rules: html}));
    });

    app.get('/:mob/roles', (req, res) => res.render('roles', {
        title: "Rôles",
        mob: req.params.mob,
        roles: [
            ["driver", "navigator", "mobber"],
            ["researcher", "sponsor", "rear-admiral"],
            ["archivist", "automationist", "nose"],
            ["traffic-cop"],
        ]
    }));

    app.get('/:mob/role/:role', (req, res) => {
        toHtml(`markdown/roles/${req.params.role}.md`,
            html => {
                return res.render('role', {
                    title: req.params.role,
                    mob: req.params.mob,
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
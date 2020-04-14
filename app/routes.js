const fs = require("fs");
const markdown = require("jstransformer-markdown-it");
const roles = require("./roles");

exports.setup = app => {
    app.get('/', (req, res) => res.redirect("/main/rules"));

    app.get('/home', (req, res) => res.render('home'));
    app.post('/home', (req, res) => res.redirect(`/${req.body.mob}/rules`));

    app.get('/:mob/rules', (req, res) => {
        toHtml("markdown/rules-rewrite.md",
            html => res.render('rules', {title: "Règles", mob: req.params.mob, rules: html}));
    });

    app.get('/:mob/roles', (req, res) => {
        return res.render('roles', {
            title: "Rôles",
            mob: req.params.mob,
            roles: roles.displayable(req.params.mob)
        });
    });

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

    app.post('/:mob/role/:role/win', (req, res) => {
        roles.win(req.params.mob, req.params.role);
        res.redirect(`/${req.params.mob}/roles`);
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
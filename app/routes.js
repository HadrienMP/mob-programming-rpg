const fs = require("fs");
const markdown = require("jstransformer-markdown-it");
const roles = require("./roles");

exports.setup = app => {
    app.get('/', (req, res) => res.redirect("/home"));

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
        read(`roles/${req.params.role}.json`,
            description => {
                let role = JSON.parse(description);
                return res.render('role', {
                    title: req.params.role,
                    mob: req.params.mob,
                    role: role,
                    description: markdown.render(role.description),
                    "roles": JSON.stringify(roles.get()),
                    slots: roles.get()[req.params.role].slots
                });
            },
            err => {
                console.error("Cannot read role. " + err);
                return res.sendStatus(404);
            });
    });

    app.post('/:mob/role/:role/win', (req, res) => {
        roles.win(req.params.mob, req.params.role);
        res.redirect(`/${req.params.mob}/roles`);
    });
}

function toHtml(fileName, callback, errorCallback) {
    read(
        fileName, 
        data => callback(markdown.render(data)),
        errorCallback
    )
}

function read(filename, callback, errorCallback) {
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            errorCallback(err);
        } else {
            callback(data)
        }
    });
}

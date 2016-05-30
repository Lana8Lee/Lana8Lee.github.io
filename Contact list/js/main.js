/*global require:true*/
/*global requirejs:true*/

requirejs.config({
    paths: {
        "jquery": "https://code.jquery.com/jquery-2.2.4.min"
    },
    shim: {
        "tmpl": {
            "exports": "tmpl"
        }
    }
});

requirejs(["jquery", "model", "view", "controller"], function ($, Model, View, Controller) {
    'use strict';

    var model = new Model(["Aiken", "Alfred", "Alma", "Amanda", "Alvin", "Andrea", "Angelina","Archie","Audrey"]),
        view = new View(model.data),
        controller = new Controller(model, view);
});

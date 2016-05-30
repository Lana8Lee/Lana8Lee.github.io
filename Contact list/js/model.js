/*global define:true*/

define(function () {
    'use strict';

    return function Model(defaultData) {
        var self = this;

        self.data = defaultData || [];

        self.addItem = function (name) {
            self.data.push(name);
            return self.data;
        };

        self.editItem = function (name, newName) {
            var i = self.data.indexOf(name);
            if (i !== -1) {
                self.data[i] = newName;
                return self.data;
            }

        };

        self.deleteItem = function (name) {
            var i = self.data.indexOf(name);
            if (i !== -1) {
                self.data.splice(i, 1);
                return self.data;
            }
        };
    };
});

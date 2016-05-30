/*global define:true*/

define(["jquery", "tmpl"], function ($, tmpl) {
    'use strict';

    return function View(appData) {
        var self = this,
            friendBoxScr = $('#friend-box'),
            friendsScr = $('#friends');

        self.init = function (appData) {
            $('body').append(tmpl(friendBoxScr.html()));
            self.friendsListEl = $('.fr-box__friends');

            self.elements = {
                addBtn: $('.fr-box__add-button'),
                listContainer: $('.fr-box__friends'),
                input: $('.fr-box__input')
            };

            self.updateFriends(appData);
        };

        self.updateFriends = function (appData) {
            var list = tmpl(friendsScr.html(), {data: appData});
            self.elements.listContainer.html(list);
        };

        self.init(appData);
    };
});

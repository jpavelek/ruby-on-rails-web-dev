(function () {
"use strict";

angular.module('common').service('UserPrefService', UserPrefService);

function UserPrefService() {
    var service = this;
    service.p = {};
    service.have_prefs = false;

    service.save = function(first, last, email, tel, dish) {
        service.have_prefs = true;
        service.p.first = first;
        service.p.last = last;
        service.p.email = email;
        service.p.tel = tel;
        service.p.dish = dish;
        return;
    };

    service.get = function() {
        if (service.have_prefs === true) {
            return service.p;
        } else {
            return null;
        }
    };
}



})();
    
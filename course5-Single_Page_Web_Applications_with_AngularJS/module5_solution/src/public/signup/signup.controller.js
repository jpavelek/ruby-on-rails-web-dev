(function() {
"use strict";

angular.module("public").controller("SignUpController", SignUpController);

SignUpController.$inject = ["MenuService", "UserPrefService"];
function SignUpController(MenuService, UserPrefService) {
    var $ctrl = this;
    $ctrl.favdish = "";
    $ctrl.favdish_valid = true;
    $ctrl.saved = false;

    $ctrl.validateFavourite = function() {
        MenuService.checkMenuItem($ctrl.favdish).then(function(response) {
            $ctrl.favdish_valid = true;
            UserPrefService.save($ctrl.firstname, $ctrl.lastname, $ctrl.email, $ctrl.telno, $ctrl.favdish);
            $ctrl.saved = true;
        }, function(error) {
            $ctrl.favdish_valid = false;
        });
    }
}

})();
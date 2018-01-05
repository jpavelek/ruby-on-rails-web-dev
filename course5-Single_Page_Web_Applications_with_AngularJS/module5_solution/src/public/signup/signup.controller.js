(function() {
"use strict";

angular.module("public").controller("SignUpController", SignUpController);SignUpController;

SignUpController.$inject = ["MenuService"];
function SignUpController(MenuService) {
    var $ctrl = this;
    $ctrl.favdish = "";
    $ctrl.favdish_valid = true;

    $ctrl.validateFavourite = function() {
        MenuService.checkMenuItem($ctrl.favdish).then(function(response) {
            $ctrl.favdish_valid = true;
        }, function(error) {
            $ctrl.favdish_valid = false;
        });
    }
}

})();
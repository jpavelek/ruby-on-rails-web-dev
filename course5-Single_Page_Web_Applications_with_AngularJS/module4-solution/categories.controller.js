(function(){
"use strict";

angular.module("data").controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ["menuitems"];
function CategoriesController(menuitems) {
    var ctrl = this;
    ctrl.menuitems = menuitems.data;
}

})();
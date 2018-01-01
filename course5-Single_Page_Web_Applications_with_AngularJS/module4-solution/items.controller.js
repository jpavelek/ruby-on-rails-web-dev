(function(){
    "use strict";
    
    angular.module("data").controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ["catitems"];
    function ItemsController(catitems) {
        var ctrl = this;
        ctrl.catitems = catitems.data;
    }
    
    })();
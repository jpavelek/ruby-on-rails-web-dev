(function() {
"use strict";

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService);

NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.text = "";
    ctrl.found = [];

    ctrl.clicked = function() {
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.text);

        promise.then(function (items) {
            //TODO - code to push populate UI comes here

        })
        .catch(function (error) {
            console.log(error);
        })
    }

}

MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
    var service = this;

    service.getListOfAllItems = function() {
        var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                });
        return response;
    }

    service.getMatchedMenuItems = function(searchTerm) {
        var promise = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        });
        return promise.then(function(result) {
            var foundItems =[];
            for (var item in result.data.menu_items) {
                if (result.data.menu_items[item].description.indexOf(searchTerm) != -1) {
                    foundItems.push( {
                        name: result.data.menu_items[item].name,
                        shortname: result.data.menu_items[item].shortname,
                        description: result.data.menu_items[item].description
                    });
                    //console.log("In service - found " + result.data.menu_items[item].name);
                }
            }
            return foundItems;
        });
    };
}

})();
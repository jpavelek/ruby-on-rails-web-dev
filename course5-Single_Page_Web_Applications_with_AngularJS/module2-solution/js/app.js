(function(){
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", BigJsShoppingService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.items = ShoppingListCheckOffService.getBuyItems();

    buy.removeItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
    };

}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();

}


function BigJsShoppingService() {
    var service = this;
    var toBuyItems = [ 
        {name: "cookies", quantity: 10}, 
        {name: "noodles", quantity: 3},
        {name: "beers", quantity: 5},
        {name: "crisps", quantity: 7},
        {name: "chips", quantity: 2},
        {name: "candies", quantity: 1}
    ];

    var boughtItems = [];

    service.getBuyItems = function() {
        return toBuyItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };

    service.buyItem = function(index) {
        boughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index, 1);
    };
}


})();
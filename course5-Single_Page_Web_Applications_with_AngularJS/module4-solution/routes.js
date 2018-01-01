(function() {
"use strict";

angular.module("MenuApp").config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("home", {
        url: '/',
        templateUrl: './home.template.html'
    });

    $stateProvider.state("categories", {
        url: "/categories",
        templateUrl: "./categories.template.html",
        controller: "CategoriesController as ctrlCat",
        resolve: {
            menuitems: ["MenuDataService", function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    });

    $stateProvider.state("items", {
        url:"/items/:cat",
        templateUrl: "./items.template.html",
        controller: "ItemsController as ctrlItems",
        resolve: {
            catitems: ["MenuDataService", "$stateParams", function(MenuDataService, $stateParams) {              
                return MenuDataService.getItemsForCategory($stateParams.cat);
            }]
        }
    });
}

})();
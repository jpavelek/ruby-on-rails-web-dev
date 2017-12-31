(function() {
'use strict';

angular.module("MenuApp", ["ui.router", "data"]);

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
        templateUrl: "TODO"
    });

}

})();
(function() {
    "use strict";

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){

        $scope.checkLunch = function(){
            if ($scope.dishes) {
                var strings = $scope.dishes.split(",");
                if (strings.length <= 3) {
                    $scope.lunch_message = "Enjoy!";
                } else {
                    $scope.lunch_message = "Too much!"
                }
            } else {
                $scope.lunch_message = "Please enter data first!";
            }
        };

    };

})();
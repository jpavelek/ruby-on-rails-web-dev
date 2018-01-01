(function() {
"user strict";

angular.module("data").component("items", {
    templateUrl : "items-main.template.html",
    bindings: {
        catitems: "<"
    }
});

})();
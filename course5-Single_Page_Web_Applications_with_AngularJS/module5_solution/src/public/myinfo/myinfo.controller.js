(function(){
"use strict";

angular.module("public").controller("MyInfoController", MyInfoController);

MyInfoController.$inject = ["UserPrefService", "MenuService", "ApiPath"];
function MyInfoController(UserPrefService, MenuService, ApiPath) {
    var ctrl = this;
    ctrl.basePath = ApiPath;
    ctrl.haveinfo = UserPrefService.get();

    if (ctrl.haveinfo) {
        MenuService.getMenuItem(ctrl.haveinfo.dish).then(function(response) {
            ctrl.menuItem = response.data;
        });
    }

}

})();
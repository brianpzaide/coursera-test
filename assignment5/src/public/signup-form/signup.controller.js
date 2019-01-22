(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var reg = this;

  reg.submit = function (itemNumber) {
    var promise = MenuService.getfavItem(itemNumber);
    promise.then(function(response){
      reg.user.FavoriteItem = response;
      //console.log(reg.user.FavoriteItem);
      reg.user.completed = true;
      MenuService.user = reg.user;
    })
   .catch(function (error) {
     MenuService.user = {};
     reg.user.completed = false;
     console.log("Something went terribly wrong.");
   });
 }
}
})();

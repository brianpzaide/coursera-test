(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['items'];
function MainCategoryListController(items) {
  var mainList = this;
  mainList.l_Data = items.data;
  //console.log ( mainList.l_Data);
  //let items = response.value.data;
  //*** Setting up the map (the key-value pair) to display the category name in items list.
  
  // for (var obj of mainList.l_Data){
  //   //console.log(obj);
  //   MenuDataService.myMap.set(obj.short_name, obj.name)
  // }
  //console.log(MenuDataService.myMap);
}

})();

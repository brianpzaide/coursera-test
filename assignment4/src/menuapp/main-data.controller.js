(function () {
'use strict';

angular.module('MenuApp')
.controller('MainDataListController', MainDataListController);


MainDataListController.$inject = ['MenuDataService','data'];
function MainDataListController(MenuDataService, data) {
  var dataList = this;
  //retrieving the name from the short_name from MenuDataService.myMap object.
  dataList.name = MenuDataService.myMap.get(MenuDataService.name);
  //console.log(data.data.menu_items);
  dataList.l_Data = data.data.menu_items;
  //console.log(dataList.l_Data);

}

})();

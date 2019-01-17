(function () {
'use strict';

angular.module('DataList')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http','ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  service.myMap = new Map();

  service.getAllCategories = function () {
    var response = $http({
      method: 'GET',
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    service.name = categoryShortName;
    //console.log(categoryShortName);
    var response = $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json"),
      params: {category: categoryShortName}
    });
    return response;
  };
}
}) ();

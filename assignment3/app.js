(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'index.html',
    scope: {
      found: '<',
      empty: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'dir_menu',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
  list.emptyList = function(){
    if (list.empty === 0 && list.found.length === 0){
      return true;
    }
    else{
      false;
    }
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.found = [];
  menu.empty = 1;
  menu.searchTerm = "";
  menu.findItems = function() {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found = response;
    })
    .catch(function (error) {
      menu.empty = 0;
      menu.found = [];
      console.log("Something went terribly wrong.");
    });
  }
  menu.removeItem = function(itemIndex){
    (menu.found).splice(itemIndex,1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerms) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response.then(function(result){
      if (searchTerms != ""){
        searchTerms = searchTerms.toLowerCase();
        var foundItems = result.data.menu_items;
        var matchedItems = [];
        for(let i=0 ; i < foundItems.length ; i++){
          if (foundItems[i].description.indexOf(searchTerms) != -1 ||
        (foundItems[i].name.toLowerCase()).indexOf(searchTerms) != -1){
            matchedItems.push(foundItems[i]);
          }
        }
        if (matchedItems.length !=0){
          return matchedItems;
        }
        else{
          throw new Error("Nothing found");
        }
      }
      else {
        throw new Error("Nothing found");
      }

    });
  };
}

})();

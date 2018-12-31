(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }

  itemAdder.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }

  itemAdder.empty = function (Items){
  	return (Items.length === 0) ? true : false
  }

  itemAdder.itemsToBuy = ShoppingListService.getItemsToBuy();
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var showAlreadyBoughtList = this;

  showAlreadyBoughtList.itemsBought = ShoppingListService.getItemsBought();

  showAlreadyBoughtList.empty = function (Items){
  	return (Items.length === 0) ? true : false
  }
  
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var a = {
  		name: "Cookies",
  		quantity: 25
  	};
  var b = {
  		name: "Donuts",
  		quantity: 20
  	};
  var c = {
  		name: "Peanut Butter",
  		quantity: 2
  	};
  var d = {
  		name: "Milk",
  		quantity: 2
  	};
  var e = {
  		name: "Orange Juice",
  		quantity: 1
  	};

  var itemsToBuy = [a,b,c,d,e];
  var itemsBought = [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
  };
   
  service.buyItem = function (itemIdex) {
  	var alpha = {
  		name: itemsToBuy[itemIdex].name,
  		quantity: itemsToBuy[itemIdex].quantity
  	};

  	itemsBought.push(alpha);
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
  	return itemsToBuy;
  };
  service.getItemsBought = function () {
  	return itemsBought;
  };
}

})();

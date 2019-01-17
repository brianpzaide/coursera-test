(function () {
'use strict';

angular.module('MenuApp')
.component("mycategoryList", {
  templateUrl: 'src/menuapp/templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

}) ();

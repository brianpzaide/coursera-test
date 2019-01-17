(function () {
'use strict';

angular.module('MenuApp')
.component("mycategoryList", {
  templateUrl: 'src/menuapp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

}) ();

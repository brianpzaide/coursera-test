(function () {
'use strict';

angular.module('DataList')
.component('myitemList', {
  templateUrl: 'src/menuapp/templates/itemlist.template.html',
  bindings: {
    data: '<'
  }

});

}) ();

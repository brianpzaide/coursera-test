(function () {
'use strict';

angular.module('Data')
.component('myitemList', {
  templateUrl: 'src/menuapp/templates/itemlist.template.html',
  bindings: {
    data: '<'
  }

});

}) ();

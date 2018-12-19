(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  function noSpaces(a) {
      return a != " ";
  }
  function noEmpties(a) {
    return a != "";
  }
  $scope.checkiftoomuch = function (){
    var lchars = $scope.items.split(',');
    for(let i=0; i < lchars.length; i++){
      let alpha = lchars[i].split(" ");
      let x= "";
      for(let j=0; j < alpha.length; j++){
        if(alpha[j]!=""){
        x += alpha[j];
      }
    }
    lchars[i] = x;
  }
  lchars = lchars.filter(noSpaces);
  lchars = lchars.filter(noEmpties);
  if (lchars.length > 3){
    $scope.Mychars = lchars;
    $scope.MyMessage = "Too much!";
    $scope.m_State = "g"
  }
  if (lchars.length === 0){
    $scope.Mychars = "No Proper Items";
    $scope.MyMessage = "Please enter data first";
    $scope.m_State = "r"
  }
  if(lchars.length > 0 && lchars.length <=3) {
    $scope.Mychars = lchars;
    $scope.MyMessage = "Enjoy!";
    $scope.m_State = "g"
  }
}
}
})();

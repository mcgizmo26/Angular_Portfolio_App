angular
  .module('app')
  .directive('backgroundImage', function(){
    return{
      restrict: 'E',
      replace: true,
      template: '<section class="backgroundImage"></section>'
    }
  })

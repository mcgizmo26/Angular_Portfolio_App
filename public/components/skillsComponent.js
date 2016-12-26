angular
  .module('app')
  .component('skillsComponent', {
    bindings: {
      name: "<",
      img: "<"
    },

    controller: function($scope, portfolioService){

      $scope.returnData = function(){
        $scope.icons = portfolioService.getIcons();
      }
      $scope.returnData();
    },

    template: [ '<section class="skills-wrapper">',
                   '<div class="skills-container">',
                     '<span class="skills-head-container">',
                       '<h2>Skills</h2>',
                     '</span>',
                     '<span class="skill-layout">',
                       '<ul class="icons-img-container" ng-repeat="skill in icons">',
                         '<img class="icons-style" ng-src={{skill.img}}></img>',
                       '</ul>',
                     '</span>',
                   '</div>',
                '</section>'
    ].join('')
  })

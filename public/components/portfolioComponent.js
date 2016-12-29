angular
  .module('app')
  .component('portfolioComponent', {

    bindings: {
      name: '<',
      img: '<',
      webAddress: '<',
      gitAddress: '<'
    },

    controller: function($scope, portfolioService){

      $scope.returnData = function(){
        $scope.projects = portfolioService.getProjectData();
        $scope.icons = portfolioService.getIcons();
        $scope.projectIcons = portfolioService.getProjectIcons();
      }
      $scope.returnData();
    },

    template: ['<section id="projects" class="portfolio-wrapper">',
                  '<div class="portfolio-container">',
                    '<span class="project-head">',
                      '<h2>Projects</h2>',
                    '</span>',
                    '<span class="projects" >',
                      '<div class="individual-project-container" ng-repeat="project in projects">',
                        '<span class="project-left">',
                          '<a href="{{project.webAddress}}"><img class="project-img" ng-src="{{project.img}}" alt=""></img></a>',
                          '<a class="git-link" ng-href={{project.gitAddress}}>Click to see the code</a>',
                        '</span>',
                        '<span class="project-right">',
                          '<h3>{{project.name}}</h3>',
                          '<p>{{project.description}}</p>',
                          '<div class="project-icon-container">',
                            '<ul ng-repeat="icon in project.projectSkills">',
                               '<li>',
                                 '<img class="project-icon-img" ng-src="{{icon.img}}" alt=""></img>',
                               '</li>',
                            '</ul>',
                          '</div>',
                        '</span>',
                      '</div>',
                    '</span>',
                   '</div>',
               '</section>'
             ].join('')
  })

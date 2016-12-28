angular
  .module('app')
  .component('headerComponent', {

    controller: function($scope, headerService){

      window.onscroll = function(){
        headerService.fixedHeaderStyle();
        headerService.headerLinkStyles();
      };

      $scope.goToId = function($event){
        headerService.linkScrolls($event);
      }

    },

    template: ['<header id="main-header">',
                 '<div class="header-left">',
                    '<h4 id="header-name" class="invisible">Lonnie McGill</h4>',
                 '</div>',
                 '<div class="header-right">',
                   '<span class="normal" id="about-link" ng-click="goToId($event)">About</span>',
                   '<span class="normal" id="projects-link" ng-click="goToId($event)">Projects</span>',
                   '<span class="normal" id="skills-link" ng-click="goToId($event)">Skills</span>',
                   '<span class="normal" id="contact-link" ng-click="goToId($event)">Contact</span>',
                 '</div>',
               '</header>'
            ].join('')
  })

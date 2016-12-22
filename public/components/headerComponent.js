angular
  .module('app')
  .component('headerComponent', {

    controller: function($scope){


      window.onscroll = function(){
        var hc = document.getElementById('main-header');
        var hlh4 = document.getElementById('header-name');

          if(window.pageYOffset > 830){
            hc.classList.add('scrolled');
            hlh4.classList.remove('invisible');
          }else{
            hc.classList.remove('scrolled');
            hlh4.classList.add('invisible');
          }
      };
    },

    template: ['<header id="main-header">',
                 '<div class="header-left">',
                    '<h4 id="header-name" class="invisible">Lonnie McGill</h4>',
                 '</div>',
                 '<div class="header-right">',
                   '<span>About</span>',
                   '<span>Skills</span>',
                   '<span>Portfolio</span>',
                   '<span>Contact</span>',
                 '</div>',
               '</header>'
            ].join('')
  })

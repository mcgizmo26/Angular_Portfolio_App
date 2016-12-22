angular
  .module('app')
  .directive('titleDirective', function(){
    return{
      restrict: 'E',
      replace: true,
      template: [ '<section class="title-wrapper">',
                    '<div class="title-container">',
                      '<h1>Lonnie McGill</h1>',
                      '<p>Web Developer</p>',
                    '</div>',
                  '</section>'
                ].join('')
    }
  })

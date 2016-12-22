angular
  .module('app')
  .component('foregroundComponent',{
      template: ['<div class="mainWrapper">',
                    '<header-component></header-component>',
                    '<title-directive></title-directive>',
                    '<about-component></about-component>',
                    '<portfolio-component></portfolio-component>',
                 '</div>'
                ].join('')

  })

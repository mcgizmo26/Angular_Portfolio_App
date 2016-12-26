angular
  .module('app')
  .component('foregroundComponent',{
      template: ['<div class="mainWrapper">',
                    '<header-component></header-component>',
                    '<title-component></title-component>',
                    '<about-component></about-component>',
                    '<portfolio-component></portfolio-component>',
                    '<skills-component></skills-component>',
                    '<contact-component></contact-component>',
                 '</div>'
                ].join('')

  })

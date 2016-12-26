angular
  .module('app')
  .component('contactComponent', {
    template:['<section class="contact-wrapper">',
                '<span class="contact-background"></span>',
                '<span class="contact-container">',
                  '<div class="contact-header">',
                     '<h2>Please Contact Me</h2>',
                  '</div>',
                  '<p class="contact-email">mcgizmo26@yahoo.com</p>',
                  '<div class="contact-buttons">',
                    '<button>Twitter</button>',
                    '<button>LinkedIn</button>',
                    '<button>GitHub</button>',
                  '</div>',
                '</span>',
              '</section>'
             ].join('')
  })

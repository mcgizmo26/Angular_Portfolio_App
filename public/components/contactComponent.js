angular
  .module('app')
  .component('contactComponent', {
    template:['<section id="contact" class="contact-wrapper">',
                '<span class="contact-background"></span>',
                '<span class="contact-container">',
                  '<div class="contact-header">',
                     '<h2>Please Contact Me</h2>',
                  '</div>',
                  '<p class="contact-email">mcgizmo26@yahoo.com</p>',
                  '<div class="contact-buttons">',
                    '<button type="button"><a href="https://twitter.com/26mcgizmo">Twitter</a></button>',
                    '<button type="button"><a href="https://www.linkedin.com/in/lonnie-mcgill-135b6a102">LinkedIn</button>',
                    '<button type="button"><a href="https://github.com/mcgizmo26">GitHub</button>',
                  '</div>',
                '</span>',
              '</section>'
             ].join('')
  })

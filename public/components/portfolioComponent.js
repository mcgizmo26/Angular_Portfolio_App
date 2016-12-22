angular
  .module('app')
  .component('portfolioComponent', {
    template:['<section class="portfolio-wrapper">',
                 '<div class="portfolio-container">',
                   '<span class="project-head">',
                     '<h2>Projects</h2>',
                   '</span>',
                   '<span class="projects">',
                     '<div class="project-names">',
                       '<h3></h3>',
                       '<li></li>',
                     '</div>',
                      '<div class="skills">',
                        '<li></li>',
                      '</div>',
                   '</span>',
                   '<span>',
                     '<li></li>',
                   '</span>',
                  '</div>',
              '</section>'
             ].join('')
  })

angular
  .module('app')
  .component('aboutComponent', {
    template: ['<section class="about-wrapper">',
                 '<div class="about-me-container">',
                   '<span id="profile-pic"></span>',
                   '<span class="about-text-container">',
                     '<h3>About Me</h3>',
                    '<p class="about-text-box">I enjoy coding, creating applications and problem solving. I view coding as a scientific art form in which I am able to both problem solve and create someone`s vision.</p>',
                   '</span>',
                 '</div>',
               '</section>'
              ].join('')
  })

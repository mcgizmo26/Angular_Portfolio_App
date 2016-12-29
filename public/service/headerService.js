angular
	.module('app')
	.service('headerService', function() {

		// ***************** Service Variables ************************

		var contactTrigger = document.getElementById('contact');
		var hc = document.getElementById('main-header');
		var aboutTrigger = document.getElementById('about');
		var hlh4 = document.getElementById('header-name');
    var linkId;
		var projectsTrigger = document.getElementById('projects');
		var skillsTrigger = document.getElementById('skills');

		// ***************** shared Function ****************
		var sharedFunction = function(placeHolder) {
			switch (placeHolder) {
				case "about-link":
					linkId = "about";
					break;
				case "projects-link":
					linkId = "projects";
					break;
				case "skills-link":
					linkId = "skills";
					break;
				case "contact-link":
					linkId = "contact";
					break;
        }
		}

		// ***************** fixedHeaderStyle Function ****************
		this.fixedHeaderStyle = function() {
			var wPY = window.pageYOffset;
			if (wPY >= aboutTrigger.offsetTop) {
				hc.classList.add('scrolled');
				hlh4.classList.remove('invisible');
			} else {
				hc.classList.remove('scrolled');
				hlh4.classList.add('invisible');
			}
		};

		// ***************** headerLinkStyles Function ****************
		this.headerLinkStyles = function() {
			var wPY = window.pageYOffset;

				if(wPY >= aboutTrigger.offsetTop && wPY < projectsTrigger.offsetTop) {
					document.getElementById('about-link').classList.add('highlighted');
          document.getElementById('projects-link').classList.remove('highlighted');
				} else if(wPY >= projectsTrigger.offsetTop && wPY < skillsTrigger.offsetTop){
					document.getElementById('projects-link').classList.add('highlighted');
          document.getElementById('about-link').classList.remove('highlighted');
          document.getElementById('skills-link').classList.remove('highlighted');
        } else if(wPY >= skillsTrigger.offsetTop && wPY < contactTrigger.offsetTop){
					document.getElementById('skills-link').classList.add('highlighted');
          document.getElementById('projects-link').classList.remove('highlighted');
          document.getElementById('contact-link').classList.remove('highlighted');
        }else if (wPY === contactTrigger.offsetTop) {
          document.getElementById('contact-link').classList.add('highlighted');
          document.getElementById('skills-link').classList.remove('highlighted');
        }else{
          document.getElementById('about-link').classList.remove('highlighted');
          document.getElementById('contact-link').classList.remove('highlighted');
        }
				};

		// ***************** linkScrolls Function *********************
		this.linkScrolls = function($event) {
			sharedFunction($event.target.id);
			document.getElementById(linkId).scrollIntoView();
		};

	})

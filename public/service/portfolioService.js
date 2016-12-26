angular
  .module('app')
  .service('portfolioService', function(){

    var projectsData = [

      {
        name: 'Financial App',
        img: '../img/financial.jpeg',
        description: 'This app simulates a financial sign-up process. Once the customer "applies", an employee may claim them and update their information.',
        webAddress: 'http://138.68.43.253/#/',
        gitAddress: 'https://github.com/mcgizmo26/Financialapp',
        projectSkills: ['Angular', 'CSS', 'Html', 'Mongo', 'Node']
      },

      {
        name: 'E-commerce App',
        img: '../img/ecommerce.jpeg',
        description: 'This application simulates an e-commerce site. The "customer" can add things to the cart (local storage), and at the time of purchase the order gets pushed to the back end.',
        webAddress: 'http://138.68.23.129/#/',
        gitAddress: 'https://github.com/mcgizmo26/Ecommerce-Site',
        projectSkills: ['Angular', 'CSS', 'Html', 'Node', 'PostgreSql']
      },

      {
        name: 'Fakebook App',
        img: '../img/fakebook.jpeg',
        description: 'Facebook Clone. Currently not hosted. View the code by clicking on the github link.',
        gitAddress: 'https://github.com/FakebookClone/Fakebook',
        projectSkills: ['Scss', 'ES6', 'JSX', 'Node', 'PostgreSql', 'React']
      },

    ];

    this.getProjectData = function(){
      return projectsData;
    }

    var skillsIcon = [

      {
        name: 'Angular',
        img: '../icons/angular-icon.jpeg'
      },

      {
        name: 'CSS',
        img: '../icons/css3-icon.jpeg'
      },

      {
        name: 'ES6',
        img: '../icons/es6-icon.jpeg'
      },

      {
        name: 'Html',
        img: '../icons/html5-icon.jpeg'
      },

      {
        name: 'JavaScript',
        img: '../icons/javascript-icon.jpeg'
      },

      {
        name: 'JSX',
        img: '../icons/jsx-icon.jpeg'
      },

      {
        name: 'Jquery',
        img: '../icons/jquery-icon.jpeg'
      },

      {
        name: 'Express',
        img: '../icons/express-icon.jpeg'
      },

      {
        name: 'Git',
        img: '../icons/git-icon.jpeg'
      },

      {
        name: 'Mongo',
        img: '../icons/mongodb-icon.jpeg'
      },

      {
        name: 'Node',
        img: '../icons/nodejs-icon.jpeg'
      },

      {
        name: 'PostgreSql',
        img: '../icons/postgresql-icon.jpeg'
      },

      {
        name: 'React',
        img: '../icons/reactjs-icon.jpeg'
      },

      {
        name: 'Scss',
        img: '../icons/scss-icon.jpeg'
      }

    ]

    this.getProjectIcons = function(){
      projectsData.forEach(function(obj){
        if(obj.projectSkills){
          var newObj = obj.projectSkills;
          for(var i = 0; i < newObj.length; i++){
            skillsIcon.forEach(function(obj2){
              if(obj2.name === newObj[i]){
                var index = newObj[i];
                if(index !== -1){
                  newObj[i] = obj2;
                }
              }
          })
        }
      }
    })
  }



    this.getIcons = function(){
      return skillsIcon;
    }

  })

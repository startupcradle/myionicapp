angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.cameraTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu2', {
    url: '/page7',
    templateUrl: 'templates/menu2.html',
    controller: 'menu2Ctrl'
  })

  .state('newsFeed', {
    url: '/page8',
    templateUrl: 'templates/newsFeed.html',
    controller: 'newsFeedCtrl'
  })

  .state('kanbanBoards', {
    url: '/page9',
    templateUrl: 'templates/kanbanBoards.html',
    controller: 'kanbanBoardsCtrl'
  })

  .state('teamChat', {
    url: '/page10',
    templateUrl: 'templates/teamChat.html',
    controller: 'teamChatCtrl'
  })

  .state('notesApp', {
    url: '/page11',
    templateUrl: 'templates/notesApp.html',
    controller: 'notesAppCtrl'
  })

  .state('businessPlans', {
    url: '/page12',
    templateUrl: 'templates/businessPlans.html',
    controller: 'businessPlansCtrl'
  })

  .state('page', {
    url: '/page13',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')


});
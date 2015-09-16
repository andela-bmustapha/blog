app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'toastrConfig', 'cfpLoadingBarProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, toastrConfig, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;
    $urlRouterProvider.otherwise('/');
    angular.extend(toastrConfig, {
      timeOut: 2000
    });

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: './app/components/home/home.client.view.html',
        controller: 'HomeCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: './app/components/about/about.client.view.html',
        controller: 'AboutCtrl'
      })
      
  }]);
'use strict';

angular.module('module.core', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {
  // Default view
  $urlRouterProvider.otherwise('/app/dash');

  // Routes
  $stateProvider.state('app', {
    url: '/app',
    component: 'main'
  });
});

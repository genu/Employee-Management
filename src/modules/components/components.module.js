'use strict';

angular.module('module.components', ['module.core']).config(function($stateProvider) {
  $stateProvider.state('app.dash', {
    url: '/dash',
    component: 'dash'
  });
});

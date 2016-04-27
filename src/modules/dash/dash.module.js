'use strict';

angular.module('module.dash', ['module.core']).config(function ($stateProvider) {
    $stateProvider.state('app.dash', {
        url: '/dash',
        templateUrl: 'modules/dash/views/dash.view.html',
        controller: 'DashCtrl as dash',
        resolve: {
            employees: function (EmployeeResource) {
                return EmployeeResource.read();
            }
        }
    })
});
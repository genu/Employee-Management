'use strict';

angular.module('module.core', [
    'ngAnimate', 'ngCookies',
    'ui.router', 'ui.bootstrap', 'ui.grid',
    'formly', 'formlyBootstrap',
    'toastr'
]).config(function ($urlRouterProvider, $stateProvider, toastrConfig) {
    // Default view
    $urlRouterProvider.otherwise('/app/dash');

    // Configure Toastr
    angular.extend(toastrConfig, {
        closeButton: true
    });
    // Routes
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'modules/core/views/layouts/app.layout.html',
            controller: function ($state, Dialog, Auth) {
                this.session = Auth.getSession();
                this.logout = function () {
                    Auth.logout().then(function () {
                        $state.go('login');
                    });
                }
            },
            controllerAs: 'app'
        })
        .state('login', {
            templateUrl: 'modules/core/views/login.html',
            controller: function ($state, Dialog, Auth) {
                this.session = Auth.getSession();
                this.login = function (password) {
                    Auth.login(password).then(function () {
                        $state.go('app.dash');
                    }).catch(function (error) {
                        Dialog.prompt(error);
                    })
                };
                this.logout = function () {
                    Auth.logout().then(function () {
                        $location.path('app.dash');
                        $state.go('app.dash');
                    });
                }
            },
            controllerAs: 'login'
        })
}).run(function ($rootScope, $cookieStore, $state, Dialog, Auth) {
    $rootScope.$on('$stateChangeStart', function (e, toState) {
        if (toState.name !== 'app') {
            if (toState.name !== 'login') {
                if (!Auth.isAuthenticated) {
                    $state.go('login');
                    e.preventDefault();
                }
            }
        }
    });
});
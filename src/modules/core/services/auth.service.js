'use strict';

angular.module('module.core').service('Auth', function ($rootScope, $q, $cookieStore) {
    var session;

    session = {
        name: 'John Doe',
        username: '_johndoe',
        token: undefined
    };

    session.token = $cookieStore.get('token');

    this.isAuthenticated = typeof session.token !== 'undefined';

    this.login = function (password) {
        // Hardcoded password for proof of concept
        if (password === 'cookieMonster') {
            $cookieStore.put('token', 'JWT_TOKEN');
            this.isAuthenticated = true;
            return $q.resolve();
        } else {
            return $q.reject('Incorrect password');
        }
    };

    this.getSession = function () {
        return session;
    };

    this.logout = function () {
        $cookieStore.remove('token');
        return $q.resolve(true);
    }
});

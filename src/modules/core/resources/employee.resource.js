'use strict';

angular.module('module.core').service('EmployeeResource', function ($q, $http) {
    this.create = function (employee) {
        return $q.resolve(true);
    };

    this.read = function () {
        var deferred = $q.defer();

        $http.get('modules/core/mocks/employees.json').then(function (employees) {
            deferred.resolve(employees.data);
        }).catch(function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    this.update = function (employee) {
        return $q.resolve(true);
    };

    this.delete = function (employee) {
        return $q.resolve(true);
    };
});

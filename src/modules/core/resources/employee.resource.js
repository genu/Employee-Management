'use strict';

angular.module('module.core').service('EmployeeResource', function($q, $http) {
  this.read = function() {
    var deferred = $q.defer();

    $http
      .get('src/modules/core/mocks/employees.json')
      .then(function(employees) {
        deferred.resolve(employees.data);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

    return deferred.promise;
  };
});

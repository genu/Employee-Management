'use strict';

angular.module('module.core').service('Dialog', function ($q) {
    this.confirm = function (title, options) {
        var _options, sweet_options, deferred;

        _options = options || {};
        sweet_options = {
            title: title,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yes"
        };

        sweet_options.closeOnConfirm = !options.showPostComfirm;
        deferred = $q.defer();

        swal(sweet_options, function (isConfirm) {
            if (isConfirm) {
                if (_options.showPostComfirm) {
                    swal(_options.postComfirmMessage, '', 'success');
                }
                deferred.resolve();
            } else {
                deferred.reject();
            }
        });

        return deferred.promise;
    };

    this.prompt = function (title, options) {
        var _options, sweet_options, deferred;

        deferred = $q.defer();
        _options = options || {};

        sweet_options = {
            title: title
        };

        angular.extend(sweet_options, options);

        swal(sweet_options, function (inputValue) {
            if (inputValue === false)
                deferred.reject(inputValue);
            else
                deferred.resolve(inputValue);
        });

        return deferred.promise;
    }
});
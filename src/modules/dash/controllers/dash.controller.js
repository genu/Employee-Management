'use strict';

angular.module('module.dash').controller('DashCtrl', function ($scope, toastr, Dialog, $uibModal, EmployeeResource, employees) {
    var vm = this;

    this.data = employees;

    this.gridOptions = {
        data: employees,
        enableColumnMenus: false,
        columnDefs: [{
            name: 'name'
        }, {
            name: 'jobTitle'
        }, {
            name: 'tenure',
            maxWidth: 70,
            type: 'number',
            cellTemplate: '<div class="text-center">{{row.entity.tenure}}</div>'
        }, {
            name: 'gender',
            maxWidth: 75,
            cellTemplate: '' +
            '<div class="text-center" style="padding: 6px;">' +
            '   <span class="fa fa-male text-primary" ng-if="row.entity.gender === \'Male\'"></span>' +
            '   <span class="fa fa-female text-danger" ng-if="row.entity.gender === \'Female\'"></span>' +
            '</div>'
        }, {
            name: 'edit',
            cellClass: 'cellTooltip',
            displayName: '',
            enableSorting: false,
            maxWidth: 60,
            cellTemplate: '' +
            '<div class="text-center" style="padding: 6px;">' +
            '   <a href="" tooltip-class="tooltip-uigrid-offset" tooltip-append-to-body="true" uib-tooltip="Edit" ng-click="grid.appScope.dash.editEmployee(row.entity)"><i class="fa fa-pencil-square-o"></i></a>&nbsp;' +
            '   <a href="" tooltip-class="tooltip-uigrid-offset" tooltip-append-to-body="true" uib-tooltip="Delete" ng-click="grid.appScope.dash.deleteEmployee(row.entity)"><i class="fa fa-trash-o"></i></a>' +
            '</div>'
        }]
    };

    this.deleteEmployee = function (employee) {
        Dialog.confirm('Are you sure you want to delete ' + employee.name + '?', {
            showPostComfirm: true,
            postComfirmMessage: 'Employee deleted!'
        }).then(function () {
            var index = vm.data.indexOf(employee);
            vm.data.splice(index, 1)
        });
    };

    this.editEmployee = function (employee) {
        $uibModal.open({
            templateUrl: 'modules/dash/views/modals/editEmployee.modal.html',
            controller: 'editEmployeeModalCtrl as edit',
            keyboard: false,
            backdrop: 'static',
            resolve: {
                employee: function () {
                    return angular.copy(employee);
                }
            }
        }).result.then(function (edited_employee) {
            // Distinguish between an edit or a new record
            if (typeof employee === 'undefined') {
                EmployeeResource.create(edited_employee).then(function () {
                    vm.data.push(edited_employee);
                    toastr.success(edited_employee.name + ' was added', 'Success!');
                })
            } else {
                EmployeeResource.delete(edited_employee).then(function () {
                    angular.extend(employee, edited_employee);
                    toastr.info(edited_employee.name + ' was saved', 'Success!');
                });
            }
        });
    }
});
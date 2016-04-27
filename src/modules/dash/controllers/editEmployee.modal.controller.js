angular.module('module.dash').controller('editEmployeeModalCtrl', function ($uibModalInstance, Dialog, employee) {
    var vm = this;

    this.isNew = typeof employee === 'undefined';
    this.employee = employee;
    this.formOptions = {};
    this.fields = [{
        key: 'name',
        type: 'input',
        templateOptions: {
            required: true,
            label: "Name",
            placeholder: "Enter full name"
        }
    }, {
        key: 'jobTitle',
        type: 'select',
        templateOptions: {
            required: true,
            label: "Job Title",
            options: [{
                name: "CEO",
                value: "CEO"
            }, {
                name: "Developer",
                value: "Developer"
            }, {
                name: "QA",
                value: "QA"
            }, {
                name: "Marketing Specialist",
                value: "Marketing Specialist"
            }, {
                name: "CFO",
                value: "CFO"
            }]
        }
    }, {
        key: 'tenure',
        type: 'input',
        templateOptions: {
            required: true,
            label: "Tenure",
            placeholder: "Tenure"
        }
    }, {
        key: 'gender',
        type: 'radio',
        templateOptions: {
            required: true,
            label: "Gender",
            options: [{
                name: 'male',
                value: 'Male'
            }, {
                name: 'female',
                value: 'Female'
            }],
            placeholder: "Enter Employee Name"
        }
    }];

    this.dismiss = function () {
        if (this.employeeForm.$dirty) {
            Dialog.confirm("Are you sure you want discard your changes", {
                showPostComfirm: false
            }).then(function () {
                $uibModalInstance.dismiss();
            });
        } else {
            $uibModalInstance.dismiss();
        }
    };

    this.save = function (employee) {
        $uibModalInstance.close(employee);
    }
});
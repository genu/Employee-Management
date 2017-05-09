angular.module('module.components').component('dash', {
  templateUrl: 'src/modules/components/dash/dash.view.html',
  controller: function(EmployeeResource) {
    var _this = this;

    EmployeeResource.read().then(function(data) {
      _this.data = data;
    });
  }
});

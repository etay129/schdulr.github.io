app.controller('ExportCtrl', ['$scope', function($scope) {
  $scope.pageClass = 'page-export';

  $scope.visitEvents = function() {
    window.location='#events'
  };
}])

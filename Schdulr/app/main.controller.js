app.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.pageClass = 'page-home';

  $scope.visitEvents = function() {
    window.location='#events'
  };

}])

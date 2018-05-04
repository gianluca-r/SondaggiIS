SondaggiIS.controller('LoginCtrl', function($scope, $location, LoginService) {

  if (LoginService.isLoggedIn()) $location.path('/');

  $scope.formData={};
  $scope.error='';

  $scope.login=function() {
    LoginService.login($scope.formData).then(function(response) {
      $location.path('/');
    }).catch(function(err) {
      $scope.error=err.data;
    });
  }
});
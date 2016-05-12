angular.module('flickr', ['ngRoute', 'flickrServices']).config(flickrRouter);

function flickrRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'modal/displayModal.html',
            controller: function($scope){
            }
        })
        .when('/:id', {
            templateUrl: 'modal/displayModal.html',
            reloadOnSearch: true,
            controller: function($scope, $routeParams, $location) {
                $scope.setCurrentPhoto($routeParams.id);
                if(!$scope.currentPhoto || $scope.loading) {
                    $location.path('/');
                    return;
                }
                $scope.openModal();
            }
        })
}
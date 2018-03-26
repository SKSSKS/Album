function AlbumCtrl($scope, $http)
{
    $scope.url = "images.json";
    $scope.images = [];
    $scope.imageCategories = [];
    $scope.currentImage = {};

    $scope.handleImagesLoaded = function(data,status)
    {
        $scope.images = data;
        $scope.currentImage = _.first($scope.images);
        $scope.imageCategories = _.uniq(_.pluck($scope.images,"category"));
    }

    $scope.fetch = function()
    {
        $http.get($scope.url).success($scope.handleImagesLoaded);
    }

    
    $scope.setCurrentImage = function(image)
    {
        $scope.currentImage = image;
    }

    $scope.fetch();
}


















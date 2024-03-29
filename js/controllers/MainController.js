// Inyeccion de dependencias
// Se inyecta el servicio en el contralador: 'photoSearchService'
function MainController($scope, photoSearchService)
{

    /*
    $scope.photos = [
        { title: 'Photo 1', thumbUrl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains1.jpg' },
        { title: 'Photo 2', thumbURl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains2.jpg'},
        { title: 'Photo 3', thumbUrl: '//googledrive.com/host/0Bz6MIjSA3u5MSDNwcmNDYWVOdms/images/mountains3.jpg' }
    ];
    */

    $scope.submitSearch = function () {

        $scope.photos = [];

        var keyword = $scope.searchKeyword;
        photoSearchService.findPhotos(keyword, function (photos) {
            $scope.photos = photos;
        });
    }

    $scope.thumbSize = 'small';

    $scope.setThumbSize = function (size) {
        $scope.thumbSize = size;
    }
    

}
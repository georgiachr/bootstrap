/**
 * Created by nstyladmin on 4/11/2015.
 */
myApp
    .controller('FileCtrl',['$scope','Upload', function($scope,Upload){

        $scope.userToken = "ausertokenhere";
        $scope.userRole = "Administrator";
        $scope.acceptSelect = true;

        // upload on file select or drop
        $scope.upload = function (files) {

            /*
            var names = [];
            for (var i = file.length - 1; i >= 0; i--)
                names.push(files[i].name);

            if(files)
                if(files.length > 1)
                    console.log('files: '+files.length);
                else
                    console.log('single file');
               */

            Upload.upload({
                url: 'file/upload',
                headers: {"X-Auth-Token":  $scope.userToken},
                data: {role: $scope.userRole},
                file: files
            }).then(function onSuccess (resp) {
                console.log('Success');
            },function onError (resp) {
                console.log('Error status: ' + resp.status);
            }, function onEvent (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('File Progress: ');// + progressPercentage + '% ' + evt.config.data.file.name);
            });

        };

}]);
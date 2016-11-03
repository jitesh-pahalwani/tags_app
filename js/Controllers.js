var tagsApp = angular.module('tagsApp', ['ngRoute']);

tagsApp.controller('tagsAppCtrl', function($scope, $location, $timeout) {

    $scope.errorVar = false;
    $scope.tagsArray = ["foo", "bar"];
    $scope.removeTag = function(event) {
        var tagContent = event.currentTarget.parentElement.outerText.slice(0, -1);
        var index = $scope.tagsArray.indexOf(tagContent);
        $scope.tagsArray.splice(index, 1);
    }
    $scope.addNewTag = function(event) {
        if ($scope.newTagInput) {
            if (event.keyCode === 13) {
                if($scope.tagsArray.indexOf($scope.newTagInput) === -1){
                    $scope.tagsArray.push($scope.newTagInput);
                    $scope.newTagInput = "";
                }
                else{
                    $scope.errorVar = true;
                    $timeout(function () {
                        $scope.errorVar = false;
                    }, 2000);
                }
            }
        }
    }

});
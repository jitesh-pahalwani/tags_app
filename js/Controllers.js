var tagsApp = angular.module('tagsApp', ['ngRoute']);

tagsApp.controller('tagsAppCtrl', function($scope,$location){
      $scope.myClick = function(){
        alert("angular is working");
      }

      $scope.tagsArray = ["foo","bar"];
      $scope.removeTag = function(event){
        var tagContent = event.currentTarget.parentElement.outerText.slice(0,-1);
        var index = $scope.tagsArray.indexOf(tagContent);
        $scope.tagsArray.splice(index, 1);
      }
      $scope.addNewTag = function(event){
        if($scope.newTagInput){
        if(event.keyCode === 13){
          $scope.tagsArray.push($scope.newTagInput);
          $scope.newTagInput = "";
        }
      }
      }

        }
                );
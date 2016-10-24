//********FOR ROUTING**************
tagsApp.config(['$routeProvider',function($routeProvider) {
             $routeProvider.when('/page1', {
                          templateUrl: 'html/Home1.html',
                           controller: 'tagsAppCtrl'
                       }).otherwise({
                            redirectTo: '/page1'
                            });
                  }]);

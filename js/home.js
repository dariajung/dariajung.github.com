// home.js

var splashApp = angular.module('splashApp', ['splashApp.services']);

// Routes

splashApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider

        .when('/home', {
            pageTitle: 'Home',
            templateUrl : 'templates/home.html',
            controller  : 'splashController'
        })

        // route for the about page
        .when('/about', {
            pageTitle: 'About',
            templateUrl : 'templates/about.html',
            controller  : 'splashController'
        })

        // route for the about page
        .when('/portfolio', {
            pageTitle: 'Portfolio',
            templateUrl : 'templates/portfolio.html',
            controller  : 'splashController'
        })

        // route for the social page
        .when('/contact', {
            pageTitle: 'Contact',
            templateUrl : 'templates/contact.html',
            controller  : 'splashController'
        })
        .otherwise({ redirectTo: '/home' });
    }
]);

splashApp.controller('splashController', function($scope, $window, aboutMap) {
    $scope.projects = aboutMap.get('projects');
    $scope.about = aboutMap.get('about');
    $scope.mobileNavCollapsed = true;

    $scope.toggleMobile = function() {
        $scope.mobileNavCollapsed = !$scope.mobileNavCollapsed;
    };
});

splashApp.controller('titleController', function($scope, $route, $log) {
    $scope.$on('$routeChangeSuccess', function() {
        $scope.pageTitle = $route.current.pageTitle;
    });
});
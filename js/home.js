// home.js

var splashApp = angular.module('splashApp', []);

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

splashApp.controller('splashController', function($scope, $window) {
    $scope.message = "Hello, World!";
    $scope.projects = projects;
    $scope.about = about;
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

// Map

var projects = [
    {
        name: "Tea Plus Milk",
        url: "http://teaplusmilk.com"
    },
    {
        name: "Excuseti.me",
        url: "http://excuseti.me"
    },
    {
        name: "Learn",
        url: "http://learn.adicu.com"
    },
    {
        name: "Tekstflyt",
        url: "http://zencephalon.com:4567/"
    },
    {
        name: "FourSynth",
        url: "http://github.com/dariajung/hackny-s13"
    },
    {
        name: "Instagramophone",
        url: "https://github.com/dinalamdany/instagramophone"
    },
    {
        name: "have my babies",
        url: "http://havemybabieshackny.herokuapp.com/"
    },
    {
        name: "ncnyt",
        url: "https://github.com/ChimeraCoder/ncnyt"
    }
];

var about = [
    {
        desc: "A Columbia University Student (taking some time off)",
        url: "http://columbia.edu",
        divClass: "columbia"
    },
    {
        desc: "A cat lover",
        url: "http://teaplusmilk.com/jekyll/update/2013/10/14/fostering-kitkat.html",
        divClass: "kitkat"
    },
    {
        desc: "A Software Engineering Intern at Thinkful",
        url: "http://thinkful.com",
        divClass: "tf"
    },
    {
        desc: "A former member of the Application Development Initiative",
        url: "http://adicu.com",
        divClass: "adicu"
    },
    {
        desc: "A former Contract Web Developer at Olivers Apparel",
        url: "http://oliversapparel.com/",
        divClass: "olivers"
    },
    {
        desc: "A former Contract Web Developer at Unlimited Ltd. Clothing",
        url: "http://unlimitedltdclothing.com/",
        divClass: "unlimited"
    },
    {
        desc: "A former Full-stack Developer at Bloglovin'",
        url: "http://bloglovin.com",
        divClass: "bloglovin"
    },
    {
        desc: "a hackNY alumNY - class of 2013",
        url: "http://hackny.org/a/2013/06/hackny-announces-the-class-of-2013-hackny-fellows/",
        divClass: "hackny"
    }
];


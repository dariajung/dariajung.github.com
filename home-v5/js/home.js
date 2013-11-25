// home.js

var splashApp = angular.module('splashApp', []);

// Routes

splashApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider

        .when('/home', {
            templateUrl : 'templates/home.html',
            controller  : 'splashController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'splashController'
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'templates/projects.html',
            controller  : 'splashController'
        })

        // route for the social page
        .when('/social', {
            templateUrl : 'templates/social.html',
            controller  : 'splashController'
        })
        .otherwise({ redirectTo: '/home' });
    }
]);

splashApp.controller('splashController', function($scope) {
    $scope.message = "Hello, World!";
    $scope.projects = projects;
    $scope.about = about;
});

// Map

var projects = [
    {
        name: "Thinkful",
        url: "http://thinkful.com",
        img: "",
        value: 1
    },
    {
        name: "Tea Plus Milk",
        url: "http://teaplusmilk.com",
        img: "",
        value: 2
    },
    {
        name: "Excuseti.me",
        url: "http://excuseti.me",
        img: "",
        value: 3
    },
    {
        name: "Learn",
        url: "http://learn.adicu.com",
        img: "",
        value: 4
    },
    {
        name: "Tekstflyt",
        url: "http://zencephalon.com:4567/",
        img: "",
        value: 5
    },
    {
        name: "Bloglovin",
        url: "http://bloglovin.com",
        img: "",
        value: 6
    },
    {
        name: "hackNY",
        url: "http://hackNY.org",
        img: "",
        value: 7
    },
    {
        name: "FourSynth",
        url: "http://github.com/dariajung/hackny-s13",
        img: "",
        value: 8
    },
    {
        name: "Instagramophone",
        url: "https://github.com/dinalamdany/instagramophone",
        img: "",
        value: 9
    },
    {
        name: "have my babies",
        url: "http://havemybabieshackny.herokuapp.com/",
        img: "",
        value: 10
    },
    {
        name: "ncnyt",
        url: "https://github.com/ChimeraCoder/ncnyt",
        img: "",
        value: 11
    }
];

var about = [
    {
        desc: "Columbia University Student (taking some time off)",
        url: ""
    },
    {
        desc: "Software Engineering Intern at Thinkful",
        url: "http://thinkful.com"
    },
    {
        desc: "Former member of the Application Development Initiative",
        url: "http://adicu.com"
    },
    {
        desc: "Former Contract Web Developer at Olivers Apparel",
        url: "http://oliversapparel.com/"
    },
    {
        desc: "Former Contract Web Developer at Unlimited Ltd. Clothing",
        url: "http://unlimitedltdclothing.com/"
    },
    {
        desc: "Former Full-stack Developer at Bloglovin'",
        url: "http://bloglovin.com"
    },
    {
        desc: "hackNY Fellow class of 2013",
        url: "http://hackny.org/a/2013/06/hackny-announces-the-class-of-2013-hackny-fellows/"
    }
];


var services = angular.module('splashApp.services', []);

services.factory('aboutMap', function() {

    var maps = {
        projects: [
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
            },
            {
                name: "bloom",
                url: "https://github.com/dariajung/bloom"
            },
            {
                name: "Bootcamp Finder (via Thinkful)",
                url: "http://www.thinkful.com/bootcamps/"
            },
            {
                name: "Infographic (via Thinkful)",
                url: "http://www.thinkful.com/bootcamps/infographic"
            }
        ],
        about: [
            {
                desc: "Girlfriend of Matt.",
                url: "http://zencephalon.com",
                divClass: "bean"
            },
            {
                desc: "A Columbia University Student (taking some time off)",
                url: "http://columbia.edu",
                divClass: "columbia"
            }, {
                desc: "A student at Hacker School (focusing on Haskell)",
                url: "http://hackerschool.com",
                divClass: "hackerschool"
            },
            {
                desc: "A cat lover",
                url: "http://teaplusmilk.com/jekyll/update/2013/10/14/fostering-kitkat.html",
                divClass: "kitkat"
            },
            {
                desc: "A yoga practitioner at Sacred Sounds Yoga",
                url: "http://sacredsoundsyoga.com/",
                divClass: "yoga"
            },
            {
                desc: "A former contract Web Developer at Sailthru",
                url: "http://www.sailthru.com/",
                divClass: "sailthru"
            },
            {
                desc: "A former Software Engineering Intern at Thinkful",
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
        ]
    };

    return {
        get: function(type) {
            return maps[type];
        }
    };
});

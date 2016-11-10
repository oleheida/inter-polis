var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "content/main-content.html",
        })
        .when("/form", {
            templateUrl : "content/form.html"
        })
        .when("/news", {
            templateUrl : "content/news.html",
        });
});

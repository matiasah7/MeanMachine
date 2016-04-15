angular.module('routerApp', ['routerRoutes', 'ngAnimate'])
.controller('mainController', function() {
    this.bigMessage = 'A smooth sea never made a skilled sailor.';
})
.controller('homeController', function() {
	this.message = 'This is the home page!';
})
.controller('aboutController', function() {
    this.message = 'Look! I am an about page.';
})
.controller('contactController', function() {
    this.message = 'Contact us! JK. This is just a demo.';
});

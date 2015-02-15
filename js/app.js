var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngCookies', 'pascalprecht.translate']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/page_1');

	$stateProvider
	.state('page_1', {
		url: '/page_1',
		templateUrl: 'views/page_1.html',
		resolve: {
			delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1500);
				return delay.promise;
			}
		}
	})
	.state('page_2', {
		url: '/page_2',
		templateUrl: 'views/page_2.html',
		resolve: {
			delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1500);
				return delay.promise;
			}
		}
	});
});

app.config(['$translateProvider', function($translateProvider) {
		$translateProvider
			.useStaticFilesLoader({
				prefix: 'locales/locale-',
				suffix: '.json'
			})
			.fallbackLanguage('en')
			.preferredLanguage('en')
			.useLocalStorage();
}]);

app.controller('translateController', ['$translate', '$scope', function($translate, $scope) {
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};
}]);

app.directive('loadingIcon', function($rootScope, $timeout, $state) {

	return {
		restrict: 'E',
		replace: true,
		template: '<div class="modal"><div><div><span class="loader"><i class="fa fa-spinner fa-spin fa-4x"></i></span></div></div></div>',
		link: function(scope, element) {

			$rootScope.$on('$stateChangeStart', function() {
				$timeout(function() {
					element.removeClass('ng-hide');
				});
			});

			$rootScope.$on('$stateChangeSuccess', function() {
				element.addClass('ng-hide');
			});
		}
	};
});
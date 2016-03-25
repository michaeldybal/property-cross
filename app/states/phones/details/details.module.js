module.exports = angular.module('app.states.phones.details', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('phones.details', {
                url: '/details/{id:[0-9,a-z,-]+}',
                views: {
                    'container@': {
                        template: require('./details.html'),
                        controller: 'DetailsController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'details',
                        text: 'Read details'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./details.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })

    }]);

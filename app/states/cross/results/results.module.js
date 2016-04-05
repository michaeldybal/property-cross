module.exports = angular.module('app.states.cross.results', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('cross.results', {
                url: '/results/{id:[0-9,a-z,-_—]+}',
                views: {
                    'container@': {
                        template: require('./results.html'),
                        controller: 'ResultsController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'results',
                        text: 'Read results'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./results.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })

    }]);

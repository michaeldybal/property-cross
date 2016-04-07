module.exports = angular.module('app.states.cross.results', [

    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('cross.results', {
                url: '/results?query&page',
                data: {
                    route: {
                        name: 'results',
                        text: 'Search Results'
                    }
                },
                views: {
                    'container@': {
                        template: require('./results.html'),
                        controller: 'ResultsController as ctrl'
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

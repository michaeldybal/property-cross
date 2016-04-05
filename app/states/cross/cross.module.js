module.exports = angular.module('cross', [
        require('./search-flats/search-flats.module.js').name,
        require('./details/details.module.js').name,
        require('./results/results.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('cross', {
                abstract: true,
                url: "/cross",
                data: {
                    route: {
                        name: 'cross',
                        text: "Cross"
                    }
                }
            })
        }
    ]);


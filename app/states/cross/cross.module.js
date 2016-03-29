
module.exports = angular.module('cross', [
        require('./search-flats/search-flats.module.js').name
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
    ])


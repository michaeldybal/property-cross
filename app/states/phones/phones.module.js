
module.exports = angular.module('app.states.phones', [
        require('./search-phones/search-phones.module.js').name,
        require('./details/details.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('phones', {
                abstract: true,
                url: "/phones",
                data: {
                    route: {
                        name: 'phones',
                        text: "Phones"
                    }
                }
            })
        }
    ])


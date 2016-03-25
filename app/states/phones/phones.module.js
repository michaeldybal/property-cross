
module.exports = angular.module('app.states.phones', [
        require('./search/search-phones.module.js').name,
        require('./article/article.module.js').name
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


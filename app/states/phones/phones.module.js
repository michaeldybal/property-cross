
module.exports = angular.module('app.states.phone', [
        require('./search/phones.module.js').name
    ])

// not worked. need fixes
 /*
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
*/
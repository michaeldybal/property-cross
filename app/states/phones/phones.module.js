'use strict';

module.exports = angular.module('app.phones', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('phones', {
            url: '/phones',
            views: {
                'container@': {
                    template: require('./phones.page.html')
                }
            },
            data: {
                route: {
                    name: 'phones',
                    text: 'Phones'
                }
            }
        });
    }])
    .controller('PhonesController', require('./phones.controller.js'));
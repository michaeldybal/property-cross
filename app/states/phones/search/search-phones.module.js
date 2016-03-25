'use strict';

module.exports = angular.module('app.phones.search-phones', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('phones.search-phones', {
            url: '/search-phones',
            views: {
                'container@': {
                    template: require('./search-phones.page.html')
                }
            },
            data: {
                route: {
                    name: 'search-phones',
                    text: 'Phones'
                }
            }
        });
    }])
    .controller('PhonesController', require('./search-phones.controller.js'));
'use strict';

module.exports = angular.module('app.states.cross.search-flats', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('cross.search-flats', {
            url: '/search-flats',
            views: {
                'container@': {
                    template: require('./search-flats.page.html')
                }
            },
            data: {
                route: {
                    name: 'search-flats',
                    text: 'Plats'
                }
            }
        });
    }])
    .controller('FlatsController', require('./search-flats.controller.js'));
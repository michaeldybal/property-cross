module.exports = angular
    .module('app.states.search-flats.quicksearch', [])
    .component('searchflats', {
        template: require('./quicksearch.html'),
        controller: require('./quicksearch.controller.js')
    });
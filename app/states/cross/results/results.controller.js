require('./results.less');

var config = require('app.config'),
    _ = require('underscore');

resultsController.$inject = ['$scope', 'api', '$stateParams'];

function resultsController($scope, api, $stateParams) {
    var self = this;

    self.text=$stateParams.id;

    api.getFlats('&place_name='+self.text).then(function(data){
            var countFlats = data.data.response.total_results || 0;

            api.savesSearchFlats.push({text: self.text, count: countFlats});

        self.flats = data.data.response;
    });
}

module.exports = resultsController;



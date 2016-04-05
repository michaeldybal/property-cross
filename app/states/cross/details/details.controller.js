require('./details.less');

var config = require('app.config'),
    _ = require('underscore');

detailsController.$inject = ['$scope', 'api', '$stateParams'];

function detailsController($scope, api, $stateParams) {
    var self = this;

    self.text=$stateParams.id;

    api.getFlats('&guid='+self.text).then(function(data){
        var countFlats = data.data.response.total_results || 0;

        api.savesSearchFlats.push({text: self.text, count: countFlats});

        self.flats = data.data.response;
    });

}

module.exports = detailsController;



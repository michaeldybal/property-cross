require('./details.less');

var config = require('app.config'),
    _ = require('underscore');

detailsController.$inject = ['$scope', 'api', '$stateParams'];

function detailsController($scope, api, $stateParams) {

    var self = this;

    api.getPhones().then(function(response){
        var phonesList = response.data;
        self.phone = _.find(phonesList, function(phone){ return phone.id == $stateParams.id });
    })

}

module.exports = detailsController;

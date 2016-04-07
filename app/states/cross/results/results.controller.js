require('./results.less');

resultsController.$inject = ['$scope', 'api', '$stateParams','$state'];

function resultsController($scope, api, $stateParams, $state) {
    var self = this;

    self.text=$stateParams.query;
    self.currentPage =  $stateParams.page || 1;

    self.numPerPage = 5;
    self.maxSize = 5;

    self.numPages = 2;

    api.getFlats('&place_name='+self.text+'&page='+self.currentPage).then(function(data){
        self.countFlats = data.data.response.total_results || 0;
        if(self.countFlats >1000){
            self.countFlats=1000;
        }
        api.savesSearchFlats.push({text: self.text, count: self.countFlats});
        self.flats = data.data.response;
    });
}

module.exports = resultsController;



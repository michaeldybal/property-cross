require('./results.less');

resultsController.$inject = ['$scope', 'api', '$stateParams'];

function resultsController($scope, api, $stateParams) {
    var self = this;

    self.text=$stateParams.id;

    self.currentPage =  1;
    self.numPerPage = 5;
    self.maxSize = 5;

    self.makePage = function(page) {
        api.getFlats('&place_name='+self.text+'&page='+self.currentPage).then(function(data){
            self.countFlats = data.data.response.total_results || 0;
            api.savesSearchFlats.push({text: self.text, count: self.countFlats});
            self.flats = data.data.response;
        });
    };

    self.makePage(self.currentPage);

    self.clickPage = function(){
        self.makePage(self.currentPage);
    }
}

module.exports = resultsController;



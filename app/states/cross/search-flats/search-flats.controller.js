require('./search-flats.less');

flatsController.$inject = ['$location','api'];
function flatsController($location,api) {
    var self = this;

    self.saves = api.savesSearchFlats;

    self.clickGoButton = function () {
        $location.path('/cross/results/'+self.text);
    };
}
module.exports = flatsController;

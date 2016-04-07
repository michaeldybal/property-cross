require('./search-flats.less');

flatsController.$inject = ['$location','api'];

function flatsController($location,api) {
    var self = this;
    self.saves = api.savesSearchFlats;
}

module.exports = flatsController;

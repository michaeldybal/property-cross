require('./search-flats.less');

flatsController.$inject = ['api'];
function flatsController(api) {
    var self = this;

    api.getFlats().then(function(data){
        self.flats = data.data.response.listings;
    })
}

module.exports = flatsController;



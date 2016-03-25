require('./search-phones.less');

phonesController.$inject = ['api'];
function phonesController(api ) {
    var self = this;

    api.getPhones().then(function(response){
        self.phones = response.data;
    })
}

module.exports = phonesController;



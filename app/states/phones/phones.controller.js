require('./phones.less');

phonesController.$inject = ['session'];
function phonesController(session) {

    this.getUserFullName = function() {
        return session.getUserFullName();
    };

}

module.exports = phonesController;
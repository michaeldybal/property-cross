require('./quicksearch.less');

var config = require('app.config'),
    _ = require('underscore');

searchController.$inject = ['$state', '$scope', 'api'];

function searchController($state, $scope, api) {
    var self = this;

    var preventLookHead = false;

    this.preventClose = false;
    this.expanded = false;
    this.disabled = false;

    this.onKeyUp = onKeyUp;
    this.onKeyDown = onKeyDown;
    this.onMouseOver = onMouseOver;
    this.onMouseLeave = onMouseLeave;
    this.queryClear = queryClear;

    this.search = search;

    (function init(self) {


        $scope.$on('clickanywhere',  function (){
            if (self.expanded && !self.preventClose){
                self.expanded = false;
                $scope.$apply();
            }
            self.preventClose = false;
        });
    })(self);

    function onKeyUp (e) {
        var query = self.form.query.trim();
        var activeLookHead;

        if(e.keyCode == '13') {
            e.preventDefault();
            self.search();
        }
    }

    function onKeyDown(e) {
    }

    function onMouseOver(lookhead) {
    }

    function onMouseLeave() {
    }

    function queryClear() {
        self.form.query = null;
    }

    function search() {
        if (self.form.query ) {
            self.expanded = false;
            $state.go('cross.results', {
                query: self.form.query,
                page: 1
            });
        }
    }

}

module.exports = searchController;

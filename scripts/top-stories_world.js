new Vue({
    el: '#vue',

    data: function() {
        someData: []
    },

    ready: function() {
        this.$http.get('http://api.nytimes.com/svc/topstories/v1/world.json?api-key=219d5d7680fadf603432a69e4e6fc867:6:73933976').then(function(response) {
            	this.$set('someData', response.data)
        	}
        );
    }
});
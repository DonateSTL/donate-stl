export default Ember.Controller.extend({
    actions: {
        query: function() {
            var query = this.get('search');
            window.console.log(query);
            this.transitionToRoute('search/:test');
        }
    }
});


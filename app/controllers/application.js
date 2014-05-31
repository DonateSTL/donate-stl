export default Ember.Controller.extend({
    user: Ember.Object.create(),

    actions: {
        query: function() {
            var query = this.get('search');
            this.transitionToRoute('search', query);
        }
    }
});


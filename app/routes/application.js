export default Ember.Route.extend({
    actions: {
        search: function(searchQuery) {
            // TODO: Don't make assumptions.
            // Assuming that if it's one letter long they're not coming from search.
            if (searchQuery.length > 1) {
                this.replaceWith('search', searchQuery);
            }
            else {
                this.transitionTo('search', searchQuery);
            }
        }
    }
});


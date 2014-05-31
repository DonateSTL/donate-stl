export default Ember.Controller.extend({
    searchQuery: '',
    searchQueryChanged: Ember.observer('searchQuery', function() {
        if (this.get('searchQuery') === '') {
            this.transitionToRoute('index');
        }
        else {
            this.send('search', this.get('searchQuery'));
        }
    }),
    actions: {
        query: function() {
            var query = this.get('search');
            this.transitionToRoute('search', query);
        }
    }
});


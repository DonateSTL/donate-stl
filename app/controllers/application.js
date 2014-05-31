export default Ember.Controller.extend({
    user: Ember.Object.create(),
    searchQuery: '',
    searchQueryChanged: Ember.observer('searchQuery', function() {
        if (this.get('searchQuery') === '') { 
            this.transitionToRoute('index');
        }
        else {
            this.send('search', this.get('searchQuery'));
        }
    })
});


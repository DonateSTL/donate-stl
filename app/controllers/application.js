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
    }),
    isMenuOpen: false,
    actions: {
    	toggleMenu: function() {
            this.toggleProperty("isMenuOpen");
    	},
        toggleSearch: function() {
            this.toggleProperty("isSearchOpen");
        },
        query: function() {
            var query = this.get('search');
            this.transitionToRoute('search', query);
        }
    }
});




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
        },
        login: function(email, password) {
            var auth = this.get('auth');
            email = email || this.get('email');
            password = password || this.get('password');

            return auth.login(email, password);
        },
        logout: function() {
            this.get('auth').logout();
        }
    }
});




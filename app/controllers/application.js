export default Ember.Controller.extend({
    user: Ember.Object.create(),
    isMenuOpen: false,
    actions: {
    	toggleMenu: function() {
    		this.toggleProperty("isMenuOpen");
    	},
        query: function() {
            var query = this.get('search');
            this.transitionToRoute('search', query);
        }
    }
});




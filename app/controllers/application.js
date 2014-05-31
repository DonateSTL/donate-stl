export default Ember.Controller.extend({
    user: Ember.Object.create(),
    isMenuOpen: false,
    actions: {
    	toggleMenu: function() {
    		this.toggleProperty("isMenuOpen");
    	}
    }
});


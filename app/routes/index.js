export default Ember.Route.extend({
    beforeModel: function() {
        var user = this.controllerFor('application').get('user');
        if (user.get('isLoggedIn') && user.get('hasCharity')) {
            return this.transitionTo('dashboard');
        }
        else {
            return this.transitionTo('charities');
        }
    }
});

export default Ember.Route.extend({
    beforeModel: function() {
        var auth = this.get('auth');
        if (auth && auth.get('currentUser.hasCharity')) {
            return this.transitionTo('dashboard');
        }
        else {
            return this.transitionTo('charities');
        }
    }
});

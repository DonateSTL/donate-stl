var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.route('dashboard');
    this.resource('charities', function() {
        this.resource('charity', { path: ':charity_id' }, function() {
            this.route('edit');
            this.resource('solicitations', function() {
                this.resource('solicitation', { path: ':solicitation_id' });
            });
        });
    });
    this.resource('users', function() {
        this.route('new');
        this.resource('user', { path: ':user_id' }, function() {
            this.route('edit');
        });
    });
    this.route('search', { path: '/search/:search_query' });
});

export default Router;

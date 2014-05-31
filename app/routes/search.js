export default Ember.Route.extend({
    model: function(params) {
        return params['search_query'];
    },
    setupController: function(controller, model) {
        controller.set('searchQuery', model);
        this.get('store').find('solicitation').then(function(solicitations){
            controller.set('content', solicitations);
        });
    }
});

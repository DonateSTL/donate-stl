export default Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('searchquery', model.query);
        this.get('store').find('solicitation').then(function(solicitations){
            controller.set('content', solicitations);
        })
    }
});
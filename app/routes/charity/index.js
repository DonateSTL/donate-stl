export default Ember.Route.extend({
    model: function() {
        return this.modelFor('charity');
    },
    afterModel: function() {
        return this.replaceWith('solicitations.index');
    }
});


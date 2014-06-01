export default Ember.Route.extend({
    model: function() {
        return this.get('store').createRecord('charity');
    },
    actions: {
        create: function() {
            this.get('currentModel').save().then(function(charity) {
                this.transitionTo('charity.edit', charity);
            }.bind(this));
        }
    }
});

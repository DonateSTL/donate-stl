export default Ember.Route.extend({
    actions: {
        save: function() {
            this.get('currentModel').save();
        }
    }
});

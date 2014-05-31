export default Ember.Controller.extend({
    filterContent: Ember.computed.filterBy('content', 'title', 'searchquery')
});
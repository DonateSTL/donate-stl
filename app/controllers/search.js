export default Ember.Controller.extend({
    needs: ['application'],
    searchQuery: Ember.computed.alias('controllers.application.searchQuery'),
    filteredContent: Ember.arrayComputed('content', 'searchQuery', {
        addedItem: function(accValue, item) {
            var reg = new RegExp(this.get('searchQuery'), 'ig');
            if (reg.test(item.get('title'))) {
                accValue.addObject(item);
            }
            return accValue;
        },
        removedItem: function(accValue, item) {
            accValue.removeObject(item);
            return accValue;
        }
    })
});

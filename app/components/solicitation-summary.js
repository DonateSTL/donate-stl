export default Ember.Component.extend({
    // TODO: Use Ember StateManager https://github.com/emberjs/ember-states
    isDonating: false,
    isGiving: false,
    hasGiven: false,
    hasRequestedContact: false,
    isSponsoring: false,
    hasSponsored: false,
    isBuying: false,
    hasBought: false,
    cancelText: Ember.computed('hasGiven', 'hasSponsored', 'hasBought', function() {
        var hasFinished = this.get('hasGiven') || this.get('hasSponsored') || this.get('hasBought');
        return hasFinished ? 'Done' : 'Cancel';
    }),
    actions: {
        cancel: function() {
            this.setProperties({
                isDonating: false,
                isGiving: false,
                hasGiven: false,
                hasRequestedContact: false,
                isSponsoring: false,
                hasSponsored: false,
                isBuying: false,
                hasBought: false
            });
        },
        donate: function() {
            this.set('isDonating', true);
        },
        give: function() {
            this.set('isGiving', true);
        },
        commit: function() {
            this.set('hasGiven', true);
        },
        contact: function() {
            this.set('hasRequestedContact', true);
        },
        sponsor: function() {
            this.set('isSponsoring', true);
        },
        paypal: function(amount) {
            this.set('hasSponsored', true);
            window.alert('TODO: Redirect to PayPal to donate $' + amount);
        },
        buy: function() {
            this.set('isBuying', true);
            this.set('hasBought', true);
            window.open(this.get('solicitation.amazonUrl'));
        }
    }
});


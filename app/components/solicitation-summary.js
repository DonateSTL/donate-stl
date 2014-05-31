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
        paypal: function() {
            this.set('hasSponsored', true);

            this.get('solicitation.charity').then(function() {
                var link = 'https://www.paypal.com/cgi-bin/webscr' +
                    '?cmd=_donations' +
                    '&business=' + encodeURIComponent(this.get('solicitation.charity.paypalEmail')) +
                    '&lc=US' +
                    '&item_name=' + encodeURIComponent(this.get('solicitation.title') + ' for ' + this.get('solicitation.charity.title')) +
                    '&amount=' + this.get('solicitation.value') +
                    '&currency_code=USD' +
                    '&no_note=0' +
                    '&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest'
                ;
                window.open(link);
            }.bind(this));
        },
        buy: function() {
            this.set('isBuying', true);
            this.set('hasBought', true);
            window.open(this.get('solicitation.amazonUrl'));
        }
    }
});


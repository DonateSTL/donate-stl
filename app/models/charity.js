var Charity = DS.Model.extend({
    // Properties
    title: DS.attr('string', { defaultValue: '' }),
    description: DS.attr('string', { defaultValue: '' }),
    imageUrl: DS.attr('string', { defaultValue: '' }),
    isApproved: DS.attr('boolean', { defaultValue: false }),
    phoneNumber: DS.attr('string', { defaultValue: '' }),
    address: DS.attr('string', { defaultValue: '' }),
    websiteUrl: DS.attr('string', { defaultValue: '' }),
    paypalEmail: DS.attr('string', { defaultValue: '' }),
    // Relationships
    administrator: DS.belongsTo('user', { async: true }),
    solicitations: DS.hasMany('solicitation', { async: true }),
    // Computed Properties
    featuredSolicitation: Ember.computed('solicitations.@each', function() {
        return this.get('solicitations.firstObject');
    })
});

export default Charity;


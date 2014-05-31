export default DS.Model.extend({
    // Properties
    email: DS.attr('string'),
    phoneNumber: DS.attr('string'),

    // Relationships
    charities: DS.hasMany('charity'),
    sentMessages: DS.hasMany('message', { inverse: 'sender' }),
    receivedMessages: DS.hasMany('message', { inverse: 'recipient' })
});


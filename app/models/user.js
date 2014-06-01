export default DS.Model.extend({
    // Properties
    email: DS.attr('string'),
    phoneNumber: DS.attr('string'),

    // Relationships
    charities: DS.hasMany('charity', { async: true }),
    sentMessages: DS.hasMany('message', { inverse: 'sender', async: true }),
    receivedMessages: DS.hasMany('message', { inverse: 'recipient', async: true })
});


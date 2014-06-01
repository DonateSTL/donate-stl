export default DS.Model.extend({
    // Properties
    body: DS.attr('string'),

    // Relationships
    sender: DS.belongsTo('user', { async: true }),
    recipient: DS.belongsTo('user', { async: true }),
    solicitation: DS.belongsTo('solicitation', { async: true }),
    parentMessage: DS.belongsTo('message', { inverse: 'reply', async: true }),
    reply: DS.belongsTo('message', { inverse: 'parentMessage', async: true })
});


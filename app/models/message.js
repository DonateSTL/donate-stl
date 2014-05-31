export default DS.Model.extend({
    // Properties
    body: DS.attr('string'),

    // Relationships
    sender: DS.belongsTo('user'),
    recipient: DS.belongsTo('user'),
    solicitation: DS.belongsTo('solicitation'),
    parentMessage: DS.belongsTo('message', { inverse: 'reply' }),
    reply: DS.belongsTo('message', { inverse: 'parentMessage' })
});


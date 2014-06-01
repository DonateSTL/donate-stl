var Solicitation = DS.Model.extend({
    // Properties
    title: DS.attr('string', { defaultValue: '' }),
    description: DS.attr('string', { defaultValue: '' }),
    imageUrl: DS.attr('string', { defaultValue: '' }),
    value: DS.attr('string', { defaultValue: '' }),
    amazonUrl: DS.attr('string', { defaultValue: '' }),
    isOpen: DS.attr('boolean', { defaultValue: true }),
    createDate: DS.attr('date', { defaultValue: '' }),
    updateDate: DS.attr('date', { defaultValue: '' }),
    priority: DS.attr('number', { defaultValue: 0 }),
    // Relationships
    charity: DS.belongsTo('charity', { async: true })
});

export default Solicitation;


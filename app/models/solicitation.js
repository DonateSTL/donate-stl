export default DS.Model.extend({
    // Properties
    title: DS.attr('string'),
    description: DS.attr('string'),
    imageUrl: DS.attr('string'),
    value: DS.attr('string'),
    amazonUrl: DS.attr('string'),
    isOpen: DS.attr('boolean'),
    createDate: DS.attr('date'),
    updateDate: DS.attr('date'),
    // Relationships
    charity: DS.belongsTo('charity')
});


export default DS.Model.extend({
    // Properties
    title: DS.attr('string'),
    description: DS.attr('string'),
    imageUrl: DS.attr('string'),
    isApproved: DS.attr('boolean'),
    phoneNumber: DS.attr('string'),
    address: DS.attr('string'),
    websiteUrl: DS.attr('string'),
    // Relationships
    administrator: DS.belongsTo('user'),
    solicitations: DS.hasMany('solicitation')
});


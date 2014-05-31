var Charity = DS.Model.extend({
    // Properties
    title: DS.attr('string'),
    description: DS.attr('string'),
    imageUrl: DS.attr('string'),
    isApproved: DS.attr('boolean'),
    phoneNumber: DS.attr('string'),
    address: DS.attr('string'),
    websiteUrl: DS.attr('string'),
    // Relationships
    administrator: DS.belongsTo('user', { async: true }),
    solicitations: DS.hasMany('solicitation', { async: true }),
    // Computed Properties
    featuredSolicitation: Ember.computed('solicitations.@each', function() {
        return this.get('solicitations.firstObject');
    })
});

Charity.reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: 'Stray Rescue',
            description: 'Stray Rescue\'s sole purpose is to rescue stray animals in need of medical attention, restore them to health, and place them in loving adoptive homes. Virtually all of the pets we save have been abused and neglected. They\'ve been dumped on highways, or remote country roads. Abandoned in public parks, empty houses and dark alleys. We\'ve even saved dogs left chained behind buildings after their owners had moved away.\n Rescued animals often make the best pets. As a no-kill organization, pets from Stray Rescue seem to understand that they have a second lease on life. In return for a little affection and attention, these remarkable animals reward their new owners with a love and loyalty unmatched anywhere.',
            imageUrl: 'http://strayrescue.org/themes/strayrescue/images/logo.png',
            isApproved: true,
            phoneNumber: '314-771-6121',
            address: '2320 Pine St\nSt. Louis, MO 63103-2219',
            websiteUrl: 'http://strayrescue.org/',
            administrator: null,
            solicitations: [10]
        },
        {
            id: 2,
            title: '3 Little Birds 4 Life',
            description: 'Chances are that you’ve heard the captivating and peaceful lyrics from Bob Marley’s “3 Little Birds” sometime in your life – “Don’t worry about a thing ‘cause every little thing gonna be all right.” This song was the very essence of Guy “Tyler” Gifford, brother of our founder, Ashley Swip. Tyler had a unique way of making each and every person around him smile, laugh, and remember that everything would be all right, no matter what. When Tyler passed away November 2, 2010, the words from “3 Little Birds” were placed on his prayer card, and through his life, his caring nature, loving heart, and this song, 3 Little Birds 4 Life came to be.',
            imageUrl: 'http://3littlebirds4life.org/wp-content/uploads/2014/04/birdsLogo.png',
            isApproved: true,
            phoneNumber: '1-888-370-8885',
            address: 'P.O. Box 187 Collinsville\nIL 62234',
            websiteUrl: 'http://3littlebirds4life.org/',
            administrator: null,
            solicitations: []
        },
    ]
});

export default Charity;


import FirebaseAuth from 'donate-stl/utils/firebase-auth';

export default {
    name: 'firebaseAuth',
    initialize: function(container, application) {
        application.register('auth:firebase', FirebaseAuth);
        container.lookup('auth:firebase');
    }
};

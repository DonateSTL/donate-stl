export default {
    name: 'firebaseAuthInjection',
    before: 'firebaseAuth',
    initialize: function(container, application) {
        // Inject Firebase Auth into things
        application.inject('controller', 'auth', 'auth:firebase');
        application.inject('route', 'auth', 'auth:firebase');
        application.inject('component', 'auth', 'auth:firebase');
    }
};


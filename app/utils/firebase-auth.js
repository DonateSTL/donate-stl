/*global FirebaseSimpleLogin*/
import dbRef from 'donate-stl/utils/firebase';
// Credit to Ray Tiley
// https://gist.github.com/raytiley/8976037
export default Ember.Object.extend({
    init: function() {
        this._super();

        var authRef = new FirebaseSimpleLogin(dbRef, function(error, user) {
            if (error) { // Error
                if (error.code === 'INVALID_USER') {
                    this._signUp().then(function() {
                        this.login();
                    }.bind(this));
                }
                else {
                    Ember.Logger.error(error);
                    this.set('currentUser', null);
                }
            }
            else if (user) { // User logged in
                this.get('container').lookup('store:main').find('user', user.id).then(function(user) {
                    this.set('currentUser', user);
                }.bind(this));
            }
            else { // User logged out
                this.set('currentUser', null);
            }
        }.bind(this));
        this.set('authRef', authRef);
    },
    currentUser: null,
    /**
     * Login or register
     * @param email
     * @param password
     */
    login: function(email, password) {
        if (email) { this.set('email', email); }
        if (password) { this.set('password', password); }
        this.get('authRef').login('password', { email: this.get('email'), password: this.get('password') });
    },
    logout: function() {
        this.get('authRef').logout();
    },
    _signUp: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            this.get('authRef').createUser(this.get('email'), this.get('password'), function(error, user) {
                if (error) {
                    Ember.Logger.error(error);
                    reject(error);
                }
                else {
                    resolve(this.get('container').lookup('store:main').createRecord('user', {
                        id: user.id,
                        email: user.email
                    }).save());
                }
            }.bind(this));
        }.bind(this));
    }
});


/*global Firebase*/
export default DS.FirebaseAdapter.extend({
      firebase: new Firebase('https://donate-stl.firebaseio.com')
});


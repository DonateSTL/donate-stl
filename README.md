donate-stl
==========

National Civic Day of Hacking St. Louis 2014

## Contributing

This project is built in [Ember.js](http://emberjs.com/) using
the [Ember CLI](http://iamstef.net/ember-cli/). The project
layout follows the standard [Ember CLI naming
conventions](http://iamstef.net/ember-cli/#naming-conventions).

To build/run the code:

1. Install node.js and npm
2. `npm install phantomjs -g`
3. `npm install -g ember-cli bower`
4. `git clone` the repository and `cd` into it
5. `npm install && bower install`
4. `ember serve`
5. Visit [http://0.0.0.0:4200/](http://0.0.0.0:4200/)

To deploy to Firebase:

1. Be added as a developer to the Firebase app
2. `npm install -g firebase-tools`
3. `ember build --environment="production" && firebase deploy`


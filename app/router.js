import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('store', function() {
    this.route('consumer');
    this.route('commercial');
  });
  this.route('contact');
});

export default Router;

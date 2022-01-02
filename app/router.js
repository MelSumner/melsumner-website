import EmberRouter from '@ember/routing/router';
import config from 'melsumner-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('resume');
  this.route('talks');
});

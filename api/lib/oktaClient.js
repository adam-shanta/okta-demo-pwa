const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: '{oktaOrg}',
  token: '{token}'
});

module.exports = client;
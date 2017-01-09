var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.post('/', function(req, res, next) {
  if (req.body.email) {
      console.log(req.body.email);
    request.post({
        url: 'https://'+ process.env.SLACK_URL + '/api/users.admin.invite',
        form: {
          email: req.body.email,
          token: process.env.SLACK_TOKEN,
          set_active: true
        }
      }, function(err, httpResponse, body) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        body = JSON.parse(body);
        if (body.ok) {
          return res.status(200).json({
            community: process.env.COMMUNITY_NAME,
            message: 'Success! Check \''+ req.body.email +'\' for an invite from Slack.'
          });
        } else {
          var error = body.error;
          if (error === 'already_invited' || error === 'already_in_team') {
            return res.status(200).json({
              community: process.env.COMMUNITY_NAME,
              message: 'You have already been invited.',
              redirect: true,
            });
          } else if (error === 'invalid_email') {
            error = 'The email you entered is an invalid email.';
          } else if (error === 'invalid_auth') {
            error = 'Something has gone wrong. Please contact a system administrator.';
          }
          return res.status(401).json ({
            community: process.env.COMMUNITY_NAME,
            message: 'Failed! ' + error,
          });
        }
      });
  } else {
      console.log(req.body.email);
      return res.status(401).json({
        tile: "Invite failed",
        error: "Some Error",
      })
  }
});

module.exports = router;

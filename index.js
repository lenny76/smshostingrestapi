var request = require('request');
var querystring = require('querystring');

var auth_key = 'xxxxxxxxxxxxxx';
var auth_secret = 'xxxxxxxxxxxxxxx';
var urlapi = 'https://api.smshosting.it/rest/api/sms/send';

var messaggio = 'Hello world';
var phonenumber = 'xxxxxxxxxxxxxxxxxx';

var formData = querystring.stringify(form);
var contentLength = formData.length;

var form = {
    //    from: '393337933176',
    to: phonenumber,
    text: messaggio
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

request({
    headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
        user: auth_key,
        password: auth_secret
    },
    uri: 'https://api.smshosting.it/rest/api/sms/send',
    body: formData,
    method: 'POST'
}, function (err, res, body) {
    var r = JSON.parse(res.body);
    if (r.smsNotInserted == 1) {
        console.log('sms non inviato');
    }
    if (r.smsInserted == 1) {
        console.log('sms inviato');
    }
});
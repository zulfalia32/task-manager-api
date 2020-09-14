var http = require("https");
 
const sendWelcomeEmail = (email, name) => {
 
//build-in code 
var options = {
  "method": "POST",
  "hostname": "api.pepipost.com",
  "port": null,
  "path": "/v5/mail/send",
  "headers": {
    "api_key": process.env.PEPIPOST_API_KEY,          
    "content-type": "application/json"
  }
};
 
var req = http.request(options, function (res) {
  var chunks = [];
 
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
 
  res.on("end", function () {
    var body = Buffer.concat(chunks);
   console.log(body.toString());
  });
});
 
 
req.write(JSON.stringify({
    from: {email: 'zulfikarali99@pepisandbox.com', name: 'zulfikarali99'},
    subject: 'Thanks for joining in!',
    content: [{type: 'html', value: 'Welcome to to the app ' + name +' . Let me know how you get along with the app.'}],
    personalizations: [{to: [{email: email, name: name}]}]
}));
 
  req.end();
 
}

//sendWelcomeEmail('zulfikarali99@yahoo.com', 'Zulfikar')
 
const sendCancellationEmail = (email, name) => {
 
  //build-in code 
  var options = {
    "method": "POST",
    "hostname": "api.pepipost.com",
    "port": null,
    "path": "/v5/mail/send",
    "headers": {
      "api_key": process.env.PEPIPOST_API_KEY,          
      "content-type": "application/json"
    }
  };
   
  var req = http.request(options, function (res) {
    var chunks = [];
   
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
   
    res.on("end", function () {
      var body = Buffer.concat(chunks);
     console.log(body.toString());
    });
  });
   
   
  req.write(JSON.stringify({
      from: {email: 'zulfikarali99@pepisandbox.com', name: 'zulfikarali99'},
      subject: 'Sucessfully Cancelled!',
      content: [{type: 'html', value: 'Hi ' + name +' . Sorry to let you go, please let us know how we can improve to retain you in the future.'}],
      personalizations: [{to: [{email: email, name: name}]}]
  }));
   
    req.end();
   
}

//sendCancellationEmail ('zulfikarali99@yahoo.com', 'Zulfikar')

module.exports = {         
    sendWelcomeEmail,
    sendCancellationEmail
}
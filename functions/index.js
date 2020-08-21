const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const sgMail = require("@sendgrid/mail");

exports.sendEmail = functions.https.onRequest((request, response) => {
  sgMail.setApiKey(functions.config().sendgrid.key);
  const msg = {
    to: "dziedzic.kdz@gmail.com",
    from: "dziedzic.k@hotmail.com",
    subject: "Message from contact form",
    text: `From ${request.body.name} (${request.body.email}) 
    Message: ${request.body.message}`,
  };

  cors(request, response, () => {
    sgMail.send(msg, (err, res) => {
      if (err) {
        response.sendStatus(500);
        console.log(err);
      } else {
        response.send(res);
      }
    });
  });
});

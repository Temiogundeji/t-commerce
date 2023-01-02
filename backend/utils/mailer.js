const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: "bc7a0b55487789574ef73188802149a4-48d7d97c-802b487a",
});

module.exports = async function sendHtml(emails = [], subject = "", body = ``) {
  const formData = require("form-data");
  const Mailgun = require("mailgun.js");
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: "bc7a0b55487789574ef73188802149a4-48d7d97c-802b487a",
  });
  mg.messages
    .create("sandboxe9b41d08d6164569b8d7a858e47ad3fc.mailgun.org", {
      from: "Mailgun Sandbox <postmaster@sandboxe9b41d08d6164569b8d7a858e47ad3fc.mailgun.org>",
      to: ["yusuffogundeji@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error`;

  // You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

  // You can send up to 300 emails/day from this sandbox server.
  // Next, you should add your own domain so you can send 10000 emails/month for free.
  // emails = Array.isArray(emails) ? emails : emails.split(",");
  // console.log("Sending email to - ", emails, " with subject ", subject);
  // return body.includes("<title>")
  //   ? mg.messages.create(MAILGUN_DOMAIN, {
  //       from: '"TCommerce" <yusuffogundeji@gmail.com>',
  //       to: [...emails],
  //       subject,
  //       html: body,
  //     })
  //   : mg.messages.create(process.env.MAILGUN_DOMAIN, {
  //       from: '"TCommerce" <yusuffogundeji@gmail.com>',
  //       to: [...emails],
  //       subject,
  //       text: body,
  //     });
};
module.exports.mg = mg;

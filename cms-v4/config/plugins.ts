export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("MAIL_HOST", "smtp.mailgun.org"),
        port: env.int("MAIL_PORT", 587),
        auth: {
          user: env("MAIL_USERNAME"),
          pass: env("MAIL_PASSWORD")
        },
        secure: env("MAIL_ENCRYPTION", "tls").toLowerCase() === "ssl",
        requireTLS: env("MAIL_ENCRYPTION", "tls").toLowerCase() === "tls"
      },
      settings: {
        defaultFrom: env("MAIL_FROM_ADDRESS", "postmaster@cloudmlmdemo.com"),
        defaultReplyTo: env("MAIL_REPLY_TO", env("MAIL_FROM_ADDRESS", "postmaster@cloudmlmdemo.com")),
        defaultName: env("MAIL_FROM_NAME", "Cloud MLM Software")
      }
    }
  }
});

import nodemailer from "nodemailer";

const CONTACT_EMAIL = "contact@averon-partners.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP not configured — skipping email notification");
    return false;
  }

  await transporter.sendMail({
    from: `"Averon Partners Website" <${process.env.SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New inquiry from ${data.name}${data.company ? ` — ${data.company}` : ""}`,
    text: [
      `New contact form submission from averon-partners.com`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${data.company || "N/A"}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <p style="margin: 0 0 8px; color: #666; font-size: 13px;">Message:</p>
          <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    `,
  });

  return true;
}

export async function sendBookingNotification(data: {
  name: string;
  email: string;
  company: string;
  date: string;
  time: string;
}) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP not configured — skipping email notification");
    return false;
  }

  await transporter.sendMail({
    from: `"Averon Partners Website" <${process.env.SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Meeting Request — ${data.name}${data.company ? ` (${data.company})` : ""}`,
    text: [
      `New meeting booking from averon-partners.com`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      `Preferred Date: ${data.date}`,
      `Preferred Time: ${data.time} (CET)`,
      ``,
      `Please confirm or suggest an alternative time.`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Meeting Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${data.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0; font-weight: 600;">${data.date}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Time</td><td style="padding: 8px 0; font-weight: 600;">${data.time} (CET)</td></tr>
        </table>
        <p style="margin-top: 16px; color: #666;">Please confirm or suggest an alternative time.</p>
      </div>
    `,
  });

  return true;
}

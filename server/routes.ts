import type { Express, Request, Response } from "express";
import type { Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
const emailPort = Number(process.env.EMAIL_PORT || "465");
const emailSecure = process.env.EMAIL_SECURE
  ? process.env.EMAIL_SECURE === "true"
  : emailPort === 465;
const emailFrom = process.env.EMAIL_FROM || emailUser;
const emailTo = process.env.EMAIL_TO || "info@tceassocs.com";

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: emailPort,
  secure: emailSecure,
  auth: emailUser && emailPass ? { user: emailUser, pass: emailPass } : undefined,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req: Request, res: Response) => {
    if (!emailUser || !emailPass) {
      return res.status(500).json({
        message:
          "Email service is not configured. Please set EMAIL_USER and EMAIL_PASS in .env.",
      });
    }

    const { name, email, subject, message } = req.body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        message: "Please provide name, email address and message.",
      });
    }

    const mailSubject = subject?.trim()
      ? `Contact Form: ${subject.trim()}`
      : `Contact Form Submission from ${name.trim()}`;

    const mailText = `Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject?.trim() || "-"}

Message:
${message.trim()}`;

    const mailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name.trim()}</p>
      <p><strong>Email:</strong> ${email.trim()}</p>
      <p><strong>Subject:</strong> ${subject?.trim() || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.trim().replace(/\n/g, "<br />")}</p>
    `;

    try {
      await transporter.sendMail({
        from: emailFrom,
        to: emailTo,
        replyTo: email.trim(),
        subject: mailSubject,
        text: mailText,
        html: mailHtml,
      });

      return res.status(200).json({ message: "Message sent successfully." });
    } catch (error: any) {
      console.error("Failed to send contact email:", error);
      return res.status(500).json({
        message:
          "Unable to send your message at this time. Please try again later.",
      });
    }
  });

  return httpServer;
}

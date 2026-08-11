"use client";

import { useState } from "react";

import ScrollReveal from "../ui/ScrollReveal";

const fieldClassName =
  "w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 pt-8 pb-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30";

const labelClassName =
  "absolute top-3 left-4 text-[11px] font-medium tracking-[0.18em] text-slate-400 uppercase";

const ContactForm = () => {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionState === "submitting") return;

    setSubmissionState("submitting");

    const encodedFormData = new URLSearchParams();
    new FormData(e.currentTarget).forEach((value, key) => {
      encodedFormData.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedFormData.toString(),
      });

      if (!response.ok) throw new Error("Unable to submit the form");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <section className="sm: mx-auto max-w-7xl px-4 py-24 sm:px-0 sm:py-42">
      <div className="max-w-3xl">
        <ScrollReveal>
          <h2 className="heading mx-auto mb-10 max-w-xl text-2xl text-slate-900 sm:text-3xl">
            Reach out to us with a specific query or directly book a
            consultation
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="ring-primary/40 bg-primary-dark rounded-xl border border-white/10 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.35)] ring-1 sm:p-8 md:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="absolute -m-px h-px w-px overflow-hidden border-0 p-0 [clip:rect(0,0,0,0)]">
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="firstName" className={labelClassName}>
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={fieldClassName}
                />
              </div>

              <div className="relative">
                <label htmlFor="lastName" className={labelClassName}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="relative mt-4">
              <label htmlFor="email" className={labelClassName}>
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={fieldClassName}
              />
            </div>

            <div className="relative mt-4">
              <label htmlFor="subject" className={labelClassName}>
                Subject Of Your Message
              </label>
              <input
                id="subject"
                name="subject"
                type="text"

                value={formData.subject}
                onChange={handleChange}
                className={fieldClassName}
              />
            </div>

            <div className="relative mt-4">
              <label htmlFor="message" className={labelClassName}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${fieldClassName} min-h-40 resize-y`}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={submissionState === "submitting"}
                className="bg-primary hover:bg-primary-hover inline-flex min-w-40 items-center justify-center gap-2 rounded-sm px-8 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-80"
              >
                {submissionState === "submitting" ? (
                  <>
                    <span
                      aria-hidden
                      className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            <p
              aria-live="polite"
              className={`mt-4 text-sm ${
                submissionState === "success"
                  ? "text-accent"
                  : submissionState === "error"
                    ? "text-red-300"
                    : "hidden"
              }`}
            >
              {submissionState === "success"
                ? "Thank you — your message has been sent. We’ll be in touch shortly."
                : "We couldn’t send your message. Please try again or contact us directly by email."}
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;

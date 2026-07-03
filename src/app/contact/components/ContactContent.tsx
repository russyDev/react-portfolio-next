"use client";
import React, { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import { object, string } from "yup";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { useSendEmail } from "@/hooks/contact";
import { SitePage, SiteFooterMinimal } from "@/components/site";
import "./contact.css";

const topics = ["Website", "Web app", "E-commerce", "WordPress", "Something else"];

const contactSocials = [
  { href: "https://www.linkedin.com/in/ruslan-kolibabchuk/", label: "LinkedIn" },
  { href: "https://x.com/r_kodev/", label: "X / Twitter" },
  { href: "https://www.facebook.com/ruslan.kolibabcuk/", label: "Facebook" },
];

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  message: string().required("Message is required"),
});

type FormFieldsProps = {
  topic: number;
  setTopic: (i: number) => void;
  serverErrors: string[] | null;
};

const FormFields: React.FC<FormFieldsProps> = ({ topic, setTopic, serverErrors }) => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur } =
    useFormikContext<FormValues>();

  return (
    <Form className="contact-form-card">
      <div className="contact-form-title">Tell me about your project</div>
      <div className="contact-form-row">
        <label className="contact-field">
          Your name
          <input
            name="name"
            placeholder="Jane Smith"
            className="contact-input"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && <span className="contact-error">{errors.name}</span>}
        </label>
        <label className="contact-field">
          Email
          <input
            name="email"
            type="email"
            placeholder="jane@company.com"
            className="contact-input"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <span className="contact-error">{errors.email}</span>}
        </label>
      </div>
      <div className="contact-field">
        What are we building?
        <div className="contact-topics">
          {topics.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setTopic(i)}
              className={`contact-topic ${topic === i ? "contact-topic-active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="contact-field">
        Message
        <textarea
          name="message"
          placeholder="A few sentences about your idea, timeline and budget…"
          rows={5}
          className="contact-input"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.message && errors.message && <span className="contact-error">{errors.message}</span>}
      </label>
      <button type="submit" className="contact-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message →"}
      </button>
      {serverErrors && <span className="contact-error">{serverErrors.join(", ")}</span>}
    </Form>
  );
};

const ContactForm: React.FC = () => {
  const { mutateAsync: sendMessage } = useSendEmail();
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(0);
  const [serverErrors, setServerErrors] = useState<string[] | null>(null);
  const [version, setVersion] = useState(0);

  const onSubmit = async (values: FormValues) => {
    setServerErrors(null);
    const response = await sendMessage({
      ...values,
      message: `Project type: ${topics[topic]}\n\n${values.message}`,
    });
    if (response.success) {
      setVersion((v) => v + 1);
      setSent(true);
    } else {
      setServerErrors(response.errors ?? ["Something went wrong. Please try again."]);
    }
  };

  if (sent) {
    return (
      <div className="contact-form-card">
        <div className="contact-sent">
          <div className="contact-sent-icon">✓</div>
          <div className="contact-sent-title">Message sent!</div>
          <div className="contact-sent-text">
            Thanks for reaching out — I&apos;ll get back to you within a day.
          </div>
          <button onClick={() => setSent(false)} className="contact-sent-reset">
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <Formik
      key={version}
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormFields topic={topic} setTopic={setTopic} serverErrors={serverErrors} />
    </Formik>
  );
};

const queryClient = new QueryClient();

export const ContactContent: React.FC = () => (
  <SitePage>
    <div className="contact-body">
      <div className="contact-left">
        <div className="site-eyebrow">{"// contact"}</div>
        <h1 className="contact-title">
          Say <span className="site-title-accent-italic">hello</span>.
        </h1>
        <p className="site-lead contact-lead">
          Have a project in mind, a question, or just want to talk shop? Drop me a line — I usually reply within a
          day.
        </p>
        <div className="contact-channels">
          <a href="mailto:ruslan.kolibabchuk@gmail.com" className="contact-channel">
            <span className="contact-channel-icon">✉</span>
            <span className="contact-channel-text">ruslan.kolibabchuk@gmail.com</span>
          </a>
          <div className="contact-channel">
            <span className="contact-channel-icon">⌖</span>
            <span className="contact-channel-text">Ukraine · working worldwide, remote</span>
          </div>
        </div>
        <div className="contact-socials">
          {contactSocials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <ContactForm />
      </QueryClientProvider>
    </div>
    <SiteFooterMinimal />
  </SitePage>
);

"use client";

import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company } from "../site-content";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const requestType = String(data.get("requestType") || "General inquiry");
    const name = String(data.get("name") || "");
    const client = String(data.get("client") || "");
    const email = String(data.get("email") || "");
    const details = String(data.get("details") || "");
    const subject = `${requestType} from ${client || name}`;
    const body = [
      `Request type: ${requestType}`,
      `Name: ${name}`,
      `Company: ${client}`,
      `Email: ${email}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="request-form__intro">
        <h3>Tell us what your facility needs.</h3>
        <p>Send a concise request to the CATZ team by email.</p>
      </div>

      <fieldset className="request-form__fieldset">
        <legend>What do you need?</legend>
        <div className="request-form__options">
          <label>
            <input type="radio" name="requestType" value="Request for quotation" defaultChecked suppressHydrationWarning />
            <span>Quotation</span>
          </label>
          <label>
            <input type="radio" name="requestType" value="Request for site visit" suppressHydrationWarning />
            <span>Site visit</span>
          </label>
          <label>
            <input type="radio" name="requestType" value="Equipment rental inquiry" suppressHydrationWarning />
            <span>Equipment rental</span>
          </label>
        </div>
      </fieldset>

      <div className="request-form__grid">
        <label className="field">
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required suppressHydrationWarning />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="client" type="text" autoComplete="organization" suppressHydrationWarning />
        </label>
      </div>

      <label className="field">
        <span>Email *</span>
        <input name="email" type="email" autoComplete="email" required suppressHydrationWarning />
      </label>

      <label className="field">
        <span>Project details *</span>
          <textarea name="details" rows={4} required placeholder="Include the equipment, scope, and site or location details." suppressHydrationWarning />
      </label>

      <div className="request-form__footer">
        <button className="button button--dark" type="submit" suppressHydrationWarning>
          Submit
        </button>
        {submitted ? (
          <p className="request-form__status" role="status">
            <Check size={16} strokeWidth={1.8} aria-hidden="true" /> Your email app should open with the request details.
          </p>
        ) : (
          <p className="request-form__note">Your email app will open with the request. Nothing is stored on this website.</p>
        )}
      </div>
    </form>
  );
}

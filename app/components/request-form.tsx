"use client";

import { useForm } from "@formspree/react";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company } from "../site-content";

type RequestFormFields = {
  requestType: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
};

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";

export default function RequestForm() {
  const [configurationError, setConfigurationError] = useState(false);
  const [state, handleSubmit] = useForm<RequestFormFields>(formId || "missing-form-id");

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    if (!formId) {
      event.preventDefault();
      setConfigurationError(true);
      return;
    }

    void handleSubmit(event);
  }

  return (
    <form className="request-form" onSubmit={handleFormSubmit}>
      <div className="request-form__intro">
        <h3>Tell us what your facility needs.</h3>
        <p>Request a quotation, a site assessment, or rental equipment through our inquiry form.</p>
      </div>

      <input name="subject" type="hidden" value="CATZ Industrial {{ requestType }} from {{ name }}" />

      <fieldset className="request-form__fieldset">
        <legend>What do you need?</legend>
        <div className="request-form__options">
          <label>
            <input type="radio" name="requestType" value="Request for quotation" defaultChecked suppressHydrationWarning />
            <span>Quotation</span>
          </label>
          <label>
            <input type="radio" name="requestType" value="Request for site assessment" suppressHydrationWarning />
            <span>Site assessment</span>
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
          <input name="company" type="text" autoComplete="organization" suppressHydrationWarning />
        </label>
      </div>

      <label className="field">
        <span>Email *</span>
        <input name="email" type="email" autoComplete="email" required suppressHydrationWarning />
      </label>

      <label className="field">
        <span>Contact number *</span>
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required suppressHydrationWarning />
      </label>

      <label className="field">
        <span>Project details *</span>
        <textarea name="message" rows={4} required placeholder="Include the equipment, scope, and site or location details." suppressHydrationWarning />
      </label>

      <div className="request-form__footer">
        <button className="button button--dark" type="submit" disabled={state.submitting || state.succeeded} suppressHydrationWarning>
          {state.submitting ? "Sending..." : state.succeeded ? "Sent" : "Submit"}
        </button>
        {state.succeeded ? (
          <p className="request-form__status" role="status" aria-live="polite">
            <Check size={16} strokeWidth={1.8} aria-hidden="true" /> Thanks. Your request has been sent.
          </p>
        ) : state.errors ? (
          <p className="request-form__status" role="alert">
            We couldn&apos;t send your request. Please try again or email us at <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        ) : configurationError ? (
          <p className="request-form__status" role="alert">
            The online form is not configured yet. Please email us at <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}

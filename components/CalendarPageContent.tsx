"use client";

import { useState } from "react";

const ICS_LINK =
  "https://calendar.google.com/calendar/ical/e1ea9c46509928520cf0ac36372f4cfc39b2f3a66983463c1cea1d65930d33c1%40group.calendar.google.com/public/basic.ics";

const GOOGLE_CALENDAR_LINK =
  "https://calendar.google.com/calendar/embed?src=e1ea9c46509928520cf0ac36372f4cfc39b2f3a66983463c1cea1d65930d33c1%40group.calendar.google.com&ctz=America%2FChicago";

const EMBED_LINK =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showTitle=0&mode=AGENDA&showNav=0&showDate=0&showTabs=0&showCalendars=0&src=ZTFlYTljNDY1MDk5Mjg1MjBjZjBhYzM2MzcyZjRjZmMzOWIyZjNhNjY5ODM0NjNjMWNlYTFkNjU5MzBkMzNjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f4511e";

export default function CalendarPageContent() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(ICS_LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Failed to copy calendar link.");
    }
  }

  return (
    <div className="markdown">
        <div className="calendar-embed">
        <iframe
          src={EMBED_LINK}
          width="100%"
          height="600"
          style={{ border: 0 }}
          scrolling="no"
          title="Sports Analytics Club Calendar"
        />
      </div>
      <br/>
      <p>
        To add the calendar to your Google Calendar, click this{" "}
        <a
          href={GOOGLE_CALENDAR_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          link
        </a>
        .
      </p>

      <p>
        To add the calendar to a different calendar, use the link and
        instructions below.
      </p>

      <p>
        <a
          href="https://support.apple.com/en-us/102301"
          target="_blank"
          rel="noreferrer noopener"
          className="calendar-button"
        >
          Apple Instructions
        </a>
      </p>

      <p>
        <a
          href="https://support.microsoft.com/en-us/office/import-or-subscribe-to-a-calendar-in-outlook-com-or-outlook-on-the-web-cff1429c-5af6-41ec-a5b4-74f2c278e98c"
          target="_blank"
          rel="noreferrer noopener"
          className="calendar-button"
        >
          Outlook Instructions
        </a>
      </p>

      <p>Use this link to add the calendar:</p>

      <div className="code-container">
        <pre>
          <code>{ICS_LINK}</code>
        </pre>
        <button type="button" className="copy-button" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
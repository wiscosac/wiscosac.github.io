"use client";

import { useState } from "react";

export default function JoinModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Join Button */}
      <button className="home-button" onClick={() => setOpen(true)}>
        Join
      </button>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScGR2KPNlWB1ry42AJcjFK1jibX9dkmqNTrwqwArUDKakHlMA/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}
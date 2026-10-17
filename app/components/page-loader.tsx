"use client";

import { useEffect, useState } from "react";
import BrandLockup from "./brand-lockup";

const panelCount = 5;

export default function PageLoader() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 1500);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className={`page-loader ${leaving ? "page-loader--leaving" : ""}`} role="status" aria-label="Loading CATZ Industrial">
      <div className="page-loader__surface">
        <div className="page-loader__track">
          <div className="page-loader__panels" aria-hidden="true">
            {Array.from({ length: panelCount }, (_, index) => (
              <span
                className={`page-loader__panel page-loader__panel--${index % 2 === 0 ? "blue" : "white"}`}
                key={index}
              />
            ))}
          </div>
          <div className="page-loader__identity">
            <BrandLockup />
          </div>
          <span className="page-loader__trailing" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

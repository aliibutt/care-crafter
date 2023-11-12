import React from "react";
import "./globals.css";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Care Crafter</h1>

      <div className="flex space-x-6 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Column 1</h2>
          </div>
          <div className="space-y-2">
            <p className="info-text">"What are generic drugs?"</p>
            <p className="info-text">
              "How does FDA ensure generic medicines work the same as brand-name
              medicines?"
            </p>
            <p className="info-text">
              "Why do generic medicines often cost less than the brand?"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Column 2</h2>
          </div>
          <div className="space-y-2">
            <p className="info-text">"What are generic drugs?"</p>
            <p className="info-text">
              "How does FDA ensure generic medicines work the same as brand-name
              medicines?"
            </p>
            <p className="info-text">
              "Why do generic medicines often cost less than the brand?"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Column 3</h2>
          </div>
          <div className="space-y-2">
            <p className="info-text">"What are generic drugs?"</p>
            <p className="info-text">
              "How does FDA ensure generic medicines work the same as brand-name
              medicines?"
            </p>
            <p className="info-text">
              "Why do generic medicines often cost less than the brand?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

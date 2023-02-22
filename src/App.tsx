import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-[100svh] bg-slate-600 text-slate-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center py-20">Jack C developer</h1>

        <main className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase tracking-wide underline">
              Jacobs API Privacy Policy
            </h2>

            <p>
              This Privacy Policy explains our privacy practices and how we
              collect, use, and disclose information when you use our API. By
              using the API, you agree to the terms of this Privacy Policy.
            </p>
            <ol className="list-decimal ml-4 flex flex-col gap-8">
              <li>
                How We Use Your Information - We may use the information we
                collect to: Provide and improve our API and services. Respond to
                your inquiries and provide customer support. Comply with legal
                obligations and enforce our policies.
              </li>
              <li>
                How We Share Your Information - We do not share your personal
                information with third-party service providers or other
                companies. We may share your usage data with third-party
                analytics providers to help us analyze and improve our API and
                services.
              </li>
              <li>
                Your Choices - You can choose not to provide us with personal
                information, but doing so may limit your ability to use our API
                and access certain features.
              </li>
              <li>
                Security - We take reasonable measures to protect the
                information we collect from unauthorized access, disclosure, and
                alteration. However, no security measures are perfect, and we
                cannot guarantee the security of your information.
              </li>
              <li>
                Updates to this Privacy Policy - We may update this Privacy
                Policy from time to time. If we make material changes to the
                Policy, we will notify you by posting a notice on our website or
                by sending you an email. We encourage you to review the Policy
                periodically to stay informed about our privacy practices.
              </li>
              <li>
                Use of API - You may only use the API for lawful purposes and in
                accordance with these Terms and Conditions. You may not use the
                API in any manner that could damage, disable, overburden, or
                impair the API or interfere with any other party's use of the
                API.
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Terms and Conditions will be governed by and construed in
              accordance with the laws of the UK, without giving effect to any
              principles of conflicts of law.
            </p>
            <h2 className="uppercase tracking-wide underline">
              Jacobs API Privacy Policy
            </h2>
            <ol className="list-decimal ml-4 flex flex-col gap-8">
              <li>
                We may terminate your license to use the API at any time and for
                any reason. Upon termination, you must cease all use of the API
                and destroy any copies of the API in your possession.
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

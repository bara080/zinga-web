import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";

function TermsConditions() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="page-title">Terms and Conditions</h1>
      <div>
        <Link href="/" className="inline-flex items-center gap-2">
          <BackArrow />
          Back to Home
        </Link>
      </div>

      <div>
        <h5>Effective Date: 01/01/2025</h5>
        <p>
          By using Zinga, you agree to these Terms and Conditions
          (&quot;Terms&quot;). If you do not agree, please refrain from using
          the Service.
        </p>
        <h3>1. Use of Service</h3>
        <ul>
          <li>
            Users must be at least 18 years old or have parental/guardian
            consent.
          </li>
          <li>
            You agree to provide accurate and complete information when creating
            an account.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
        </ul>
        <h3>2. Booking and Payments</h3>
        <ul>
          <li>
            Service providers post their availability, and customers can book
            appointments.
          </li>
          <li>
            Payments for services may be pre-charged as per the provider’s
            terms.
          </li>
          <li>
            All transactions are facilitated securely through a third-party
            payment processor.
          </li>
        </ul>
        <h3>3. User Conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful or fraudulent purposes.</li>
          <li>Harass, abuse, or harm other users.</li>
          <li>Interfere with or disrupt the functionality of the Service.</li>
        </ul>
        <h3>4. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your account if you
          violate these Terms or engage in prohibited conduct.
        </p>
        <h3>5. Disclaimer of Warranties</h3>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available.&quot; We make no warranties regarding the accuracy,
          reliability, or availability of the Service.
        </p>
        <h3>6. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, Zinga shall not be liable for
          any indirect, incidental, or consequential damages arising from your
          use of the Service.
        </p>
        <h3>7. Dispute Resolution</h3>
        <p>
          Any disputes arising from these Terms shall be resolved through
          arbitration, governed by the laws of [Insert Jurisdiction].
        </p>
        <h3>8. Changes to Terms</h3>
        <p>
          We may update these Terms periodically. Continued use of the Service
          constitutes your acceptance of the updated Terms.
        </p>
        <h3>9. Contact Us</h3>
        <p>
          For questions or concerns about these Terms or our Privacy Policy,
          contact us at{" "}
          <a href="mailto:zingapp00@gmail.com">zingapp00@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;

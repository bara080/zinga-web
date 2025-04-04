import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "Features",
  description: "Welcome to Zinga App",
};

function FAQ() {
  return (
    <InnerPageLayout
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about using Zinga and its features."
      breadcrumbLabel="FAQ"
    >
      <div className="cms_content">
        <h3>How do I create an account on Zinga?</h3>
        <p>How to create an account:</p>
        <ul>
          <li>
            Download from{" "}
            <a href="https://apps.apple.com/in/app/" target="_blank">
              App Store
            </a>{" "}
            or{" "}
            <a href="https://play.google.com/store/apps?hl=en" target="_blank">
              Google play store
            </a>
          </li>
          <li>
            Visit{" "}
            <a href="https://zingaapp.com/" target="_blank">
              https://zingaapp.com
            </a>
          </li>
          <li>
            Click on <b>“Sign Up”</b>
          </li>
          <li>
            Select <b>Customer</b> or <b>Service Provider</b>
          </li>
          <li>Enter your email and password, or use Google sign-in</li>
        </ul>

        <h3>Can I use the same account on the web and mobile app?</h3>
        <p>
          Yes. Zinga supports <b>cross-platform access</b>. You can log in with
          the same credentials on:
        </p>
        <ul>
          <li>
            <b>iOS App</b>
          </li>
          <li>
            <b>Android App</b>
          </li>
        </ul>

        <h3>How do I book an appointment?</h3>
        <ul>
          <li> Use the search bar to find a service provider</li>
          <li>
            Apply filters like <b>price</b>, <b>rating</b>, or <b>location</b>
          </li>
          <li>
            Click on <b>Book Now</b>
          </li>
          <li>Select a date and time</li>
          <li>Pre-pay to confirm your booking</li>
        </ul>

        <h3>Can I cancel or reschedule a booking?</h3>
        <p>Yes. Navigate to:</p>
        <ul>
          <li>
            <b>My Bookings</b> → Select the appointment
          </li>
          <li>
            Choose <b>Cancel</b> or <b>Reschedule</b>
          </li>
          <li>
            Follow the on-screen instructions
            <br />
            <em className="text-sm">
              Note: Cancellation policies may vary per provider.
            </em>
          </li>
        </ul>

        <h3>What payment methods does Zinga support?</h3>
        <p>Zinga supports:</p>
        <ul>
          <li>Credit & Debit Cards (via Stripe)</li>
          <li>Google Pay & Apple Pay</li>
        </ul>

        <h3>Do I get a receipt after booking?</h3>
        <p>Yes. You will receive:</p>
        <ul>
          <li>A confirmation email with payment details</li>
          <li>
            Booking info in your <b>Zinga dashboard</b>
          </li>
        </ul>

        <h3>How does Zinga determine provider locations?</h3>
        <p>Zinga uses:</p>
        <ul>
          <li>Google Maps API to geo-locate providers</li>
          <li>Provider-entered business addresses</li>
          <li>
            Users can filter by location proximity within the search interface.
          </li>
        </ul>

        <h3>Will I get reminders before my appointment?</h3>
        <p>Yes. Zinga sends automated notifications:</p>
        <ul>
          <li>Email reminders (24 hours & 1 hour before)</li>
          <li>Push notifications (on mobile apps)</li>
          <li>Option to add to your Google or iOS calendar</li>
        </ul>

        <h3>Is my personal data safe with Zinga?</h3>
        <p>Absolutely. Zinga uses:</p>
        <ul>
          <li>
            <b>End-to-end encryption</b>
          </li>
          <li>
            <b>JWT-secured sessions</b>
          </li>
        </ul>

        <h3>I&#39;m a service provider. How do I manage my availability?</h3>
        <ul>
          <li>Log into your provider account</li>
          <li>
            Go to <b>Dashboard</b> &gt; <b>Availability</b>
          </li>
          <li>Set your working days, hours, and break times</li>
          <li>
            Click <b>Save</b>
          </li>
        </ul>
        <p>
          Your availability will now appear in real-time for customer bookings.
        </p>

        <h3>Who can I contact for technical or user support?</h3>
        <p>You can:</p>
        <ul>
          <li>
            Email: <b>info@zingaapp.com</b>
          </li>
          <li>
            Submit a ticket via the <b>Help Center</b> on the platform
          </li>
          <li>Reach out through live chat (during business hours)</li>
        </ul>

        <h3>Didn&#39;t find what you were looking for?</h3>
        <p>
          Visit our <b>Help Center</b> at info.zingaapp.com
        </p>
        <p>
          or contact <b>support@zingaapp.com</b>
        </p>
      </div>
    </InnerPageLayout>
  );
}

export default FAQ;

import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "Join as a Zinga Tester",
  description:
    "Get early access to Zinga, explore new features before public release, and help shape the future of our platform. Your feedback makes a real impact—and comes with exclusive rewards.",
};

function JoinAsTester() {
  return (
    <InnerPageLayout
      title="Join as a Zinga Tester"
      description="Get early access to Zinga, explore new features before public release, and help shape the future of our platform. Your feedback makes a real impact—and comes with exclusive rewards."
      breadcrumbLabel="Join as a Tester"
    >
      <div className="cms_content">
        <h3>Become a Tester - Help Shape Zinga&#39;s Future</h3>
        <h3>Try Zinga Before Everyone Else</h3>
        <p>
          We&#39;re actively building the best experience for iOS and Android
          users—and we want you on board!
        </p>

        <h3>Why Become a Zinga Tester?</h3>
        <ul>
          <li>Early access to new features</li>
          <li>Help us identify bugs before public release</li>
          <li>Share your ideas and influence product decisions</li>
        </ul>

        <h3>For iOS User</h3>
        <ul>
          <li>Download TestFlight from the App Store</li>
          <li>Join our beta using this TestFlight Link</li>
          <li>Install Zinga Beta</li>
          <li>Explore, book, and report your experience</li>
        </ul>

        <h3>For Android Users</h3>
        <ul>
          <li>Click the Google Play Beta Invite</li>
          <li>Install the beta version of Zinga</li>
          <li>Use the app normally and note what works/what doesn&#39;t</li>
          <li>Submit feedback via in-app settings or feedback form</li>
        </ul>

        <p>Tell Us About Your Experience</p>

        <h3>We want your thoughts—good or bad!</h3>
        <ul>
          <li>Email us directly: info@zingaapp.com</li>
          <li>Use our Feedback Portal —-sends them to feedback page</li>
          <li>Join our tester community on Discord</li>
        </ul>

        <h3>What’s in It for You?</h3>
        <ul>
          <li>Feature your name in our public Testers Hall of Fame</li>
          <li>Receive exclusive tester rewards and premium access</li>
        </ul>
      </div>
    </InnerPageLayout>
  );
}

export default JoinAsTester;

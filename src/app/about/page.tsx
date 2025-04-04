import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "About",
  description: "Welcome to Zinga App",
};

function About() {
  return (
    <InnerPageLayout
      title="About Zinga"
      description="Learn more about Zinga, our mission, and how we connect service providers with customers."
      breadcrumbLabel="About Zinga"
    >
      <div className="cms_content">
        <p>Empowering Local Services, One Booking at a Time</p>
        <p>
          Zinga is a next-generation platform built to connect customers with
          trusted service providers—from barbers and stylists to fitness
          coaches, therapists, and more.
        </p>
        <p>
          We believe that scheduling should be simple, fast, and secure, whether
          you&#39;re managing appointments or finding your next go-to
          professional.
        </p>

        <h3>Our Mission</h3>
        <p>
          To empower local businesses by providing <b>intelligent</b>,{" "}
          <b>scalable booking solutions</b> that improve customer engagement and
          increase revenue—without the tech overwhelm.
        </p>

        <h3>Our Mission</h3>
        <ul>
          <li>Easy service discovery with powerful filters</li>
          <li>Real-time booking with instant confirmation</li>
          <li>Seamless pre-payment integration</li>
          <li>Flexible cancellations and rescheduling</li>
          <li>Smart reminders and notifications</li>
        </ul>

        <h3>Our Vision</h3>
        <p>
          We aim to become the <b>leading booking infrastructure</b> for
          service-based industries by merging human-centered design with
          enterprise-level technology.
        </p>

        <h3>Who We Serve</h3>
        <ul>
          <li>Individual service providers and freelancers</li>
          <li>Small-to-medium businesses</li>
          <li>Multi-location franchises</li>
          <li>Enterprise booking platforms and vertical marketplaces</li>
        </ul>

        <h3>Join the Movement</h3>
        <ul>
          <li>Become a Partner</li>
          <li>Join Our Service Provider Program</li>
          <li>Become a Customer</li>
        </ul>
      </div>
    </InnerPageLayout>
  );
}

export default About;

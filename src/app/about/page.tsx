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
      <p>About Zinga</p>
    </InnerPageLayout>
  );
}

export default About;

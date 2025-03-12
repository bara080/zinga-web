import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "Contact",
  description: "Welcome to Zinga App",
};

function Contact() {
  return (
    <InnerPageLayout
      title="Contact"
      description="Have questions? Get in touch with us for support, inquiries, or partnerships."
      breadcrumbLabel="Contact"
    >
      <p>Contact Zinga</p>
    </InnerPageLayout>
  );
}

export default Contact;

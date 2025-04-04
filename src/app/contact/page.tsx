import ContactForm from "@/components/form/ContactForm";
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
      <ContactForm />

      <div className="cms_content text-center mt-5">
        <p>OR</p>
        <p>
          Email us on <a href="mailto:info@zingaapp.com">info@zingaapp.com</a>
        </p>
      </div>
    </InnerPageLayout>
  );
}

export default Contact;

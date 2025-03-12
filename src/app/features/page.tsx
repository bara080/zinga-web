import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "Features",
  description: "Welcome to Zinga App",
};

function Features() {
  return (
    <InnerPageLayout
      title="Zinga Features"
      description="Discover Zinga's powerful features designed to enhance your booking experience."
      breadcrumbLabel="Zinga Features"
    >
      <p>Zinga Features</p>
    </InnerPageLayout>
  );
}

export default Features;

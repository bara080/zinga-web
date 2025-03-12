import InnerPageLayout from "@/components/ui/InnerPageLayout";

export const metadata = {
  title: "Blogs",
  description: "Welcome to Zinga App",
};

function Blogs() {
  return (
    <InnerPageLayout
      title="Blogs"
      description="Explore insights, tips, and industry trends from the Zinga community."
      breadcrumbLabel="Blogs"
    >
      <p>Zinga Blogs</p>
    </InnerPageLayout>
  );
}

export default Blogs;

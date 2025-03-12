import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";

interface InnerPageLayoutProps {
  title: string;
  description: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
}

const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
  title,
  description,
  breadcrumbLabel,
  children,
}) => {
  return (
    <>
      <div className="bg-zinc-900 w-full">
        <div className="max-w-7xl mx-auto flex flex-col px-4 py-8">
          <div className="py-14">
            <SectionTitle
              title={title}
              description={description}
              align="center"
              variant="light"
            />
          </div>
          <Breadcrumb items={[{ label: breadcrumbLabel }]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-5 px-4 py-24">
        {children}
      </div>
    </>
  );
};

export default InnerPageLayout;

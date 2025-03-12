import Link from "next/link";
import { ChevronForward, Home } from "../icons";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-zinc-400">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="flex items-center text-zinc-200 hover:text-white transition gap-2"
          >
            <Home className="w-4 h-4" color="text-zinc-200" /> Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">
              <ChevronForward className="w-4 h-4 text-zinc-200" />
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-zinc-200 hover:text-white transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

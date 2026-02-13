import Link from "next/link";
import { type Icon } from "@tabler/icons-react";

type LinksGroupProps = {
    title: string;
    links: {
        title: string;
        href: string;
        icon?: Icon;
    }[];
};

export default function LinksGroup({ title, links }: LinksGroupProps) {

    const isExternalLink = (href: string) => {
        return (
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        );
    };


    return (
        <span >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                {title}
            </h3>

            <ul className="space-y-3">
                {links.map((link) => {
                    const isExternal = isExternalLink(link.href);

                    return (
                        <li key={link.title}>
                            <Link
                                href={link.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                            >
                                {link.icon && (
                                    <link.icon
                                        size={16}
                                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </span>
    );
}

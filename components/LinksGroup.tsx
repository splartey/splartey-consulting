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
        return (href.startsWith("https://"));
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">
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
                                className="footer-links flex items-center gap-2 group shrink-0"
                            >
                                {link.icon
                                    && (
                                        <link.icon className="group-hover:opacity-100 transition-opacity shrink-0 w-4.5 h-4.5 opacity-80" />
                                    )
                                }
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

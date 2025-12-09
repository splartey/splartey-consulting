import Link from "next/link";

type LinksGroupProps = {
    title: string;
    links: { title: string; href: string }[];
};

export default function LinksGroup({ title, links }: LinksGroupProps) {
    return (
        <div>
            <h3 className="mb-2 font-bold text-xs uppercase text-foreground">
                {title}
            </h3>

            <ul>
                {links.map(({ title, href }) => (
                    <li key={title}>
                        <Link
                            href={href}
                            className="text-muted-foreground text-sm hover:text-foreground"
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

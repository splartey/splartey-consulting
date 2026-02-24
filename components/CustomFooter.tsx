
import Link from "next/link"
import Image from "next/image"
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandSlack,
    IconBrandYoutube
} from "@tabler/icons-react"

import { APP_CONFIG } from "@/constants"
const { COMPANY_NAME } = APP_CONFIG
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
    const sections = {
        solutions: {
            title: "Company",
            items: [
                { label: "About us", href: "#" },
                { label: "Services", href: "#" },
                { label: "Gallery", href: "#" },
                // { label: "Weather Integration", href: "#" },
                // { label: "Documentation", href: "#" },
                // { label: "Smart Farming Guide", href: "#" },
                // { label: "Equipment", href: "#" },
            ],
        },
        company: {
            title: "Company",
            items: [
                { label: "About", href: "#" },
                { label: " Reach out", href: "#" },
                { label: "Privacy & Policy", href: "#" },
            ],
        },
        contact: {
            title: "Contact",
            items: [
                { label: "seth@splarteyconsulting.com", href: "mailto:seth@splarteyconsulting.com"},
                {label: "+233 24 123 4567", href: "tel:+233241234567"},
                { label: "123 Main Street, Accra, Ghana", href: "https://www.google.com/maps/place/123+Main+Street,+Accra,+Ghana" },

            ],
        },
    }

    return (
        <div className="px-4 xl:px-0">
            <footer
                id="footer"
                className="relative mx-auto flex max-w-6xl flex-wrap pt-4"
            >
                <div className="pointer-events-none inset-0">
                    <div
                        className="absolute inset-y-0 -my-20 w-px"
                        style={{
                            maskImage: "linear-gradient(transparent, white 5rem)",
                        }}
                    >
                        <svg className="h-full w-full" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100%"
                                className="stroke-gray-300"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                            />
                        </svg>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 -my-20 w-px"
                        style={{
                            maskImage: "linear-gradient(transparent, white 5rem)",
                        }}
                    >
                        <svg className="h-full w-full" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100%"
                                className="stroke-gray-300"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                            />
                        </svg>
                    </div>
                </div>
                <svg
                    className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300"
                    style={{
                        maskImage:
                            "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
                    }}
                >
                    <defs>
                        <pattern
                            id="diagonal-footer-pattern"
                            patternUnits="userSpaceOnUse"
                            width="64"
                            height="64"
                        >
                            {Array.from({ length: 17 }, (_, i) => {
                                const offset = i * 8
                                return (
                                    <path
                                        key={i}
                                        d={`M${-106 + offset} 110L${22 + offset} -18`}
                                        stroke=""
                                        strokeWidth="1"
                                    />
                                )
                            })}
                        </pattern>
                    </defs>
                    <rect
                        stroke="none"
                        width="100%"
                        height="100%"
                        fill="url(#diagonal-footer-pattern)"
                    />
                </svg>
                <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
                    <Link
                        href="/"
                        className="flex items-center font-medium text-gray-700 select-none sm:text-sm"
                    >
                        <Image
                            src="/favicon.ico"
                            width={32}
                            height={32}
                            alt={`${COMPANY_NAME} logo`}
                        />
                        <p className="ml-2 text-2xl text-primary font-medium">{COMPANY_NAME}</p>
                        <span className="sr-only">{COMPANY_NAME}</span>
                    </Link>

                    <div>
                        <div className="mt-4 flex items-center">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                            >
                                <IconBrandLinkedin className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                            >
                                <IconBrandYoutube className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                            >
                                <IconBrandGithub className="size-5" />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                            >
                                <IconBrandSlack className="size-5" />
                            </Link>
                        </div>
                        <div className="ml-2 hidden text-sm text-gray-700 lg:inline">
                            &copy; {CURRENT_YEAR} {COMPANY_NAME}
                        </div>
                    </div>
                </div>

                {Object.entries(sections).map(([key, section]) => (
                    <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
                        <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">
                            {section.title}
                        </h3>
                        <ul className="space-y-4">
                            {section.items.map((item) => (
                                <li key={item.label} className="text-sm">
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </footer>
        </div>
    )
}

export default Footer

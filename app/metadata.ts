import { Metadata } from "next";
import { APP_CONFIG } from "@/constants";

const {
    COMPANY_NAME,
    COMPANY_DESCRIPTION,
    SITE_KEYWORDS,
    AUTHOR,
    LINKEDIN_URL,
    DEVEX_PROFILE_URL,
    SITE_URL,
} = APP_CONFIG;

export const siteMetadata: Metadata = {
    title: {
        default: `${COMPANY_NAME} • Seth Lartey • International Development Consultant`,
        template: `%s • Seth Lartey`,
    },
    description: COMPANY_DESCRIPTION,
    keywords: SITE_KEYWORDS,
    authors: [
        {
            name: AUTHOR,
            url: LINKEDIN_URL,
        },
        {
            name: AUTHOR,
            url: DEVEX_PROFILE_URL,
        },
    ],
    metadataBase: new URL(SITE_URL),
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: COMPANY_NAME,
        description: COMPANY_DESCRIPTION,
        url: SITE_URL,
        siteName: COMPANY_NAME,
        images: [
            {
                url: `${SITE_URL}/images/opengraph.png`,
                width: 1200,
                height: 630,
                alt: COMPANY_NAME,
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: COMPANY_NAME,
        description: COMPANY_DESCRIPTION,
        images: [`${SITE_URL}/images/opengraph.png`],
    },
    alternates: {
        canonical: SITE_URL,
    },
    category: "Consulting",
    applicationName: COMPANY_NAME,
};
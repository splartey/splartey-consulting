import { APP_CONFIG } from "@/constants";

const {
    AUTHOR,
    SITE_URL,
    COMPANY_NAME,
    LINKEDIN_URL,
    DEVEX_PROFILE_URL,
} = APP_CONFIG;

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR,
    jobTitle: "International Development Consultant",
    url: SITE_URL,
    worksFor: {
        "@type": "Organization",
        name: COMPANY_NAME,
        url: SITE_URL,
    },
    sameAs: [LINKEDIN_URL, DEVEX_PROFILE_URL],
};

export const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "About", "Services", "Gallery", "Contact"],
    url: [
        "https://www.splarteyconsulting.com/",
        "https://www.splarteyconsulting.com/about",
        "https://www.splarteyconsulting.com/what-i-offer",
        "https://www.splarteyconsulting.com/action-gallery",
        "https://www.splarteyconsulting.com/contact",
    ],
};
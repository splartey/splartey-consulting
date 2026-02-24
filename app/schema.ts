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
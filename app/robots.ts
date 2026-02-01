import { MetadataRoute } from 'next';
import { APP_CONFIG } from "@/constants"

const { SITE_URL } = APP_CONFIG;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/actions/',
                ],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}

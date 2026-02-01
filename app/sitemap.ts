import { MetadataRoute } from 'next';
import { APP_CONFIG } from "@/constants"

const { SITE_URL } = APP_CONFIG;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const lastModifiedDate = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${SITE_URL}`,
            lastModified: lastModifiedDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/what-i-offer`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/action-gallery`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified: lastModifiedDate,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return staticRoutes;
}
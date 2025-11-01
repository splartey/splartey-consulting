interface AboutHeroProps {
    title: string;
    description1: string;
    description2: string;
    illustrationLeft: string;
    illustrationRight: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

interface ServiceCardProps {
    title: string;
    description: string;
    items: string[];
    bgColor: string;
    borderColor: string;
}

interface ImpactSectionProps {
    title: string;
    description1: string;
    description2?: string;
}

interface HeroSectionProps {
    badgeImageUrl: string;
    badgeText: string;
    heroTitle: string;
    heroDescription: string;
    heroImageUrl: string;
}

interface SkillsMarqueeProps {
    iconUrl: string;
    items: string[];
}
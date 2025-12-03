type AboutHeroProps = {
    title: string;
    description1: string;
    description2: string;
    illustrationLeft: string;
    illustrationRight: string;
}

interface ServiceCardProps {
    title: string;
    description: string;
    serviceList: string[];
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

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

type FooterLink = {
    title: string;
    href: string;
}

type FooterSection = {
    label: string;
    links: FooterLink[];
}
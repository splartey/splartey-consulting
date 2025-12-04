type AboutHeroProps = {
    headLine: string;
    description1: string;
    description2: string;
    illustrationLeft: string;
    illustrationRight: string;
}

interface ServiceCardProps {
    title: string;
    description?: string;
    serviceList: string[];
    bgColor: string;
    borderColor: string;
}

type ImpactSectionProps = {
    title: string;
    description1: string;
    description2?: string;
}

type CtaButton = {
    label: string;
    href: string;
};

type HeroSectionProps = {
    heading: string;
    subHeading: string;
    heroImageUrl: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
};

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
    label: string;
    href: string;
}

type FooterSection = {
    title: string;
    links: FooterLink[];
}
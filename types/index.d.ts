import { type Icon } from "@tabler/icons-react";

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
    heroImageAlt: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton;
};

interface SkillsMarqueeProps {
    iconUrl: string;
    items: string[];
}

// about
type AboutHeroProps = {
    headLine: string;
    description1: string;
    description2: string;
}

type contentItem = {
    paragraph: string;
}

type FounderProps = {
    image: string;
    alt: string;
    content: contentItem[];
}

type CTADefault = {
    heading: string;
    description: string;
    ctaPrimaryBtn: CtaButton;
    ctaSecondaryBtn: CtaButton;
}

export type FooterLink = {
    label: string;
    href: string;
    icon?: Icon;
}

export type FooterSection = {
    title: string;
    links: FooterLink[];
}
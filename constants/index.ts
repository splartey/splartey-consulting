import { Eye, Goal, Gem } from "lucide-react";

// Navigation links
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/works" },
];

// Home page
export const heroData = {
    badgeImageUrl: "/badge.svg",
    badgeText: "Independent Management Consultant",
    heroTitle: "Strategy, Performance, Leadership.",
    heroDescription: `I deliver strategic, technical, and operational solutions that help organisations in international development achieve measurable results.`,
    heroImageUrl: "/images/hero-image.JPG"
}

// Skills marquee
export const skills = [
    "Strategic programme leadership",
    "Grant-making and fund management",
    "Portfolio management and delivery",
    "Monitoring, evaluation, and adaptive learning",
    "Risk management and compliance",
    "Capacity building and team development",
];

// Impact section - below marquee 
export const impactContent = {
    title: "Driving Results Through Experience, Insight, and Locally-Led Approaches",
    description1: "With over 20 years of experience across Africa, Asia, Latin America, and the Caribbean, I help organisations bridge the gap between strategic vision and operational reality. My approach is grounded in locally-led development, meaningful community participation, and practical solutions that strengthen systems and teams.",
    description2: "I draw on both field-based programme leadership and headquarters-level strategy to design interventions that are ambitious, achievable, and sustainable. Whether supporting programme design, governance, capacity strengthening, or adaptive management, my focus is on equity, ownership, and measurable impact that lasts beyond donor funding."
};

// Accreditation section
export const accreditation = [
    {
        imageUrl: "/images/stats/g-leadership.png",
        title: "Global Programme Leadership"
    },
    {
        imageUrl: "/images/stats/donor-rating.png",
        title: "Top Donor Performance Ratings"
    },
    {
        imageUrl: "/images/stats/resources.png",
        title: "Resource Mobilisation Excellence"
    },
    {
        imageUrl: "/images/stats/image.png",
        title: "Mo Ibrahim Foundation Fellow"
    },
];

// Services page
export const servicesData = [
    {
        title: "Strategy Advisory",
        description:
            `Whether you are designing a new programme, refining your organisational strategy, or planning for local ownership, I bring practical experience in creating strategies that are both ambitious and achievable. I work with you to ensure your approach genuinely empowers communities and builds local capacity from the start.`,
        items: [
            "Development of strategic plans and organisational strategies",
            "Policy frameworks and analysis",
            "Programme design and theory of change development",
            "Partnership strategy and stakeholder engagement planning",
            "Locally-led development transitions and sustainability planning",
        ],
        bgColor: "bg-[#D7F8E1]",
        borderColor: "border-[#B8EAC7]",
    },
    {
        title: "Project Management",
        description:
            `I help organisations manage complex programmes effectively while maintaining flexibility to respond to changing contexts. My approach emphasises building strong local teams, ensuring community voice in programme direction, and creating systems that enable rather than constrain locally-led action.`,
        items: [
            "Portfolio management and oversight",
            "Programme design and implementation support",
            "Risk management and compliance frameworks",
            "Operational planning and performance systems",
            "Adaptive management approaches",
        ],
        bgColor: "bg-[#E8FF88]",
        borderColor: "border-[#D9F76A]",
    },
    {
        title: "Monitoring, Evaluation & Learning Support",
        description:
            `I have extensive experience working with M&E specialists and can provide strategic input into frameworks, ensure monitoring systems support programme management, and help integrate learning into decision-making. I have pioneered community feedback mechanisms that give communities genuine voice in programme direction and can advise on participatory and decolonised approaches to monitoring and evaluation.`,
        items: [
            "Input into M&E framework development",
            "Liaison with M&E specialists and advisors",
            "Community feedback mechanisms and participatory approaches",
            "Integration of learning into programme management",
            "Programme-level advice on decolonised monitoring and learning systems",
        ],
        bgColor: "bg-[#E9D7FF]",
        borderColor: "border-[#D0B2FF]",
    },
    {
        title: "Grant-Making Fund Management",
        description:
            `I have managed grant portfolios ranging from £3.8 million to £30 million, working with hundreds of local organisations across multiple countries. I have disbursed over £14.8m across diverse sectors including anti-corruption, gender equality, local governance, and media, reaching millions of people. I understand how to design grant-making systems that balance accountability with accessibility, ensuring smaller, grassroots organisations can access funding alongside larger players. My approach prioritises equity, transparency, and building grantee capacity.`,
        items: [
            "Grant strategy development",
            "Grant-making system design and implementation",
            "Due diligence and compliance processes",
            "Portfolio analysis and performance management",
            "Equity-focused grant-making approaches",
        ],
        bgColor: "bg-[#CCE8FF]",
        borderColor: "border-[#A8D4F9]",
    },
    {
        title: "Capacity Building",
        description:
            "Building capacity isn't about importing external solutions - it is about strengthening what exists and enabling people to lead their own development. I provide training, coaching, and mentoring that respects local knowledge, builds on existing strengths, and creates lasting change. I am particularly committed to developing the next generation of development leaders",
        items: [
            "Skills development in strategic planning, M&E, and adaptive management",
            "Training workshops for organisations and teams",
            "Coaching and mentoring for programme leaders",
            "Support for locally-led development transitions",
            "Leadership development programmes",
        ],
        bgColor: "bg-[#FFD5D5]",
        borderColor: "border-[#FFB3B3]",
    },
];

// About page
export const aboutContent = {
    title: "About",
    description1: `Born in the UK and raised in Germany and Ghana, I have always viewed the world through multiple lenses. This multicultural perspective shapes how I work in international development: recognising that sustainable change must be locally owned, not externally imposed. I specialise in supporting organisations to transition from donor-dependentprogrammes to genuinely locally led models—not as an aspiration, but as an operational reality. I have done this at scale, most notably leading the successful transition of STAR-Ghana, a £22m governance programme, into an independent foundation that continues to thrive beyond donor support.`,
    description2: `My approach draws on more than 20 years of experience across 18 countries, at both field and headquarters levels. I understand what donors require, what communities rioritise, and how to design programmes that meet both—while meaningfully transferring power and resources to local actors. I have worked in countries across Africa, Asia, Latin America, and the Caribbean,including Ghana, Nigeria, Sierra Leone, Uganda, South Sudan, Burkina Faso,Ethiopia, Myanmar, Zimbabwe, Barbados, Grenada, Guyana, Jamaica, St Lucia, St. Vincent and the Grenadines, and Trinidad and Tobago.`,
    illustrationLeft: "/images/decors/Looper-3.svg",
    illustrationRight: "/images/decors/Looper-2.svg",
};

export const founderData = {
    title: "About Me",
    name: "Seth Lartey",
    image: "/images/founder.jpeg",
    alt: "Seth Lartey - Founder",
    paragraphs: [
        `“Strategy means little without purpose. My work is about helping organisations turn intention into lasting impact.”`,
        `As an international development and strategy expert I have helped organisations strengthen leadership, governance, and performance. I led transformational initiatives including the transition of STAR-Ghana into an independent national entity. Guided by values of equity, accountability, and innovation, I support mission-driven organisations to move from vision to action — and action to impact.`,
        `My work reflects a deep belief that strong institutions and empowered leadership are the foundation of social progress. Whether advising executive teams, supporting grassroots organisations, or guiding multi-country programmes, I bring a thoughtful, values-driven approach rooted in real-world experience and a commitment to meaningful impact.`
    ],
};

export const valueProposition = [
    {
        icon: Eye,
        title: "Vision",
        description:
            "To be a leading organization empowering communities through innovation, integrity, and inclusivity.",
    },
    {
        icon: Goal,
        title: "Mission",
        description:
            "To provide impactful, data-driven solutions that enhance community development and foster sustainable growth.",
    },
    {
        icon: Gem,
        title: "Unique Value",
        description:
            "We combine local expertise, modern technology, and strategic partnerships to deliver measurable impact and long-term value.",
    },
];

export const propositionContent = {
    tagline: "How I can help",
    heading: "Bringing clarity and integrity to strategy, performance, and leadership.",
    intro: `I provide tailored consulting services to international development organisations. All services are designed to meet your specific context and challenges, with a focus on mpowering local actors and building sustainable capacity.`,
    subheading: "Why we're better",
    details: [``],
    image: {
        src: "/images/Team-collaboration.JPG",
        alt: "Team collaboration - two people working on a project board",
    }
};

// Works /Projects Page
export const projects = [
    {
        title: "Identify Opportunities",
        description:
            "Easily uncover untapped areas to explore and expand your reach effortlessly.",
        imageUrl: "/images/project/1.JPG"
    },
    {
        title: "Build Authority",
        description:
            "Create valuable content that resonates, inspires trust, and positions you as an expert.",
        imageUrl: "/images/project/2.JPG"
    },
    {
        title: "Instant Insights",
        description:
            "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
        imageUrl: "/images/project/3.jpeg"
    },
    {
        title: "Engage with Your Audience",
        description:
            "Boost audience engagement with interactive features like polls, quizzes, and forms.",
        imageUrl: "/images/project/4.jpeg"
    },
];

// Footer 
export const footerContent = [
    {
        title: "Quick Links",
        links: [
            {
                title: "Home",
                href: "/"
            },
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Services",
                href: "/services"
            },
            {
                title: "Projects",
                href: "/works"
            },
            {
                title: "Contact",
                href: "/contact"
            },
        ],
    },
    {
        title: "Socials",
        links: [
            { title: "LinkedIn", href: "https://www.linkedin.com/in/seth-lartey" },
            { title: "Devex", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { title: "Privacy Policy", href: "#" },
            { title: "Terms and Conditions", href: "#" },
        ],
    },
    {
        title: "Contacts",
        links: [
            {
                title: "+(000) 000 000 0000",
                href: "tel:+000000000000"
            },
            {
                title: "admin@splarteyconsulting.com",
                href: "mailto:admin@splarteyconsulting.com"
            },
            {
                title: "London UK",
                href: "#"
            },
        ],
    },
];
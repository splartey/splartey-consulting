import { Blocks, Bot, ChartPie } from "lucide-react";

// Navigation links
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/works" },
];

// Home page
export const heroData = {
    badgeImageUrl: "/medal.png",
    badgeText: "Award Winning",
    heroTitle: "Empowering Global Impact Through Strategic Leadership Solutions.",
    heroDescription: "SPLartey Consulting helps organizations and individuals achieve peak performance through tailored strategy, leadership development, and innovative solutions. Let's build your success story.",
    heroImageUrl: "/hero-image.JPG"
}

export const skills = [
    "Programme Design & Delivery",
    "Team Leadership & People Development",
    "Partnership & Stakeholder Management",
    "Governance & Compliance",
];

export const impactContent = {
    title: "Strategic Solutions for Transformative Impact",
    description1: "We provide bespoke consulting solutions that empower organizations to lead with clarity, strengthen performance, and achieve lasting impact. Our services span strategy development, institutional strengthening, governance, leadership, and program delivery, ensuring that every intervention is both practical and sustainable.",
    description2: "With a deep understanding of complex development environments across Africa, Asia, and the Caribbean, we bridge global insight with local realities to help partners navigate change effectively. Guided by our core values of equity, accountability, and innovation, we design solutions that translate ambition into measurable results."
}

// Services page
export const servicesData = [
    {
        title: "Strategy Advisory",
        description:
            "We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.",
        items: [
            "Strategy development & facilitation",
            "Policy framework design",
            "Organizational assessments",
        ],
        bgColor: "bg-[#D7F8E1]",
        borderColor: "border-[#B8EAC7]",
    },
    {
        title: "Project Design & Management",
        description:
            "From concept to completion, we help organizations design, launch, and manage impactful initiatives.",
        items: [
            "Proposal development",
            "Strategy development & facilitation",
            "Programme inception/start-up",
            "Risk & performance management",
        ],
        bgColor: "bg-[#E8FF88]",
        borderColor: "border-[#D9F76A]",
    },
    {
        title: "Capacity Building",
        description:
            "We strengthen leadership, systems, and teams, empowering organizations to lead lasting change.",
        items: [
            "Leadership and governance training",
            "Coaching for NGOs and CBOs",
            "Systems strengthening",
        ],
        bgColor: "bg-[#E9D7FF]",
        borderColor: "border-[#D0B2FF]",
    },
    {
        title: "Monitoring Evaluation & Learning",
        description:
            "We design systems that measure progress, amplify learning, and promote evidence-based decisions.",
        items: ["MEL Framework Design", "Decolonized feedback systems"],
        bgColor: "bg-[#CCE8FF]",
        borderColor: "border-[#A8D4F9]",
    },
    {
        title: "Reporting & Knowledge Products",
        description:
            "We transform data and insights into powerful communication tools that inspire trust and impact.",
        items: [
            "Donor communication tools",
            "Learning papers & thought leadership content",
        ],
        bgColor: "bg-[#FFD5D5]",
        borderColor: "border-[#FFB3B3]",
    },
];

// About page
export const aboutcontent = {
    title: "About us",
    description1: "SPLartey Consulting is a specialist management consultancy dedicated to strengthening strategy, performance, and leadership across the international development sector. We partner with NGOs, INGOs, governments, and development organizations to design and implement solutions that drive meaningful, measurable change.",
    description2: "Built on years of field-tested experience, SPLartey Consulting blends strategic insight with practical execution. Our approach is rooted in collaboration, accountability, and innovation, ensuring that every engagement leads to sustainable progress. Guided by deep contextual understanding, we help organizations align vision with action and deliver results that last.",
    illustrationLeft: "/Looper-3.svg",
    illustrationRight: "/Looper-2.svg",
};

export const founderData = {
    name: "Seth Lartey",
    title: "Meet the Founder",
    image: "/founder.jpeg",
    alt: "Seth Lartey - Founder",
    paragraphs: [
        `Seth Lartey is the founder and principal consultant at SPLartey Consulting, bringing over 25 years of experience in international development, strategy, and institutional transformation. His career spans leadership roles across Africa, Asia, and the Caribbean, where he has successfully guided organizations, programmes, and teams to deliver measurable, lasting results.`,
        `Seth's work has focused on helping NGOs, governments, and development partners strengthen governance, inclusion, and performance. Notably, he played a key role in supporting the transition of STAR-Ghana into an independent national entity, a milestone that reflects his ability to blend strategic foresight with operational excellence.`,
        `Guided by values of equity, accountability, and innovation, Seth founded SPLartey Consulting to bridge the gap between strategy and implementation. His approach is grounded in collaboration, integrity, and a genuine commitment to helping organizations thrive. For Seth, leadership is not just about direction — it's about empowering others to create meaningful, sustainable change.`,
    ],
};

export const valueProposition = [
    {
        icon: Blocks,
        title: "Our Vision",
        description:
            "To be a leading organization empowering communities through innovation, integrity, and inclusivity.",
    },
    {
        icon: Bot,
        title: "Our Mission",
        description:
            "To provide impactful, data-driven solutions that enhance community development and foster sustainable growth.",
    },
    {
        icon: ChartPie,
        title: "Unique Value Proposition",
        description:
            "We combine local expertise, modern technology, and strategic partnerships to deliver measurable impact and long-term value.",
    },
];

export const propositionContent = {
    tagline: "Why we're different",
    heading: "Bringing clarity and integrity to strategy, performance, and leadership.",
    intro: "At SPLartey Consulting, our difference lies in how we think and work. We combine strategic foresight with a people-centered approach, ensuring every solution is practical, inclusive, and grounded in real-world experience. Guided by equity, accountability, and innovation, we help organizations turn ideas into lasting impact.",
    subheading: "Why we're better",
    details: [
        "SPLartey Consulting brings over two decades of hands-on leadership in international development, experience that transforms strategy into measurable results. We understand the realities of working across diverse regions and systems, and we know how to design solutions that stand up to those complexities.",
        "Our clients value our honesty, reliability, and ability to deliver results that endure. Every project reflects our commitment to excellence and to building organizations that are stronger, more adaptive, and better equipped to lead change.",
    ],
    image: {
        src: "/Team-collaboration.jpg",
        alt: "Team collaboration - two people working on a project board",
    }
};

// Works page
export const projects = [
    {
        title: "Identify Opportunities",
        description:
            "Easily uncover untapped areas to explore and expand your reach effortlessly.",
        imageUrl: "/Team-collaboration.JPG"
    },
    {
        title: "Build Authority",
        description:
            "Create valuable content that resonates, inspires trust, and positions you as an expert.",
        imageUrl: "/Team-collaboration.JPG"
    },
    {
        title: "Instant Insights",
        description:
            "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
        imageUrl: "/Team-collaboration.JPG"
    },
    {
        title: "Engage with Your Audience",
        description:
            "Boost audience engagement with interactive features like polls, quizzes, and forms.",
        imageUrl: "/Team-collaboration.JPG"
    },
    {
        title: "Automate Your Workflow",
        description:
            "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
        imageUrl: "/Team-collaboration.JPG"
    },
];
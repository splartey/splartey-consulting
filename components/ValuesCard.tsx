import { LucideIcon } from "lucide-react";

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function ValueCard({
    icon: Icon,
    title,
    description
}: ValueCardProps) {
    return (
        <div className="flex flex-col border rounded-2xl py-8 px-6 bg-gray-50 hover:bg-white text-left shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
                {title}
            </span>
            <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
                {description}
            </p>
        </div>
    );
}

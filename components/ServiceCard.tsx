import { CheckCircle } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";

export default function ServiceCard({ title, description, items, bgColor, borderColor }: ServiceCardProps) {
    return (

        <Tilt rotationFactor={8} className={`rounded-3xl p-4 md:p-6 border ${bgColor} ${borderColor} transition-all`}>
            <h3 className="font-semibold text-xl md:text-2xl mb-3">
                {title}
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                {description}
            </p>

            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm md:text-[15px]">
                        <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </Tilt>
    );
}

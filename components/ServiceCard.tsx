import { CheckCircle } from "lucide-react";

export default function ServiceCard({ title, description, items, bgColor, borderColor }: ServiceCardProps) {
    return (
        <div className={`rounded-3xl p-6 md:p-8 shadow-sm border ${bgColor} ${borderColor}`} >
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-sm text-gray-700 mb-4">{description}</p>

            <div className="space-y-3 pt-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
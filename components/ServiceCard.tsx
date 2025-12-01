import { CircleCheck } from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServiceCard({
    title,
    items,
    bgColor,
    borderColor
}: ServiceCardProps) {
    return (
        <Card
            className={cn(
                "relative overflow-hidden rounded-3xl border shadow-sm transition-all p-6 flex flex-col h-full",
                borderColor,
                bgColor
            )}
        >
            <CardHeader className="p-0">
                <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0  flex-1">

                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index} className="flex gap-2.5 cursor-pointer" >
                            <span className="h-6 w-6 shrink-0 mt-0.5">
                                <CircleCheck className="h-6 w-6 text-primary" />
                            </span>
                            <p className="font-medium text-gray-700">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="p-0 mt-2" />
        </Card >
    );
}

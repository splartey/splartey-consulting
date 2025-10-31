import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ValuesCardProps {
    title: string;
    description: string;
}

export default function ValuesCard({ title, description }: ValuesCardProps) {
    return (
        <Card className="bg-white rounded-3xl shadow-sm flex-1 max-w-sm min-w-[380px] p-0 border-none">
            <CardHeader className="p-6 pb-2 text-center">
                <CardTitle className="text-xl font-bold text-primary leading-snug">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-700 text-sm leading-relaxed text-center px-6">
                {description}
            </CardDescription>
        </Card>
    );
}
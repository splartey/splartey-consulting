import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import Image from "next/image";

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
    return (
        <Card
            key={title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
        >
            <CardHeader>
                <h4 className="mt-3! text-xl font-semibold tracking-tight">
                    {title}
                </h4>
                <article className="mt-1 text-muted-foreground text-[17px]">
                    {description}
                </article>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
                <div className="relative bg-muted h-40 ml-6 rounded-tl-xl">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover rounded-tl-2xl"
                    />
                </div>
            </CardContent>
        </Card>
    )
}
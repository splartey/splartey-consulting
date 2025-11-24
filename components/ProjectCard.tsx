import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import Image from "next/image";

import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogImage,
    MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

import { XIcon } from "lucide-react";

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
    return (
        <Card
            key={title}
            className="group flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 transition-all"
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

                <MorphingDialog
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                >
                    <MorphingDialogTrigger className="w-full">
                        <div className="relative bg-muted h-40 ml-6 rounded-tl-xl overflow-hidden cursor-pointer">

                            <div className="absolute inset-0 transition-all duration-300 ease-out
                              group-hover:-translate-y-2 group-hover:scale-[1.05]
                              group-hover:shadow-xl group-hover:shadow-black/20 rounded-tl-2xl">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </MorphingDialogTrigger>
                    <MorphingDialogContainer>
                        <MorphingDialogContent className="relative">

                            <MorphingDialogImage
                                src={imageUrl}
                                alt={title}
                                className="h-auto w-full max-w-[90vw] object-cover lg:h-[90vh]"
                            />

                        </MorphingDialogContent>

                        <MorphingDialogClose
                            className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1 shadow-md"
                            variants={{
                                initial: { opacity: 0 },
                                animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
                                exit: { opacity: 0, transition: { duration: 0 } },
                            }}
                        >
                            <XIcon className="h-5 w-5 text-zinc-600" />
                        </MorphingDialogClose>
                    </MorphingDialogContainer>

                </MorphingDialog>
            </CardContent>
        </Card>
    );
}

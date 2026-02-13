import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { CTAData } from "@/constants";


export function CallToAction() {

    const { heading, description, ctaPrimaryBtn, ctaSecondaryBtn } = CTAData

    return (
        <section className="relative">

            <div className="py-28 bg-primary/2">
                <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border-y py-8 max-sm:overflow-hidden space-y-2 ">
                    <>
                        <span className="max-sm:sr-only">
                            <PlusIcon
                                className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
                                strokeWidth={1}
                            />
                            <PlusIcon
                                className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
                                strokeWidth={1}
                            />
                            <PlusIcon
                                className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
                                strokeWidth={1}
                            />
                            <PlusIcon
                                className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
                                strokeWidth={1}
                            />
                        </span>

                        <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
                        <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

                        <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />
                    </>
                    <article className="max-sm:p-3">
                        <h2 className="text-center font-semibold text-xl md:text-3xl mb-3">
                            {heading}
                        </h2>
                        <p className="text-balance text-center font-medium text-muted-foreground text-sm md:text-base">
                            {description}
                        </p>
                    </article>

                    <div className="flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-2">
                        <Button asChild size='lg'
                            variant="outline"
                            className="btn-outline rounded-full w-full sm:w-auto"
                        >
                            <Link href={ctaSecondaryBtn.href} >
                                {ctaSecondaryBtn.label}
                            </Link>
                        </Button>

                        <Button asChild variant='default'
                            size='lg'
                            className="btn-primary rounded-full w-full sm:w-auto"
                        >
                            <Link href={ctaPrimaryBtn.href}>
                                {ctaPrimaryBtn.label}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

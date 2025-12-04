import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x overflow-hidden ">
            <div className="translate-x-1/2 top-px pointer-events-none absolute left-1/2 w-screen border-t" />
            <div className="border-b px-2 py-8">
                <h2 className="text-center font-semibold text-lg md:text-2xl">
                    Ready to Collaborate?
                </h2>
                <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
                    Whether you're building programs or strengthening capacity, I'm here to help. Flexible fees available.
                </p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
                <Button asChild variant="outline" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                        Get Started <ArrowRightIcon />
                    </Link>
                </Button>
            </div>
            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
        </div>
    );
}

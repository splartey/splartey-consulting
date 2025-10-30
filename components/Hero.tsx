import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";

export default function Hero() {
    return (
        <section id="hero" className="w-full min-h-screen pt-20 flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-16">
                <Badge
                    variant="secondary"
                    className="mb-4 w-fit bg-[#F8FEE7] text-sm rounded-full text-primary font-medium space-x-1 py-2 flex gap-2 items-center border-gray-200"
                >
                    <Image
                        src="/medal.png"
                        alt="Award icon"
                        width={20}
                        height={20}
                    />
                    Award Winning
                    <IconChevronRight stroke={3} />
                </Badge>

                <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight mb-4">
                    Empowering Global Impact <br />
                    Through Strategic <br className="hidden sm:block" />
                    Leadership Solutions.
                </h1>

                <p className="text-gray-600 mb-8 text-sm md:text-base max-w-md">
                    SPLartey Consulting helps organizations and individuals achieve peak
                    performance through tailored strategy, leadership development, and
                    innovative solutions. Let&apos;s build your success story.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button asChild
                        size="lg"
                        className="px-6 btn-primary">
                        <Link href="/works">Explore projects</Link>
                    </Button>
                    <Button asChild
                        size="lg"
                        variant="outline" className="px-6 btn-outline">
                        <Link href="/about">About us</Link>
                    </Button>
                </div>
            </div>
            <div className="relative w-full h-[50vh] lg:w-1/2 lg:h-auto">
                <Image
                    src="/hero-image.JPG"
                    alt="SPLartey Workshop"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
        </section>

    );
}

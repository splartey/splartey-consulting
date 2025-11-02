"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                        Get in touch
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        We would like to hear from you
                    </p>
                    <ContactForm />
                </div>

                <div className="hidden lg:block">
                    <div className="relative w-full h-[680px] rounded-2xl overflow-hidden">
                        <Image
                            src="/contact-image.jpg"
                            alt="Team discussing project"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

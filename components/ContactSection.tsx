"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

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

                    <form className="mt-10 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input type="text" placeholder="First name" required />
                            <Input type="text" placeholder="Last name" required />
                        </div>

                        <Input type="email" placeholder="you@example.com" required />
                        <Input type="tel" placeholder="+254 700 000 000" required />

                        <Textarea
                            placeholder="Message"
                            className="min-h-[120px]"
                            required
                        />

                        <div className="flex items-center space-x-2">
                            <Checkbox id="privacy" required />
                            <label
                                htmlFor="privacy"
                                className="text-sm text-gray-600 leading-snug"
                            >
                                You agree to our friendly{" "}
                                <Link
                                    href="/privacy"
                                    className="underline text-primary hover:text-primary/80"
                                >
                                    privacy policy
                                </Link>
                                .
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full btn-primary"
                        >
                            Send message
                        </Button>
                    </form>
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

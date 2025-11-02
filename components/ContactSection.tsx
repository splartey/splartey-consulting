"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
                            <div className="space-y-1">
                                <Label htmlFor="firstName" className="mb-2">First name</Label>
                                <Input id="firstName" type="text" placeholder="John" required />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="lastName" className="mb-2">Last name</Label>
                                <Input id="lastName" type="text" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="email" className="mb-2">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="phone" className="mb-2">Phone</Label>
                            <Input id="phone" type="tel" placeholder="+254 700 000 000" required />
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="message" className="mb-2">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Write your message..."
                                className="min-h-[120px]"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="privacy" required />
                            <Label
                                htmlFor="privacy"
                                className="text-sm text-gray-600 leading-snug"
                            >
                                You agree to our friendly{" "}
                                <Link
                                    href="/privacy"
                                    className="underline text-primary hover:text-primary/80"
                                >
                                    privacy policy
                                </Link>.
                            </Label>
                        </div>

                        <Button type="submit" className="w-full btn-primary">
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

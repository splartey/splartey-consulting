"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/utils";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { Loader } from "lucide-react";

type ContactFormType = z.infer<typeof contactFormSchema>;

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    const onSubmit = async (data: ContactFormType) => {
        setIsLoading(true);
        try {
            console.log("Form Data:", data);
            // Later we'll call API `/api/contact`

        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
                toast.success(`Thank you for the submission`)
            }, 1500)
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CustomInput
                        control={form.control}
                        name="firstName"
                        label="First Name *"
                        placeholder="John"
                    />

                    <CustomInput
                        control={form.control}
                        name="lastName"
                        label="Last Name *"
                        placeholder="Doe"
                    />
                </div>

                <CustomInput
                    control={form.control}
                    name="email"
                    label="Email *"
                    placeholder="you@example.com"
                    type="email"
                />

                <CustomInput
                    control={form.control}
                    name="phone"
                    label="Phone"
                    placeholder="+44 555 000 000"
                    type="tel"
                    autoComplete
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Write your message..."
                                    className="min-h-[120px]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" name="privacy" required />
                    <Label
                        htmlFor="privacy"
                        className="text-sm md:text-base text-gray-700 leading-snug"
                    >
                        You agree to our friendly{" "}
                        <Link href="/privacy" className="underline underline-offset-4 text-primary hover:text-primary/80">
                            Privacy Policy
                        </Link>.
                    </Label>
                </div>

                <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                    {isLoading ? (
                        <span className="flex items-center gap-2" ><Loader className="w-4 h-4 animate-spin" />
                            Sending...
                        </span>)
                        : "Send message"}
                </Button>
            </form>
        </Form>
    );
}
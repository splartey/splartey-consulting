"use client";

import { sendEmail } from "@/app/actions/sendEmail";

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
            message: "",
            privacy: false
        }
    });

    const onSubmit = async (data: ContactFormType) => {
        setIsLoading(true);
        try {
            console.log("Form data being sent:", data);

            const response = await sendEmail(data);

            if (!response.success) {
                toast.error("Something went wrong. Please try again later.");
                return;
            }

            toast.success("Message sent successfully!");
            form.reset();
        } catch (error) {
            toast.error("Failed to send message");
        } finally {
            setIsLoading(false);
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
                    placeholder="youremail@example.com"
                    type="email"
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

                <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>

                            <Label htmlFor="privacy" className="text-sm text-gray-700">
                                You agree to the{" "}
                                <Link href="/privacy-policy" className="text-primary underline underline-offset-4">
                                    Privacy Policy
                                </Link>.
                            </Label>

                            <FormMessage />
                        </FormItem>
                    )}
                />

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
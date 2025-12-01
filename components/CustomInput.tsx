"use client";

import {
    FormField,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/lib/utils";

export type ContactFormType = z.infer<typeof contactFormSchema>;

interface CustomInputProps {
    control: Control<ContactFormType>;
    name: FieldPath<ContactFormType>;
    label: string;
    placeholder: string;
    type?: string;
    autoComplete?: boolean;
}

export function CustomInput({
    control,
    name,
    label,
    placeholder,
    type
}: CustomInputProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="flex flex-col gap-1">
                    <FormLabel htmlFor={name} >{label}</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            id={name}
                            value={(field.value ?? "") as string}
                            placeholder={placeholder}
                            type={type ?? (name === "email" ? "email" : "text")}
                        />
                    </FormControl>
                    <FormMessage />
                </div>
            )}
        />
    );
}

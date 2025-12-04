import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { contactPageData } from "@/constants"

export default function ContactPage() {

    const { title, description, imageUrl, alt } = contactPageData;

    return (
        <section className="w-full bg-white py-24 min-h-screen justify-center flex items-center place-content-center">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                        {title}
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        {description}
                    </p>
                    <ContactForm />
                </div>

                <div className="hidden lg:block">
                    <div className="relative w-full h-[680px] rounded-3xl overflow-hidden outline outline-border outline-offset-4 shadow-sm">
                        <Image
                            src={imageUrl}
                            alt={alt}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { contactPageData } from "@/constants"

export default function ContactPage() {

    const { title, description, imageUrl, alt } = contactPageData;

    return (
        <section className="w-full bg-white py-24 md:py-32 flex items-center">
            <article className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
                        {title}
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground mb-8">
                        {description}
                    </p>
                    <ContactForm />
                </div>

                <div className="hidden lg:block">
                    <div className="relative w-full h-[580px] rounded-3xl overflow-hidden shadow-xl outline outline-offset-4 outline-accent-foreground/20">
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
            </article>
        </section>
    );
}
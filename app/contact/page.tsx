import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

const contactPageData = {
    title: "Reach Out",
    description: "Interested in working together? I'd be glad to discuss your needs and how I might support your work.",
    imageUrl: "/images/contact.jpg",
}

export default function ContactPage() {

    const { title, description, imageUrl } = contactPageData;

    return (
        <section className="w-full bg-white py-24 min-h-screen justify-center flex items-center">
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
                    <div className="relative w-full h-[680px] rounded-2xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt="Team discussing project"
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

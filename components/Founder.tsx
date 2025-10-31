import Image from "next/image";

export default function Founder() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div className="relative w-full h-[420px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-gray-400/70 shadow-md">
                    <Image
                        src="/founder.jpeg"
                        alt="Seth Lartey - Founder"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-primary mb-6">
                        Meet the founder
                    </h2>

                    <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                        <p>
                            Seth Lartey is the founder and principal consultant at SPLartey
                            Consulting, bringing over 25 years of experience in international
                            development, strategy, and institutional transformation. His career
                            spans leadership roles across Africa, Asia, and the Caribbean,
                            where he has successfully guided organizations, programmes, and
                            teams to deliver measurable, lasting results.
                        </p>

                        <p>
                            Seth&apos;s work has focused on helping NGOs, governments, and
                            development partners strengthen governance, inclusion, and
                            performance. Notably, he played a key role in supporting the
                            transition of STAR-Ghana into an independent national entity, a
                            milestone that reflects his ability to blend strategic foresight
                            with operational excellence.
                        </p>

                        <p>
                            Guided by values of equity, accountability, and innovation, Seth
                            founded SPLartey Consulting to bridge the gap between strategy and
                            implementation. His approach is grounded in collaboration,
                            integrity, and a genuine commitment to helping organizations thrive.
                            For Seth, leadership is not just about direction&mdash;it&apos;s about
                            empowering others to create meaningful, sustainable change.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
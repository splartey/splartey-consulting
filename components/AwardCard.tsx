import Image from "next/image";

interface AwardCardProps {
    imageUrl: string;
    title: string;
}

export default function AwardCard({ imageUrl, title }: AwardCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center rounded-3xl">
                <Image
                    src={imageUrl}
                    alt={`${title} Icon`}
                    width={90}
                    height={90}
                    className="drop-shadow-md invert"
                />
            </div>

            <article className="flex flex-col items-center mt-5">
                <p className="text-lg font-semibold text-white tracking-wide">
                    {title}
                </p>
            </article>
        </div>
    );
}

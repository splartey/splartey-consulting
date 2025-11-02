export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
    return (
        <div className="value-card">
            <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-primary">
                {title}
            </span>
            <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
                {description}
            </p>
        </div>
    );
}

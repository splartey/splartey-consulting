import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";

export default function WorksSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8">

        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Project Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Explore innovative projects crafted with precision, creativity, and performance in mind.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}

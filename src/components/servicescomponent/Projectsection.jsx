import Image from "next/image";
import { projects } from "@/utils/Projectdata";

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 max-w-[86rem] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-center font-semibold text-black">
          OUR PROJECT
        </h2>

        <div className="mt-4 mb-6 h-1 w-32 bg-secondarycustomBg mx-auto"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Some creative designs created by our agency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative backdrop-blur-sm bg-white/70 border border-white/20 shadow-lg rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:transform hover:scale-[1.02] ${
              project.featured ? "ring-2 ring-purple-500/20 bg-white/80" : ""
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="p-6 backdrop-blur-sm">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.featured && tagIndex === 0
                        ? "bg-customBg text-white"
                        : "bg-gray-100 group-hover:bg-customBg text-gray-700 group-hover:text-white transition-colors duration-300 border border-gray-200"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customBg transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {project.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

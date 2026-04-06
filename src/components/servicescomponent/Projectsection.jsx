import Image from "next/image";
import ProjectModal from "@/components/servicescomponent/Projectmodal";
import * as motion from "motion/react-client";

export default function ProjectsSection({ projects }) {
  const circle1Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 40, y: -30 },
  };

  const circle2Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: -50, y: 40 },
  };

  const circle3Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 60, y: 50 },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 15px 20px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      className="relative mx-auto max-w-[86rem] overflow-hidden px-4 py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="absolute inset-0 opacity-10" whileHover="hover" initial="initial">
        <motion.div
          variants={circle1Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute right-8 top-8 h-40 w-40 rounded-full border-2 border-primary-foreground bg-rose-500"
        />
        <motion.div
          variants={circle2Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute left-8 top-8 h-40 w-40 rounded-full border-2 border-primary-foreground bg-rose-500"
        />
        <motion.div
          variants={circle3Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute bottom-12 left-8 h-40 w-40 rounded-full border-2 border-primary-foreground bg-yellow-500"
        />
        <motion.div
          variants={circle3Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute right-16 top-1/2 h-40 w-40 rounded-full border-2 border-primary-foreground bg-blue-600"
        />
      </motion.div>

      <div className="relative z-10 mb-12 text-center">
        <motion.h2
          className="text-center text-4xl font-semibold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          OUR PROJECT
        </motion.h2>

        <motion.div
          className="mx-auto mb-6 mt-4 h-1 w-32 bg-secondarycustomBg"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="mx-auto max-w-2xl text-lg text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Some creative designs created by our agency
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <ProjectModal key={project.id} project={project}>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 ${
                project.featured ? "bg-white/80 ring-2 ring-purple-500/20" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-6 backdrop-blur-sm">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: tagIndex * 0.1 }}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        project.featured && tagIndex === 0
                          ? "bg-customBg text-white"
                          : "border border-gray-200 bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-customBg group-hover:text-white"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.h3
                  className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-customBg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="absolute inset-0 bg-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </ProjectModal>
        ))}
      </motion.div>
    </motion.section>
  );
}

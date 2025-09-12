import Image from "next/image";
import ProjectModal from "@/components/servicescomponent/Projectmodal";
import * as motion from "motion/react-client";

export default function ProjectsSection({ projects }) {

  const circle1Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 40, y: -30 }
  };
  
  const circle2Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: -50, y: 40 }
  };
  
  const circle3Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 60, y: 50 }
  };
  

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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
      className="py-16 relative px-4 max-w-[86rem] mx-auto overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="absolute inset-0 opacity-10"
        whileHover="hover"
        initial="initial"
      >
        <motion.div 
          variants={circle1Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-8 right-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle2Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-8 left-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle3Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute bottom-12 left-8 w-40 h-40 border-2 bg-yellow-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle3Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-1/2 right-16 w-40 h-40 border-2 bg-blue-600 border-primary-foreground rounded-full"
        />
      </motion.div>

      <div className="text-center mb-12 relative z-10">
        <motion.h2 
          className="text-4xl text-center font-semibold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          OUR PROJECT
        </motion.h2>

        <motion.div 
          className="mt-4 mb-6 h-1 w-32 bg-secondarycustomBg mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        <motion.p 
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Some creative designs created by our agency
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10"
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
              className={`group relative backdrop-blur-sm bg-white/70 border border-white/20 shadow-lg rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${
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
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: tagIndex * 0.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured && tagIndex === 0
                          ? "bg-customBg text-white"
                          : "bg-gray-100 group-hover:bg-customBg text-gray-700 group-hover:text-white transition-colors duration-300 border border-gray-200"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customBg transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </ProjectModal>
        ))}
      </motion.div>
    </motion.section>
  );
}
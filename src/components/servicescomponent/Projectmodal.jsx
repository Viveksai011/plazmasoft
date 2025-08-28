import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { modalData } from "@/utils/dynamic/projectmodal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function ProjectModal({ children, project }) {
  if (!project) return null;
  const modalProject =
    modalData.find((item) => item.id === project.id) || project;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent aira-labelledby={`modal-title-${project.id}`} className="max-w-xl overflow-y-auto !rounded-3xl p-0">
        <div className="relative">
          <div className="relative h-64 overflow-hidden rounded-t-3xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

         
          <div className="p-8">
          
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-bold text-gray-900">
                {modalProject.title}
              </DialogTitle>
            </DialogHeader>

           
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {modalProject.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {modalProject.description}
              </p>
            </div>

         
            {modalProject.demoLink && (
              <div className="flex justify-center">
                <Link
                  href={modalProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-customBg hover:bg-purple-700 text-white font-semibold rounded-3xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Demo
                </Link>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

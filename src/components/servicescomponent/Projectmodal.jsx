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
  const modalProject = modalData.find((item) => item.id === project.id) || project;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        aira-labelledby={`modal-title-${project.id}`}
        className="max-w-xl overflow-y-auto !rounded-3xl p-0"
      >
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
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {modalProject.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-purple-200 bg-purple-100 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Description</h3>
              <p className="leading-relaxed text-gray-600">{modalProject.description}</p>
            </div>

            {modalProject.demoLink && (
              <div className="flex justify-center">
                <Link
                  href={modalProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-3xl bg-customBg px-6 py-2 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-purple-700 hover:shadow-xl"
                >
                  <ExternalLink className="h-5 w-5" />
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

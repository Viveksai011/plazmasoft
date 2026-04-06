import { StarRating } from "@/components/Testimonial/star-rating";
import Image from "next/image";

export function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between gap-2 rounded-2xl border border-purple-200/50 bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-customBg/60 hover:bg-white/80 hover:shadow-xl">
      <StarRating rating={testimonial.rating} />

      <p className="text-sm leading-relaxed text-gray-700">{testimonial.content}</p>

      <div className="flex items-center">
        <Image
          src={testimonial.avatar || "/img/avatarfallback.webp"}
          alt={testimonial.name}
          className="mr-4 h-12 w-12 rounded-full object-cover"
          width={100}
          height={100}
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-customBg">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

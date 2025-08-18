import { StarRating } from "@/components/Testimonial/star-rating";
import Image from "next/image";

export function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col justify-between gap-2 bg-white/70 backdrop-blur-sm rounded-2xl h-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200/50 hover:border-purple-300/70 hover:bg-white/80">
      <StarRating rating={testimonial.rating} />

      <p className="text-gray-700 text-sm leading-relaxed ">
        {testimonial.content}
      </p>

      <div className="flex items-center ">
        <Image
          src={testimonial.avatar || "/img/avatarfallback.webp"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
          width={100}
          height={100}
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-customBg text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

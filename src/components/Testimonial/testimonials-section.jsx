import { TestimonialCard } from "@/components/Testimonial/testimonial-card";

export function TestimonialsSection({ children, testimonials = [] }) {
  const data = testimonials && testimonials.length > 0 ? testimonials : Testimonaldata;

  const firstRow = data.slice(0, Math.ceil(data.length / 2));
  const secondRow = data.slice(Math.ceil(data.length / 2));

  return (
    <section className="relative mx-auto w-full max-w-[92rem] overflow-hidden px-4 py-20">
      <div className="mb-16 text-center">{children}</div>

      <div className="absolute inset-y-0 left-0 top-[28%] z-10 h-[75%] w-[15%] bg-gradient-to-r from-[#E7F6FE] to-transparent" />
      <div className="absolute inset-y-0 right-0 top-[28%] z-10 h-[75%] w-[15%] bg-gradient-to-l from-[#E7F6FE] to-transparent" />

      {firstRow.length > 0 && (
        <div className="animate-marquee-left mb-8 flex hover:[animation-play-state:paused]">
          {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="mx-4 w-full max-w-[26rem] flex-shrink-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      )}

      {secondRow.length > 0 && (
        <div className="animate-marquee-right flex hover:[animation-play-state:paused]">
          {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="mx-4 w-full max-w-[26rem] flex-shrink-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

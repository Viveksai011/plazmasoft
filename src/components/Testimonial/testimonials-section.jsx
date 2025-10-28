import { TestimonialCard } from "@/components/Testimonial/testimonial-card";

export function TestimonialsSection({ children, testimonials = [] }) {
  const data = testimonials && testimonials.length > 0 ? testimonials : Testimonaldata;

  const firstRow = data.slice(0, Math.ceil(data.length / 2));
  const secondRow = data.slice(Math.ceil(data.length / 2));

  return (
    <section className="py-20 px-4 max-w-[92rem] w-full relative overflow-hidden mx-auto">
      <div className="text-center mb-16">{children}</div>

      <div className="z-10 absolute left-0 h-[75%] top-[28%] inset-y-0 w-[15%] bg-gradient-to-r from-[#E7F6FE] to-transparent" />
      <div className="z-10 absolute right-0 h-[75%] top-[28%] inset-y-0 w-[15%] bg-gradient-to-l from-[#E7F6FE] to-transparent" />

      {firstRow.length > 0 && (
        <div className="flex animate-marquee-left hover:[animation-play-state:paused] mb-8">
          {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 max-w-[26rem] w-full mx-4"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      )}

      {secondRow.length > 0 && (
        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {[...secondRow, ...secondRow, ...secondRow].map(
            (testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 max-w-[26rem] w-full mx-4"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}
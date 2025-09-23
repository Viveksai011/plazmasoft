import { TestimonialCard } from "@/components/Testimonial/testimonial-card";


const testimonials = [
  {
    id: 1,
    name: "Jerome Bell",
    title: "Founder of Uranus",
    content:
      "plazmesoft's attention to detail and creative flair made our collaboration truly enjoyable. The designs they delivered were impressive.",
    avatar: null,
    rating: 5,
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    title: "CEO of Coca Soft",
    content:
      "plazmesoft is a design partner you can rely on. They grasped our brief accurately and produced designs.",
    avatar: null,
    rating: 5,
  },
  {
    id: 3,
    name: "Kristin Watson",
    title: "Founder of Neptune",
    content:
      "Their design expertise is unmatched. They understood our unique needs and added a touch of creativity that set our project apart.",
    avatar: null,
    rating: 5,
  },
  {
    id: 4,
    name: "Albert Flores",
    title: "CEO of Coca Soft",
    content:
      "Impressed doesn't cover it! Our project went from good to outstanding. This design team understands perfection.",
    avatar: null,
    rating: 5,
  },
  {
    id: 5,
    name: "Jerome Bell",
    title: "Founder of Uranus",
    content:
      "Kudos to this design crew! They took our ideas and ran with them, delivering top-notch designs that wowed everyone.",
    avatar: null,
    rating: 5,
  },
  {
    id: 6,
    name: "Kristin Watson",
    title: "Founder of Neptune",
    content:
      "Working with this design team was fantastic! They nailed our vision, delivering designs that blew us away. Highly recommend!",
    avatar: null,
    rating: 5,
  },
];

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);

export function TestimonialsSection({ children }) {
  return (
    <section className="py-20 px-4 max-w-[92rem] w-full relative overflow-hidden mx-auto">
      <div className="text-center mb-16">
        {children}
      </div>

      <div className="z-10 absolute left-0 h-[75%] top-[28%] inset-y-0 w-[15%] bg-gradient-to-r from-[#E7F6FE] to-transparent" />
      <div className="z-10 absolute right-0 h-[75%] top-[28%] inset-y-0 w-[15%] bg-gradient-to-l from-[#E7F6FE] to-transparent" />

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
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contactform = () => {
  return (
    <form className="space-y-6">
      <Input
        type="text"
        placeholder="Your Name"
        className="rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary "
      />

      <Input
        type="email"
        placeholder="Your Email"
        className="rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary "
      />

      <Input
        type="text"
        placeholder="Your Phone"
        className="rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary "
      />

      <Textarea
        rows={6}
        placeholder="Your Message"
        className="rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color outline-hidden focus:border-primary "
      />

      <Button
        type="submit"
        className="w-full rounded-sm border border-primary bg-primary p-3 text-white transition hover:bg-primary/90"
      >
        Send Message
      </Button>
    </form>
  );
};

export default Contactform;

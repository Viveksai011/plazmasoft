import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contactform = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex max-md:flex-col gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">First name</Label>
          <input
            type="text"
            placeholder="Jane"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400
    outline-none resize-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Last name</Label>
          <input
            type="text"
            placeholder="Smith"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400
    outline-none resize-none"
          />
        </div>
      </div>

      <div className="flex max-md:flex-col gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Email</Label>
          <input
            type="email"
            placeholder="jane@framer.com"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400
    outline-none resize-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Company name</Label>
          <input
            type="text"
            placeholder="Framer"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400
    outline-none resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm text-gray-600">How can we help?</Label>
        <textarea
          rows={4}
          placeholder="Describe your problem"
          className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400
    outline-none resize-none"
        />
      </div>

      <Button className="bg-customBg text-white hover:bg-customBg/80 w-full sm:w-auto sm:justify-self-center px-8">
        Send message
      </Button>
    </form>
  );
};

export default Contactform;

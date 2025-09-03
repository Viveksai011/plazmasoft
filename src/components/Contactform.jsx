"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, lastName, email, company, message } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      toast("Missing Fields", {
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast("Invalid Email", {
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      company,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      toast("Message Sent!", {
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast("Error", {
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex max-md:flex-col gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">First name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jane"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Last name</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="flex max-md:flex-col gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@framer.com"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Label className="text-sm text-gray-600">Company name</Label>
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Framer"
            className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm text-gray-600">How can we help?</Label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your problem"
          className="bg-white/5 border ring-1 ring-purple-400 rounded-lg px-4 py-2 text-secondarycustomBg placeholder:text-gray-400 outline-none"
        />
      </div>

      <Button
        type="submit"
        className="bg-customBg text-white hover:bg-customBg/80 w-full sm:w-auto sm:justify-self-center px-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
};

export default Contactform;

"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Fashion Street", "Dhaka, Bangladesh"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+880 1XXX-XXXXXX", "Sat - Thu, 10am - 8pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@modestcollection.com", "support@modestcollection.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Saturday - Thursday: 10am - 8pm", "Friday: Closed"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Back Button */}
      <div className="absolute left-4 top-20 z-10 sm:left-6 lg:left-8">
        <BackButton />
      </div>

      {/* Header */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl font-light text-stone-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Have a question or feedback? We&apos;d love to hear from you. 
            Our team is here to help with anything you need.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto mb-4 inline-flex rounded-full bg-stone-100 p-3">
                  <info.icon className="h-6 w-6 text-stone-700" />
                </div>
                <h3 className="text-lg font-medium text-stone-900">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="mt-1 text-sm text-stone-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-sm lg:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-stone-900">Message Sent!</h3>
                <p className="mt-2 text-stone-600">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-stone-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-light text-stone-900">Send us a Message</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-md border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-md border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-md border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none"
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-sm bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] overflow-hidden rounded-lg bg-stone-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-stone-400" />
                <p className="mt-4 text-stone-600">Interactive Map Coming Soon</p>
                <p className="text-sm text-stone-500">123 Fashion Street, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

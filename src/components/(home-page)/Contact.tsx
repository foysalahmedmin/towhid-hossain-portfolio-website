import { SectionComponentProps } from "@/interfaces";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Phone,
  Send,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const Contact = ({ className, isActive }: SectionComponentProps) => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+971 52 928 6636", "+880 1927 111 222"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["towhid.hossain@fifo-tech.com"],
    },
    // {
    //   icon: <MapPin className="h-6 w-6" />,
    //   title: "Office",
    //   details: [
    //     "92, Ali Bhaban, Lift 5 & 6, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka",
    //   ],
    // },
    // {
    //   icon: <Clock className="h-6 w-6" />,
    //   title: "Business Hours",
    //   details: ["Mon - Fri: 9:00 AM - 6:00 PM", "EST (UTC-5)"],
    // },
  ];

  const inquiryTypes = [
    "Speaking Engagement",
    "Business Consultation",
    "Media Inquiry",
    "Partnership Opportunity",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    // Reset after 3 seconds
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-muted/25">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/75 py-24">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold">Let's Connect</h1>
          <p className="mx-auto max-w-2xl text-xl opacity-90">
            Whether you're interested in speaking engagements, business
            consulting, or exploring partnership opportunities, I'm here to
            help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto -mt-16 px-6">
        <div className="rounded-2xl bg-card p-8 shadow-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold">
                    Contact Information
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    Reach out through any of these channels or fill out the
                    contact form. I typically respond within 24-48 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="rounded-lg bg-primary/5 p-3">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-muted-foreground"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg border bg-transparent px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                {formStatus !== "idle" && (
                  <div
                    className={`rounded-lg p-4 ${
                      formStatus === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {formStatus === "success" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span>
                        {formStatus === "success"
                          ? "Message sent successfully!"
                          : "There was an error sending your message. Please try again."}
                      </span>
                    </div>
                  </div>
                )}

                <button type="submit" className="button">
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="mb-12 text-center text-2xl font-bold">
          Global Presence
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-card p-8 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">International Offices</h3>
            <p className="text-muted-foreground">
              Present in major business hubs across North America, Europe, and
              Asia
            </p>
          </div>
          <div className="rounded-xl bg-card p-8 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">24/7 Support</h3>
            <p className="text-muted-foreground">
              Global team available round the clock for urgent inquiries
            </p>
          </div>
          <div className="rounded-xl bg-card p-8 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Local Teams</h3>
            <p className="text-muted-foreground">
              Dedicated regional teams for personalized support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

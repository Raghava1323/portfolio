// src/pages/Contact.js
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollReveal } from '../hooks/useScrollAnimation';

import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  LinkedInIcon,
  SendIcon,
  UserIcon,
  BuildingIcon,
  AwardIcon,
  BookIcon,
  CheckIcon,
  AlertIcon,
  CalendarIcon,
  BriefcaseIcon,
} from "../components/CivilIcons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
    needsScheduling: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        inquiry_type:
          inquiryTypes.find((type) => type.value === formData.inquiryType)
            ?.label || formData.inquiryType,
        to_name: "Raghav",
        reply_to: formData.email,
        needs_scheduling: formData.needsScheduling ? "Yes" : "No",
        submission_time: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
        needsScheduling: false,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MailIcon },
    { value: "research", label: "Research Collaboration", icon: BookIcon },
    { value: "consulting", label: "Consulting Services", icon: BuildingIcon },
    { value: "academic", label: "Academic Partnership", icon: AwardIcon },
  ];

  const contactMethods = [
    {
      icon: MailIcon,
      title: "Email",
      value: "raghav1305@gmail.com",
      link: "mailto:raghav1305@gmail.com",
      description: "Send me an email for detailed discussions",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+1 (313) 767-6515",
      link: "tel:+13137676515",
      description: "Call me for immediate consultation",
    },
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
      value: "raghavendra-ranganatha/",
      link: "https://www.linkedin.com/in/raghavendra-ranganatha/",
      description: "Connect with me professionally",
    },
    {
      icon: LocationIcon,
      title: "Location",
      value: "Detroit, Michigan, USA",
      link: null,
      description: "Currently pursuing MS at Wayne State University",
    },
  ];

  // Generate Calendly link
  const calendlyLink = "https://calendly.com/raghav1305";

  return (
    <div className="pt-24 pb-16 bg-blueprint min-h-screen relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-civil-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-civil-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-civil-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-black text-civil-700 mb-4">
              Get in Touch
            </h1>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your next project, research collaboration, or
              engineering solution? I would love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const CardContent = () => (
              <div className="stat-3d card-shine p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-civil-500" />
                </div>
                <h3 className="text-xl font-bold text-civil-700 mb-1">
                  {method.title}
                </h3>
                <p className="text-lg font-bold text-civil-500 mb-2">
                  {method.value}
                </p>
                <p className="text-base text-slate-600">
                  {method.description}
                </p>
              </div>
            );

            return method.link ? (
              <ScrollReveal key={index} delay={index * 100}>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent />
                </a>
              </ScrollReveal>
            ) : (
              <ScrollReveal key={index} delay={index * 100}>
                <div>
                  <CardContent />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* Left: Contact Form */}
          <ScrollReveal>
            <div className="card-3d card-shine p-10">
              <div className="flex items-center mb-6">
                <div className="icon-gradient w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <SendIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-civil-700">
                  Send a Message
                </h2>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      Message Sent Successfully
                    </h4>
                    <span className="text-green-700 text-sm">
                      Your inquiry has been received. I will get back to you within
                      24-48 hours.
                      {formData.needsScheduling &&
                        " I will also reach out to schedule the meeting."}
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <AlertIcon className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">
                      Failed to Send
                    </h4>
                    <span className="text-red-700 text-sm">
                      Something went wrong. Please try again or reach out via email
                      directly.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-lg font-bold text-civil-700 mb-2 flex items-center">
                    <BuildingIcon className="h-4 w-4 mr-2 text-civil-500" />
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-civil-500 focus:ring-2 focus:ring-civil-500 focus:outline-none transition-colors text-base text-slate-600"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-bold text-civil-700 mb-2 flex items-center">
                      <UserIcon className="h-4 w-4 mr-2 text-civil-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-civil-500 focus:ring-2 focus:ring-civil-500 focus:outline-none transition-colors text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-civil-700 mb-2 flex items-center">
                      <MailIcon className="h-4 w-4 mr-2 text-civil-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-civil-500 focus:ring-2 focus:ring-civil-500 focus:outline-none transition-colors text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-lg font-bold text-civil-700 mb-2 flex items-center">
                    <BriefcaseIcon className="h-4 w-4 mr-2 text-civil-500" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-civil-500 focus:ring-2 focus:ring-civil-500 focus:outline-none transition-colors text-base"
                    placeholder="Brief subject of your message"
                  />
                </div>

                {/* Scheduling Checkbox */}
                <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <input
                    type="checkbox"
                    name="needsScheduling"
                    id="needsScheduling"
                    checked={formData.needsScheduling}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-civil-500 focus:ring-civil-500 border-slate-300 rounded"
                  />
                  <label
                    htmlFor="needsScheduling"
                    className="ml-3 text-base font-semibold text-civil-700 flex items-center"
                  >
                    <CalendarIcon className="h-4 w-4 mr-2 text-civil-500" />
                    I would like to schedule a meeting
                  </label>
                </div>

                {/* Scheduling Section */}
                {formData.needsScheduling && (
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h4 className="font-bold text-civil-700 flex items-center mb-3 text-base">
                      <CalendarIcon className="h-4 w-4 mr-2 text-civil-500" />
                      Schedule a Meeting
                    </h4>
                    <p className="text-slate-600 text-base mb-4">
                      Book a time directly through Calendly, or mention your
                      preferred availability in the message below.
                    </p>
                    <div className="text-center">
                      <a
                        href={calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center px-5 py-2.5 text-base font-medium"
                      >
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Open Calendly
                      </a>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-lg font-bold text-civil-700 mb-2 flex items-center">
                    <MailIcon className="h-4 w-4 mr-2 text-civil-500" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-civil-500 focus:ring-2 focus:ring-civil-500 focus:outline-none transition-colors resize-none text-base"
                    placeholder={
                      formData.needsScheduling
                        ? "Provide details about your project or inquiry. Include preferred meeting dates/times and any specific topics you would like to discuss..."
                        : "Describe your project, research inquiry, or collaboration opportunity. Include relevant details such as scope, timeline, and technical requirements..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-civil-500 to-civil-600 text-white py-4 px-6 rounded-xl hover:-translate-y-2 transition-all text-lg font-bold flex items-center justify-center disabled:opacity-50 shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.45)]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: Info Panel */}
          <div className="space-y-6">

            {/* Office Hours */}
            <ScrollReveal delay={0 * 100}>
              <div className="card-3d card-shine p-8">
                <h3 className="text-xl font-bold text-civil-700 mb-4 flex items-center">
                  <div className="icon-gradient w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <CalendarIcon className="h-4 w-4 text-white" />
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 text-base">Monday - Friday</span>
                    <span className="text-civil-700 font-medium text-base">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 text-base">Saturday</span>
                    <span className="text-civil-700 font-medium text-base">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-base">Sunday</span>
                    <span className="text-slate-600 font-medium text-base">Closed</span>
                  </div>
                </div>
                <p className="text-slate-600 text-base mt-4">
                  Response time: typically within 24-48 hours for all inquiries.
                </p>
              </div>
            </ScrollReveal>

            {/* Professional Memberships */}
            <ScrollReveal delay={1 * 100}>
              <div className="card-3d card-shine p-8">
                <h3 className="text-xl font-bold text-civil-700 mb-4 flex items-center">
                  <div className="icon-gradient w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <AwardIcon className="h-4 w-4 text-white" />
                  </div>
                  Professional Memberships
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-civil-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-base">American Society of Civil Engineers (ASCE)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-civil-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-base">American Concrete Institute - ACI (Student Member)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-4 w-4 text-civil-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-base">Institute of Transportation Engineers (ITE)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Areas of Expertise */}
            <ScrollReveal delay={2 * 100}>
              <div className="card-3d card-shine p-8">
                <h3 className="text-xl font-bold text-civil-700 mb-4 flex items-center">
                  <div className="icon-gradient w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <BuildingIcon className="h-4 w-4 text-white" />
                  </div>
                  Areas of Expertise
                </h3>
                <div className="space-y-2">
                  {[
                    "Sustainable Construction Materials",
                    "High-Performance Concrete Design",
                    "Structural Analysis and Design",
                    "Waste Material Utilization",
                    "Transportation Infrastructure",
                    "Geotechnical Engineering",
                  ].map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-slate-600 text-base py-2 px-3 bg-slate-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-civil-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Location Section */}
            <ScrollReveal delay={3 * 100}>
              <div className="card-3d card-shine p-8">
                <h3 className="text-xl font-bold text-civil-700 mb-4 flex items-center">
                  <div className="icon-gradient w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <LocationIcon className="h-4 w-4 text-white" />
                  </div>
                  Location
                </h3>
                <p className="text-slate-600 text-base mb-1">Wayne State University</p>
                <p className="text-slate-600 text-base mb-1">Department of Civil and Environmental Engineering</p>
                <p className="text-slate-600 text-base">Detroit, Michigan 48202, USA</p>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

// src/pages/Contact.js
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  MessageCircle,
  User,
  Building2,
  Award,
  BookOpen,
  CheckCircle,
  AlertCircle,
  CalendarDays,
  HardHat,
  Wrench,
  Layers,
  Mountain,
  Truck,
  Compass,
  Users,
  Settings,
  Briefcase,
} from "lucide-react";

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
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "research", label: "Research Collaboration", icon: BookOpen },
    { value: "consulting", label: "Consulting Services", icon: Building2 },
    { value: "academic", label: "Academic Partnership", icon: Award },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "raghav1305@gmail.com",
      link: "mailto:raghav1305@gmail.com",
      description: "Send me an email for detailed discussions",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (313) 767-6515",
      link: "tel:+13137676515",
      description: "Call me for immediate consultation",
      color: "green",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "raghav-r-320949133",
      link: "https://linkedin.com/in/raghav-r-320949133",
      description: "Connect with me professionally",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Detroit, Michigan, USA",
      link: null,
      description: "Currently pursuing MS at Wayne State University",
      color: "green",
    },
  ];

  // Generate Calendly link
  const calendlyLink = "https://calendly.com/suhas_palani"; // Replace with your actual Calendly link

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='construction-grid' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='0.5'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' fill='%2310B981'/%3E%3Ccircle cx='22.5' cy='22.5' r='1' fill='%2310B981'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23construction-grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-10 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          <Mail className="h-12 w-12 text-blue-200 opacity-20" />
        </div>
        <div
          className="absolute top-64 right-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <MessageCircle className="h-10 w-10 text-green-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-64 left-20 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        >
          <Phone className="h-8 w-8 text-blue-300 opacity-20" />
        </div>
        <div
          className="absolute bottom-32 right-10 animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        >
          <CalendarDays className="h-14 w-14 text-green-200 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              {/* Orbiting construction icons */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                  <Mail className="h-4 w-4 text-white" />
                </div>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: "20s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-green-500 rounded-full p-1">
                  <Phone className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Connect & Collaborate
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Compass className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">
              Building Partnerships Through Communication
            </span>
            <MessageCircle className="h-6 w-6 text-green-600 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            Ready to discuss your next construction project, research
            collaboration, or sustainable engineering solution? Let's build
            something amazing together through innovative communication and
            partnership.
          </p>
        </div>

        {/* Enhanced Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const ContactContent = () => (
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-gradient-to-r from-blue-500 to-green-500 group relative overflow-hidden">
                {/* Subtle construction pattern overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 className="w-full h-full text-blue-600" />
                </div>

                <div
                  className={`w-20 h-20 bg-gradient-to-br ${
                    method.color === "blue"
                      ? "from-blue-100 to-blue-200"
                      : "from-green-100 to-green-200"
                  } rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:animate-pulse relative`}
                >
                  <Icon
                    className={`h-10 w-10 ${
                      method.color === "blue"
                        ? "text-blue-600"
                        : "text-green-600"
                    } group-hover:animate-bounce`}
                  />
                  {/* Animated pulse rings */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 ${
                      method.color === "blue"
                        ? "border-blue-400"
                        : "border-green-400"
                    } animate-ping opacity-20`}
                  ></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p
                  className={`${
                    method.color === "blue" ? "text-blue-600" : "text-green-600"
                  } font-bold text-lg mb-3 bg-gray-50 px-4 py-2 rounded-lg`}
                >
                  {method.value}
                </p>
                <p className="text-gray-600 font-medium">
                  {method.description}
                </p>
              </div>
            );

            return method.link ? (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactContent />
              </a>
            ) : (
              <div key={index}>
                <ContactContent />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 border-t-4 border-gradient-to-r from-blue-500 to-green-500 relative overflow-hidden">
            {/* Background construction pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <HardHat className="w-full h-full text-blue-600" />
            </div>

            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-xl">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Construction Communication Hub
                </h2>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-start shadow-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">
                      Message Delivered Successfully!
                    </h4>
                    <span className="text-green-700">
                      Your construction inquiry has been received and filed in
                      our project pipeline.
                      {formData.needsScheduling &&
                        " Our project coordinator will contact you shortly to schedule the meeting."}
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl flex items-start shadow-lg">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-1">
                      Communication Error
                    </h4>
                    <span className="text-red-700">
                      Construction communication system encountered an issue.
                      Please try rebuilding your message.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Enhanced Inquiry Type */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                    Project Classification
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base font-medium bg-gray-50 hover:bg-white"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Enhanced Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold text-gray-800 mb-3 flex items-center">
                      <User className="h-5 w-5 mr-2 text-green-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base bg-gray-50 hover:bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-gray-800 mb-3 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-blue-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base bg-gray-50 hover:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Enhanced Subject */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                    Project Blueprint Title *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base bg-gray-50 hover:bg-white"
                    placeholder="Brief subject of your message"
                  />
                </div>

                {/* Enhanced Scheduling Checkbox */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="needsScheduling"
                      id="needsScheduling"
                      checked={formData.needsScheduling}
                      onChange={handleInputChange}
                      className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-2 border-gray-300 rounded-lg"
                    />
                    <label
                      htmlFor="needsScheduling"
                      className="ml-4 block text-lg font-bold text-gray-800 flex items-center"
                    >
                      <CalendarDays className="h-5 w-5 mr-2 text-blue-600" />
                      Schedule Construction Project Meeting
                    </label>
                  </div>
                </div>

                {/* Enhanced Scheduling Message */}
                {formData.needsScheduling && (
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-200 shadow-lg">
                    <h4 className="font-bold text-gray-900 flex items-center mb-4 text-xl">
                      <CalendarDays className="h-6 w-6 mr-3 text-blue-600" />
                      Project Meeting Coordination Center
                    </h4>
                    <p className="text-gray-700 mb-6 text-lg">
                      Schedule your construction consultation meeting using our
                      integrated planning system, or specify your preferred
                      construction timeline in the project details below:
                    </p>
                    <div className="text-center">
                      <a
                        href={calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-bold"
                      >
                        <CalendarDays className="h-6 w-6 mr-3" />
                        Launch Project Scheduler
                      </a>
                    </div>
                  </div>
                )}

                {/* Enhanced Message */}
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Construction Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-base bg-gray-50 hover:bg-white"
                    placeholder={
                      formData.needsScheduling
                        ? "Provide details about your project, research goals, or collaboration requirements. Include preferred meeting dates/times, project scope, timeline, and specific engineering challenges..."
                        : "Describe your project, research inquiry, or collaboration opportunity. Include project scope, timeline, technical requirements, and how our engineering expertise can help..."
                    }
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-6 px-8 rounded-xl hover:shadow-2xl transition-all duration-500 font-bold text-xl flex items-center justify-center disabled:opacity-50 transform hover:-translate-y-2 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-4"></div>
                      <Wrench className="h-6 w-6 mr-3 animate-bounce" />
                      Building Connection...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      <HardHat className="h-6 w-6 mr-3" />
                      Launch Construction Communication
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Additional Information */}
          <div className="space-y-8">
            {/* Enhanced What to Expect */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-gradient-to-r from-green-500 to-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <CheckCircle className="w-full h-full text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                Construction Project Pipeline
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group hover:bg-green-50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-pulse">
                    <CheckCircle className="h-5 w-5 text-green-500 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Rapid Site Survey Response
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Professional engineering response within 24-48 hours for
                      all construction inquiries
                    </p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-pulse">
                    <CheckCircle className="h-5 w-5 text-blue-500 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Detailed Project Analysis
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Comprehensive evaluation of your construction requirements
                      and engineering solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-green-50 p-4 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:animate-pulse">
                    <CheckCircle className="h-5 w-5 text-green-500 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Expert Engineering Consultation
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Professional guidance on structural design and sustainable
                      construction solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Schedule Meeting Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-gradient-to-r from-blue-500 to-green-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <CalendarDays className="w-full h-full text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <CalendarDays className="h-6 w-6 text-blue-600" />
                </div>
                Construction Project Scheduling
              </h3>
              <p className="text-gray-700 mb-6 text-lg font-medium">
                Ready to blueprint your project timeline? Access our
                construction meeting scheduler to coordinate engineering
                consultations and project planning sessions.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700 bg-blue-50 px-4 py-3 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="font-bold">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </span>
                  <HardHat className="h-4 w-4 ml-2 text-blue-600" />
                </div>
                <div className="flex items-center text-gray-700 bg-green-50 px-4 py-3 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="font-bold">
                    Weekends: Special project appointments available
                  </span>
                  <Building2 className="h-4 w-4 ml-2 text-green-600" />
                </div>
              </div>
              <div className="text-center">
                <a
                  href={calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:shadow-xl transition-all duration-500 text-lg font-bold transform hover:-translate-y-2"
                >
                  <CalendarDays className="h-6 w-6 mr-3" />
                  <Compass className="h-6 w-6 mr-3" />
                  Launch Project Meeting Builder
                </a>
              </div>
            </div>

            {/* Enhanced Areas of Expertise */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-gradient-to-r from-green-500 to-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <Award className="w-full h-full text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                Construction Engineering Specializations
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center text-gray-700 bg-blue-50 px-4 py-3 rounded-lg hover:bg-blue-100 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="font-bold">
                    Sustainable Construction Materials Research
                  </span>
                  <Layers className="h-4 w-4 ml-2 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="flex items-center text-gray-700 bg-green-50 px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="font-bold">
                    High-Performance Concrete Design & Testing
                  </span>
                  <Building2 className="h-4 w-4 ml-2 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="flex items-center text-gray-700 bg-purple-50 px-4 py-3 rounded-lg hover:bg-purple-100 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="font-bold">
                    Structural Analysis & Advanced Design Solutions
                  </span>
                  <Settings className="h-4 w-4 ml-2 text-purple-600 group-hover:animate-bounce" />
                </div>
                <div className="flex items-center text-gray-700 bg-orange-50 px-4 py-3 rounded-lg hover:bg-orange-100 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="font-bold">
                    Waste Material Utilization in Construction
                  </span>

                  <Mountain className="h-4 w-4 ml-2 text-orange-600 group-hover:animate-bounce" />
                </div>
                <div className="flex items-center text-gray-700 bg-red-50 px-4 py-3 rounded-lg hover:bg-red-100 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="font-bold">
                    Academic Research & Industry Collaboration
                  </span>
                  <BookOpen className="h-4 w-4 ml-2 text-red-600 group-hover:animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Collaboration Opportunities */}
        <div className="mb-16 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Users className="w-full h-full text-blue-600" />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Construction Partnership Opportunities
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen className="w-full h-full text-blue-600" />
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:animate-pulse relative">
                  <BookOpen className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Research Construction Partnerships
                </h3>
                <p className="text-gray-700 mb-6 font-medium">
                  Collaborate on groundbreaking research in sustainable
                  construction, waste material utilization, and structural
                  innovation projects.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">
                      Joint research publications
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">
                      Grant proposal development
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">
                      Conference presentations
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Building2 className="w-full h-full text-green-600" />
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:animate-pulse relative">
                  <Building2 className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Engineering Consulting Services
                </h3>
                <p className="text-gray-700 mb-6 font-medium">
                  Expert consultation on structural design, sustainable
                  materials, and construction project optimization for industry
                  excellence.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-medium">
                      Structural analysis & design
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-medium">
                      Material selection guidance
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-medium">
                      Project feasibility studies
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                  <User className="w-full h-full text-purple-600" />
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:animate-pulse relative">
                  <User className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Academic Engineering Mentorship
                </h3>
                <p className="text-gray-700 mb-6 font-medium">
                  Professional guidance for students and early-career
                  professionals in civil engineering and sustainable
                  construction excellence.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="font-medium">
                      Construction thesis guidance
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="font-medium">
                      Engineering career development
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-white/60 px-3 py-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="font-medium">
                      Technical skill advancement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-green-500 to-blue-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
            <Settings className="w-full h-full text-blue-600" />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Construction Engineering FAQ
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Building2 className="h-5 w-5 text-blue-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    What construction projects do you specialize in?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium ml-11">
                  I specialize in sustainable construction research,
                  high-performance concrete design, structural analysis, and
                  innovative waste material utilization in construction
                  projects.
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Compass className="h-5 w-5 text-green-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    Do you provide remote engineering consultation?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium ml-11">
                  Yes, I offer comprehensive remote consultation services via
                  video conferences, collaborative platforms, and digital
                  project coordination for global construction projects.
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-purple-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Can you assist with construction research publications?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium ml-11">
                  Absolutely! I provide comprehensive support for research
                  methodology, experimental design, data analysis, technical
                  writing, and navigating the construction research publication
                  process.
                </p>
              </div>

              <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Settings className="h-5 w-5 text-orange-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    What engineering software tools do you utilize?
                  </h3>
                </div>
                <p className="text-gray-700 font-medium ml-11">
                  I'm expertly proficient in STAAD Pro, ETABS, AutoCAD, and
                  various advanced structural analysis software for
                  comprehensive construction design and research applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Animated construction equipment icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 animate-float opacity-20">
              <HardHat className="h-20 w-20 text-white" />
            </div>
            <div
              className="absolute bottom-10 left-10 animate-float opacity-20"
              style={{ animationDelay: "2s" }}
            >
              <Truck className="h-24 w-24 text-white" />
            </div>
            <div
              className="absolute top-1/2 right-20 animate-float opacity-20"
              style={{ animationDelay: "1s" }}
            >
              <Wrench className="h-16 w-16 text-white" />
            </div>
          </div>

          <div className="relative text-center">
            <div className="flex justify-center items-center mb-6">
              <Compass className="h-10 w-10 text-white mr-4" />
              <h2 className="text-4xl font-bold">
                Ready to Build Your Construction Vision?
              </h2>
              <Building2 className="h-10 w-10 text-white ml-4" />
            </div>
            <p className="text-2xl text-blue-100 mb-10 max-w-4xl mx-auto font-medium">
              Whether you're planning a groundbreaking construction project,
              pioneering sustainable research, or seeking expert engineering
              collaboration, let's construct success together through innovation
              and excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:raghav1305@gmail.com"
                className="px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-500 font-bold text-xl flex items-center justify-center shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <Mail className="mr-3 h-6 w-6" />
                <HardHat className="mr-3 h-6 w-6" />
                Launch Email Construction
              </a>
              <a
                href="https://linkedin.com/in/raghav-r-320949133"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-500 font-bold text-xl flex items-center justify-center transform hover:-translate-y-2 hover:scale-105"
              >
                <Linkedin className="mr-3 h-6 w-6" />
                <Users className="mr-3 h-6 w-6" />
                Build LinkedIn Connection
              </a>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-500 font-bold text-xl flex items-center justify-center shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <CalendarDays className="mr-3 h-6 w-6" />
                <Compass className="mr-3 h-6 w-6" />
                Schedule Project Meeting
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: animate-float 6s ease-in-out infinite;
        }
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: animate-fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;

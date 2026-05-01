import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactSection() {
  const [formType, setFormType] = useState("join");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    formType: "join",
    form_name: "Join Gathering Form",
    gathering: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormData(prev => ({
      ...prev,
      formType: type,
      form_name: type === "join" ? "Join Gathering Form" : type === "connect" ? "Connect with Leader Form" : "Serve Ecclesia Form"
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const actionLabel =
      formData.formType === "join"
        ? "wants to join a gathering"
        : formData.formType === "connect"
        ? "wants to connect with a leader"
        : "wants to serve Ecclesia";

    const subject = `${formData.name} ${actionLabel}`;

    try {
      const body = new URLSearchParams({
        "form-name": "ecclesia-contact",
        subject: subject,
        name: formData.name,
        email: formData.email,
        gathering: formData.gathering,
        message: formData.message,
        form_name: formData.form_name,
        formType: formData.formType,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(prev => ({
          ...prev,
          name: "",
          email: "",
          message: "",
          gathering: ""
        }));
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">Get in Touch</h2>
            <p className="text-primary-600 mb-8">
              Whether you're interested in joining a gathering, connecting with a leader, or serving alongside us, we'd love to connect with you.
            </p>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Join Us</h3>
                <p className="text-primary-600 text-sm">We'd love to have you join us at one of our gatherings.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold text-primary-900 mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What should I expect at a gathering?</AccordionTrigger>
                  <AccordionContent>
                    Our gatherings typically begin with a shared meal, followed by discussion, Scripture study, and prayer. The atmosphere is casual and welcoming—we encourage questions and authentic conversation. Come as you are!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to bring anything?</AccordionTrigger>
                  <AccordionContent>
                    Just yourself! For meals, we often coordinate who brings what, but first-time visitors are our guests. If you have a Bible, feel free to bring it, but we also have extras available.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How can I get more involved?</AccordionTrigger>
                  <AccordionContent>
                    We have many ways to get involved, whether it's connecting with a leader, serving in our community, or starting a new gathering. Use the form to let us know how you'd like to engage with Ecclesia.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex border-b border-primary-100 mb-6">
              <button
                type="button"
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                  formType === "join"
                    ? "border-accent-600 text-accent-700"
                    : "border-transparent text-primary-500 hover:text-primary-700"
                }`}
                onClick={() => handleFormTypeChange("join")}
              >
                Join a Gathering
              </button>
              <button
                type="button"
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                  formType === "connect"
                    ? "border-accent-600 text-accent-700"
                    : "border-transparent text-primary-500 hover:text-primary-700"
                }`}
                onClick={() => handleFormTypeChange("connect")}
              >
                Connect with a Leader
              </button>
              <button
                type="button"
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                  formType === "serve"
                    ? "border-accent-600 text-accent-700"
                    : "border-transparent text-primary-500 hover:text-primary-700"
                }`}
                onClick={() => handleFormTypeChange("serve")}
              >
                Serve Ecclesia
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="ecclesia-contact" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
              </div>

              {formType === "join" && (
                <div>
                  <label htmlFor="gathering" className="block text-sm font-medium text-gray-700 mb-1">
                    Select a Gathering
                  </label>
                  <select
                    id="gathering"
                    name="gathering"
                    value={formData.gathering}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="" disabled>Choose a gathering...</option>
                    <option value="midtown">Midtown Gathering</option>
                    <option value="southwest">Southwest Gathering</option>
                    <option value="youth">Youth Gathering</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us more about yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Share a bit about yourself and why you're interested in joining our community..."
                />
              </div>

              <input type="hidden" name="form_name" value={formData.form_name} />
              <input type="hidden" name="formType" value={formData.formType} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center rounded-md bg-primary py-3 px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : (
                  formType === "join" ? "Join a Gathering" :
                  formType === "connect" ? "Connect with a Leader" :
                  "Serve Ecclesia"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you for reaching out! We'll be in touch soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  There was an error submitting the form. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

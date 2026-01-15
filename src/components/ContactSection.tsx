import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactSection() {
  const [formType, setFormType] = useState("join");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    formType: "join",
    form_name: "Contact Form",
    gathering: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

    try {
      const response = await fetch("https://api.new.website/api/submit-form/", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(prev => ({
          ...prev,
          name: "",
          email: "",
          message: ""
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
    <div className="w-full py-16 bg-white" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Whether you're interested in joining a gathering, starting your own, or serving 
              alongside us, we'd love to connect with you.
            </p>

            <div className="flex mb-8">
              <div className="mr-4 mt-1">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700 h-5 w-5">
                    <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary-800 mb-1">Join Us</h3>
                <p className="text-muted-foreground">
                  We'd love to have you join us at one of our gatherings.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-primary-700 hover:text-primary-800 font-medium">
                    What should I expect at a gathering?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our gatherings typically begin with a shared meal, followed by discussion, 
                    Scripture study, and prayer. The atmosphere is casual and welcoming—we 
                    encourage questions and authentic conversation. Come as you are!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-primary-700 hover:text-primary-800 font-medium">
                    Do I need to bring anything?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Just yourself! For meals, we often coordinate who brings what, but first-time 
                    visitors are our guests. If you have a Bible, feel free to bring it, but 
                    we also have extras available.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-primary-700 hover:text-primary-800 font-medium">
                    How do I start a new gathering?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide training, resources, and ongoing support for those interested in 
                    starting new gatherings. Fill out the form to connect with our leadership 
                    team who will guide you through the process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div>
            <div className="bg-primary-50 p-8 rounded-2xl shadow-sm">
              <div className="flex border-b border-primary-200 mb-6">
                <button
                  type="button"
                  className={`px-4 py-3 text-sm font-medium flex-1 text-center transition-colors border-b-2 ${
                    formType === "join" 
                    ? "border-accent-500 text-accent-600" 
                    : "border-transparent text-primary-600 hover:text-primary-700 hover:border-primary-200"
                  }`}
                  onClick={() => handleFormTypeChange("join")}
                >
                  Join a Gathering
                </button>
                <button
                  type="button"
                  className={`px-4 py-3 text-sm font-medium flex-1 text-center transition-colors border-b-2 ${
                    formType === "start" 
                    ? "border-accent-500 text-accent-600" 
                    : "border-transparent text-primary-600 hover:text-primary-700 hover:border-primary-200"
                  }`}
                  onClick={() => handleFormTypeChange("start")}
                >
                  Start a Gathering
                </button>
                <button
                  type="button"
                  className={`px-4 py-3 text-sm font-medium flex-1 text-center transition-colors border-b-2 ${
                    formType === "serve" 
                    ? "border-accent-500 text-accent-600" 
                    : "border-transparent text-primary-600 hover:text-primary-700 hover:border-primary-200"
                  }`}
                  onClick={() => handleFormTypeChange("serve")}
                >
                  Serve
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
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

                <div>
                  <label htmlFor="gathering" className="block text-sm font-medium text-primary-700 mb-1">
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
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
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
                    formType === "join" 
                    ? "Join a Gathering" 
                    : formType === "start" 
                    ? "Start a Gathering"
                    : "Serve With Us"
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
    </div>
  );
}

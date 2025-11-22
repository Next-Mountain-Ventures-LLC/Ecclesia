import React, { useState } from "react";

export default function GatheringForm() {
  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    gathering: "midtown",
    message: "",
    form_name: "Join Gathering Form"
  };
  
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setFormData(defaultFormData);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
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
            className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="gathering" className="block text-sm font-medium text-primary-700 mb-1">
            Which gathering are you interested in?
          </label>
          <select
            id="gathering"
            name="gathering"
            value={formData.gathering}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          >
            <option value="midtown">Midtown Gathering (Sundays)</option>
            <option value="southwest">Southwest Gathering (Thursdays)</option>
            <option value="youth">Youth Gathering (Wednesdays)</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
          Additional Information (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
          placeholder="Let us know if you have any questions or need specific information..."
        />
      </div>

      <input type="hidden" name="form_name" value={formData.form_name} />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex justify-center items-center rounded-md bg-primary py-3 px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Join Gathering"}
      </button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h4 className="font-medium mb-1">Thank you for your interest!</h4>
          <p className="text-sm">Someone from our team will contact you soon with more details about the gathering you selected. We look forward to meeting you!</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h4 className="font-medium mb-1">Something went wrong</h4>
          <p className="text-sm">There was an error submitting the form. Please try again or contact us directly at info@ecclesiatulsa.com.</p>
        </div>
      )}
    </form>
  );
}
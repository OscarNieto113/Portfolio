import { ChangeEvent, FormEvent, useState } from "react";
import ContactForm, { MyFormData } from "@/components/ContactForm";

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleFormSubmit = async (formData: MyFormData) => {
    try {
      const response = await fetch('/api/contact', { // Use the API route /api/contact
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsEmailSent(true);
      } else {
        alert('Email sending failed. Please try again later.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 mt-3 overflow-y-scroll" style={{ height: "80vh" }}>
      {isEmailSent ? (
        <p>Email sent successfully!</p>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Contact;

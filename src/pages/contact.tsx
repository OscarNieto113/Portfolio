import { useState } from 'react';
import ContactForm, { MyFormData } from '@/components/ContactForm';
function ContactPage() {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const handleFormSubmit = async (formData: MyFormData) => {
    try {
      const response = await fetch('/api/contact', {
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
    <div>
      {isEmailSent ? (
        <p>Email sent successfully!</p>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default ContactPage;

import { ChangeEvent, FormEvent, useState } from "react";

export interface MyFormData {
  subject: string;
  text: string;
}

function ContactForm({
  onSubmit,
}: {
  onSubmit: (formData: MyFormData) => void;
}) {
  const [formData, setFormData] = useState<MyFormData>({
    subject: "",
    text: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ContactForm;

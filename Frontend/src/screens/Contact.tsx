import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { nameRegex, phoneRegex, emailRegex, subjectRegex } from "../utils/Validation";
import ContactInput from "../components/ContactInput";

const Contact = () => {
  const { t } = useTranslation();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [modal, setModal] = useState("");

  const fields = [
    { name: "name", label: t("contactName"), regex: nameRegex, error: t("nameError") },
    { name: "phone", label: t("contactPhone"), regex: phoneRegex, error: t("phoneError") },
    { name: "email", label: t("contactEmail"), type: "email", regex: emailRegex, error: t("emailError") },
    { name: "subject", label: t("contactSubject"), regex: subjectRegex, error: t("subjectError") },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    const field = fields.find((x) => x.name === name);

    if (field && !field.regex.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: field.error }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(errors).some(Boolean)) return;

    try {
      await axios.post(`${apiUrl}/applies/upload`, formData);

      setModal(t("contactSuccess"));

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setModal(t("contactMessageError"));
    }
  };

  return (
    <div id="contact">
      <h1 className="text-4xl font-bold">{t("contact")}</h1>

      <div className="w-full h-[2px] bg-black mt-2" />

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 py-2">
          {fields.slice(0, 2).map((field) => (
            <ContactInput
              key={field.name}
              {...field}
              value={formData[field.name as keyof typeof formData]}
              error={errors[field.name as keyof typeof errors]}
              focusedField={focusedField}
              onChange={handleChange}
              onFocus={setFocusedField}
              onBlur={() => setFocusedField(null)}
            />
          ))}
        </div>

        {fields.slice(2).map((field) => (
          <ContactInput
            key={field.name}
            {...field}
            value={formData[field.name as keyof typeof formData]}
            error={errors[field.name as keyof typeof errors]}
            focusedField={focusedField}
            onChange={handleChange}
            onFocus={setFocusedField}
            onBlur={() => setFocusedField(null)}
          />
        ))}

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 font-bold">{t("contactMessage")}</label>

          <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={8} name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button className="bg-black text-white p-4 rounded-lg font-bold w-full mt-4">{t("contactSend")}</button>
      </form>

      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl">
            <p>{modal}</p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded" onClick={() => setModal("")}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

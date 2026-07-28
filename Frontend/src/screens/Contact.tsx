import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactInput from "../components/ContactInput";
import { emailRegex, nameRegex, phoneRegex, subjectRegex } from "../utils/Validation";

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
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const validation = {
    name: {
      regex: nameRegex,
      error: t("nameError"),
    },
    phone: {
      regex: phoneRegex,
      error: t("phoneError"),
    },
    email: {
      regex: emailRegex,
      error: t("emailError"),
    },
    subject: {
      regex: subjectRegex,
      error: t("subjectError"),
    },
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name in validation) {
      const field = validation[name as keyof typeof validation];

      setErrors((prev) => ({
        ...prev,
        [name]: field.regex.test(value) ? "" : field.error,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameRegex.test(formData.name))
      return setErrors((p) => ({
        ...p,
        name: t("nameError"),
      }));

    if (!phoneRegex.test(formData.phone))
      return setErrors((p) => ({
        ...p,
        phone: t("phoneError"),
      }));

    if (!emailRegex.test(formData.email))
      return setErrors((p) => ({
        ...p,
        email: t("emailError"),
      }));

    if (!subjectRegex.test(formData.subject))
      return setErrors((p) => ({
        ...p,
        subject: t("subjectError"),
      }));
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/applies/contact`, formData);

      setModalMessage(data.message);
      setShowModal(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setModalMessage(err.response?.data?.message ?? t("contactError"));

      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <h1 className="text-4xl font-bold">{t("contact")}</h1>

      <div className="w-full h-[2px] bg-black mt-2 mb-4" />

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <ContactInput
            label={t("contactName")}
            name="name"
            value={formData.name}
            error={errors.name}
            focused={focusedField === "name"}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
          />

          <ContactInput
            label={t("contactPhone")}
            name="phone"
            value={formData.phone}
            error={errors.phone}
            focused={focusedField === "phone"}
            onChange={handleChange}
            onFocus={() => handleFocus("phone")}
            onBlur={handleBlur}
          />
        </div>

        <ContactInput
          label={t("contactEmail")}
          name="email"
          type="email"
          value={formData.email}
          error={errors.email}
          focused={focusedField === "email"}
          onChange={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />

        <ContactInput
          label={t("contactSubject")}
          name="subject"
          value={formData.subject}
          error={errors.subject}
          focused={focusedField === "subject"}
          onChange={handleChange}
          onFocus={() => handleFocus("subject")}
          onBlur={handleBlur}
        />

        <ContactInput
          textarea
          label={t("contactMessage")}
          name="message"
          value={formData.message}
          focused={focusedField === "message"}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={handleBlur}
        />

        <button type="submit" className="w-full bg-black text-white mt-4 p-4 rounded-lg font-bold" disabled={loading}>
          {loading ? "Küldés folyamatban.." : t("contactSend")}
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-sm text-center shadow-xl">
            <p>{modalMessage}</p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg" onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactInput from "../components/ContactInput";
import { emailRegex, nameRegex, phoneRegex, subjectRegex } from "../utils/Validation";
import AnimatedSection from "../components/AnimatedSection";

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
    <AnimatedSection>
      <section id="contact" className="py-10">
        <h1 className="text-4xl font-bold">{t("contact")}</h1>
        <div className="h-[2px] bg-black mt-3 mb-10" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">{t("letswork")}</h2>
            <div className="space-y-6">
              <div>
                <p className="uppercase text-xs text-gray-400">Email</p>

                <a href="mailto:karczubroland@gmail.com" className="font-semibold hover:underline">
                  karczubroland@gmail.com
                </a>
              </div>

              <div>
                <p className="uppercase text-xs text-gray-400">{t("location")}</p>

                <p className="font-semibold">{t("hungary")}</p>
              </div>

              <div>
                <p className="uppercase text-xs text-gray-400">{t("responseTime")}</p>

                <p className="font-semibold">{t("usuallyTime")}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-2">
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

            <button disabled={loading} className="w-full mt-4 py-4 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition disabled:opacity-60">
              {loading ? t("contactSending") : t("contactSend")}
            </button>
          </form>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-[90%] text-center">
              <h3 className="text-2xl font-bold mb-3">{modalMessage === t("contactSuccess") ? "✓" : "✕"}</h3>

              <p className="text-gray-700">{modalMessage}</p>

              <button onClick={() => setShowModal(false)} className="mt-6 px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
                OK
              </button>
            </div>
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default Contact;

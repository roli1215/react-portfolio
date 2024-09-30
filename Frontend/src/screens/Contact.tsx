import axios from "axios";
import { useState } from "react";
import { nameRegex, phoneRegex, emailRegex, subjectRegex } from "../utils/Validation";
import { useTranslation } from "react-i18next";

const Contact = () => {

    const [formData, setFormData] = useState({
        name : '',
        phone : '',
        email : '',
        subject : '',
        message : '',
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const apiUrl = import.meta.env.VITE_API_URL as string;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });

        if (e.target.name === 'name' && !nameRegex.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, name: t('nameError') }));
        } else if (e.target.name === 'phone' && !phoneRegex.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, phone: t('phoneError') }));
        } else if (e.target.name === 'email' && !emailRegex.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, email: t('emailError') }));
        } else if (e.target.name === 'subject' && !subjectRegex.test(e.target.value)) {
            setErrors((prev) => ({ ...prev, subject: t('subjectError') }));
        } else {
            setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nameRegex.test(formData.name)) {
            setErrors((prev) => ({ ...prev, name: t('nameError') }));
            return;
        }
        if (!phoneRegex.test(formData.phone)) {
            setErrors((prev) => ({ ...prev, phone: t('phoneError') }));
            return;
        }
        if (!emailRegex.test(formData.email)) {
            setErrors((prev) => ({ ...prev, email: t('emailError') }));
            return;
        }
        if (!subjectRegex.test(formData.subject)) {
            setErrors((prev) => ({ ...prev, subject: t('subjectError') }));
            return;
        }
        try {
            await axios.post(apiUrl + '/applies/upload', formData);
            setModalMessage(t('contactSuccess'));
            setShowModal(true);
            setFormData({
                name : '',
                phone : '',
                email : '',
                subject : '',
                message : '',
            });
        } catch (error) {
            setModalMessage(t('contactMessageError'));
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const { t } = useTranslation();


  return (
    <div id="contact">
        <h1 className ="text-4xl font-bold text-left text-[#000] ">{t('contact')}</h1>
        <div className="w-full h-[2px] bg-black mt-2"></div>
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">{t('contactName')}</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <p className="text-red-500 font-bold text-xs">{errors.name}</p>}
                </div>
                <div className="flex flex-col">
                    <label  className="uppercase text-sm py-2 font-bold">{t('contactPhone')}</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <p className="text-red-500 font-bold text-xs">{errors.phone}</p>}
                    <label className="text-xs text-gray-400"></label>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">{t('contactEmail')}</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">{t('contactSubject')}</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                {errors.subject && <p className="text-red-500 font-bold text-xs">{errors.subject}</p>}
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">{t('contactMessage')}</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300 " rows={10} name="message" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <button className="bg-[#000] text-gray-100 mt-4 w-full p-4 rounded-lg font-bold" type="submit">
            {t('contactSend')}
            </button>
        </form>
        {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <p className="mb-4">{modalMessage}</p>
                        <button
                            onClick={closeModal}
                            className="bg-black text-white py-2 px-4 rounded-lg font-bold"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Contact
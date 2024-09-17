import axios from "axios";
import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name : '',
        phone : '',
        email : '',
        subject : '',
        message : '',
    });

    const apiUrl = import.meta.env.VITE_API_URL as string;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiUrl + '/applies/upload', formData);
            console.log(response.data.message);
            setFormData({
                name : '',
                phone : '',
                email : '',
                subject : '',
                message : '',
            });
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <div id="contact" className="max-w-[1200px] m-auto md:pl-20 p-4 ">
        <h1 className ="text-4xl font-bold text-left text-[#000] ">Contact</h1>
        <div className="w-full h-[2px] bg-black mt-2"></div>
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="flex flex-col">
                    <label  className="uppercase text-sm py-2 font-bold">Phone</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                    <label className="text-xs text-gray-400"></label>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">Email</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">Subject</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="flex flex-col py-2">
                <label  className="uppercase text-sm py-2 font-bold">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300 " rows={10} name="message" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <button className="bg-[#000] text-gray-100 mt-4 w-full p-4 rounded-lg font-bold" type="submit">
                Send Message
            </button>
        </form>
        <div className="max-w-[1200px] bg-black h-40">
        </div>
    </div>
  )
}

export default Contact
import { useState } from "react";

interface ProjectFormProps {
  editId: string | null;

  form: {
    title: string;
    stack: string;
    descriptionHU: string;
    descriptionEN: string;
    image: File | null;
  };

  setForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      stack: string;
      descriptionHU: string;
      descriptionEN: string;
      image: File | null;
    }>
  >;

  onSubmit: () => void;
  onCancel: () => void;
}

const ProjectForm = ({ editId, form, setForm, onSubmit, onCancel }: ProjectFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClass = "w-full border rounded-xl px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-black focus:scale-[1.01]";

  const updateField = (field: keyof typeof form, value: string | File | null) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors({});
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) {
      newErrors.title = "Név megadása kötelező!";
    } else if (form.title.trim().length < 3) {
      newErrors.title = "A név legalább 3 karakter hosszú legyen!";
    }

    if (!form.stack.trim()) {
      newErrors.stack = "Stack megadása kötelező!";
    }

    if (!form.descriptionHU.trim()) {
      newErrors.descriptionHU = "Magyar leírás megadása kötelező!";
    }

    if (!form.descriptionEN.trim()) {
      newErrors.descriptionEN = "Angol leírás megadása kötelező!";
    }

    if (!editId && !form.image) {
      newErrors.image = "Kép kiválasztása kötelező!";
    }

    if (form.image) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(form.image.type)) {
        newErrors.image = "Csak JPG, PNG vagy WEBP engedélyezett!";
      }

      if (form.image.size > 5 * 1024 * 1024) {
        newErrors.image = "Maximálisa képméret 5 MB!";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField("image", e.target.files?.[0] ?? null);
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block font-medium mb-2">Név</label>

        <input className={inputClass} placeholder="Projekt név" value={form.title} onChange={(e) => updateField("title", e.target.value)} />

        {errors.title && <p className="text-red-600 text-sm mt-2">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium mb-2">Technológiai stack</label>

        <input className={inputClass} placeholder="React, Node.js, MongoDB" value={form.stack} onChange={(e) => updateField("stack", e.target.value)} />

        {errors.stack && <p className="text-red-600 text-sm mt-2">{errors.stack}</p>}
      </div>

      <div>
        <label className="block font-medium mb-2">Magyar leírás</label>

        <textarea className={`${inputClass} min-h-32`} placeholder="Projekt magyar leírása" value={form.descriptionHU} onChange={(e) => updateField("descriptionHU", e.target.value)} />

        {errors.descriptionHU && <p className="text-red-600 text-sm mt-2">{errors.descriptionHU}</p>}
      </div>

      <div>
        <label className="block font-medium mb-2">Angol leírás</label>

        <textarea className={`${inputClass} min-h-32`} placeholder="Projekt angol leírása" value={form.descriptionEN} onChange={(e) => updateField("descriptionEN", e.target.value)} />

        {errors.descriptionEN && <p className="text-red-600 text-sm mt-2">{errors.descriptionEN}</p>}
      </div>

      <div>
        <label className="block font-medium mb-2">Projekt kép</label>

        <input type="file" accept="image/*" className="block w-full text-sm" onChange={handleImageChange} />

        {form.image && <p className="text-sm text-gray-500 mt-2">Kiválasztott kép: {form.image.name}</p>}

        {errors.image && <p className="text-red-600 text-sm mt-2">{errors.image}</p>}
      </div>

      <div className="flex gap-4 pt-4">
        <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95" onClick={handleSubmit}>
          {editId ? "Projekt módosítás" : "Új projekt hozzáadás"}
        </button>

        {editId && (
          <button className="border px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-100" onClick={onCancel}>
            Vissza
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;

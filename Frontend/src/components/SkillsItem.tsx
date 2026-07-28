interface SkillsItemProps {
  img: string;
  name: string;
}

const SkillsItem = ({ img, name }: SkillsItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-4 shadow-md hover:-translate-y-2 transition">
      <img src={img} alt={name} className="w-14 h-14" />
      <p className="mt-3 font-semibold text-sm">{name}</p>
    </div>
  );
};

export default SkillsItem;

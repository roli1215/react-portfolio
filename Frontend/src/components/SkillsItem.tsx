import { motion } from "framer-motion";

interface SkillsItemProps {
  img: string;
  name: string;
}

const SkillsItem = ({ img, name }: SkillsItemProps) => (
  <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} className="flex flex-col items-center gap-2">
    <img src={img} alt={name} className="max-w-[70px]" />
    <span className="text-sm font-semibold">{name}</span>
  </motion.div>
);

export default SkillsItem;

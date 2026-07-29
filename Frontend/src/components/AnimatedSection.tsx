import { motion } from "framer-motion";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    {children}
  </motion.div>
);

export default AnimatedSection;

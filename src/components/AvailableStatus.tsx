import { motion } from "framer-motion";

const AvailableStatus = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-emerald-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-sm font-medium text-emerald-400">
        Disponível para oportunidades
      </span>
    </motion.div>
  );
};

export default AvailableStatus;

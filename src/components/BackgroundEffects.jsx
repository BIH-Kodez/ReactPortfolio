// components/BackgroundEffects/BackgroundEffects.jsx
import { motion } from 'framer-motion';


const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 z-0 grid grid-cols-12 grid-rows-6 gap-1 opacity-10 p-1">
      {[...Array(72)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-blue-400 rounded-sm aspect-square"
          whileHover={{
            backgroundColor: '#a855f7',
            scale: 1.2,
            opacity: 0.5,
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
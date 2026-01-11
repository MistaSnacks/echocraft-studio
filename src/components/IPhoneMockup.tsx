import { motion } from "framer-motion";

interface IPhoneMockupProps {
  children: React.ReactNode;
}

const IPhoneMockup = ({ children }: IPhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Glow effect behind the phone */}
      <div className="absolute inset-0 bg-echo-yellow/20 blur-[100px] rounded-full scale-75" />
      
      {/* iPhone Frame */}
      <div className="iphone-frame relative w-[280px] sm:w-[320px] aspect-[9/19]">
        {/* Side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-8 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-l" />
        <div className="absolute -left-1 top-36 w-1 h-12 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-l" />
        <div className="absolute -left-1 top-52 w-1 h-12 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-l" />
        <div className="absolute -right-1 top-32 w-1 h-16 bg-gradient-to-b from-zinc-600 to-zinc-700 rounded-r" />
        
        {/* Screen */}
        <div className="iphone-screen w-full h-full">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-zinc-800 mr-4" />
          </div>
          
          {/* Screen content */}
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default IPhoneMockup;

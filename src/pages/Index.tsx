import { motion } from "framer-motion";
import { MapPin, MessageCircle, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import ThreeBackground from "@/components/ThreeBackground";
import IPhoneMockup from "@/components/IPhoneMockup";
import AppPreview from "@/components/AppPreview";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureBadge from "@/components/FeatureBadge";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ThreeBackground />
      
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-12 py-12 lg:py-0">
          
          {/* Left side - Content */}
          <div className="flex-1 flex flex-col items-center text-center max-w-xl">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-lg animate-pulse-glow">
                <img 
                  src={logo} 
                  alt="Echomaps" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3"
            >
              Echomaps
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl sm:text-2xl font-display text-echo-yellow mb-4"
            >
              Better Together
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md"
            >
              Connect with people nearby through real-time posts and local meetups.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <FeatureBadge icon={MapPin} label="Location-based" delay={0.3} />
              <FeatureBadge icon={MessageCircle} label="Real-time Chats" delay={0.4} />
              <FeatureBadge icon={Users} label="Local Meetups" delay={0.5} />
            </motion.div>

            {/* Waitlist Form */}
            <div className="w-full">
              <WaitlistForm />
            </div>
          </div>

          {/* Right side - iPhone Mockup */}
          <div className="flex-shrink-0 hidden md:block self-start mt-24">
            <IPhoneMockup>
              <AppPreview />
            </IPhoneMockup>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Echomaps. All rights reserved.
          </motion.p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

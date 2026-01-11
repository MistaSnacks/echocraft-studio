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

            {/* Available on stores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col items-center gap-3 mb-8"
            >
              <span className="text-sm text-muted-foreground">Available on</span>
              <div className="flex gap-3">
                {/* Apple App Store */}
                <div className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl hover:scale-[1.02] transition-transform duration-200 cursor-default">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white/60 leading-none">Download on the</span>
                    <span className="text-sm font-semibold text-white leading-tight">App Store</span>
                  </div>
                </div>

                {/* Google Play Store */}
                <div className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl hover:scale-[1.02] transition-transform duration-200 cursor-default">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                    <path fill="#34A853" d="M17.727 8.273L5.479.789c-.42-.242-.9-.256-1.334-.104l9.647 9.647 3.935-2.059z"/>
                    <path fill="#FBBC04" d="M17.727 15.727l-3.935-2.059-9.647 9.647c.434.152.914.138 1.334-.104l12.248-7.484z"/>
                    <path fill="#EA4335" d="M21.397 10.223l-3.67-2.195L13.5 12l4.227 3.972 3.67-2.195c.728-.437.728-1.117 0-1.554z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white/60 leading-none">Get it on</span>
                    <span className="text-sm font-semibold text-white leading-tight">Google Play</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <div className="w-full">
              <WaitlistForm />
            </div>
          </div>

          {/* Right side - iPhone Mockup */}
          <div className="flex-shrink-0 hidden lg:block self-start mt-36">
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

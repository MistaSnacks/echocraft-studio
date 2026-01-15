import { motion } from "framer-motion";
import { Download, MapPin, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Sign Up",
    description: "Get the app and create your profile in seconds. We keep it simple so you can start connecting faster.",
    color: "from-echo-yellow to-amber-400",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Enable Location",
    description: "Allow location access to discover what's happening around you. Your privacy is always in your control.",
    color: "from-emerald-400 to-teal-400",
  },
  {
    number: "03",
    icon: Users,
    title: "Start Connecting",
    description: "Join conversations, attend meetups, and meet amazing people in your area. Your community awaits.",
    color: "from-violet-400 to-purple-400",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-echo-yellow/10 border border-echo-yellow/20 rounded-full text-sm text-echo-yellow font-medium mb-6"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Get Started in
            <span className="text-echo-yellow"> Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock a world of local connections
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="glass rounded-3xl p-8 sm:p-10 text-center relative z-10 h-full">
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Step Badge */}
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-muted-foreground mb-4">
                    STEP {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center"
                    >
                      <ArrowRight className="w-5 h-5 text-echo-yellow" />
                    </motion.div>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center rotate-90"
                    >
                      <ArrowRight className="w-4 h-4 text-echo-yellow" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

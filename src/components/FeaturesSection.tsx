import { motion } from "framer-motion";
import { 
  MapPin, 
  MessageCircle, 
  Users, 
  Bell, 
  Shield, 
  Zap,
  Compass,
  Heart
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Find people and events around you in real-time. Your world, mapped and connected.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Conversations",
    description: "Jump into local discussions. See what's happening and join the conversation instantly.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Local Meetups",
    description: "Discover and create meetups in your area. From coffee to concerts, find your tribe.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Compass,
    title: "Explore Nearby",
    description: "Uncover hidden gems and trending spots. Every corner holds a new adventure.",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay in the loop with personalized alerts. Never miss what matters to you.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your location, your rules. Control who sees what, always.",
    gradient: "from-slate-400 to-zinc-500",
  },
  {
    icon: Zap,
    title: "Instant Connections",
    description: "Match with people who share your interests. Serendipity, amplified.",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Built for real connections, not just followers. Authentic interactions only.",
    gradient: "from-red-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-echo-yellow/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
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
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything You Need to
            <br />
            <span className="text-echo-yellow">Connect Locally</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Echomaps brings your community to life with powerful features designed for meaningful connections.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 cursor-default overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-5`}>
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-echo-yellow transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Accent */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

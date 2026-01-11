import { motion } from "framer-motion";
import { MapPin, MessageCircle, Users, Heart, Share2, Send } from "lucide-react";

const AppPreview = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 pt-12">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-2 text-xs text-white/60">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-2 border border-white/60 rounded-sm">
            <div className="w-3/4 h-full bg-echo-yellow rounded-sm" />
          </div>
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-echo-yellow rounded-lg flex items-center justify-center">
            <MapPin className="w-4 h-4 text-black" />
          </div>
          <span className="font-display font-bold text-white">Echomaps</span>
        </div>
        <div className="flex gap-3">
          <MessageCircle className="w-5 h-5 text-white/60" />
          <Users className="w-5 h-5 text-white/60" />
        </div>
      </div>

      {/* Feed */}
      <div className="px-4 py-4 space-y-4 overflow-hidden">
        {/* Post 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 rounded-xl p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-echo-yellow to-orange-500" />
            <div>
              <p className="text-sm font-medium text-white">Alex M.</p>
              <p className="text-[10px] text-white/40 flex items-center gap-1">
                <MapPin className="w-2 h-2" /> 0.3 mi away
              </p>
            </div>
          </div>
          <p className="text-xs text-white/80 mb-2">
            Anyone up for coffee at Blue Bottle? ☕️
          </p>
          <div className="flex items-center gap-4 text-white/40">
            <Heart className="w-4 h-4" />
            <MessageCircle className="w-4 h-4" />
            <Share2 className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Post 2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/5 rounded-xl p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div>
              <p className="text-sm font-medium text-white">Sarah K.</p>
              <p className="text-[10px] text-white/40 flex items-center gap-1">
                <MapPin className="w-2 h-2" /> 0.5 mi away
              </p>
            </div>
          </div>
          <p className="text-xs text-white/80 mb-2">
            Street fair on Main St! 🎉 Great vibes!
          </p>
          <div className="h-16 rounded-lg bg-gradient-to-br from-echo-yellow/20 to-orange-500/20 mb-2" />
          <div className="flex items-center gap-4 text-white/40">
            <Heart className="w-4 h-4 text-echo-yellow fill-echo-yellow" />
            <MessageCircle className="w-4 h-4" />
            <Share2 className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Post 3 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white/5 rounded-xl p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
            <div>
              <p className="text-sm font-medium text-white">Mike R.</p>
              <p className="text-[10px] text-white/40 flex items-center gap-1">
                <MapPin className="w-2 h-2" /> 1.2 mi away
              </p>
            </div>
          </div>
          <p className="text-xs text-white/80">
            Local meetup at 7pm! 🎯
          </p>
        </motion.div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-around px-8 py-3 bg-zinc-900/90 border-t border-white/10">
        <MapPin className="w-5 h-5 text-echo-yellow" />
        <MessageCircle className="w-5 h-5 text-white/40" />
        <div className="w-10 h-10 -mt-6 bg-echo-yellow rounded-full flex items-center justify-center shadow-lg">
          <Send className="w-5 h-5 text-black" />
        </div>
        <Users className="w-5 h-5 text-white/40" />
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-echo-yellow to-orange-500" />
      </div>
    </div>
  );
};

export default AppPreview;

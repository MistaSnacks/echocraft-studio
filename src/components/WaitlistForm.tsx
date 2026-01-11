import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Lock, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [phone, setPhone] = useState<string>();
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }
    
    if (!agreed) {
      toast.error("Please agree to receive SMS messages");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! We'll text you soon.");
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 bg-echo-yellow rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-black" />
        </motion.div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          You're on the list!
        </h3>
        <p className="text-muted-foreground text-sm">
          We'll text you when Echomaps launches. Get ready to connect! 🎉
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 sm:p-8 max-w-md mx-auto"
    >
      <h3 className="text-lg sm:text-xl font-display font-bold text-foreground text-center mb-6">
        Join the Waitlist
      </h3>

      {/* Phone input */}
      <div className="bg-secondary/50 rounded-xl p-3 mb-4 flex items-center gap-3 border border-border focus-within:border-echo-yellow/50 transition-colors">
        <PhoneInput
          placeholder="(555) 123-4567"
          value={phone}
          onChange={setPhone}
          defaultCountry="US"
          international={false}
          countryCallingCodeEditable={false}
          className="flex-1 flex items-center gap-2"
        />
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer group">
        <Checkbox
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
          className="mt-0.5 border-muted-foreground data-[state=checked]:bg-echo-yellow data-[state=checked]:border-echo-yellow"
        />
        <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors">
          I agree to receive SMS messages from Echomaps about updates, launches, and promotions. 
          Message & data rates may apply. Reply STOP to unsubscribe.
        </span>
      </label>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-echo-yellow hover:bg-echo-yellow-glow text-black font-semibold py-6 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_hsl(52_100%_50%/0.4)] disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Get Early Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>

      {/* Privacy note */}
      <p className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
        <Lock className="w-3 h-3" />
        Your number is safe with us. We only text about Echomaps.
      </p>
    </motion.form>
  );
};

export default WaitlistForm;

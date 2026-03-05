import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, Shield, BookOpen, Smartphone, DollarSign, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Start Trading Forex <span className="text-blue-600">Simply</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Easy-to-use platform designed for beginners. Start your trading journey with confidence.
              </p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link to="/get-started" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 text-lg">
                  Get Started Free
                </Link>
                <Link to="/how-it-works" className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all hover:scale-105 text-lg">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmclMjBjaGFydHMlMjBtb25pdG9yfGVufDF8fHx8MTc3MjQ2MDI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Trading charts"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-sm">Active Traders</p>
                <AnimatedCounter target={100} suffix="K+" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ForexFlow?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in forex trading</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Easy to Learn", description: "Step-by-step tutorials and guides designed for complete beginners", delay: 0 },
              { icon: Shield, title: "Safe & Secure", description: "Bank-level security to protect your funds and personal information", delay: 0.1 },
              { icon: Smartphone, title: "Trade Anywhere", description: "Mobile app available for iOS and Android. Trade on the go", delay: 0.2 }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-8 rounded-2xl text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.05, backgroundColor: "rgb(219 234 254)" }}
              >
                <motion.div 
                  className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="size-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdHJhZGluZyUyMGFwcHxlbnwxfHx8fDE3NzI0NjAyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mobile trading app"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple 3-Step Process</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Create Account", description: "Sign up in minutes with just your email", delay: 0.1 },
                  { step: 2, title: "Learn Basics", description: "Watch quick tutorials and practice with virtual money", delay: 0.2 },
                  { step: 3, title: "Start Trading", description: "Begin with small trades and grow your confidence", delay: 0.3 }
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.step}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/how-it-works" className="inline-block mt-8 text-blue-600 hover:text-blue-700 font-semibold">
                  See detailed guide →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: 100, suffix: "K+", label: "Active Traders", delay: 0 },
              { icon: DollarSign, value: 2, suffix: "B+", label: "Trading Volume", delay: 0.1 },
              { icon: TrendingUp, value: 50, suffix: "+", label: "Currency Pairs", delay: 0.2 },
              { icon: Shield, value: 24, suffix: "/7", label: "Support", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <stat.icon className="size-12 mx-auto mb-4 opacity-80" />
                </motion.div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of traders who trust ForexFlow for their trading journey
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/get-started" className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Get Started Free
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <p className="text-3xl font-bold mb-2">{count}{suffix}</p>;
}
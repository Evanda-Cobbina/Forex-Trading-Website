import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { UserPlus, BookOpen, CreditCard, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How ForexFlow Works</h1>
          <p className="text-xl text-gray-600">
            Simple steps to start your forex trading journey
          </p>
        </motion.div>
      </section>

      {/* Step 1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  1
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">Create Your Account</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                {[
                  { icon: UserPlus, text: "Sign up with just your email - no complex forms" },
                  { icon: Shield, text: "Verify your identity with a simple photo ID" },
                  { icon: Zap, text: "Account approved in minutes, not days" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MjM3MTc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creating account"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzI0MjE0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Learning platform"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  2
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">Learn the Basics</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                {[
                  { icon: BookOpen, text: "Watch short, easy-to-follow video tutorials" },
                  { icon: TrendingUp, text: "Practice with $10,000 virtual money risk-free" },
                  { icon: Zap, text: "Learn at your own pace - no pressure" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  3
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">Fund Your Account</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                {[
                  { icon: CreditCard, text: "Deposit funds using credit card or bank transfer" },
                  { icon: Shield, text: "Start with as little as $100 - no large minimums" },
                  { icon: Zap, text: "Funds available instantly in your account" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1768839720841-8219c4da7436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBmaW5hbmNpYWwlMjBkYXRhfGVufDF8fHx8MTc3MjQ2MDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Secure payments"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1767972160300-86d0af82558f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBzdWNjZXNzfGVufDF8fHx8MTc3MjQ2MDI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Trading success"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  4
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">Start Trading</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                {[
                  { icon: TrendingUp, text: "Start with small trades to build confidence" },
                  { icon: BookOpen, text: "Use our guided trading tools and suggestions" },
                  { icon: Shield, text: "Set automatic stop-losses to manage risk" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Open your free account today and start your trading journey
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/get-started" className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              Create Free Account
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function GetStarted() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Join ForexFlow Today</h1>
              <p className="text-lg text-gray-600 mb-8">
                Start your forex trading journey with these benefits:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Free Demo Account", description: "Practice with $10,000 virtual money" },
                  { title: "Beginner-Friendly Tutorials", description: "Learn forex basics in minutes" },
                  { title: "Low Minimum Deposit", description: "Start trading with just $100" },
                  { title: "24/7 Support", description: "Get help whenever you need it" },
                  { title: "Mobile App Included", description: "Trade on the go with iOS & Android" },
                  { title: "Bank-Level Security", description: "Your funds and data are protected" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle2 className="size-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{benefit.title}</p>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {!submitted ? (
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Free Account</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="••••••••"
                        required
                      />
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Create Account
                    </motion.button>
                  </form>
                  
                  <p className="text-sm text-gray-500 mt-6 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-600 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <CheckCircle2 className="size-12 text-white" />
                  </motion.div>
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Welcome to ForexFlow!
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Your account has been created successfully. Check your email to verify your account and get started.
                  </motion.p>
                  <motion.div 
                    className="bg-white p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="text-sm text-gray-600 mb-2">What's Next?</p>
                    <ul className="text-left space-y-2 text-gray-700">
                      {[
                        "1. Verify your email address",
                        "2. Complete your profile",
                        "3. Watch beginner tutorials",
                        "4. Try the demo account"
                      ].map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        >
                          {step}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { Link } from "react-router";
import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="bg-blue-600 p-2 rounded-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="size-6 text-white" />
            </motion.div>
            <span className="text-xl font-semibold text-gray-900">ForexFlow</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/get-started" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}